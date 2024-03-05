import { ComponentPublicInstance, ObjectDirective } from 'vue';
import type { CustomMouseMenuOptions } from './types';
import MouseMenu from './mouse-menu.vue';
declare function CustomMouseMenu(options: CustomMouseMenuOptions): any;
declare let MouseMenuCtx: ComponentPublicInstance<typeof MouseMenu>;
declare const MouseMenuDirective: ObjectDirective;
export * from './types';
export { MouseMenuDirective, CustomMouseMenu, MouseMenuCtx };
export default MouseMenu;
