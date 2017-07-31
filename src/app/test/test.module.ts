import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TestComponent
    ],
    declarations: [TestComponent],
    entryComponents: [TestComponent]
})
export class TestModule {
}
