<script lang="ts">
	import * as icons from '$static/icons';

	let className: string = '';

	export let icon: keyof typeof icons;
	export let strokeWidth: number = 1.5;
	export { className as class };
</script>

<svelte:component this={icons[icon]} {strokeWidth} {className} />
