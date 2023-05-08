import { CSSProperties, ReactNode } from 'react'

export type CardProps = {
  classNames: string | string[];
  title?: string;
  extra?: string | ReactNode | Element;
  bordered?: boolean;
  headStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
}
