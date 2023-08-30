import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ButtonComponent],
})
export class ButtonModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far, fas);
  }
}
