import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
    @Input('appBackground') hoverColor = 'green';
    @Input() defaultColor = 'transparent';
    @HostBinding('style.backgroundColor') backgroung: string;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.backgroung = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter() {
        this.backgroung = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.backgroung = this.defaultColor;
    }
}
