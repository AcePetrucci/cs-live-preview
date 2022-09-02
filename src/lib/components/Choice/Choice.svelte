<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';

	let className: string = '';

	export let choiceText: string = '';
	export let value: string = '';
	export let id: string = '';
	export let name: string = id;
	export let type: 'checkbox' | 'radio' = 'checkbox';
	export { className as class };

	const typeSwitch = (node: HTMLInputElement) => {
		node.type = type;
	};
</script>

<label for={`choice-${id}`}>
	<input
		use:typeSwitch
		class="hidden peer"
		id={`choice-${id}`}
		name={`choice-${name}`}
		bind:value
	/>

	<div
		class={`
			flex items-center gap-3 px-4 py-3 text-lg font-medium 
			text-blue-900 rounded-md cursor-pointer 
			bg-slate-200 hover:bg-slate-300 w-fit
			peer-checked:bg-green-300 peer-checked:text-green-800
			peer-checked:[&>div]:border-green-800
			peer-checked:[&>div>svg]:visible
			peer-checked:[&>div>svg]:stroke-green-800
			${className}
		`}
	>
		<div
			class="w-4 h-4 border-2 border-blue-900 rounded-sm translate-y-1p flex items-center justify-center"
		>
			<Icon icon="CheckIcon" strokeWidth={3} class="invisible" />
		</div>

		<span class="w-fit"> {choiceText} </span>
	</div>
</label>
