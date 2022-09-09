import { memo } from "react"
import type { ButtonProps } from './types'
import { useClassNames, useDefaultProps } from '@legendary/hooks'
import './style.scss'

const Button = (props: ButtonProps) => {
  const { btnType, children, disabled, ...other } = useDefaultProps(props, {
    btnType: 'primary',
    disabled: false
  })
  const classnames = useClassNames(['btn', `btn-${btnType}`, props.className], {
    disabled,
  })

  return <div className="l-button">
    {
      btnType === 'link' ?
        <a {...other} className={classnames}>{children}</a>:
        <button {...other} className={classnames} disabled={disabled}>{ children }</button>
    }
  </div>;
};

export default memo(Button);
