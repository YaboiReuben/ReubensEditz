
export type EditType = 'short' | 'long';

export interface Service {
  id: EditType;
  title: string;
  price: string;
  features: string[];
  tags: string[];
  icon: string;
}

export interface BookingFormData {
  name: string;
  discord: string;
  type: EditType;
  description: string;
  deadline: string;
  budget?: string;
  footageLink: string;
}
