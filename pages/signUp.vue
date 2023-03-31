<template>
	<div class="grid grid-cols-10 h-screen">
		<div :style="{ backgroundImage: `url(${BackgroundUrl})` }"
				 class="col-span-4 grid grid-rows-5 p-8 bg-no-repeat background: #2020201F;">
      <nuxt-link to="/"
					class="row-start-1 flex text-light-500 text-3xl">
					<img src="../assests/img/logo.png" alt="#" class="w-[36px] h-[36px]">Rhombus
			</nuxt-link>
			<div class="row-start-5 text-light-500 font-semibold text-4xl">
				Multipurpose<br>
				tool to succeed<br>
				your business
			</div>
		</div>
		<div class="col-span-6 ">
			<div class="grid grid-rows-[200px,repeat(auto-fill,minmax(15%,100px)),300px] ">
				<div class="flex row-start-1 justify-end top-0 mt-8 pr-10">
					Don’t have an account?&nbsp;
					<NuxtLink to="signIn"
										class="text-blue-700">SignIn</NuxtLink>
				</div>
				<div class="flex row-start-2 justify-center">
					<div class="">
						<div class="text-[24px] mb-1 ml-1 mr-1">SignUp</div>
						<div>
							<form @submit.prevent="() => (signUp())"
										class="grid gap-2 min-w-100">
								<input type="email"
											 placeholder="Email address"
											 v-model="email"
											 class=" p-3 m-1 text-[14px] rounded-[8px] bg-charcoal-600 border-1">
								<div class="flex w-full">
									<input type=""
												 placeholder="First Name "
												 class=" p-3 m-1 text-[14px] rounded-[8px] bg-charcoal-600 border-1">
									<div class="w-5"></div>
									<input type=""
												 placeholder="Last Name"
												 class=" p-3 m-1 text-[14px] rounded-[8px] bg-charcoal-600 border-1">
								</div>

								<input type="password"
											 placeholder="Password"
											 v-model="password"
											 class=" p-3 m-1 text-[14px] rounded-[8px] bg-charcoal-600 border-1">

								<nuxt-link to="/forgot-password"
													 class="m-1 text-[14px] text-[#775DA6]">
									Forgot password?
								</nuxt-link>
								<button type="submit"
												class="m-1 p-3 text-[14px] text-white rounded-[8px] bg-[#775DA6] border-1 ">
									Sign Up
								</button>
							</form>
							<div class="divider ">or</div>
							<div class="flex pt-2 ">
								<button class="btn  p-1 flex-grow btn-outline btn-neutral-focus border-1 border-[#DCDCDC] text-[#000000] hover:none  place-items-center">
									<img src="~~/assests/img/ic_googlelogo.svg"
											 alt="">&nbsp;
									Google</button>
								<div class="w-6"></div>
								<button class="btn p-1 flex-grow btn-outline btn-neutral-focus border-1 border-[#DCDCDC]  text-[#000000] hover:none    place-items-center">
									<img src="~~/assests/img/ic_fblogo.svg"
											 alt="">&nbsp;Google</button>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="grid  text-[14px]   text-[#898989]  mt-30 justify-center items-end">Protected by reCAPTCHA and subject to the Rhombus <nuxt-link to="#"
									 class="text-[#775DA6] "> &nbsp;Privacy Policy and Terms of Service.</nuxt-link></div>
		</div>

	</div>
</template>

<script setup lang="ts">
import BackgroundUrl from '../assests/img/ImageSignIn.png'


definePageMeta({
	colorMode: 'light',
	layout: 'custom',
	middleware: ['guest']
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
