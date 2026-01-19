
export interface Lab {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  category: string;
  description: string;
  link: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
}

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Added missing Project interface to resolve errors in ProjectGrid.tsx
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
}
