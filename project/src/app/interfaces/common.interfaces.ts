export interface TeamMember {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'Active' | 'Inactive';
  lastLogin: string;
}

export interface Practitioner {
  id: number;
  clinic: string;
  name: string;
  surname: string;
  email: string;
  profession: string;
  status: 'Active' | 'Inactive';
  orderCount: number;
}

export interface User {
  id: number;
  organization: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  confections: number;
}

export interface Product {
  id: number;
  name: string;
  code: string;
  productType: 'Insoles' | 'Top Cover';
  description: string;
  stock: number;
  status: 'Active' | 'Inactive';
  price: number;
}

// Updated Order interface to match OrderData structure
export interface Order {
  id: number;
  orderNumber: string;
  organization: string;
  dateCreated: string;
  status: 'Created' | 'Shipped' | 'Delivered';
  orderPrice: number;
  insoles: number;
  topCovers: number;
  trackingNumber?: string;
  timeline?: OrderTimeline;
}

// Order timeline interface for the modal
export interface OrderTimeline {
  order: { date: string; completed: boolean };
  printing: { date: string; completed: boolean };
  shipping: { date: string; completed: boolean };
  delivery: { date: string; completed: boolean };
}

// OrderData interface for consistency (same as Order)
export interface OrderData {
  id: number;
  orderNumber: string;
  organization: string;
  dateCreated: string;
  status: 'Created' | 'Shipped' | 'Delivered';
  orderPrice: number;
  insoles: number;
  topCovers: number;
  trackingNumber?: string;
  timeline?: OrderTimeline;
}

export interface Invoice {
  id: string;
  dateIssued: string;
  clinic: string;
  numberOfOrders: number;
  amount: number;
}

export interface Carrier {
  id: number;
  name: string;
  serviceType: string;
  trackingPattern: string;
  contactInfo: string;
  status: 'Active' | 'Inactive';
}

export interface MetricCard {
  title: string;
  value: string;
  trend: {
    direction: 'up' | 'down';
    percentage: string;
  };
  icon: string;
}

export interface ExportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  clinic: string;
  numberOfConfections: number;
  patientId: string;
}

export interface Confection {
  id: number;
  patientId: number;
  date: string;
  madeBy: string;
  status: 'draft' | 'in cart' | 'ordered' | 'received';
  confectionId: string;
}