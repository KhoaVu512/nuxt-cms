<template>
	<div class="pl-[32px] flex pt-[42px] ">
		<div class="flex-1">
			<div class=" text-[36px] leading-[46px] font-semibold">Invoices</div>
		</div>
		<div class="flex-none gap-2 mr-[32px]">
			<button
				type="button"
				class="text-gray-900 bg-white border border-blue-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
			>Send Statements</button>
			<button
				type="button"
				class="text-gray-900 bg-white border border-blue-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
			>Export</button>
			<button
				type="button"
				class="text-gray-900 bg-white border border-blue-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
			>Import</button>

			<button
				type="button"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>New Import</button>
		</div>

	</div>
	<div class="m-[32px]">

		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th
							scope="col"
							class="px-6 py-3"
						>
							Id
						</th>
						<th
							scope="col"
							class="px-6 py-3"
						>
							Name
						</th>
						<th
							scope="col"
							class="px-6 py-3"
						>
							img_path
						</th>
						<th
							scope="col"
							class="px-6 py-3"
						>
							message
						</th>
						<th
							scope="col"
							class="px-6 py-3"
						>
							star
						</th>
						<th
							scope="col"
							class="px-6 py-3"
						>
							edit
						</th>
						<th
							scope="col"
							class="px-6 py-3"
						>
							delete
						</th>

					</tr>
				</thead>
				<tbody>
					<tr
						class="bg-white border-b dark:bg-gray-900"
						v-for="item in todos"
					>
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{{ item.id }}
						</th>
						<td class="px-6 py-4">
							{{ item.name }}
						</td>
						<td class="px-6 py-4 w-10">
							<img
								:src="`${item.img_path}`"
								alt=""
							>
						</td>
						<td class="px-6 py-4 truncate max-w-56 overflow-x-scroll whitespace-wrap">
							{{ item.comment }}
						</td>
						<td class="px-6 py-4">
							{{ item.star }}
						</td>
						<td class="px-6 py-4">


							<div>
								<button
									data-modal-target="popup-modal"
									data-modal-toggle="popup-modal"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									type="button"
								>
									edit
								</button>
								<div
									id="popup-modal"
									tabindex="-1"
									class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
								>
									<div class="relative w-full h-full max-w-md md:h-auto">
										<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
											<button
												type="button"
												class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
												data-modal-hide="popup-modal"
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
														d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span class="sr-only">Close modal</span>
											</button>
											<div class="p-6 text-center">


												<form @submit.prevent="editComment(item.id)">
													<input
														type="text"
														:placeholder="`${item.comment}`"
														:loading="loading"
														v-model="comment"
														v-on:input="`${comment}`"
														class=" bg-gray-50 mt-6 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														required
													>
													<input
														type="text"
														:placeholder="`${item.star}`"
														:loading="loading"
														v-on:input="`${star}`"
														class=" bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														required
													>
													<button
														data-modal-hide="popup-modal"
														type="submit"
														class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
													>
														Yes, I'm sure
													</button>
													<button
														data-modal-hide="popup-modal"
														type="button"
														class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
													>No, cancel</button>
												</form>
											</div>
										</div>
									</div>
								</div>

							</div>

						</td>
						<td class="px-6 py-4">

							<button
								class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								@click="deleteOneComment(item.id)"
							>
								delete</button>
						</td>


					</tr>


				</tbody>
			</table>
		</div>



	</div>
	<div class="m-[32px] grid grid-cols-3">
		<div
			v-for="item in todos"
			:key="item.user_id ?? '1'"
		>
			<div>
				<div
					class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4">

					<a href="#">
						<img
							class="rounded-t-lg"
							:src="`${item.img_path}`"
							alt=""
						/>
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ item.comment }}</p>
						<star />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { comment } from 'postcss'
import { Database } from '~~/database/types'
import star from './components/star.vue'
import modal from './components/modal.vue'
import { LegacyIconifyThemes } from '@iconify/types'


definePageMeta({
	colorMode: 'light',
	layout: 'default',
	middleware: ['auth']
})
const client = useSupabaseClient<Database>()
const user = useSupabaseUser()
const comment = ref('')
const star1 = ref('')

const loading = ref(false)
console.log(user.value)
useFetch('/api/test', {
	headers: useRequestHeaders(['cookie']) as any
}).then(res => {
	console.log(res.data.value)
})
const { data: todos } = await useFetch('/api/test', {
})

const deleteOneComment = async (id: number) => {
	const { data, error } = await client
		.from('todos')
		.delete()
		.eq('id', id)

	todos.value = todos.value?.filter(val => val.id !== id) ?? []
}
const editComment = async (id: number) => {
	const updates = {
		comment: comment.value
	}
	const { data, error } = await client
		.from('todos')
		.update(updates)
		.eq('id', id)

	console.log(id)
	console.log(updates)
}

</script>