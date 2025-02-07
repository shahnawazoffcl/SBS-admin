import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // Array of background images
  backgroundImages: string[] = [
    'https://images.unsplash.com/photo-1617020528705-220d32deaa9d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxibGF6aW5nJTIwbmF0dXJlJTIwbmF0dXJlfGVufDB8fHx8fDE2Nzk1Njk3ODQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1527595486029-bd1b27130c60?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGNvY2t0YWlsJTIwbmF0dXJlJTIwbmF0dXJlfGVufDB8fHx8fDE2Nzk1NzAyMzk&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1516898502074-96b2b99b56b5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjaXR5JTIwbmF0dXJlJTIwbmF0dXJlfGVufDB8fHx8fDE2Nzk1NzA2NzM&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1462920016320-38fefcf2a1fa?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGZyZWV8bmF0dXJlJTIwbmF0dXJlfGVufDB8fHx8fDE2Nzk1Njk3OTk&ixlib=rb-1.2.1&q=80&w=1080'
  ];

  currentBackgroundIndex: number = 0;  // To keep track of current background image
  
  // Reference to the background element
  @ViewChild('background') backgroundElement!: HTMLElement;

  // Function to change the background image
  changeBackground() {
    // Cycle through the images
    this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
    const newBackground = this.backgroundImages[this.currentBackgroundIndex];

    // Update the background image using ViewChild reference
    if (this.backgroundElement) {
      this.backgroundElement.style.backgroundImage = `url(${newBackground})`;
    }
  }

  // Lifecycle hook to ensure the background is properly set after view initialization
  ngAfterViewInit(): void {
    this.changeBackground();  // Set initial background
  }
}
