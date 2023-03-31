import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabaseClient(event)
  const { data: todos, error } = await supabase.from('todos').select()
  console.log(todos)
  return todos

})
