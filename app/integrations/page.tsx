"use client"

import type React from "react"
import { useState, useMemo, useRef } from "react"
import PageHeaderSection from "@/components/integrations/page-header-section"
import SearchFilterBar from "@/components/integrations/search-filter-bar"
import IntegrationCategorySection from "@/components/integrations/integration-category-section"
import GoogleSheetsConnectModal from "@/components/integrations/google-sheets-connect-modal" // Import the modal
import { integrationCategories, type Integration } from "@/lib/integrations-data"

export default function IntegrationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isGoogleSheetsModalOpen, setIsGoogleSheetsModalOpen] = useState(false)

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleUploadLocalFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      console.log("Selected local file:", file.name, file.type)
      alert(`Selected local file: ${file.name}`)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleGoogleSheetsConnectClick = () => {
    setIsGoogleSheetsModalOpen(true)
  }

  const filteredIntegrationCategories = useMemo(() => {
    let categories = [...integrationCategories]
    if (selectedCategory !== "all") {
      categories = categories.filter((category) => category.id === selectedCategory)
    }
    return categories
      .map((category) => {
        const filteredIntegrations = category.integrations.filter((integration) => {
          const term = searchTerm.toLowerCase()
          return (
            integration.title.toLowerCase().includes(term) ||
            integration.description.toLowerCase().includes(term) ||
            integration.tags.some((tag) => tag.toLowerCase().includes(term))
          )
        })
        return { ...category, integrations: filteredIntegrations }
      })
      .filter((category) => category.integrations.length > 0)
  }, [searchTerm, selectedCategory])

  const noResults = filteredIntegrationCategories.length === 0 && (searchTerm !== "" || selectedCategory !== "all")

  const getIntegrationProps = (integration: Integration): { onClick?: () => void; onConnectClick?: () => void } => {
    if (integration.id === "upload-local") {
      return { onClick: handleUploadLocalFileClick } // Card click for local upload
    }
    if (integration.id === "google-sheets") {
      return { onConnectClick: handleGoogleSheetsConnectClick } // Button click for Google Sheets
    }
    return {}
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <PageHeaderSection />
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/json"
        onChange={handleFileChange}
      />

      <h2 className="text-2xl font-semibold text-text-primary mb-6">Available Integrations</h2>

      {filteredIntegrationCategories.length > 0
        ? filteredIntegrationCategories.map((category) => (
            <IntegrationCategorySection
              key={category.id}
              categoryTitle={category.title}
              categoryIcon={category.icon}
              integrations={category.integrations.map((integration) => ({
                ...integration,
                ...getIntegrationProps(integration),
              }))}
            />
          ))
        : noResults && (
            <div className="text-center py-10">
              <p className="text-xl text-text-tertiary">No integrations found.</p>
              <p className="text-sm text-text-placeholder mt-2">Try adjusting your search term or category filter.</p>
            </div>
          )}
      {filteredIntegrationCategories.length === 0 &&
        !noResults &&
        integrationCategories.map((category) => (
          <IntegrationCategorySection
            key={category.id}
            categoryTitle={category.title}
            categoryIcon={category.icon}
            integrations={category.integrations.map((integration) => ({
              ...integration,
              ...getIntegrationProps(integration),
            }))}
          />
        ))}

      <GoogleSheetsConnectModal isOpen={isGoogleSheetsModalOpen} onClose={() => setIsGoogleSheetsModalOpen(false)} />
    </div>
  )
}
