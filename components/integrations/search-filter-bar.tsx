"use client"

import type React from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

interface SearchFilterBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-10 p-1 bg-panel-bg/50 backdrop-blur-sm border border-panel-border rounded-xl shadow-lg sticky top-4 z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2 sm:p-1.5">
        <div className="relative flex-grow w-full sm:w-auto">
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-placeholder" />
          <Input
            type="search"
            placeholder="Search Integrations e.g., PostgreSQL, S3, Stripe..."
            className="w-full bg-transparent pl-10 pr-3 py-2 text-sm text-text-input focus:outline-none placeholder-text-placeholder border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto sm:min-w-[200px]">
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full bg-radial-dot border-input-border text-sm text-text-secondary focus:border-input-focus-border focus:ring-input-focus-border/50 py-2">
              <Filter className="h-3.5 w-3.5 mr-2 text-text-tertiary" />
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent className="bg-radial-dot border-input-border text-text-secondary">
              <SelectItem value="all" className="hover:!bg-panel-bg focus:!bg-panel-bg">
                All Categories
              </SelectItem>
              <SelectItem value="spreadsheets" className="hover:!bg-panel-bg focus:!bg-panel-bg">
                Spreadsheets & Files
              </SelectItem>
              <SelectItem value="cloud-storage" className="hover:!bg-panel-bg focus:!bg-panel-bg">
                Cloud Storage
              </SelectItem>
              <SelectItem value="databases" className="hover:!bg-panel-bg focus:!bg-panel-bg">
                Databases
              </SelectItem>
              <SelectItem value="data-warehouses" className="hover:!bg-panel-bg focus:!bg-panel-bg">
                Data Warehouses
              </SelectItem>
              <SelectItem value="business-apps" className="hover:!bg-panel-bg focus:!bg-panel-bg">
                Business Apps
              </SelectItem>
              <SelectItem value="apis-automation" className="hover:!bg-panel-bg focus:!bg-panel-bg">
                APIs & Automation
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default SearchFilterBar
