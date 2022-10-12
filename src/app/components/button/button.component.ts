import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cap-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  variant: 'primary' | 'secondary' | 'danger' | 'default' = 'default';
  @Input()
  size: 'small' | 'normal' | 'large' = 'normal';
  @Input()
  icon?: HTMLElement;
  @Input()
  pill?: boolean;
  @Input()
  disabled?: boolean = false;
  @Input()
  classes?: string;
  @Input()
  isLoading?: boolean = false;

  @Input()
  label!: string;

  @ViewChild('button', { static: true }) button!: ElementRef;

  private readonly styles = {
    base: 'focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-300 rounded-sm flex items-center justify-center',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
      small: 'w-24 h-7 text-sm',
      normal: 'w-36 h-10',
      large: 'w-48 h-14 text-lg',
    },
    variant: {
      primary:
        'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-opacity-50 text-white',
      secondary:
        'bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-opacity-50 text-white',
      danger:
        'bg-red-500 hover:bg-red-600 focus:ring-red-500 focus:ring-opacity-50 text-white',
      default:
        'bg-gray-200 hover:bg-gray-600 focus:ring-gray-500 focus:ring-opacity-50 text-gray-800 hover:text-white',
    },
  };

  constructor() {}

  ngOnInit(): void {}

  public get classNames(): string {
    return [
      this.styles.base,
      this.styles.size[this.size],
      this.styles.variant[this.variant],
      this.pill && this.styles.pill,
      this.disabled && this.styles.disabled,
      this.classes,
    ].join(' ');
  }
}
