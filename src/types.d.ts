declare module '*.tsx' {
  import { ComponentType } from 'react'
  const component: ComponentType
  export default component
}

declare module 'framer-motion' {
  export const motion: any
}

declare module 'lucide-react' {
  export const AlertTriangle: any
  export const ArrowRight: any
  export const TrendingUp: any
  export const DollarSign: any
  export const Shield: any
  export const CreditCard: any
  export const Link: any
  export const Eye: any
  export const QrCode: any
  export const MapPin: any
  export const AlertCircle: any
  export const BarChart2: any
  export const Smartphone: any
  export const Users: any
  export const Phone: any
  export const Globe: any
} 