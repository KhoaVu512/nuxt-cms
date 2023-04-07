<template>
	<form
		class="m-[53px]"
		@submit.prevent="_onAddNewRows"
	>
		<div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
			<div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
				<label
					for="comment"
					class="sr-only"
				>Your comment</label>
				<textarea
					v-model="comment"
					:loading="loading"
					v-on:input="`${comment}`"
					id="comment"
					rows="4"
					class="w-full rounded pl-[5px] pt-[5px] p px-0 text-sm text-gray-900 bg-white border-1 border-neutral-500	 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
					placeholder="Write a comment..."
					required
				></textarea>
				<input
					type="text"
					class="flex w-[100px] rounded pl-[5px] border-1 border-neutral-500"
					row="1"
					placeholder="name"
					v-model="name"
					:loading="loading"
					v-on:input="`${name}`"
				>
				<input
					type="number"
					class="flex mt-[5px] w-[100px] rounded pl-[5px] border-1 border-neutral-500"
					row="1"
					placeholder="star"
					v-model="star"
					:loading="loading"
					v-on:input="`${star}`"
				>
				<starRatting class="flex" />
			</div>
			<div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
				<button
					type="submit"
					class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
				>
					Post comment
				</button>
				<div class="flex pl-0 space-x-1 sm:pl-2">
					<button
						type="button"
						class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
					>
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Attach file</span>
					</button>
					<button
						type="button"
						class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
					>
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Set location</span>
					</button>
					<button
						type="button"
						class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
					>
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Upload image</span>
					</button>

				</div>
			</div>
		</div>
	</form>
	<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a
			href="#"
			class="text-blue-600 dark:text-blue-500 hover:underline"
		>Community Guidelines</a>.</p>

	<form @submit.prevent="_onUploadFile">
		<input
			type="file"
			id="myFile"
			v-on:change="_onChangeFile"
			name="filename"
		>
		<input type="submit">
	</form>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { Database } from '~~/database/types'
import starRatting from '~~/pages/components/star-ratting.vue'

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

async function _onAddNewRows(event: Event) {
	loading.value = true
	try {
		const { data, error } = await client.from('todos')
			.upsert({ name: name.value, comment: comment.value, star: parseInt(star.value) })
			.select('id, name, comment,star')
			.single()


		if (data) {
			name.value += data.name
			comment.value += data.comment
			name.value = comment.value = star.value = ''
			event.preventDefault()

		} else if (error) {
			alert(error.message)
		}

	} catch { }

	loading.value = false
}

function _onChangeFile(e: Event) {
	const target = e.target as HTMLInputElement
	const files = target.files
	img_path.value = files?.item(0)?.path ?? ''
}

async function _onUploadFile() {
	console.log('LOGGER', user.value?.id)
	const storagePath = (user.value?.id ?? "public") + `/${uuidv4()}.png`
	const { data, error } = await client.storage.from('reviews').upload(storagePath, img_path.value, { upsert: false, cacheControl: '3600', contentType: 'image/png' })
	if (data) {
		console.log(data)
	} else {
		alert(JSON.stringify(error))
	}
}

</script>