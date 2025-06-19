"use client"

import type React from "react"
import { useRef, useState } from "react"
import { UploadCloud, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  onFileDrop?: (files: FileList) => void
  accept?: string
  multiple?: boolean
  disabled?: boolean
}

const FileUploadArea: React.FC<FileUploadAreaProps> = ({
  className,
  onFileDrop,
  accept,
  multiple = false,
  disabled = false,
  ...props
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    if (!disabled) {
      setIsDragOver(true)
    }
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragOver(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragOver(false)

    if (disabled) return

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      onFileDrop?.(event.dataTransfer.files)
      event.dataTransfer.clearData()
    }
  }

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileDrop?.(event.target.files)
    }
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-bw-card transition-all duration-200",
        "bg-bw-dark hover:bg-bw-darker",
        isDragOver ? "border-bw-white bg-bw-darker" : "border-bw-gray hover:border-bw-gray-light",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className,
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault()
          handleClick()
        }
      }}
      {...props}
    >
      <UploadCloud className="w-16 h-16 text-bw-gray-light mb-4" />
      <h3 className="text-lg font-semibold text-bw-white mb-2">Drag & drop your file here</h3>
      <p className="text-sm text-bw-gray-light mb-4">or click to select a file</p>
      <div className="flex items-center space-x-2 text-xs text-bw-gray">
        <FileText className="w-4 h-4" />
        <span>Supports CSV, Excel, JSON files</span>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
      />
    </div>
  )
}

export default FileUploadArea
