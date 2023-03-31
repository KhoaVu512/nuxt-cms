import { serverSupabaseUser } from '#supabase/server'

const data = [
  { id: 0, email: 'minhkhoa1121@gmail.com', content: 'My note 1' },
  { id: 1, email: 'khoa.vm.512@gmail.com', content: 'My note 1' },
  {
    id: 2,
    email: 'minhkhoa1121@gmail.com',
    content: 'Do not share with not matt',
  },
  { id: 3, email: 'khoa.vm.512@gmail.com', content: 'Account #2' },
  { id: 4, email: 'khoa.vm.512@gmail.com', content: 'mores tuff' },
]

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  return data.filter((note) => note.email === user.email)
})

