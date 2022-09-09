export type ButtonType = 'link' | 'primary' | 'danger' | 'warning' | 'loading' | 'success'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export interface BaseButtonProps {
  children: ReactNode,
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  href?: string
}

// 原生 button 属性 + 组件需要的属性
export type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// 原生 a 标签属性 + 组件需要属性
export type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 最终Button 组件的属性，Partial 将类型属性变为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
