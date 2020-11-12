export interface Post {
  readonly id: number;
  name: string;
  items: Array<PostItems>;
  status?: boolean;
  weight?: number;
}

export interface PostItems {
  readonly id: number;
  name: string;
}

export interface HistoryPost {
  readonly id: number;
  name: string;
  operation?: operations;
  date: number;
}

export type operations = 'added' | 'delete' | '';

export interface HistoryState {
  history: Array<HistoryPost>;
}

export interface PostState {
  posts: Array<Post>;
}
