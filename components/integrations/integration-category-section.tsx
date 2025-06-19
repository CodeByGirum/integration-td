"use client"

import type React from "react"
import type { LucideIcon } from "lucide-react"
import IntegrationCard from "./integration-card"
import CategoryIconDisplay from "./category-icon"

interface Integration {
  id: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  onClick?: () => void
  onConnectClick?: () => void // Add onConnectClick here
}

interface IntegrationCategorySectionProps {
  categoryTitle: string
  categoryIcon: LucideIcon
  integrations: Integration[]
}

const IntegrationCategorySection: React.FC<IntegrationCategorySectionProps> = ({
  categoryTitle,
  categoryIcon,
  integrations,
}) => {
  if (integrations.length === 0) return null

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6 group cursor-pointer">
        <CategoryIconDisplay icon={categoryIcon} />
        <h3 className="text-xl font-medium text-text-tertiary group-hover:text-text-primary transition-colors">
          {categoryTitle}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {integrations.map((integration) => (
          <IntegrationCard
            key={integration.id}
            icon={integration.icon}
            title={integration.title}
            description={integration.description}
            tags={integration.tags}
            onClick={integration.onClick}
            onConnectClick={integration.onConnectClick} // Pass onConnectClick to IntegrationCard
          />
        ))}
      </div>
    </section>
  )
}

export default IntegrationCategorySection
