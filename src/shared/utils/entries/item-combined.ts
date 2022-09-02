import { addEditableTags } from '@contentstack/utils';
import { getEntry } from '../content-stack-sdk';

import type { ItemCombinedEntry } from '../../models/entries';

export const getItemCombinedEntry = async () => {
  const response = (await getEntry({
    contentTypeUid: 'item',
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  })) as [[ItemCombinedEntry]];

  const itemCombinedEntry = response[0][0];

  addEditableTags(itemCombinedEntry, 'item', true);

  return itemCombinedEntry;
}