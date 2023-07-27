declare module '*.module.less' {
    const classes: {
      readonly [key: string]: string
    }
    export default classes
    declare module '*.less'
  }

declare module '*.png' {
  const src: string
  export default src
}
  