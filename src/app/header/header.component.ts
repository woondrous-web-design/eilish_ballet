import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;

  currentSlideIndex = 0;
  slideInterval = 3500; // 3.5 seconds interval
  intervalId: any;

  sliderItems: any;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.initializeSlider();
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    clearInterval(this.intervalId);
  }

  initializeSlider() {
    if (!this.sliderContainer) {
      // Handle the case where the sliderContainer is not yet defined
      return;
    }

    this.sliderItems = this.sliderContainer.nativeElement.querySelectorAll('.items li');

    // Initialize the slider
    this.showSlide();
    this.startSlideShow();


    // Add click event for slider images
    this.sliderItems.forEach((item: any) => {
      item.addEventListener('click', () => {
        clearInterval(this.intervalId);
        this.showNextSlide();
      });
    });
  }

  prev() {
    clearInterval(this.intervalId);
    this.showPrevSlide();
    this.startSlideShow();
  }

  next() {
    clearInterval(this.intervalId);
    this.showNextSlide();
    this.startSlideShow();
  }

  // Function to show the current slide
  showSlide() {
    this.sliderItems.forEach((item: any, index: number) => {
      this.renderer.setStyle(item, 'display', index === this.currentSlideIndex ? 'block' : 'none');
    });
  };

  startSlideShow() {
    this.intervalId = setInterval(() => {
      this.showNextSlide();
    }, this.slideInterval);
  };

  // Function to show the next slide
  showNextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderItems.length;
    this.showSlide();
  };

  // Function to show the previous slide
  showPrevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderItems.length) % this.sliderItems.length;
    this.showSlide();
  };
}
