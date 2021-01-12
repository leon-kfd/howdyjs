declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  export default ComponentOptions;
}

declare module '*.md' {
  const x: string;
  export = x;
}