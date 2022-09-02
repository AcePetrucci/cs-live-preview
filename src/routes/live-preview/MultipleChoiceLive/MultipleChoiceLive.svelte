<script lang="ts">
	import { v5 as uuid } from 'uuid';
	import { PUBLIC_UUID_NAMESPACE } from '$env/static/public';

	import MultipleChoices from '$lib/components/MultipleChoices/MultipleChoices.svelte';
	import type MultipleChoicesProps from '$lib/components/MultipleChoices/_MultipleChoices.props';

	import type {
		MultipleChoiceEntry,
		MultipleChoiceChoicesEntry
	} from '$models/entries/base/multiple-choice.type';

	export let choices: {
		multiple_choice?: MultipleChoiceEntry;
		multiple_choice_choices?: MultipleChoiceChoicesEntry;
	};

	let multipleChoices: MultipleChoicesProps['choices'];

	$: {
		if (!choices.multiple_choice) break $;
		if (!choices.multiple_choice_choices) break $;

		const choicesUUID = uuid(choices.multiple_choice?.mc_stem, PUBLIC_UUID_NAMESPACE);

		multipleChoices = choices.multiple_choice_choices.map((choice, i) => ({
			choiceText:
				choice.mc_choice_answer?.mc_choice_answer_text ||
				choice.mc_choice_detractor?.mc_choice_detractor_text,
			value: (
				choice.mc_choice_answer?.mc_choice_answer_points ||
				choice.mc_choice_detractor?.mc_choice_detractor_points
			)?.toString(),
			name: `choices-${choicesUUID}`,
			id: `choices-${choicesUUID}-${i}`
		}));
	}
</script>

<template>
	{#if multipleChoices?.length}
		<h1 class="text-3xl font-semibold flex justify-center mb-6 tracking-wide">
			Multiple Choices Entry
		</h1>

		<h3
			class="text-lg font-semibold flex flex-wrap mb-8 tracking-wide"
			{...choices.multiple_choice?.$.mc_prompt}
		>
			{choices.multiple_choice?.mc_prompt}:

			<span class="font-medium text-gray-500">
				{@html choices.multiple_choice?.mc_stem}
			</span>
		</h3>

		<MultipleChoices choices={multipleChoices} type="radio" />
	{/if}
</template>
