import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.addClickEventToLinks();
  }

  addClickEventToLinks(): void {
    const links: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse') as HTMLElement;

    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', () => {
        if (navbarCollapse.classList.contains('show')) {
          this.renderer.removeClass(navbarCollapse, 'show');
        }
      });
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse') as HTMLElement;
    if (navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}