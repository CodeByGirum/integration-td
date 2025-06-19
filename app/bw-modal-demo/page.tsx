"use client"

import { useState } from "react"
import ModalContainer from "@/components/bw-theme/modal-container"
import StepIndicator from "@/components/bw-theme/step-indicator"
import FileUploadArea from "@/components/bw-theme/file-upload-area"
import FormInput from "@/components/bw-theme/form-input"
import FormTextarea from "@/components/bw-theme/form-textarea"
import ActionButton from "@/components/bw-theme/action-button"
import ModalSection from "@/components/bw-theme/modal-section"
import { FileText, ArrowRight, Check } from "lucide-react"

export default function BwModalDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)

  const steps = ["Upload", "Details", "Schema"]

  const handleFileDrop = (files: FileList) => {
    if (files.length > 0) {
      setSelectedFile(files[0])
      console.log("File selected:", files[0].name)
    }
  }

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setLoading(true)
      // Simulate processing
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setCurrentStep(currentStep + 1)
      setLoading(false)
    } else {
      // Final submission
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setLoading(false)
      alert("Schema processed successfully!")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return selectedFile !== null
      case 1:
        return formData.name.trim() !== ""
      case 2:
        return true
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-bw-black flex items-center justify-center p-4">
      <ModalContainer maxWidth="max-w-3xl">
        {/* Header Section with Steps */}
        <ModalSection border="bottom">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </ModalSection>

        {/* Main Content */}
        <ModalSection>
          {currentStep === 0 && (
            <div className="space-y-bw-element">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-bw-white mb-2">Upload Your Data File</h2>
                <p className="text-bw-gray-light">Select a CSV, Excel, or JSON file to get started</p>
              </div>

              <FileUploadArea onFileDrop={handleFileDrop} accept=".csv,.xlsx,.xls,.json" />

              {selectedFile && (
                <div className="flex items-center justify-center space-x-3 p-4 bg-bw-dark rounded-bw-card border border-bw-gray">
                  <FileText className="w-5 h-5 text-bw-white" />
                  <span className="text-bw-white font-medium">{selectedFile.name}</span>
                  <span className="text-bw-gray-light text-sm">({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
              )}
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-bw-element">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-bw-white mb-2">Dataset Details</h2>
                <p className="text-bw-gray-light">Provide information about your dataset</p>
              </div>

              <div className="space-y-6">
                <FormInput
                  label="Dataset Name"
                  placeholder="e.g., Q4 Sales Report"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  description="Choose a descriptive name for your dataset"
                />

                <FormTextarea
                  label="Description (Optional)"
                  placeholder="Describe what this dataset contains and how it will be used..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  description="This helps others understand the purpose of your dataset"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-bw-element">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-bw-white mb-2">Schema Preview</h2>
                <p className="text-bw-gray-light">Review the detected schema for your dataset</p>
              </div>

              <div className="bg-bw-dark border border-bw-gray rounded-bw-card p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-bw-white font-medium">File:</span>
                    <span className="text-bw-gray-light">{selectedFile?.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bw-white font-medium">Dataset Name:</span>
                    <span className="text-bw-gray-light">{formData.name}</span>
                  </div>
                  <div className="border-t border-bw-gray pt-4">
                    <h3 className="text-bw-white font-medium mb-3">Detected Columns:</h3>
                    <div className="space-y-2">
                      {["ID", "Name", "Email", "Created Date", "Status"].map((column, index) => (
                        <div
                          key={column}
                          className="flex items-center justify-between py-2 px-3 bg-bw-darker rounded-bw-input"
                        >
                          <span className="text-bw-white text-sm">{column}</span>
                          <span className="text-bw-gray-light text-xs">
                            {index === 0 ? "Number" : index === 3 ? "Date" : "Text"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ModalSection>

        {/* Footer Actions */}
        <ModalSection border="top">
          <div className="flex items-center justify-between">
            <ActionButton variant="ghost" onClick={handleBack} disabled={currentStep === 0 || loading}>
              Back
            </ActionButton>

            <ActionButton
              variant="primary"
              onClick={handleNext}
              disabled={!canProceed() || loading}
              loading={loading}
              icon={
                currentStep === steps.length - 1 ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />
              }
            >
              {currentStep === steps.length - 1 ? "Process Schema" : "Continue"}
            </ActionButton>
          </div>
        </ModalSection>
      </ModalContainer>
    </div>
  )
}
