import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
// import {ComponentWrapperModule} from '@lukana/component-wrapper';
import {TestModule} from "./test/test.module";
import {TestComponent} from "./test/test.component";
import {ComponentWrapperModule} from "../../my-lib/src/component-wrapper.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ComponentWrapperModule.forRoot(),
        TestModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [TestComponent]
})
export class AppModule {
}
