import {
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    ViewChild,
    ViewContainerRef
} from "@angular/core";

@Component({
    selector: 'lukana-component-wrapper',
    template: `
        <div #target></div>`
})
export class ComponentWrapperComponent {
    @ViewChild('target', {read: ViewContainerRef}) target;
    @Input() type;
    @Input() properties;
    cmpRef: ComponentRef<any>;
    private isViewInitialized: boolean = false;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private cdRef: ChangeDetectorRef) {
    }

    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }

        let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory);
        // to access the created instance use
        Object.assign(this.cmpRef.instance, this.properties);
        this.cdRef.detectChanges();
    }

    ngOnChanges() {
        this.updateComponent();
    }

    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}