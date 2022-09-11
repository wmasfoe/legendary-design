type ClassNamesType = string[] | {} | string;

function eachObject(res: string[], object?: any) {
  object = Object(object)
  for (const key in object) {
    const currentAttr = object[key];
    // 函数
    if (typeof currentAttr === "function") {
      currentAttr() && res.push(key as string);
    } else if (typeof currentAttr === "boolean") {
      currentAttr && res.push(key);
    } else {
      res.push(currentAttr.toString());
    }
  }
}

/**
 * 计算组件的 className 属性
 * @param classnames 组件的 class 属性，支持 string | array | object
 * @param partialClassnames 支持扩展 class 属性，有时第一个传数组，需要扩展 class 时，可以传入第二个
 * @returns 计算后的组件 class
 */
function useClassNames(
  classnames: ClassNamesType,
  partialClassnames?: {}
): string {
  let firstClassName = '',
      partialClassName = '';
  if (typeof classnames === "string") {
    firstClassName = classnames;
  } else if (Array.isArray(classnames)) {
    firstClassName = classnames.join(" ");
  } else {
    const res: string[] = [];
    eachObject(res, classnames)
    firstClassName = res.join(" ");
  }

  // 计算追加的 object 部分 classname
  if(partialClassnames) {
    const res: string[] = [];
    eachObject(res, partialClassnames)
    partialClassName = res.join(' ')
  }
  return partialClassName ? `${firstClassName} ${partialClassName}` : firstClassName
}

export { useClassNames };
