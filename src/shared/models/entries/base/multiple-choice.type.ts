import type { EitherOrBoth } from '../../either.type';

type ChoiceAnswer = {
  mc_choice_answer: {
    mc_choice_answer_points: number;
    mc_choice_answer_text: string;
    $: {
      [key in keyof ChoiceAnswer['mc_choice_answer']]: {
        "data-clsp": ChoiceAnswer['mc_choice_answer'][key]
      }
    };
  };
}

type ChoiceDetractor = {
  mc_choice_detractor: {
    mc_choice_detractor_points: number;
    mc_choice_detractor_text: string;
    $: {
      [key in keyof ChoiceDetractor['mc_choice_detractor']]: {
        "data-clsp": ChoiceDetractor['mc_choice_detractor'][key]
      }
    };
  };
}

export type MultipleChoiceEntry = {
  mc_instruction: string;
  mc_prompt: string;
  mc_stem: string;
  $: {
    [key in keyof MultipleChoiceEntry]: {
      "data-clsp": MultipleChoiceEntry[key]
    }
  };
}

export type MultipleChoiceChoicesEntry = EitherOrBoth<ChoiceAnswer, ChoiceDetractor>[];