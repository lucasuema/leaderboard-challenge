import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://vbcbcfraqybzlywloqzv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiY2JjZnJhcXliemx5d2xvcXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA4NjQ2NzIsImV4cCI6MTk3NjQ0MDY3Mn0.rl8ergc2w5FonQbgjkwvMx0dqQ_afS3I8VRvXBHk-lg')