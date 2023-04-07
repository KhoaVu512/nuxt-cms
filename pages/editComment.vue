<template>
	<div class="m-[53px]">
		<form @submit.prevent="addNewRows">


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
import { Database } from '~~/database/types'

const id = ref('')
const user_id = ref('')
const name = ref('')
const img_path = ref('')
const star = ref('')
const comment = ref('')
const loading = ref(false)

const client = useSupabaseClient<Database>()
const user = useSupabaseUser()
const { data: todos } = await useFetch('/api/test')
type TodoUpdate = Database['public']['Tables']['todos']['Update']

const editComment = async (todo: TodoUpdate, isCompleted: boolean) => {
	try {
		// const { error } = await client.from('todos')
		// 	.update({  })
		// 	.match('id')
		// 	.single()
		// if (error) {
		// 	alert(error.message)
		// 	console.error('There was an error updating', error)
		// 	return
		// }

		console.log('Updated', todo.id)
	} catch (err) {
		alert('Error')
		console.error('Unknown problem updating record', err)
	}
}




</script>