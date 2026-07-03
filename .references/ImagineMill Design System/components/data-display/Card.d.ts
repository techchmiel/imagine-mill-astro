import * as React from 'react';

/**
 * Content card for blog articles and YouTube videos. The workhorse of the
 * ImagineMill site — a media thumbnail with title, excerpt and meta row.
 *
 * @startingPoint section="Content" subtitle="Article & video content cards" viewport="700x420"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Image URL for the thumbnail, or a custom React node for the media area. */
  media?: string | React.ReactNode;
  /** "video" overlays a play button on the media. @default "article" */
  kind?: 'article' | 'video';
  /** Node rendered top-left over the media (e.g. a Badge). */
  badge?: React.ReactNode;
  title?: React.ReactNode;
  excerpt?: React.ReactNode;
  /** Footer meta row (author, date, read time…). */
  meta?: React.ReactNode;
  /** Renders the whole card as a link. */
  href?: string;
  /** Enable hover lift. @default true */
  interactive?: boolean;
  /** Provide custom body instead of title/excerpt/meta. */
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
