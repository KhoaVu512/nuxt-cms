<template>
	<div class="grid grid-cols-10 h-screen">
		<div :style="{ backgroundImage: `url(${BackgroundUrl})` }"
				 class="col-span-4 grid grid-rows-5 p-8 bg-no-repeat background: #2020201F;">
			<NuxtLink to="/"
								class="row-start-1 text-light-500 text-3xl">
				Rhombus
			</NuxtLink>
			<div class="row-start-5 text-light-500 font-semibold text-4xl">
				Multipurpose<br>
				tool to succeed<br>
				your business
			</div>
		</div>
		<div class="col-span-6 ">
			<div class="grid grid-rows-[200px,repeat(auto-fill,minmax(15%,100px)),300px] ">
				
				<div class="flex row-start-2 justify-center">
						<div class="">
							<div class="text-[24px] mb-1 ml-1 mr-1">New Password</div>
							<div class="mt-1 mb-1 ml-1 text-[#5A5A5A]">Please create a new password that you don’t use <br> on any other site.</div>
							<div>
								<form @submit.prevent="() => (login())"
											class="grid gap-2 min-w-100">
									<input type="password"
												 placeholder="Password"
												 v-model="password"
												 class=" p-3 m-1 text-[14px] rounded-[8px] bg-charcoal-600 border-1">	<input type="password"
												 placeholder="Confirm password"
												 v-model="password"
												 class=" p-3 m-1 text-[14px] rounded-[8px] bg-charcoal-600 border-1">

								
									
									<button type="submit"
													class="m-1 p-3 text-[14px] text-white rounded-[8px] bg-[#775DA6] border-1 ">
										Confirm
									</button>
								</form>
								<div class="flex row-start-1 justify-center top-0 mt-20 ">
						Don’t have an account?&nbsp;
						<NuxtLink to="signIn"
											class="text-blue-700">Sign In</NuxtLink>
					</div>
								
							</div>

						</div>

					</div>

			</div>
			<!-- <span class="grid  text-[14px]   text-[#898989]  mb-4 justify-center">Protected by reCAPTCHA and subject to the Rhombus <nuxt-link to=""
									 class="text-[#775DA6] "> &nbsp;Privacy Policy and Terms of Service.</nuxt-link></span> -->

		</div>


	</div>
</template>


<script setup lang="ts">
import BackgroundUrl from '~/assests/img/ImageSignIn.png'


definePageMeta({
	colorMode: 'light',
	layout: 'custom',
})


const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()
const signUp = async () => {
	const { data, error } = await client.auth.signUp({
		email: email.value,
		password: password.value
	})
	console.log('user', data)
	console.log('error', error)
}
const login = async () => {
	const { data, error } = await client.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	console.log('user', data)
	console.log('error', error)
}
const user = useSupabaseUser()
onMounted(() => {
	watchEffect(() => {
		if (user.value) {
			navigateTo('/notes')
		}
	})
})
</script>


<style></style>