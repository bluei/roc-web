import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'roc-web';

  // might need to move this to the home component
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Access and manipulate DOM elements here

      const title = document.getElementById('parallax-title');
      const nav = document.getElementById('nav-container');

      window.addEventListener('scroll', function () {
        
        let scrollPosition = window.pageYOffset;
        // Adjust the speed factor here (lower = slower movement)
        let slowScroll = scrollPosition * 0.6;

        if (title)
          title.style.transform = 'translateY(' + slowScroll + 'px)';

        if (nav && scrollPosition > 10 ) {
          nav.classList.add("solid");
         } else {
          nav?.classList.remove("solid")
         }

      });
    }
  }
}


