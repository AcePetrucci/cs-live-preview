type MatchingPairChoice = {
  matching_pair_choice: {
    matching_pair_choice_a: string;
    matching_pair_choice_b: string;
    $: {
      [key in keyof MatchingPairChoice['matching_pair_choice']]: {
        "data-clsp": MatchingPairChoice['matching_pair_choice'][key]
      }
    };
  };
}

type MatchingDetractor = {
  matching_detractor: {
    matching_detractor_text: string;
    $: {
      [key in keyof MatchingDetractor['matching_detractor']]: {
        "data-clsp": MatchingDetractor['matching_detractor'][key]
      }
    };
  };
}

export type MatchingEntry = {
  matching_instruction: string;
  matching_points: number;
  matching_prompt: string;
  $: {
    [key in keyof MatchingEntry]: {
      "data-clsp": MatchingEntry[key]
    }
  };
}

export type MatchingPairsEntry = [MatchingPairChoice | MatchingDetractor];