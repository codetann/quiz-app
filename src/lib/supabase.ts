import { createClient } from "@supabase/supabase-js";

type Config = {
  url: string;
  key: string;
};

const config: Config = {
  url: import.meta.env.VITE_SUPABASE_URL,
  key: import.meta.env.VITE_SUPABASE_KEY,
};

export const supabase = createClient(config.url, config.key);
