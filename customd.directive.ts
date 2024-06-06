import { Directive,ElementRef,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appCustomd]'
})
export class CustomdDirective {
 
  constructor(private html:TemplateRef<any>,private container:ViewContainerRef) { }
  @Input() set appCustomd(cond:boolean){
    if(!cond)
    this.container.createEmbeddedView(this.html)
  }
  else(){
    this.container.clear()
  }
    
  

}

