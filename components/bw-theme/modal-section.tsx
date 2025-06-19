import type React from "react"
import { cn } from "@/lib/utils"

interface ModalSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  title?: string
  description?: string
  border?: "top" | "bottom" | "both" | "none"
}

const ModalSection: React.FC<ModalSectionProps> = ({
  children,
  title,
  description,
  border = "none",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-bw-section",
        border === "top" && "border-t border-bw-gray-dark",
        border === "bottom" && "border-b border-bw-gray-dark",
        border === "both" && "border-t border-b border-bw-gray-dark",
        className,
      )}
      {...props}
    >
      {(title || description) && (
        <div className="mb-bw-element">
          {title && <h2 className="text-xl font-semibold text-bw-white mb-2">{title}</h2>}
          {description && <p className="text-sm text-bw-gray-light">{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}

export default ModalSection
