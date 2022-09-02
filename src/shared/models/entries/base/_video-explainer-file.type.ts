import type { BaseEntry } from './base.type';

export type VideoExplainerFile = BaseEntry & {
  ACL: unknown[];
  content_type: string;
  created_by: string;
  file_size: string;
  filename: string;
  is_dir: boolean;
  parent_uid: string;
  publish_details: unknown[];
  tags: string[];
  url: string;
  $: {
    [key in keyof VideoExplainerFile]: {
      "data-clsp": VideoExplainerFile[key]
    }
  };
}