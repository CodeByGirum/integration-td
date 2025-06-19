import type React from "react"
import type { LucideIcon } from "lucide-react"

interface CategoryIconProps {
  icon: LucideIcon
}

const CategoryIconDisplay: React.FC<CategoryIconProps> = ({ icon: Icon }) => {
  return (
    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-icon-wrapper-bg group-hover:bg-icon-wrapper-hover-bg transition-colors">
      <Icon className="w-5 h-5 text-text-tertiary group-hover:text-text-secondary transition-colors" />
    </div>
  )
}

export default CategoryIconDisplay
