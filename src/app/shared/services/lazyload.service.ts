import {
  ViewContainerRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  ComponentRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LazyloadService {
  constructor(private cfr: ComponentFactoryResolver, private injector: Injector) {}

  async lazyLoadComponent(
    component: any,
    index: number,
    viewContainer: ViewContainerRef
  ): Promise<ComponentRef<any>> {
    const componentFactory = this.cfr.resolveComponentFactory(component);
    return viewContainer.createComponent(componentFactory, index, this.injector);
  }
}
