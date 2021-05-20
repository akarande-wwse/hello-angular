export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Group {
  id: number;
  name: string;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  folders: Folder[];
}

export interface Folder {
  id: number;
  name: string;
  documents: Document[];
}

export interface Document {
  id: number;
  name: string;
  type?: string;
}

export type Hierarchy = (Group | Category | Folder | Document)[];
