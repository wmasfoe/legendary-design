import { memo } from "react"
import type { ButtonProps } from './types'
import { useClassNames, useDefaultProps } from '@legendary/hooks'

const Button = (props: ButtonProps) => {
  const { btnType, children, disabled, ...other } = useDefaultProps(props, {
    btnType: 'primary',
    disabled: false
  })
  const classnames = useClassNames(['btn', `btn-${btnType}`], {
    disabled,
  })

  return <>
    {
      btnType === 'link' ?
        <a className={classnames} {...other}>{children}</a>:
        <button className={classnames} disabled={disabled} {...other}>{ children }</button>
    }
  </>;
};

export default memo(Button);
