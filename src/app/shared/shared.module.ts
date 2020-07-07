import { ColorDirective } from './color.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ColorDirective],
    exports: [ColorDirective]
})
export class SharedModule { }
