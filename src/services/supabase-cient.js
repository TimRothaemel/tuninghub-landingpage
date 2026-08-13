import { createClient } from '@supabase/supabase-js';
import { configDotenv } from 'dotenv';

configDotenv();

const supabaseUrl = process.env.supabase_url;
const supabaseAnonKey = process.env.supabase_anon_key;

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabaseClient;
console.log('Supabase client initialized with URL:', supabaseUrl);