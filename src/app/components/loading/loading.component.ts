import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cap-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  classes?: string;

  private readonly sizes = {
    small: '-ml-1 h-5 w-5',
    medium: '-ml-1 h-8 w-8',
    large: '-ml-1 h-16 w-16',
  };
  constructor() {}

  ngOnInit(): void {}

  public get classNames(): string {
    return ['animate-spin', this.sizes[this.size], this.classes].join(' ');
  }
}
