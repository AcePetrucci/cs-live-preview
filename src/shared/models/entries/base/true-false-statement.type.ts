export type TrueFalseStatementEntry = {
  tf_instruction: string;
  tf_is_true: boolean;
  tf_points: number;
  tf_prompt: string;
  tf_stem: string;
  $: {
    [key in keyof TrueFalseStatementEntry]: {
      "data-clsp": TrueFalseStatementEntry[key]
    }
  };
}