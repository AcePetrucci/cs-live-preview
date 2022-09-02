<script>
	import '@contentstack/live-preview-utils/dist/main.css';
	import '../app.css';

	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	import entries$, { useEntry } from '$stores/entriesStore';
	import { onEntryChange } from '$utils/index';

	const { fetchEntry } = useEntry();

	$: $navigating && fetchEntry();

	onMount(() => {
		onEntryChange(fetchEntry);
	});
</script>

<main>
	<section class="p-16 xl:p-12 lg:p-8">
		<h1 class="text-5xl flex justify-center mb-12 tracking-wider">
			{#if $entries$?.title}
				<span {...$entries$.$?.title}>
					{$entries$.title}
				</span>
			{:else}
				ContentStack Live Preview
			{/if}
		</h1>

		<slot />
	</section>
</main>
