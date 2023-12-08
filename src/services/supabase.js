import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vgvbpmdwinmcyxdihgbs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndmJwbWR3aW5tY3l4ZGloZ2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3Mzk2MjcsImV4cCI6MjAxNzMxNTYyN30.62-6jNJmVWVqHpXuhRMtgJtZI_X0QzPd0fF88B8WpBw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
