import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Resolve env values safely with fallbacks for runtime (no bundler) environments:
// 1. Vite injects `import.meta.env` at build time.
// 2. Allow runtime overrides via `window.VITE_SUPABASE_URL` / `window.VITE_SUPABASE_ANON_KEY`.
// 3. Allow meta tags: <meta name="supabase-url" content="..."> and <meta name="supabase-anon-key" content="...">
const supabaseUrl = import.meta?.env?.VITE_SUPABASE_URL
	?? window?.VITE_SUPABASE_URL
	?? document.querySelector('meta[name="supabase-url"]')?.content
	?? null;

const supabaseAnonKey = import.meta?.env?.VITE_SUPABASE_ANON_KEY
	?? window?.VITE_SUPABASE_ANON_KEY
	?? document.querySelector('meta[name="supabase-anon-key"]')?.content
	?? null;

let supabaseClient = null;
if (supabaseUrl && supabaseAnonKey) {
	supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
	console.log('Supabase client initialized with URL:', supabaseUrl);
} else {
	console.warn('Supabase client not initialized. Missing URL or ANON key.');
}

export default supabaseClient;