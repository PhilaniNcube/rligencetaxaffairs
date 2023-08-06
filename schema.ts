export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string
          realestate: boolean
          number_of_properties: number
          individual_capacity: string
          paid_off: boolean
          financials_done: boolean
          sars_rep: boolean
          salaried: boolean
          retirement_contributions: boolean
          investments: boolean
          medical_aid: boolean
          tax_free_investments: boolean
          home_office: boolean
          referral_code: string
          comments: string
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          realestate: boolean
          number_of_properties?: number
          individual_capacity?: string
          paid_off?: boolean
          financials_done?: boolean
          sars_rep?: boolean
          salaried?: boolean
          retirement_contributions?: boolean
          investments?: boolean
          medical_aid?: boolean
          tax_free_investments?: boolean
          home_office?: boolean
          referral_code?: string
          comments?: string
        }
        Update: {
          id: string
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          realestate?: boolean
          number_of_properties?: number
          individual_capacity?: string
          paid_off?: boolean
          financials_done?: boolean
          sars_rep?: boolean
          salaried?: boolean
          retirement_contributions?: boolean
          investments?: boolean
          medical_aid?: boolean
          tax_free_investments?: boolean
          home_office?: boolean
          referral_code?: string
          comments?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

