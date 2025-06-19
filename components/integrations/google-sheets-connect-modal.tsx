"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2, FileText, Sheet, FileJson, RefreshCw, AlertTriangle, CheckCircle2, X } from "lucide-react"

interface GoogleFile {
  id: string
  name: string
  type: "csv" | "excel" | "json"
}

const mockFiles: GoogleFile[] = [
  { id: "1", name: "Q4_Sales_Report.xlsx", type: "excel" },
  { id: "2", name: "User_Data_Export.csv", type: "csv" },
  { id: "3", name: "Product_Catalog.json", type: "json" },
  { id: "4", name: "Monthly_Expenses.xlsx", type: "excel" },
  { id: "5", name: "Customer_Feedback.csv", type: "csv" },
  { id: "6", name: "API_Responses_Log.json", type: "json" },
  { id: "7", name: "Inventory_Levels.csv", type: "csv" },
]

interface GoogleSheetsConnectModalProps {
  isOpen: boolean
  onClose: () => void
  onImportSuccess?: (file: GoogleFile) => void
}

type ModalStep =
  | "initial"
  | "authenticating"
  | "loading_files"
  | "files_loaded"
  | "importing_file"
  | "import_failed"
  | "import_success"

const GoogleSheetsConnectModal: React.FC<GoogleSheetsConnectModalProps> = ({ isOpen, onClose, onImportSuccess }) => {
  const [step, setStep] = useState<ModalStep>("initial")
  const [files, setFiles] = useState<GoogleFile[]>([])
  const [selectedFile, setSelectedFile] = useState<GoogleFile | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      setStep("initial")
      setFiles([])
      setSelectedFile(null)
      setErrorMessage(null)
    }
  }, [isOpen])

  const handleConnectToGoogle = () => {
    setStep("authenticating")
    setErrorMessage(null)
    setTimeout(() => {
      setStep("loading_files")
      setTimeout(() => {
        setFiles(mockFiles)
        setStep("files_loaded")
      }, 1500)
    }, 1000)
  }

  const handleChooseAnotherAccount = () => {
    setStep("initial")
    setFiles([])
    setSelectedFile(null)
    setErrorMessage(null)
  }

  const handleFileSelect = (file: GoogleFile) => {
    setSelectedFile(file)
  }

  const handleImportFile = () => {
    if (!selectedFile) return
    setStep("importing_file")
    setErrorMessage(null)

    setTimeout(() => {
      const importSucceeded = Math.random() > 0.3
      if (importSucceeded) {
        setStep("import_success")
        if (onImportSuccess) {
          onImportSuccess(selectedFile)
        }
        setTimeout(onClose, 2000)
      } else {
        setErrorMessage("Import failed. The file might be invalid or the connection was interrupted.")
        setStep("import_failed")
      }
    }, 2000)
  }

  const getFileIcon = (type: GoogleFile["type"]) => {
    const iconProps = { className: "w-5 h-5 text-text-tertiary mr-3 flex-shrink-0" }
    switch (type) {
      case "csv":
        return <Sheet {...iconProps} />
      case "excel":
        return <FileText {...iconProps} />
      case "json":
        return <FileJson {...iconProps} />
      default:
        return <FileText {...iconProps} />
    }
  }

  const renderContent = () => {
    switch (step) {
      case "initial":
        return (
          <div className="text-center flex flex-col items-center">
            <p className="text-sm text-text-tertiary mb-6 max-w-xs">
              Authorize Sweepo to access your Google Sheets files. This will redirect you to Google.
            </p>
            <Button
              onClick={handleConnectToGoogle}
              className="bg-text-primary text-page-base hover:bg-text-secondary px-6 py-2.5 text-sm font-medium rounded-md transition-colors w-full sm:w-auto"
            >
              Connect to Google
            </Button>
          </div>
        )
      case "authenticating":
      case "loading_files":
      case "importing_file":
        return (
          <div className="text-center flex flex-col items-center">
            <Loader2 className="w-10 h-10 text-text-primary animate-spin mb-4" />
            <p className="text-sm text-text-tertiary">
              {step === "authenticating" && "Redirecting to Google for authorization..."}
              {step === "loading_files" && "Fetching your Google Sheets files..."}
              {step === "importing_file" && `Importing "${selectedFile?.name}"...`}
            </p>
          </div>
        )
      case "files_loaded":
        return (
          <div className="w-full">
            <p className="text-sm text-text-tertiary mb-3">Select a file to import:</p>
            <div className="max-h-[280px] overflow-y-auto border border-panel-border rounded-md bg-card-bg p-1.5 space-y-1.5 shadow-inner">
              {files.map((file) => (
                <div
                  key={file.id}
                  onClick={() => handleFileSelect(file)}
                  className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-panel-bg transition-colors border ${selectedFile?.id === file.id ? "bg-panel-bg border-text-primary" : "border-transparent hover:border-icon-wrapper-bg"}`}
                >
                  {getFileIcon(file.type)}
                  <span className="text-sm text-text-input truncate flex-grow">{file.name}</span>
                  {selectedFile?.id === file.id && (
                    <CheckCircle2 className="w-5 h-5 text-text-primary ml-auto flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      case "import_success":
        return (
          <div className="text-center flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-text-primary mb-4" />
            <p className="text-md font-medium text-text-primary mb-1">Import Successful</p>
            <p className="text-sm text-text-tertiary">"{selectedFile?.name}" has been imported.</p>
          </div>
        )
      case "import_failed":
        return (
          <div className="text-center flex flex-col items-center">
            <AlertTriangle className="w-12 h-12 text-text-primary mb-4" /> {/* Icon is neutral, text conveys error */}
            <p className="text-md font-medium text-text-primary mb-2">Import Failed</p>
            <p className="text-sm text-text-tertiary mb-6 px-4">{errorMessage || "An unexpected error occurred."}</p>
            <Button
              onClick={handleImportFile}
              variant="outline"
              className="border-panel-border text-text-tertiary hover:bg-panel-bg hover:text-text-primary px-4 py-2 text-xs rounded-md transition-colors"
            >
              Try Importing Again
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-page-base border-panel-border text-text-secondary sm:max-w-md p-0 shadow-2xl rounded-lg">
        <DialogHeader className="px-6 py-5 border-b border-panel-border flex flex-row justify-between items-center">
          <DialogTitle className="text-lg font-medium text-text-primary">Connect Google Sheets</DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-text-tertiary hover:text-text-primary hover:bg-panel-bg rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogClose>
        </DialogHeader>

        <div className="px-6 py-8 min-h-[280px] flex flex-col justify-center items-center">{renderContent()}</div>

        <DialogFooter className="px-6 py-4 border-t border-panel-border flex sm:justify-between items-center bg-card-bg/30">
          {(step === "files_loaded" || step === "import_failed") && (
            <Button
              variant="outline"
              onClick={handleChooseAnotherAccount}
              className="border-panel-border text-text-tertiary hover:bg-panel-bg hover:text-text-primary px-3 py-1.5 text-xs rounded-md transition-colors"
              disabled={step === "importing_file"}
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
              {step === "import_failed" ? "Start Over" : "Change Account"}
            </Button>
          )}
          <div className="flex gap-2 ml-auto">
            {step !== "import_success" && step !== "authenticating" && step !== "loading_files" && (
              <Button
                onClick={onClose}
                variant="outline"
                className="border-panel-border text-text-tertiary hover:bg-panel-bg hover:text-text-primary px-4 py-2 text-xs rounded-md transition-colors"
                disabled={step === "importing_file"}
              >
                Cancel
              </Button>
            )}
            {step === "files_loaded" && (
              <Button
                onClick={handleImportFile}
                className="bg-text-primary text-page-base hover:bg-text-secondary px-4 py-2 text-xs font-medium rounded-md transition-colors"
                disabled={!selectedFile || step === "importing_file"}
              >
                Import Selected File
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default GoogleSheetsConnectModal
