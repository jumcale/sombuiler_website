export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface FormData {
  clientName: string;
  email: string;
  phone: string;
  businessType: BusinessType;
  budgetTier: BudgetTier;
  projectDetails: string;
  preferredContact: 'whatsapp' | 'email' | 'phone';
}

export type BusinessType = 
  | 'ecommerce'
  | 'saas'
  | 'portfolio'
  | 'corporate'
  | 'startup'
  | 'education'
  | 'healthcare'
  | 'other';

export type BudgetTier =
  | 'basic'
  | 'standard'
  | 'premium'
  | 'enterprise';

export interface FormErrors {
  clientName?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  budgetTier?: string;
  projectDetails?: string;
}

export interface OperatingHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface ContactInfo {
  whatsapp: string;
  phone: string;
  email: string;
  address: string;
  mapLink: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
