/**
 * @description: 防抖函数
 */
export const debounce = (fn: Function, delay: number) => {
  let timer: any = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
};
/**
 * @description: 节流函数
 *
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */
export const throttle = (fn: Function, delay: number) => {
  let timer: any = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, delay);
  };
};
