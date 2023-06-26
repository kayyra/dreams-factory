import { Component, ElementRef } from '@angular/core';

interface Track {
  title: string;
  src: string;
  selected: boolean;
}

@Component({
  selector: 'app-player',
  template: `
    <audio id="audio-player" autoplay loop volume="0.5">
      <source *ngFor="let track of tracks" [src]="track.src" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <a (click)="toggleMute()">
      <img class="muted" src="/assets/images/muted.png" *ngIf="!isMuted">
      <img class="unmuted" src="/assets/images/unmuted.png" *ngIf="isMuted">
    </a>

    <ul id="playlist">
      <li *ngFor="let track of tracks" (click)="selectTrack(track)" [class.selected]="track.selected">
        {{ track.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  audioPlayer!: HTMLAudioElement;
  isMuted = false;
  currentTrackIndex = 0;
  tracks: Track[] = [
    { title: 'Track 1', src: 'https://audio.jukehost.co.uk/ty4KMKLXKZUSO4cqc2lC5x6a9vELZUpH', selected: true },
    { title: 'Track 2', src: 'https://audio.jukehost.co.uk/mF7QK73zCUsGnBr0cfVN3X6KQXkb5ib9', selected: false },
    { title: 'Track 3', src: 'https://audio.jukehost.co.uk/PXJUfxGfWcvtXUlOMNvKtynp6mcfDTQF', selected: false }
  ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.audioPlayer = this.elementRef.nativeElement.querySelector('#audio-player');
    const selectedTrack = this.tracks.find(track => track.selected);
    if (selectedTrack) {
      this.currentTrackIndex = this.tracks.indexOf(selectedTrack);
      this.selectTrack(selectedTrack);
    }
    this.audioPlayer.addEventListener('ended', () => {
      this.selectNextTrack();
    });
  }

  selectTrack(track: Track) {
    this.tracks.forEach(t => (t.selected = false));
    track.selected = true;
    this.audioPlayer.load();
    this.audioPlayer.play();
  }

  selectNextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    const nextTrack = this.tracks[this.currentTrackIndex];
    console.log('Next track:', nextTrack);
    this.selectTrack(nextTrack);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audioPlayer.muted = this.isMuted;
  }
}



