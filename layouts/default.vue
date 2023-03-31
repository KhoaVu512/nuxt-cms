<script setup lang="ts">
import SliderBar from '~~/components/layout/Header.vue'


</script>

<template>
	<div class="grid grid-cols-12">
		<div class="col-span-2">
			<SliderBar />
		</div>

		<div class="col-span-10  mt-10 ml-10">
			<slot />
		</div>
	</div>
</template>