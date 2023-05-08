import { memo } from 'react';
import { useClassNames, useDefaultProps } from '@legendary/hooks';
import type { CardProps } from './types';

const Card = (props: CardProps) => {
  const { classNames, children } = props;
  const classes = useClassNames('l-card', classNames)
  return <div className={classes}>

  </div>;
}

export default memo(Card);
