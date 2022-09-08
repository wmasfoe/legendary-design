type ClassNamesType = string[] | {} | string

function useClassNames (classnames: ClassNamesType): string {
    if(typeof classnames === 'string') {
        return classnames
    } else if(Array.isArray(classnames)) {
        return classnames.join(' ')
    } else {
        const res: string[] = []
        for (const key in classnames) {
            const currentAttr = classnames[key]
            // 函数
            if(typeof currentAttr === 'function') {
                currentAttr() && res.push(key)
            } else if (typeof currentAttr === 'boolean'){
                currentAttr && res.push(key)
            } else {
                res.push(currentAttr.toString())
            }
        }
        return res.join(' ')
    }
}

export {useClassNames} 
