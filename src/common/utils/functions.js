/**
 * 分类存放公共函数
 */
const textTruncation = (val, len = 16) => {
  if (typeof val === 'string' || typeof val === 'number') {
    let suffix = val.length <= len ? '' : '...'
    return `${val.substring(0, len)}${suffix}`
  } else {
    return val
  }
}
export { textTruncation }
