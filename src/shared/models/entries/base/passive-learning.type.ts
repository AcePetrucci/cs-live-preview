import type { VideoExplainerFile } from './_video-explainer-file.type';

export type PassiveLearningEntry = {
  passive_content_block: string;
  video_explainer_closed_caption_file: unknown;
  video_explainer_file: VideoExplainerFile;
  video_explainer_prompt: string;
  video_explainer_text_caption: string;
  $: {
    [key in keyof PassiveLearningEntry]: {
      "data-clsp": PassiveLearningEntry[key]
    }
  };
}