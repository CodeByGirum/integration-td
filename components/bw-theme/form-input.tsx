import type React from "react"
import { cn } from "@/lib/utils"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  error?: string
  containerClassName?: string
}

const FormInput: React.FC<FormInputProps> = ({
  className,
  label,
  description,
  error,
  id,
  containerClassName,
  ...props
}) => {
  return (
    <div className={cn("w-full space-y-2", containerClassName)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-bw-white">
          {label}
        </label>
      )}
      {description && <p className="text-sm text-bw-gray-light">{description}</p>}
      <input
        id={id}
        className={cn(
          "w-full bg-bw-dark border border-bw-gray rounded-bw-input px-4 py-3 text-bw-white placeholder:text-bw-gray-light",
          "focus:outline-none focus:border-bw-white focus:shadow-bw-focus",
          "hover:border-bw-gray-light transition-all duration-200",
          error && "border-red-500 focus:border-red-500",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

export default FormInput
