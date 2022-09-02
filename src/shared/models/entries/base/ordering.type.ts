type Ordering = {
  ordering_entry: {
    ordering_entry_order: number;
    ordering_entry_text: string;
    $: {
      [key in keyof Ordering['ordering_entry']]: {
        "data-clsp": Ordering['ordering_entry'][key]
      }
    };
  };
}

export type OrderingEntry = {
  ordering_instruction: string;
  ordering_prompt: string;
  ordering_stem: string;
  $: {
    [key in keyof OrderingEntry]: {
      "data-clsp": OrderingEntry[key]
    }
  };
}

export type OrderingEntriesEntry = [Ordering];