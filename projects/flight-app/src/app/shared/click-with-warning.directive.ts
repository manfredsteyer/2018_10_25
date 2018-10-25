import { Directive, Input, Output, HostBinding, HostListener, EventEmitter } from "@angular/core";

@Directive({
  selector: '[clickWithWarning]'
})
export class ClickWithWarningDirective {
  @Input() warning: string = 'Are you sure?';
  @Output() clickWithWarning = new EventEmitter();

  @HostBinding('class') cssClass: string = 'btn btn-danger';
  
  @HostListener('click', ['$event'])
  handleClick($event): void {
    if (confirm(this.warning)) {
      this.clickWithWarning.emit();
      this.cssClass = "btn btn-default";
    }
  }
}