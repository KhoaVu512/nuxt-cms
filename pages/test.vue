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
							User_id
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

					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-900">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							1
						</th>
						<td class="px-6 py-4">
							1
						</td>
						<td class="px-6 py-4">
							img.png
						</td>
						<td class="px-6 py-4">
							hello
						</td>
						<td class="px-6 py-4">
							5
						</td>


					</tr>
					<tr class="border-b bg-gray-50 dark:bg-gray-800">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							1
						</th>
						<td class="px-6 py-4">
							1
						</td>
						<td class="px-6 py-4">
							img.png
						</td>
						<td class="px-6 py-4">
							kokoko
						</td>
						<td class="px-6 py-4">
							5
						</td>

					</tr>

				</tbody>
			</table>
		</div>


	</div>
	<div class="m-[32px] grid grid-cols-3">


		
		<div v-for="item in todos" :key="item.user_id">
			<div>
				<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4">

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
import star from './components/star.vue'

definePageMeta({
	colorMode: 'light',
	layout: 'default',
	middleware: ['auth']
})

useFetch('/api/test', {
	headers: useRequestHeaders(['cookie']) as any
}).then(res => {
	console.log(res.data.value)
})
const { data: todos } = await useFetch('/api/test', {
})


</script>