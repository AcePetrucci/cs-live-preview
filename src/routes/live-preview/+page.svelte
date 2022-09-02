<script lang="ts">
	import entries$ from '$stores/entriesStore';

	import MultipleChoiceLive from './MultipleChoiceLive/MultipleChoiceLive.svelte';
</script>

<template>
	{#if $entries$?.multiple_choice}
		<MultipleChoiceLive
			choices={{
				multiple_choice: $entries$.multiple_choice,
				multiple_choice_choices: $entries$.multiple_choice_choices
			}}
		/>
	{/if}
</template>
