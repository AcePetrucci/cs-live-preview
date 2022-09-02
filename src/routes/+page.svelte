<script lang="ts">
	import { goto } from '$app/navigation';

	import entries$ from '$stores/entriesStore';
</script>

<template>
	<h2 class="text-xl font-medium flex justify-center mb-8">
		{#if $entries$?.failed}
			No ContentStack
		{:else}
			Loading...
		{/if}
	</h2>

	{#if $entries$?.title}
		{goto('/live-preview')}
	{/if}
</template>
