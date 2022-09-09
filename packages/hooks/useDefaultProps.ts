/**
 * 受 Vue3 withDefault 的启发，支持传入 props 的默认参数。
 * @param props 组件的 props
 * @param defaultConfig 组件 props 的默认参数
 * @returns 和默认参数合并后的 props
 */
export default function useDefaultProps<T extends any>(props: T, defaultConfig: T) {
  defaultConfig = Object(defaultConfig)
  return Object.assign({}, defaultConfig, props)
}
