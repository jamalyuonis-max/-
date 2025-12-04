
export enum Language {
  EN = 'EN',
  AR = 'AR',
  NL = 'NL',
  FR = 'FR'
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  statValue?: string;
  statLabel?: string;
  iconName: 'scale' | 'file-text' | 'megaphone' | 'users' | 'shield' | 'globe';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
