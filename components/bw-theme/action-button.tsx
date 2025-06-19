import type React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  icon?: React.ReactNode
}

const ActionButton: React.FC<ActionButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  children,
  disabled,
  ...props
}) => {
  const isDisabled = disabled || loading

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-bw-button transition-all duration-200",
        "focus:outline-none focus:shadow-bw-focus disabled:opacity-50 disabled:cursor-not-allowed",
        // Variants
        variant === "primary" && [
          "bg-bw-white text-bw-black",
          "hover:bg-bw-lighter active:bg-bw-light",
          !isDisabled && "shadow-bw-subtle hover:shadow-bw-depth",
        ],
        variant === "secondary" && [
          "bg-bw-dark border border-bw-gray text-bw-white",
          "hover:bg-bw-darker hover:border-bw-gray-light",
          "active:bg-bw-gray-dark",
        ],
        variant === "ghost" && [
          "bg-transparent text-bw-gray-light",
          "hover:bg-bw-dark hover:text-bw-white",
          "active:bg-bw-darker",
        ],
        // Sizes
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2.5 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}

export default ActionButton
