import React from 'react';
import { cn } from '@/lib/utils';

export type RichTextType = {
  annotations: Annotations; // Adjust this for specific annotation properties
  plain_text: string;
  href: string | null;
};

type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type RichTextProps = React.HTMLAttributes<HTMLSpanElement> & string;

export default function RichText({ className, text }: { className: RichTextProps; text: RichTextType[] }) {
  return text.map((textBlock, index) => {
    const { plain_text, annotations, href } = textBlock;
    const { bold, italic, strikethrough, underline, color } = annotations;
    let textColor;
    if (color === 'default') {
      textColor = 'text-black';
    } else if (color == 'blue') {
      textColor = 'text-blue-500';
    }

    return (
      <span
        key={index}
        className={cn(textColor, className, {
          'font-bold': bold,
          italic: italic,
          'line-through': strikethrough,
          underline: underline,
        })}
      >
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="underline text-blue-600">
            {plain_text}
          </a>
        ) : (
          plain_text
        )}
      </span>
    );
  });
}
