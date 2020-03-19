export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Lobby {
  id: string;
  name: string;
  date: string;
  startPoint?: {
    name: string;
  };
  distance: number;
  imageUrl?: string;
  interested: User[];
}