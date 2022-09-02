type ConceptWordChoice = {
  concept_word_choice: {
    concept_word_choice_answer: string;
    concept_word_choice_detractor: string;
    $: {
      [key in keyof ConceptWordChoice['concept_word_choice']]: {
        "data-clsp": ConceptWordChoice['concept_word_choice'][key]
      }
    };
  };
}

export type ConceptEntry = {
  concept_instruction: string;
  concept_points: number;
  concept_prompt: string;
  concept_stem: string;
  $: {
    [key in keyof ConceptEntry]: {
      "data-clsp": ConceptEntry[key]
    }
  };
}

export type ConceptWordsEntry = [ConceptWordChoice];