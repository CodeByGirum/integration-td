"use client"

import type React from "react"
import { type LucideIcon, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IntegrationCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  onClick?: () => void
  onConnectClick?: () => void // New prop for connect button
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  icon: Icon,
  title,
  description,
  tags,
  onClick,
  onConnectClick,
}) => {
  return (
    <div
      className="h-full bg-card-bg border border-card-border rounded-lg shadow-lg hover:border-card-border-hover hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col group overflow-hidden"
      // onClick is for the whole card, if onConnectClick is not provided for the button
      onClick={!onConnectClick ? onClick : undefined}
    >
      {/* Header */}
      <div className="p-5 flex items-center gap-4">
        <div className="flex-shrink-0 p-2 bg-gradient-to-br from-gradient-card-icon-from to-gradient-card-icon-to rounded-lg shadow-md group-hover:from-gradient-card-icon-hover-from group-hover:to-gradient-card-icon-hover-to transition-all">
          <Icon className="w-6 h-6 text-text-secondary" />
        </div>
        <h4 className="text-base font-semibold text-text-primary">{title}</h4>
      </div>

      {/* Content */}
      <div className="flex-grow px-5 pb-4">
        <p className="text-xs text-text-tertiary line-clamp-2 min-h-[2.5em] mb-3">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] bg-tag-bg text-text-tag group-hover:bg-tag-hover-bg group-hover:text-text-tag-hover rounded-full transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-0">
        <div className="px-5 py-3 bg-footer-card-bg group-hover:bg-footer-card-hover-bg transition-colors border-t border-card-border flex items-center justify-center w-full">
          <Button
            variant="ghost"
            className="text-xs text-text-secondary group-hover:text-text-primary transition-colors h-auto py-1 px-2"
            // If onConnectClick is provided, use it. Otherwise, use the general card onClick.
            onClick={(e) => {
              if (onConnectClick) {
                e.stopPropagation() // Prevent card's onClick if button has its own
                onConnectClick()
              } else if (onClick) {
                onClick() // Fallback to general card onClick if button specific one is not there
              }
            }}
          >
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            Connect
          </Button>
        </div>
      </div>
    </div>
  )
}

export default IntegrationCard
