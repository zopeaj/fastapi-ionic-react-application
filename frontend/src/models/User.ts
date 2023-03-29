export interface Role {
  id: number;
  name: string;
}

export interface User {
  userid: number;
  first_name: string;
  last_name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  isAuthenticated: boolean;
  roles: Role[];
}
