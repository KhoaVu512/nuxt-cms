import { serverSupabaseClient } from '#supabase/server'
import { Database } from '~~/database/types'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabaseClient<Database>(event)
  const { data: todos, error } = await supabase.from('todos').select('star')
  return todos
})
