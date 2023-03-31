
<script setup lang="ts">
definePageMeta({
	middleware: ['auth']
})
const { data: notes } = await useFetch('/api/notes', {
})
const user = useSupabaseUser()

const client = useSupabaseClient()

const { } = useFetch("/api/notes")
const _onSignOut = async () => {
	await client.auth.signOut()
	navigateTo('/')
}

</script>
<template>
	<button v-if="user"
					@click="_onSignOut"
					class="px-2 py-1 text-sm font-medium rounded hover:bg-charcoal-600">
		Log out
	</button>
	<div>
		<p class="mt-8 mb-16">Hello {{ user?.email }}</p>

		<h1 class="text-3xl font-semibold">Your Notes</h1>

		<div class="flex flex-col gap-4 mt-4">
			<div v-for="note in notes"
					 :key="note.id"
					 class="p-8 bg-gray-700 rounded">
				{{ note.content }}
			</div>
		</div>
	</div>
</template>