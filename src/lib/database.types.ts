export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          created_at: string | null
          duration: number
          id: string
          message: string | null
          paypal_capture_id: string | null
          paypal_order_id: string | null
          paypal_payment_id: string | null
          professional_id: number | null
          professional_name: string
          professional_title: string
          session_date: string
          session_time: string
          status: string | null
          total_cost: number
          updated_at: string | null
          user_email: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          duration: number
          id?: string
          message?: string | null
          paypal_capture_id?: string | null
          paypal_order_id?: string | null
          paypal_payment_id?: string | null
          professional_id?: number | null
          professional_name: string
          professional_title: string
          session_date: string
          session_time: string
          status?: string | null
          total_cost: number
          updated_at?: string | null
          user_email: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          duration?: number
          id?: string
          message?: string | null
          paypal_capture_id?: string | null
          paypal_order_id?: string | null
          paypal_payment_id?: string | null
          professional_id?: number | null
          professional_name?: string
          professional_title?: string
          session_date?: string
          session_time?: string
          status?: string | null
          total_cost?: number
          updated_at?: string | null
          user_email?: string
          user_id?: string | null
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
      custom_domains: {
        Row: {
          created_at: string | null
          custom_domain: string | null
          dns_records: Json | null
          domain_name: string
          domain_type: string
          expert_id: string
          id: string
          is_verified: boolean | null
          ssl_status: string | null
          subdomain_name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          custom_domain?: string | null
          dns_records?: Json | null
          domain_name: string
          domain_type: string
          expert_id: string
          id?: string
          is_verified?: boolean | null
          ssl_status?: string | null
          subdomain_name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          custom_domain?: string | null
          dns_records?: Json | null
          domain_name?: string
          domain_type?: string
          expert_id?: string
          id?: string
          is_verified?: boolean | null
          ssl_status?: string | null
          subdomain_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      custom_meeting_links: {
        Row: {
          created_at: string | null
          custom_url: string
          description: string | null
          duration_minutes: number
          expert_id: string
          expires_at: string | null
          id: string
          is_active: boolean | null
          link_name: string
          max_usage: number | null
          meeting_type: string
          price: number | null
          settings: Json | null
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          created_at?: string | null
          custom_url: string
          description?: string | null
          duration_minutes?: number
          expert_id: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          link_name: string
          max_usage?: number | null
          meeting_type: string
          price?: number | null
          settings?: Json | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          created_at?: string | null
          custom_url?: string
          description?: string | null
          duration_minutes?: number
          expert_id?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          link_name?: string
          max_usage?: number | null
          meeting_type?: string
          price?: number | null
          settings?: Json | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: []
      }
      expert_invitations: {
        Row: {
          client_email: string
          client_name: string | null
          created_at: string | null
          expert_id: string
          expires_at: string
          id: string
          invitation_message: string | null
          invitation_type: string
          responded_at: string | null
          sent_at: string | null
          session_details: Json | null
          status: string
        }
        Insert: {
          client_email: string
          client_name?: string | null
          created_at?: string | null
          expert_id: string
          expires_at?: string
          id?: string
          invitation_message?: string | null
          invitation_type: string
          responded_at?: string | null
          sent_at?: string | null
          session_details?: Json | null
          status?: string
        }
        Update: {
          client_email?: string
          client_name?: string | null
          created_at?: string | null
          expert_id?: string
          expires_at?: string
          id?: string
          invitation_message?: string | null
          invitation_type?: string
          responded_at?: string | null
          sent_at?: string | null
          session_details?: Json | null
          status?: string
        }
        Relationships: []
      }
      expert_marketing_campaigns: {
        Row: {
          budget_limit: number | null
          campaign_content: Json | null
          campaign_name: string
          campaign_type: string
          created_at: string | null
          end_date: string | null
          expert_id: string
          id: string
          metrics: Json | null
          spent_amount: number | null
          start_date: string | null
          status: string
          target_audience: Json | null
          updated_at: string | null
        }
        Insert: {
          budget_limit?: number | null
          campaign_content?: Json | null
          campaign_name: string
          campaign_type: string
          created_at?: string | null
          end_date?: string | null
          expert_id: string
          id?: string
          metrics?: Json | null
          spent_amount?: number | null
          start_date?: string | null
          status?: string
          target_audience?: Json | null
          updated_at?: string | null
        }
        Update: {
          budget_limit?: number | null
          campaign_content?: Json | null
          campaign_name?: string
          campaign_type?: string
          created_at?: string | null
          end_date?: string | null
          expert_id?: string
          id?: string
          metrics?: Json | null
          spent_amount?: number | null
          start_date?: string | null
          status?: string
          target_audience?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      expert_subscriptions: {
        Row: {
          billing_cycle: string
          created_at: string | null
          current_period_end: string
          current_period_start: string
          expert_id: string
          id: string
          plan_id: number
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
        }
        Insert: {
          billing_cycle: string
          created_at?: string | null
          current_period_end: string
          current_period_start?: string
          expert_id: string
          id?: string
          plan_id: number
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
        }
        Update: {
          billing_cycle?: string
          created_at?: string | null
          current_period_end?: string
          current_period_start?: string
          expert_id?: string
          id?: string
          plan_id?: number
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expert_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
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
          expert_confirmed: boolean | null
          expert_confirmed_at: string | null
          id: string
          meeting_id: string | null
          meeting_url: string | null
        }
        Insert: {
          booking_id: string
          client_confirmed?: boolean | null
          client_confirmed_at?: string | null
          created_at?: string | null
          expert_confirmed?: boolean | null
          expert_confirmed_at?: string | null
          id?: string
          meeting_id?: string | null
          meeting_url?: string | null
        }
        Update: {
          booking_id?: string
          client_confirmed?: boolean | null
          client_confirmed_at?: string | null
          created_at?: string | null
          expert_confirmed?: boolean | null
          expert_confirmed_at?: string | null
          id?: string
          meeting_id?: string | null
          meeting_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meeting_confirmations_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      meeting_rooms: {
        Row: {
          booking_id: string
          created_at: string | null
          expires_at: string
          id: string
          meeting_url: string
          password: string | null
          recording_enabled: boolean | null
          recording_url: string | null
          room_id: string
        }
        Insert: {
          booking_id: string
          created_at?: string | null
          expires_at: string
          id?: string
          meeting_url: string
          password?: string | null
          recording_enabled?: boolean | null
          recording_url?: string | null
          room_id: string
        }
        Update: {
          booking_id?: string
          created_at?: string | null
          expires_at?: string
          id?: string
          meeting_url?: string
          password?: string | null
          recording_enabled?: boolean | null
          recording_url?: string | null
          room_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meeting_rooms_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          booking_id: string | null
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          booking_id?: string | null
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          booking_id?: string | null
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      payout_requests: {
        Row: {
          amount: number
          id: string
          notes: string | null
          processed_date: string | null
          professional_id: number | null
          request_date: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          id?: string
          notes?: string | null
          processed_date?: string | null
          professional_id?: number | null
          request_date?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          id?: string
          notes?: string | null
          processed_date?: string | null
          professional_id?: number | null
          request_date?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payout_requests_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      professionals: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          experience_years: number | null
          hourly_rate: number
          id: number
          is_available: boolean | null
          name: string
          rating: number | null
          specialization: string | null
          title: string
          total_sessions: number | null
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          experience_years?: number | null
          hourly_rate: number
          id?: number
          is_available?: boolean | null
          name: string
          rating?: number | null
          specialization?: string | null
          title: string
          total_sessions?: number | null
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          experience_years?: number | null
          hourly_rate?: number
          id?: number
          is_available?: boolean | null
          name?: string
          rating?: number | null
          specialization?: string | null
          title?: string
          total_sessions?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          experience_years: number | null
          first_name: string | null
          hourly_rate: number | null
          id: string
          last_name: string | null
          phone: string | null
          role: string | null
          specialization: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          experience_years?: number | null
          first_name?: string | null
          hourly_rate?: number | null
          id: string
          last_name?: string | null
          phone?: string | null
          role?: string | null
          specialization?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          experience_years?: number | null
          first_name?: string | null
          hourly_rate?: number | null
          id?: string
          last_name?: string | null
          phone?: string | null
          role?: string | null
          specialization?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscription_plans: {
        Row: {
          created_at: string | null
          features: Json
          id: number
          is_active: boolean | null
          name: string
          price_monthly: number
          price_yearly: number
        }
        Insert: {
          created_at?: string | null
          features?: Json
          id?: number
          is_active?: boolean | null
          name: string
          price_monthly: number
          price_yearly: number
        }
        Update: {
          created_at?: string | null
          features?: Json
          id?: number
          is_active?: boolean | null
          name?: string
          price_monthly?: number
          price_yearly?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_custom_subdomain: {
        Args: { expert_user_id: string; subdomain: string }
        Returns: Json
      }
      email_confirmation_disabled: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      generate_meeting_link: {
        Args: {
          expert_user_id: string
          link_name: string
          meeting_type: string
          duration_minutes?: number
          price?: number
        }
        Returns: Json
      }
      has_premium_subscription: {
        Args: { expert_user_id: string }
        Returns: boolean
      }
      send_expert_invitation: {
        Args: {
          expert_user_id: string
          client_email: string
          client_name?: string
          invitation_message?: string
          invitation_type?: string
          session_details?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
