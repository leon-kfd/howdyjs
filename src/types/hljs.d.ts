import type hljs from 'highlight.js';
declare module 'highlight.js/lib/core' {
  export = hljs;
}

declare module 'highlight.js/lib/core.js' {
  export = hljs;
}

declare module 'highlight.js/lib/languages/*' {
  export default function(hljs?: HLJSApi): LanguageDetail;
}