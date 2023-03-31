<template>
	<div class="m-[53px]">
		<form @submit.prevent="addNewRows">
			<input
				type="text"
				v-model="name"
				:loading="loading"
				class="bg-blue-200"
				v-on:input="`${name}`"
				placeholder="name"
			>
			<input
				type="text"
				v-model="id"
				:loading="loading"
				class="bg-blue-200"
				v-on:input="`${id}`"
				placeholder="id"
			>
			<input
				type="text"
				v-model="star"
				:loading="loading"
				class="bg-blue-200"
				v-on:input="`${star}`"
				placeholder="star"
			>
			<input
				type="text"
				v-model="comment"
				:loading="loading"
				class="bg-blue-200"
				v-on:input="`${comment}`"
				placeholder="comment"
			>
			<button type="submit">submit</button>
		</form>

		<p>{{ name }}</p>
	</div>
</template>

<script setup lang="ts">


const id = ref('')
const user_id = ref('')
const name = ref('')
const img_path = ref('')
const star = ref('')
const comment = ref('')
const loading = ref(false)

const client = useSupabaseClient()
const user = useSupabaseUser()
const { data: todos } = await useFetch('/api/test')


const addNewRows = async () => {
	loading.value = true
	type Prams = { name: string, comment: string }
	const params = { name: name.value, comment: comment.value }
	const { data } = await client.from('todos')
		.select('id, name, comment')
		.single()
	name.value.push(data)
	comment.value.push(data)
	loading.value = false
}


</script>