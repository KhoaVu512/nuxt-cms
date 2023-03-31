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
      profiles: {
        Row: {
          created_at: string | null
          id: number
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      test: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      todos: {
        Row: {
          comment: string | null
          created_at: string | null
          id: number
          img_path: string | null
          name: string | null
          star: number | null
          user_id: number
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: number
          img_path?: string | null
          name?: string | null
          star?: number | null
          user_id?: number
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: number
          img_path?: string | null
          name?: string | null
          star?: number | null
          user_id?: number
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
