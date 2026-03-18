export interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  createdAt: string;
}

export interface Business {
  id: string;
  userId: string;
  name: string;
  industry: string;
  revenue: number;
  costs: number;
  team_size: number;
  sales_channel: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface UploadResponse {
  filename: string;
  size: number;
  records_count: number;
  table: any[];
  insights: string[];
}
