import {
  UploadCloud,
  Sheet,
  FileText,
  Cloud,
  Database,
  Server,
  Snowflake,
  CreditCard,
  Share2,
  FileSpreadsheet,
  CloudCog,
  DatabaseZap,
  Warehouse,
  Briefcase,
  Zap,
  type LucideIcon,
} from "lucide-react"

export interface Integration {
  id: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface IntegrationCategory {
  id: string
  title: string
  icon: LucideIcon
  integrations: Integration[]
}

export const integrationCategories: IntegrationCategory[] = [
  {
    id: "spreadsheets",
    title: "Spreadsheets & Files",
    icon: FileSpreadsheet,
    integrations: [
      {
        id: "upload-local",
        icon: UploadCloud,
        title: "Upload Local File",
        description: "Upload CSV, JSON, or other supported files from your computer.",
        tags: ["local", "csv", "json"],
      },
      {
        id: "google-sheets",
        icon: Sheet,
        title: "Google Sheets",
        description: "Connect and sync data from your Google Sheets.",
        tags: ["spreadsheet", "google", "collaboration"],
      },
      {
        id: "ms-excel",
        icon: FileText,
        title: "Microsoft Excel",
        description: "Link Excel files stored in your OneDrive account.",
        tags: ["spreadsheet", "microsoft", "onedrive"],
      },
    ],
  },
  {
    id: "cloud-storage",
    title: "Cloud Storage",
    icon: CloudCog,
    integrations: [
      {
        id: "aws-s3",
        icon: Cloud,
        title: "AWS S3",
        description: "Access data from your Amazon S3 buckets.",
        tags: ["cloud", "storage", "amazon"],
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: DatabaseZap,
    integrations: [
      {
        id: "postgresql",
        icon: Database,
        title: "PostgreSQL",
        description: "Connect to your PostgreSQL relational databases.",
        tags: ["database", "sql", "relational"],
      },
      {
        id: "mysql",
        icon: Server,
        title: "MySQL",
        description: "Link your MySQL databases for data integration.",
        tags: ["database", "sql", "relational"],
      },
    ],
  },
  {
    id: "data-warehouses",
    title: "Data Warehouses",
    icon: Warehouse,
    integrations: [
      {
        id: "snowflake",
        icon: Snowflake,
        title: "Snowflake",
        description: "Integrate with your Snowflake data warehouse.",
        tags: ["data warehouse", "cloud", "analytics"],
      },
    ],
  },
  {
    id: "business-apps",
    title: "Business Apps",
    icon: Briefcase,
    integrations: [
      {
        id: "stripe",
        icon: CreditCard,
        title: "Stripe",
        description: "Access financial data from your Stripe account.",
        tags: ["payments", "finance", "ecommerce"],
      },
    ],
  },
  {
    id: "apis-automation",
    title: "APIs & Automation",
    icon: Zap,
    integrations: [
      {
        id: "custom-rest-api",
        icon: Share2,
        title: "Custom REST API",
        description: "Connect to any custom REST API endpoint.",
        tags: ["api", "rest", "automation"],
      },
    ],
  },
]
