<template>
	<form action="">
		<input type="text">
	</form>
	
</template>

<script setup lang="ts">

definePageMeta({
	middleware: ['auth'],
	colorMode: 'light'
})
const colorMode = useColorMode()

const { auth } = useSupabaseClient()
auth.onAuthStateChange((state) => {
	console.log(state)
})

const themes = [
	'light',
	'dark',
]






</script>