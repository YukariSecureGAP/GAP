/// <reference types="react-scripts" />
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

declare module '*.svg' {
    const src: string
    export default src
}