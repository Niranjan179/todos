import {createClient} from '@supabase/supabase-js';
import dotenv from 'dotenv'


dotenv.config()
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY; 
const supabase = createClient(url, key);
export default supabase;
