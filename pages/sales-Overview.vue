<template>
	<div class="pl-[32px] flex pt-[32px] ">
		<div class="flex-1">

			<div class=" text-[36px] leading-[46px] font-semibold">Sales Overview</div>
		</div>
		<div class="flex-none gap-2 mr-[32px]">

			<button type="button" class="text-gray-900 bg-white border border-blue-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Send Statements</button>

			<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">import</button>
		</div>
	</div>
	<div class="h-[201px]  mt-[54px] ml-[32px] mr-[32px] bg-light-600  rounded-md">
		<div class="flex gap-[32px]">
			<div class="flex-1">
				<div class="mt-[32px] ml-[32px] text-[24px] leading-[29px]">Invoices</div>
			</div>
			<div class="flex-none">
				<div class="mt-[30px] mr-[32px] text-[14px] leading-[29px] text-[#775DA6]">see all</div>
			</div>
		</div>
		<div class="grid grid-cols-4">
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Draft (2)</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">1,103.00</div>
				<div></div>
			</div>
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Awaiting Payment (9)</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">9,133.53</div>
				<div></div>
			</div>
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Awaiting Approval</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">-</div>
				<div></div>
			</div>
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Overdue (5)</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">6,955.21</div>
				<div></div>
			</div>

		</div>

	</div>
	<div class="h-[201px]  mt-[54px] ml-[32px] mr-[32px] bg-light-600  rounded-md">
		<div class="flex gap-[32px]">
			<div class="flex-1">
				<div class="mt-[32px] ml-[32px] text-[24px] leading-[29px]">Quotes</div>
			</div>
			<div class="flex-none">
				<div class="mt-[30px] mr-[32px] text-[14px] leading-[29px] text-[#775DA6]">see all</div>
			</div>
		</div>
		<div class="grid grid-cols-4">
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Draft (1)</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">198.00</div>
				<div></div>
			</div>
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Sent (1)</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">4,450.00</div>
				<div></div>
			</div>
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Accepted (1)</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">5,311.10 </div>
				<div></div>
			</div>
			<div class="ml-[32px] mt-7">
				<div class="text-[#898989] text-[14px leading-[17px]]">Expired</div>
				<div class="mt-[12px] text-[32px] font-semibold leading-[39px]">-</div>
				<div></div>
			</div>

		</div>

	</div>
	<div class="h-[314px]  mt-[54px] ml-[32px] mb-[32px] mr-[32px] rounded-md">
		<div class="grid grid-cols-2 gap-4">
			<div class="h-[314px] rounded-2xl">
				<div>Money Comming</div>
				<barChart class="h-[212px]"/>
			</div>

			<div class="h-[314px] rounded-2xl">
				<div class="flex gap-[32px]">
					<div class="flex-1">
						<div class="mt-[32px] ml-[32px] text-[24px] leading-[29px]">Customers owing the most</div>
					</div>
					<div class="flex-none">
						<div class="mt-[30px] mr-[32px] text-[14px] leading-[29px] text-[#775DA6]">see all</div>
					</div>
				</div>
				<div>
					<div class="overflow-x-auto mt-4 mr-4 ml-[32px]">
						<table class="table table-compact w-full">

							<tbody>
								<!-- row 1 -->
								<tr>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>

									<td>12/16/2020</td>

								</tr>
								<tr>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>

									<td>12/16/2020</td>

								</tr>
								<tr>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>

									<td>12/16/2020</td>

								</tr>
								<!-- row 2 -->

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import barChart from '~~/pages/Chart/barChart.vue';

definePageMeta({
	layout: 'default'
})


</script>