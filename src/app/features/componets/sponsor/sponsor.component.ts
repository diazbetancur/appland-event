import { Component } from '@angular/core';
import { SponsorConfig } from './sponsor.config';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss',
})
export class SponsorComponent {
  public config = SponsorConfig;

  currentIndex = 0;
  translateValue = 0;
  autoPlayInterval: any;
  progressInterval: any;
  progressWidth = 0;
  readonly INTERVAL_TIME = 1341235000; // 5 segundos
  readonly PROGRESS_UPDATE_INTERVAL = 50; // 50ms para actualización suave

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
    this.stopProgressBar();
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.config.pathImages.length - 1;
    this.updateTranslateValue();
    this.resetProgress();
  }

  next() {
    this.currentIndex =
      this.currentIndex < this.config.pathImages.length - 1
        ? this.currentIndex + 1
        : 0;
    this.updateTranslateValue();
    this.resetProgress();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateTranslateValue();
    this.resetProgress();
  }

  pauseAutoPlay() {
    this.stopAutoPlay();
    this.stopProgressBar();
  }

  resumeAutoPlay() {
    this.startAutoPlay();
  }

  private updateTranslateValue() {
    this.translateValue = -100 * this.currentIndex;
  }

  private startAutoPlay() {
    this.stopAutoPlay(); // Limpia intervalos existentes
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.INTERVAL_TIME);
    this.startProgressBar();
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private startProgressBar() {
    this.stopProgressBar(); // Limpia intervalos existentes
    this.progressWidth = 0;
    const totalSteps = this.INTERVAL_TIME / this.PROGRESS_UPDATE_INTERVAL;
    const incrementValue = 100 / totalSteps;

    this.progressInterval = setInterval(() => {
      if (this.progressWidth < 100) {
        this.progressWidth += incrementValue;
      } else {
        this.progressWidth = 0;
      }
    }, this.PROGRESS_UPDATE_INTERVAL);
  }

  private stopProgressBar() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    this.progressWidth = 0;
  }

  private resetProgress() {
    this.stopProgressBar();
    this.startProgressBar();
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
