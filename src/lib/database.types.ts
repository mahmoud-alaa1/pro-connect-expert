export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      balances: {
        Row: {
          created_at: string | null
          currency: Database["public"]["Enums"]["currency_type"] | null
          current_balance: number | null
          id: string
          last_withdrawal_date: string | null
          professional_id: string
          total_earned: number | null
          total_withdrawn: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          current_balance?: number | null
          id?: string
          last_withdrawal_date?: string | null
          professional_id: string
          total_earned?: number | null
          total_withdrawn?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          current_balance?: number | null
          id?: string
          last_withdrawal_date?: string | null
          professional_id?: string
          total_earned?: number | null
          total_withdrawn?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "balances_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: true
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          booking_status: Database["public"]["Enums"]["booking_status"] | null
          client_id: string
          created_at: string | null
          currency: Database["public"]["Enums"]["currency_type"] | null
          duration_minutes: number
          hourly_rate: number
          id: string
          payment_confirmed: boolean | null
          paypal_order_id: string | null
          professional_id: string
          session_date: string
          session_notes: string | null
          session_time: string
          total_cost: number
          updated_at: string | null
        }
        Insert: {
          booking_status?: Database["public"]["Enums"]["booking_status"] | null
          client_id: string
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          duration_minutes?: number
          hourly_rate: number
          id?: string
          payment_confirmed?: boolean | null
          paypal_order_id?: string | null
          professional_id: string
          session_date: string
          session_notes?: string | null
          session_time: string
          total_cost: number
          updated_at?: string | null
        }
        Update: {
          booking_status?: Database["public"]["Enums"]["booking_status"] | null
          client_id?: string
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          duration_minutes?: number
          hourly_rate?: number
          id?: string
          payment_confirmed?: boolean | null
          paypal_order_id?: string | null
          professional_id?: string
          session_date?: string
          session_notes?: string | null
          session_time?: string
          total_cost?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      case_studies: {
        Row: {
          client_name: string | null
          created_at: string
          description: string
          id: string
          images: string[] | null
          outcome: string | null
          professional_id: string
          project_duration: string | null
          technologies_used: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          client_name?: string | null
          created_at?: string
          description: string
          id?: string
          images?: string[] | null
          outcome?: string | null
          professional_id: string
          project_duration?: string | null
          technologies_used?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          client_name?: string | null
          created_at?: string
          description?: string
          id?: string
          images?: string[] | null
          outcome?: string | null
          professional_id?: string
          project_duration?: string | null
          technologies_used?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "case_studies_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      certificates: {
        Row: {
          certificate_url: string | null
          created_at: string
          description: string | null
          expiry_date: string | null
          id: string
          issue_date: string | null
          issuer: string
          professional_id: string
          title: string
        }
        Insert: {
          certificate_url?: string | null
          created_at?: string
          description?: string | null
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          issuer: string
          professional_id: string
          title: string
        }
        Update: {
          certificate_url?: string | null
          created_at?: string
          description?: string | null
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          issuer?: string
          professional_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificates_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      client_payments: {
        Row: {
          amount: number
          client_id: string
          created_at: string
          currency: string
          description: string | null
          id: string
          payment_method: string | null
          professional_id: string
          status: string
          updated_at: string
        }
        Insert: {
          amount: number
          client_id: string
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          payment_method?: string | null
          professional_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          client_id?: string
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          payment_method?: string | null
          professional_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_payments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_payments_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      expert_availability: {
        Row: {
          created_at: string
          day: Database["public"]["Enums"]["day_of_week"]
          duration: number
          expert_id: string
          from_time: string
          id: string
          to_time: string
        }
        Insert: {
          created_at?: string
          day: Database["public"]["Enums"]["day_of_week"]
          duration: number
          expert_id: string
          from_time: string
          id?: string
          to_time: string
        }
        Update: {
          created_at?: string
          day?: Database["public"]["Enums"]["day_of_week"]
          duration?: number
          expert_id?: string
          from_time?: string
          id?: string
          to_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "expert_availability_expert_id_fkey"
            columns: ["expert_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      expert_withdrawals: {
        Row: {
          amount: number
          bank_account: string | null
          created_at: string
          currency: string
          id: string
          processed_at: string | null
          professional_id: string
          status: string
          withdrawal_method: string | null
        }
        Insert: {
          amount: number
          bank_account?: string | null
          created_at?: string
          currency?: string
          id?: string
          processed_at?: string | null
          professional_id: string
          status?: string
          withdrawal_method?: string | null
        }
        Update: {
          amount?: number
          bank_account?: string | null
          created_at?: string
          currency?: string
          id?: string
          processed_at?: string | null
          professional_id?: string
          status?: string
          withdrawal_method?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expert_withdrawals_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      meeting_confirmations: {
        Row: {
          booking_id: string
          client_confirmed: boolean | null
          client_confirmed_at: string | null
          created_at: string | null
          id: string
          meeting_link: string | null
          professional_confirmed: boolean | null
          professional_confirmed_at: string | null
        }
        Insert: {
          booking_id: string
          client_confirmed?: boolean | null
          client_confirmed_at?: string | null
          created_at?: string | null
          id?: string
          meeting_link?: string | null
          professional_confirmed?: boolean | null
          professional_confirmed_at?: string | null
        }
        Update: {
          booking_id?: string
          client_confirmed?: boolean | null
          client_confirmed_at?: string | null
          created_at?: string | null
          id?: string
          meeting_link?: string | null
          professional_confirmed?: boolean | null
          professional_confirmed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meeting_confirmations_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: true
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          message_status: Database["public"]["Enums"]["message_status"] | null
          receiver_id: string
          related_booking_id: string | null
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          message_status?: Database["public"]["Enums"]["message_status"] | null
          receiver_id: string
          related_booking_id?: string | null
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          message_status?: Database["public"]["Enums"]["message_status"] | null
          receiver_id?: string
          related_booking_id?: string | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_related_booking_id_fkey"
            columns: ["related_booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          notification_type: Database["public"]["Enums"]["notification_type"]
          related_booking_id: string | null
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          notification_type: Database["public"]["Enums"]["notification_type"]
          related_booking_id?: string | null
          title: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          notification_type?: Database["public"]["Enums"]["notification_type"]
          related_booking_id?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_related_booking_id_fkey"
            columns: ["related_booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_users: {
        Row: {
          bio: string | null
          created_at: string
          email: string
          expires_at: string | null
          full_name: string | null
          hourly_rate: number | null
          id: string
          otp: string | null
          password: string
          speciality: string | null
          title: string | null
          token: string | null
          user_type: Database["public"]["Enums"]["user_type"] | null
        }
        Insert: {
          bio?: string | null
          created_at?: string
          email: string
          expires_at?: string | null
          full_name?: string | null
          hourly_rate?: number | null
          id?: string
          otp?: string | null
          password: string
          speciality?: string | null
          title?: string | null
          token?: string | null
          user_type?: Database["public"]["Enums"]["user_type"] | null
        }
        Update: {
          bio?: string | null
          created_at?: string
          email?: string
          expires_at?: string | null
          full_name?: string | null
          hourly_rate?: number | null
          id?: string
          otp?: string | null
          password?: string
          speciality?: string | null
          title?: string | null
          token?: string | null
          user_type?: Database["public"]["Enums"]["user_type"] | null
        }
        Relationships: []
      }
      professionals: {
        Row: {
          availability_status: boolean | null
          avatar_url: string | null
          bio: string | null
          certificates_urls: string[] | null
          certifications: string[] | null
          created_at: string | null
          currency: Database["public"]["Enums"]["currency_type"] | null
          education: Json | null
          experience: Json | null
          hourly_rate: number
          id: string
          languages: string[] | null
          name: string | null
          portfolio_urls: string[] | null
          rating: number | null
          specialty: string | null
          title: string | null
          total_reviews: number | null
          total_sessions: number | null
          updated_at: string | null
          user_id: string
          verified: boolean
          years_experience: number | null
        }
        Insert: {
          availability_status?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          certificates_urls?: string[] | null
          certifications?: string[] | null
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          education?: Json | null
          experience?: Json | null
          hourly_rate?: number
          id?: string
          languages?: string[] | null
          name?: string | null
          portfolio_urls?: string[] | null
          rating?: number | null
          specialty?: string | null
          title?: string | null
          total_reviews?: number | null
          total_sessions?: number | null
          updated_at?: string | null
          user_id: string
          verified?: boolean
          years_experience?: number | null
        }
        Update: {
          availability_status?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          certificates_urls?: string[] | null
          certifications?: string[] | null
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          education?: Json | null
          experience?: Json | null
          hourly_rate?: number
          id?: string
          languages?: string[] | null
          name?: string | null
          portfolio_urls?: string[] | null
          rating?: number | null
          specialty?: string | null
          title?: string | null
          total_reviews?: number | null
          total_sessions?: number | null
          updated_at?: string | null
          user_id?: string
          verified?: boolean
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "professionals_id_fkey1"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professionals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_pictures: {
        Row: {
          created_at: string
          id: string
          image_url: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_pictures_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string
          id: string
          updated_at: string | null
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string
          id: string
          updated_at?: string | null
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          updated_at?: string | null
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Relationships: []
      }
      sessions: {
        Row: {
          client_id: string
          created_at: string
          date: string
          expert_id: string
          id: number
          notes: string | null
          payment_status: string | null
          price: number
          status: string | null
          time_id: string
          zoom_link: string | null
        }
        Insert: {
          client_id?: string
          created_at?: string
          date: string
          expert_id?: string
          id?: number
          notes?: string | null
          payment_status?: string | null
          price: number
          status?: string | null
          time_id: string
          zoom_link?: string | null
        }
        Update: {
          client_id?: string
          created_at?: string
          date?: string
          expert_id?: string
          id?: number
          notes?: string | null
          payment_status?: string | null
          price?: number
          status?: string | null
          time_id?: string
          zoom_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessions_expert_id_fkey"
            columns: ["expert_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessions_time_id_fkey"
            columns: ["time_id"]
            isOneToOne: false
            referencedRelation: "expert_availability"
            referencedColumns: ["id"]
          },
        ]
      }
      withdrawal_requests: {
        Row: {
          amount: number
          created_at: string | null
          currency: Database["public"]["Enums"]["currency_type"] | null
          id: string
          paypal_email: string
          processed_at: string | null
          professional_id: string
          status: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          id?: string
          paypal_email: string
          processed_at?: string | null
          professional_id: string
          status?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: Database["public"]["Enums"]["currency_type"] | null
          id?: string
          paypal_email?: string
          processed_at?: string | null
          professional_id?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "withdrawal_requests_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_languages: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      get_specialties: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
    }
    Enums: {
      booking_status: "pending" | "confirmed" | "completed" | "cancelled"
      currency_type: "SAR" | "USD" | "EUR" | "AED"
      day_of_week:
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
      language_enum:
        | "English"
        | "Arabic"
        | "Spanish"
        | "French"
        | "German"
        | "Turkish"
        | "Italian"
        | "Hindi"
        | "Chinese"
        | "Portuguese"
        | "Russian"
      message_status: "sent" | "delivered" | "read"
      notification_type:
        | "booking_request"
        | "booking_confirmed"
        | "booking_cancelled"
        | "session_reminder"
        | "message_received"
        | "payment_received"
      specialty_enum:
        | "Digital Marketing Strategy"
        | "Growth Marketing"
        | "Marketing Analytics"
        | "Brand Development"
        | "Customer Acquisition"
        | "Marketing Automation"
        | "Social Media Strategy"
        | "Content Marketing"
        | "Business Strategy"
        | "Product Management"
        | "UI/UX Design"
        | "Data Analysis"
        | "SEO & SEM"
        | "Email Marketing"
        | "Copywriting"
      user_type: "client" | "expert"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      booking_status: ["pending", "confirmed", "completed", "cancelled"],
      currency_type: ["SAR", "USD", "EUR", "AED"],
      day_of_week: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      language_enum: [
        "English",
        "Arabic",
        "Spanish",
        "French",
        "German",
        "Turkish",
        "Italian",
        "Hindi",
        "Chinese",
        "Portuguese",
        "Russian",
      ],
      message_status: ["sent", "delivered", "read"],
      notification_type: [
        "booking_request",
        "booking_confirmed",
        "booking_cancelled",
        "session_reminder",
        "message_received",
        "payment_received",
      ],
      specialty_enum: [
        "Digital Marketing Strategy",
        "Growth Marketing",
        "Marketing Analytics",
        "Brand Development",
        "Customer Acquisition",
        "Marketing Automation",
        "Social Media Strategy",
        "Content Marketing",
        "Business Strategy",
        "Product Management",
        "UI/UX Design",
        "Data Analysis",
        "SEO & SEM",
        "Email Marketing",
        "Copywriting",
      ],
      user_type: ["client", "expert"],
    },
  },
} as const
