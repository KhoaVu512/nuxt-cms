<template>
	<div class="pl-[32px] flex pt-[42px] ">
		<div class="flex-1">
			<div class=" text-[36px] leading-[46px] font-semibold">Invoices</div>
		</div>
		<div class="flex-none gap-2 mr-[32px]">
			<button type="button"
							class="text-gray-900 bg-white border border-blue-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Send Statements</button>
			<button type="button"
							class="text-gray-900 bg-white border border-blue-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Export</button>
			<button type="button"
							class="text-gray-900 bg-white border border-blue-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Import</button>

			<button type="button"
							class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">New Import</button>
		</div>

	</div>
	<div class="m-[32px]">

		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col"
								class="px-6 py-3">
							Number
						</th>
						<th scope="col"
								class="px-6 py-3">
							Ref
						</th>
						<th scope="col"
								class="px-6 py-3">
							To
						</th>
						<th scope="col"
								class="px-6 py-3">
							Date
						</th>
						<th scope="col"
								class="px-6 py-3">
							Due Date
						</th>
						<th scope="col"
								class="px-6 py-3">
							Paid
						</th>
						<th scope="col"
								class="px-6 py-3">
							Due
						</th>
						<th scope="col"
								class="px-6 py-3">
							Status
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-900">
						<th scope="row"
								class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							INV-0012
						</th>
						<td class="px-6 py-4">
							P/O CRM08-12
						</td>
						<td class="px-6 py-4">
							Marin bike club
						</td>
						<td class="px-6 py-4">
							25 Oct 2021
						</td>
						<td class="px-6 py-4">
							03 Nov 2021
						</td>
						<td class="px-6 py-4">
							0.00
						</td>
						<td class="px-6 py-4">
							234.00
						</td>	
						<td class="px-6 py-4">
							Awaiting Payment
						</td>
						
					</tr>
					<tr class="border-b bg-gray-50 dark:bg-gray-800">
						<th scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								INV-0012
							</th>
							<td class="px-6 py-4">
								P/O CRM08-12
							</td>
							<td class="px-6 py-4">
								Marin bike club
							</td>
							<td class="px-6 py-4">
								25 Oct 2021
							</td>
							<td class="px-6 py-4">
								03 Nov 2021
							</td>
							<td class="px-6 py-4">
								0.00
							</td>
							<td class="px-6 py-4">
								234.00
							</td>	
							<td class="px-6 py-4">
								Awaiting Payment
							</td>
					</tr>

				</tbody>
			</table>
		</div>


	</div>
</template>

<script setup lang="ts">
definePageMeta({
	colorMode: 'light',
	layout: 'default'
})

</script>