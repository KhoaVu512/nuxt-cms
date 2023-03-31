<template>
	<div>
	<canvas id="myChart"></canvas>
	</div>
</template>

<script setup lang="ts">
import Chart from 'chart.js/auto'
import { getRelativePosition } from 'chart.js/helpers'

const name = ref('barChart')
const props = ref(String)
onMounted(() => {
	const ctx = document.getElementById('myChart')

	const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Older', 'Jan', 'Feb', 'Mar', 'Apr', 'Future'],
			datasets: [{
				label: '',
				data: [0, 19, 3, 5, 2, 3],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	})
})

</script>