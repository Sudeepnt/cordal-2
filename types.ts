
export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface Audience {
  icon: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  brief: string;
  implementation: string;
  technologies?: string[];
}
