import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[elemHighlighter]'
})
export class ElementHighlighter {
    constructor(private elem: ElementRef) {
        this.elem.nativeElement.style.background = 'yellow'
    }
}