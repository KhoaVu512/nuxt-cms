export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  navigateTo(user.value ? '/' : '/signIn')
})
