import { LucideIcon } from "lucide-react";
import { AuthUser } from "aws-amplify/auth";
import {
  Manager,
  Contractor,
  Application,
  Customer,
  Contractor,
} from "./prismaTypes";
import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

declare global {
  enum AmenityEnum {
    FreeInspection = "FreeInspection",
    OnSiteInspection = "OnSiteInspection",
    WarrantyIncluded = "WarrantyIncluded",
    FlexibleScheduling = "FlexibleScheduling",
    Support247 = "Support247",
    OnlinePayment = "OnlinePayment",
    InvoiceAvailable = "InvoiceAvailable",
    FinancingOptions = "FinancingOptions",
    ReferralDiscount = "ReferralDiscount",
    PostJobCleanup = "PostJobCleanup",
  }

  enum HighlightEnum {
    LicensedProfessional = "LicensedProfessional",
    EmergencySupport = "EmergencySupport",
    FreeConsultation = "FreeConsultation",
    QuickResponse = "QuickResponse",
    QualityGuarantee = "QualityGuarantee",
    FlexibleHours = "FlexibleHours",
    RemoteSupportAvailable = "RemoteSupportAvailable",
    FreeEstimates = "FreeEstimates",
    SameDayService = "SameDayService",
    EcoFriendly = "EcoFriendly",
    AffordablePricing = "AffordablePricing",
    LocallyOwned = "LocallyOwned",
    YearsOfExperience = "YearsOfExperience",
  }

  enum ContractorTypeEnum {
    HVAC = "HVAC",
    Plumbing = "Plumbing",
    Electrical = "Electrical",
    Carpentry = "Carpentry",
    Roofing = "Roofing",
    Painting = "Painting",
    Drywall = "Drywall",
    ApplianceRepair = "ApplianceRepair",
    Landscaping = "Landscaping",
    Interlocking = "Interlocking",
    Masonry = "Masonry",
    Flooring = "Flooring",
    Handyman = "Handyman",
    PestControl = "PestControl",
    Welding = "Welding",
    Insulation = "Insulation",
    SecuritySystems = "SecuritySystems",
    SmartHome = "SmartHome",
  }

  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
  }

  interface ContractorOverviewProps {
    contractorId: number;
  }

  interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    contractorId: number;
  }

  interface ContactWidgetProps {
    onOpenModal: () => void;
  }

  interface ImagePreviewsProps {
    images: string[];
  }

  interface ContractorDetailsProps {
    contractorId: number;
  }

  interface ContractorOverviewProps {
    contractorId: number;
  }

  interface ContractorLocationProps {
    contractorId: number;
  }

  interface ApplicationCardProps {
    application: Application;
    userType: "manager" | "customer";
    children: React.ReactNode;
  }

  interface CardProps {
    contractor: Contractor;
    isFavorite: boolean;
    isManager?: boolean;
    onFavoriteToggle: () => void;
    onHandleDelete?: () => void;
    showFavoriteButton?: boolean;
    contractorLink?: string;
  }

  interface CardCompactProps {
    contractor: Contractor;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    contractorLink?: string;
  }

  interface HeaderProps {
    title: string;
    subtitle: string;
  }

  interface NavbarProps {
    isDashboard: boolean;
  }

  interface AppSidebarProps {
    userType: "manager" | "customer";
  }

  interface SettingsFormProps {
    initialData: SettingsFormData;
    onSubmit: (data: SettingsFormData) => Promise<void>;
    userType: "manager" | "customer";
  }

  interface User {
    cognitoInfo: AuthUser;
    userInfo: Customer | Manager;
    userRole: JsonObject | JsonPrimitive | JsonArray;
  }
}

export {};
