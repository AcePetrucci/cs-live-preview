export type CategorizationEntry = {
  cat_answer: string;
  cat_answer_points: number;
  cat_detractor: string;
  cat_detractor_points: number;
  cat_instructions: string;
  cat_prompt: string;
  cat_stem: string;
  $: {
    [key in keyof CategorizationEntry]: {
      "data-clsp": CategorizationEntry[key]
    }
  };
}