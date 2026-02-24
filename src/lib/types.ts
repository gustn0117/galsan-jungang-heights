export interface Registration {
  id: number;
  name: string;
  phone: string;
  interest_type: string;
  message: string;
  status: "new" | "contacted" | "completed";
  created_at: string;
  updated_at: string;
}

export interface RegistrationListParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  interest_type?: string;
  date_from?: string;
  date_to?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
}

export interface RegistrationListResponse {
  data: Registration[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface RegistrationStats {
  total: number;
  new: number;
  contacted: number;
  completed: number;
  todayCount: number;
  weekCount: number;
}
