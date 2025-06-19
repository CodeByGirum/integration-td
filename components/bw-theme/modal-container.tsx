import type React from "react"
import { cn } from "@/lib/utils"

interface ModalContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  maxWidth?: string
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children, className, maxWidth = "max-w-2xl", ...props }) => {
  return (
    <div
      className={cn(
        "bg-bw-darker border border-bw-gray-dark rounded-bw-modal shadow-bw-depth",
        "w-full mx-auto",
        maxWidth,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default ModalContainer
