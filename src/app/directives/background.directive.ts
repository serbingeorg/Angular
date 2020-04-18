import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroung: string;
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
    }

    @HostListener('mouseenter') mouseEnter() {
        this.backgroung = 'green';
    }

    @HostListener('mouseleave') mouseLeave() {
        this.backgroung = 'trasparent';
    }
}
