/* eslint-disable @typescript-eslint/ban-ts-comment */

import contentstack from 'contentstack';
import ContentstackLivePreview from '@contentstack/live-preview-utils';

import {
  PUBLIC_CS_API_HOST,
  PUBLIC_CS_API_KEY,
  PUBLIC_CS_DELIVERY_TOKEN,
  PUBLIC_CS_MANAGEMENT_TOKEN,
  PUBLIC_CS_ENV,
} from '$env/static/public';

import type { GetEntry } from './models';

const Stack = contentstack.Stack({
  api_key: PUBLIC_CS_API_KEY,
  delivery_token: PUBLIC_CS_DELIVERY_TOKEN,
  environment: PUBLIC_CS_ENV,
  live_preview: {
    management_token: PUBLIC_CS_MANAGEMENT_TOKEN,
    enable: true,
    host: PUBLIC_CS_API_HOST,
  },
});

Stack.setHost(PUBLIC_CS_API_HOST);

ContentstackLivePreview.init({
  //@ts-ignore
  stackSdk: Stack,
  stackDetails: {
    apiKey: PUBLIC_CS_API_KEY,
    environment: PUBLIC_CS_ENV
  },
  enable: true,
  ssr: false,
});

export const getEntry = ({
  contentTypeUid,
  jsonRtePath,
  referenceFieldPath
}: GetEntry) => {
  return new Promise((resolve, reject) => {
    const query = Stack.ContentType(contentTypeUid).Query();

    if (referenceFieldPath) query.includeReference(referenceFieldPath);

    query
      .includeOwner()
      .toJSON()
      .find()
      .then(
        res => {
          jsonRtePath && contentstack.Utils.jsonToHTML({
            entry: res,
            paths: jsonRtePath,
          });

          resolve(res);
        },
        err => reject(err),
      );
  });
};

export const { onEntryChange } = ContentstackLivePreview;