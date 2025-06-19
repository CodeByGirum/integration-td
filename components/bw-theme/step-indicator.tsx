import React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface StepIndicatorProps {
  steps: string[]
  currentStep: number // 0-indexed
  className?: string
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, className }) => {
  return (
    <nav aria-label="Progress" className={cn("flex items-center justify-center space-x-4", className)}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={cn(
              "px-4 py-2 rounded-bw-button text-sm font-medium transition-all duration-200",
              index === currentStep
                ? "bg-bw-white text-bw-black"
                : index < currentStep
                  ? "bg-bw-gray text-bw-light"
                  : "bg-bw-gray-dark text-bw-gray-light",
            )}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-colors duration-200",
                index < currentStep ? "text-bw-light" : "text-bw-gray",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default StepIndicator
