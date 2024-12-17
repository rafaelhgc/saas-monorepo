export interface ShortPost {
  title: string;
  coverImage: { main: string; thumb: string; square: string };
  slug: string;
}

export interface Post {
  title: string;
  coverImage: { main: string; thumb: string; square: string };
  createdAt: string;
  description: string;
  slug: string;
  content: string;
  tags: string[];
  related: Array<ShortPost> | never[];
}
