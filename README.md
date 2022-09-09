# legendary-design

一个全新的、基于 CSS `@layer` 编写的组件库。
具有完备的 `TypeScript` 类型支持、`Vitest` 测试驱动。
目前正在支持 `React` 框架，你可以使用 `vuera` 转译之后在 `Vue` 中使用。

## 背景

业界大多数组件库样式覆盖困难，需要嵌套很多层选择器，业务场景、UI 适配性不够友好。
且大多数具有历史包袱，不够轻量，不具有前瞻性。

基于以上痛点，打算孵化自己的组件库。

## 特点

- 我们采用 CSS3 `@layer` 规则，解决样式覆盖困难痛点。
- 针对不同业务场景沉淀更多业务组件可供选择。
- 支持 `Tree Shaking`，过滤无用依赖。
- 采用 `Vitest` 驱动测试，保障性更好。
- 完备的 `TypeScript` 类型支持。
- 不依赖其他上层库，BUG 更少。
- 更少的 API 改动，迁移痛点小。

## 架构

- Pnpm Monorepo
- React
- TypeScript
- Vite
- Vitest

## 覆盖框架

- React：正在支持
- ReactNative：敬请期待……
- Vue：敬请期待……
- Solid：敬请期待……
