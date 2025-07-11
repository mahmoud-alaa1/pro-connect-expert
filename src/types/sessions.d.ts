interface ISession {
  id: string;
  client_id: string;
  expert_id: string;
  date: string;
  time_id: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  payment_status: "paid" | "unpaid";
  zoom_link?: string;
  notes?: string;
  created_at: string;
}

interface ISessionResponse {
  client: {
    avatar_url: string;
    email: string;
    full_name: string;
  };
  client_id: string;
  created_at: string;
  date: string;
  expert_availability: {
    day: string;
    from_time: string;
    to_time: string;
    duration: number;
  };
  expert_id: string;
  id: number;
  notes: string;
  payment_status: string;
  status: string;
  time_id: string;
  zoom_link: null;
  professional: {
    id: string;
    profile: {
      avatar_url: string;
      email: string;
      full_name: string;
    };
    title: string;
    currency: string;
    hourly_rate: number;
    specialty: string;
  };
}
