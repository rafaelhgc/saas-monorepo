export interface ShortPost {
  title: string;
  coverImage: string;
  slug: string;
}

export interface Post {
  title: string;
  coverImage: string;
  createdAt: string;
  description: string;
  slug: string;
  content: string;
  tags: string[];
  related: Array<ShortPost> | never[];
}
