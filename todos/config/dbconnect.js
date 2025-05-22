import {createClient} from '@supabase/supabase-js';
import dotenv from 'dotenv'


dotenv.config()
const url = process.env.SUPABASE_URL || 'https://bbscerbcigxbmdlqsynb.supabase.co';
const key = process.env.SUPABASE_SERVICE_KEY|| 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJic2NlcmJjaWd4Ym1kbHFzeW5iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzgwODc4OCwiZXhwIjoyMDYzMzg0Nzg4fQ.Jx6mQPwD4Lt3qDK7E0t1cmuHrnSm9jgxe-8swl_JcBM'; 
const supabase = createClient(url, key);
export default supabase;
