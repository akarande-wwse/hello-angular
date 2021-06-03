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
}

export interface File {
  id: number;
  name: string;
  folderId: number;
  isForm: boolean;
  complianceId: number;
  download: boolean;
  print: boolean;
}

export interface Compliance {
  id: number;
  text: string;
}
