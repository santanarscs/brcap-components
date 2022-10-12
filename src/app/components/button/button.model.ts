export interface ButtonTypes {
  variant: 'primary' | 'secondary' | 'danger' | 'default';
  size: 'small' | 'normal' | 'large';
  icon?: HTMLElement;
  pill?: boolean;
  disabled?: boolean;
  classes?: string;
  isLoading?: boolean;
}
