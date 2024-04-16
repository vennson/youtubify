// // Initialize the JS client
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// // Create a function to handle inserts
// const handleInserts = (payload) => {
//   console.log('Change received!', payload)
// }

// // Listen to inserts
// supabase
//   .channel('todos')
//   .on(
//     'postgres_changes',
//     { event: 'INSERT', schema: 'public', table: 'todos' },
//     handleInserts,
//   )
//   .subscribe()
