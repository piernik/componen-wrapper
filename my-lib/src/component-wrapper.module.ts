import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentWrapperComponent} from './component-wrapper.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ComponentWrapperComponent
    ],
    declarations: [ComponentWrapperComponent]
})
export class ComponentWrapperModule {
    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: ComponentWrapperModule,
            providers: []
        };
    }
}
