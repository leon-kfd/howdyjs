export type MenuCallback<T = any> = (arg0: HTMLElement | null, arg1: HTMLElement | null, arg2?: any) => T
export type MenuSetting = {
  fn?: MenuCallback;
  label?: string | MenuCallback<string>;
  tips?: string | MenuCallback<string>;
  hidden?: boolean | MenuCallback<boolean>;
  disabled?: boolean | MenuCallback<boolean>;
  icon?: string;
  line?: boolean;
  children: MenuSetting[];
}