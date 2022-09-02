<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Choice from '$lib/components/Choice/Choice.svelte';
	import MultipleChoices from '$lib/components/MultipleChoices/MultipleChoices.svelte';

	import { choiceMock } from './_Choices.mock';
	import { fewMultipleChoicesMock, manyMultipleChoicesMock } from './_MultipleChoices.mock';
</script>

<Meta
	title="Choices"
	argTypes={{
		type: {
			options: ['checkbox', 'radio'],
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args id="ChoiceTemplate">
	<Choice {...args} />
</Template>

<Template let:args id="MultipleChoicesTemplate">
	<MultipleChoices {...args} />
</Template>

<Story id="ChoiceStory" name="Choice" template="ChoiceTemplate" args={choiceMock} />

<Story
	id="FewMultipleChoicesStory"
	name="Few Multiple Choices"
	template="MultipleChoicesTemplate"
	args={fewMultipleChoicesMock}
/>

<Story
	id="ManyMultipleChoicesStory"
	name="Many Multiple Choices"
	template="MultipleChoicesTemplate"
	args={manyMultipleChoicesMock}
/>
