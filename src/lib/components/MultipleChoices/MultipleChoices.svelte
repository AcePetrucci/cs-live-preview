<script lang="ts">
	import Choice from '../Choice/Choice.svelte';
	import type ChoiceProps from '../Choice/_Choice.props';

	const gridCols = (choices: number) =>
		choices > 12 ? 'grid-cols-3' : choices >= 6 ? 'grid-cols-2' : 'grid-cols-1';

	export let choices: ChoiceProps[];
	export let type: 'checkbox' | 'radio' = 'checkbox';
</script>

<div class={`grid gap-2 ${gridCols(choices.length)} [&>label>div]:w-full`}>
	{#each choices as choice}
		<Choice
			choiceText={choice.choiceText}
			name={choice.name}
			id={choice.id}
			value={choice.value}
			{type}
		/>
	{/each}
</div>
