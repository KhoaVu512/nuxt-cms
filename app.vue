<template>
	<NuxtLayout>
		<NuxtLoadingIndicator :height="5"
													:duration="3000"
													:throttle="400" />
		<NuxtPage />
	</NuxtLayout>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import {
	initAccordions,
	initCarousels,
	initCollapses,
	initDials,
	initDismisses,
	initDrawers,
	initDropdowns,
	initModals,
	initPopovers,
	initTabs,
	initTooltips
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
	initAccordions()
	initCarousels()
	initCollapses()
	initDials()
	initDismisses()
	initDrawers()
	initDropdowns()
	initModals()
	initPopovers()
	initTabs()
	initTooltips()
})

</script>