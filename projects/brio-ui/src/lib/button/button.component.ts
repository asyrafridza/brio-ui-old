import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonIconPosition = 'left' | 'right';

type ButtonSize = 'small' | 'normal';

type ComponentClass = {
  [key: string]: boolean;
};

type ComponentStyle = {
  [key: string]: string;
};

@Component({
  selector: 'brio-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public type: ButtonType = 'button';

  @Input() public size: ButtonSize = 'normal';

  @Input() public color: 'primary' | 'emphasize' | 'critical';

  @Input() public outline: boolean = false;

  @Input() public ariaLabel: string;

  @Input() public className: string;

  @Input() public customStyle: ComponentStyle;

  @Input() public disabled: boolean;

  @Input() public iconPos: ButtonIconPosition = 'left';

  @Input() public icon: IconProp;

  @Input() public label: string;

  @Output() public onClick: EventEmitter<any> = new EventEmitter();

  @Output() public onFocus: EventEmitter<any> = new EventEmitter();

  @Output() public onBlur: EventEmitter<any> = new EventEmitter();

  public get buttonClass(): ComponentClass {
    return {
      'b-button': true,
      'b-button-outline': this.outline,
      'b-button-icon--right': this.iconPos === 'right',
      'b-button--small': this.size === 'small',
      'b-button--primary': this.color === 'primary',
      'b-button--emphasize': this.color === 'emphasize',
      'b-button--critical': this.color === 'critical'
    };
  }

  public get iconClass(): ComponentClass {
    return {
      'b-button-icon': true,
      'b-button-icon--right': this.iconPos === 'right'
    };
  }

  public get labelClass(): ComponentClass {
    return {
      'b-button-label': true
    };
  }
}
