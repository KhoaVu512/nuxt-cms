<template>
	<div>
		<div class="flex items-center ">
			<SliderBar />
		</div>
	</div>
</template>

<script setup lang="ts">


import SliderBar from '~~/components/layout/SliderBar.vue'
import NavBar from '~~/components/layout/Navigation.vue'

const navigation = [
	{ name: 'about', href: '/notes', current: true },
	{ name: 'login', href: '/login', current: false },
	{ name: 'index', href: '/', current: false },
	{ name: 'Calendar', href: '#', current: false },
]

const user = useSupabaseUser()
const client = useSupabaseClient()

const { } = useFetch("/api/notes")
const _onSignOut = async () => {
	await client.auth.signOut()
	navigateTo('/')
}

const colorMode = useColorMode()
const themes = [
	'light',
	'dark',
]
</script>
