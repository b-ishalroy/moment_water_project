export interface LabelTemplate {
  id: string;
  name: string;
  category: 'wedding' | 'birthday' | 'resort' | 'fest' | 'prank';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bgGradient: string;
  defaultText: string;
  defaultSubtext: string;
  badgeText?: string;
  accentSvgType: 'floral' | 'balloons' | 'minimal-geo' | 'stars' | 'prank-warning';
}

export interface Occasion {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  category: 'wedding' | 'birthday' | 'resort' | 'fest' | 'prank';
  exampleText: string;
  exampleSubtext: string;
}

export interface Testimonial {
  id: string;
  username: string;
  timeAgo: string;
  avatarSeed: string;
  message: string;
  verifiedPurchase: boolean;
  rating: number;
}

export interface EnquiryFormState {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  quantity: number;
  message: string;
}
