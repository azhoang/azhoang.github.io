import React from "react";
import { Reactions } from "../../../api/types/issueComment";

const reactions: Array<{
  key:
    | "heart"
    | "eyes"
    | "rocket"
    | "confused"
    | "laugh"
    | "hooray"
    | "+1"
    | "-1";
  emoji: string;
}> = [
  {
    key: "heart",
    emoji: "❤️",
  },
  {
    key: "+1",
    emoji: "👍",
  },
  {
    key: "eyes",
    emoji: "👀",
  },
  {
    key: "rocket",
    emoji: "🚀",
  },
  {
    key: "confused",
    emoji: "🤔",
  },
  {
    key: "laugh",
    emoji: "🤣",
  },
  {
    key: "hooray",
    emoji: "🍻",
  },
  {
    key: "-1",
    emoji: "👎",
  },
];
export default function BlogReaction(props: { id: any; reactions: Reactions }) {
  const renderReactionItem = (
    key:
      | "heart"
      | "eyes"
      | "rocket"
      | "confused"
      | "laugh"
      | "hooray"
      | "+1"
      | "-1",
    emoji: string,
    index: number
  ) => {
    if (props?.reactions && props.reactions[key] > 0) {
      return (
        <li className="me-1" key={`${props.id}-${index}`}>
          <span>{emoji}</span>
          <span>{props.reactions[key]}</span>
        </li>
      );
    }
    return <div key={`${props?.id}-${index}`} />;
  };
  return (
    <ul className="comment-box__footer">
      {reactions.map((item, index) =>
        renderReactionItem(item.key, item.emoji, index)
      )}
    </ul>
  );
}
