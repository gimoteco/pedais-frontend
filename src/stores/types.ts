export interface User {
  id: string;
  email: string;
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
  interested: User[];
}
