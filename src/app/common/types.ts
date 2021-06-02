export interface User {
  id: number;
  name: string;
  email: string;
  roleId: number;
  investor: Investor;
}

export interface Investor {
  id: number;
  name: string;
  userId: number;
  complianceId: number;
}

export interface Folder {
  id: number;
  name: string;
  items: Folder[];
  isDirectory: boolean;
}

export interface File {
  id: number;
  name: string;
  folderId: number;
  isForm: boolean;
  complianceId: number;
}

export interface Compliance {
  id: number;
  text: string;
}
