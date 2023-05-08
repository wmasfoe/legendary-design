import React, { memo } from 'react'
import type { ButtonProps } from './types';
export type { BaseButtonProps, ButtonProps } from './types'
import { useClassNames, useDefaultProps } from '@legendary/hooks';
import './style.scss';
const Button = (props: ButtonProps) => {
  const { btnType, children, disabled, ...other } = useDefaultProps(props, {
    btnType: 'primary',
    disabled: false
  })
  const classnames = useClassNames(['l-button', 'btn', `btn-${btnType}`, props.className], {
    disabled,
  })

  return <>
    {
      btnType === 'link' ?
        <a {...other} className={classnames}>{children}</a>:
        <button {...other} className={classnames} disabled={disabled}>{ children }</button>
    }
  </>;
};

export default memo(Button);
