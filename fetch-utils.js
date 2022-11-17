const SUPABASE_URL = 'https://uuxnounuxbgphldtwpld.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1eG5vdW51eGJncGhsZHR3cGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjksImV4cCI6MTk4MzY4NDA2OX0.X0has-XP8I6mpbJtyM-bfmgJBZ7Iy0neL2xNIHEyxJc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchCars() {
    const response = await client.from('cars').select('*').order('make').limit(5);
    return response.data;
}

export async function fetchMonies() {
    const response = await client.from('money').select('*').limit(5);
    return response.data;
}

export async function fetchNames() {
    const response = await client.from('names').select('*').limit(5);
    return response.data;
}

export async function fetchStreets() {
    const response = await client.from('streets').select('*').limit(5);
    return response.data;
}
