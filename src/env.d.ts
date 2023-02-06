declare namespace NodeJS {
	interface ProcessEnv {
		readonly PUBLIC_SUPABASE_URL: string;
		readonly PUBLIC_SUPABASE_ANON_KEY: string;
	}
}
