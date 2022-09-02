import type {
  BaseEntry,
  PassiveLearningEntry,
  MultipleChoiceEntry,
  MultipleChoiceChoicesEntry,
  CategorizationEntry,
  TrueFalseStatementEntry,
  ConceptEntry,
  ConceptWordsEntry,
  MatchingEntry,
  MatchingPairsEntry,
  OrderingEntry,
  OrderingEntriesEntry
} from './base';

export type ItemCombinedEntry = BaseEntry & {
  passive_learning?: PassiveLearningEntry,
  multiple_choice?: MultipleChoiceEntry,
  multiple_choice_choices?: MultipleChoiceChoicesEntry,
  categorization?: CategorizationEntry,
  true_false_statement?: TrueFalseStatementEntry,
  concept?: ConceptEntry,
  concept_words?: ConceptWordsEntry
  matching?: MatchingEntry,
  matching_pairs?: MatchingPairsEntry,
  ordering?: OrderingEntry,
  ordering_entries?: OrderingEntriesEntry,
  tags?: string[],
  $?: {
    [key in keyof ItemCombinedEntry]: {
      "data-clsp": ItemCombinedEntry[key]
    }
  };
  failed?: boolean,
};