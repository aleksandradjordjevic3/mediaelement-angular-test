import { Component, Injectable, OnInit } from '@angular/core';

declare const MediaElementPlayer: any;

@Component({
  selector: 'app-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class PlayerComponent implements OnInit {

   private player: any;

  private video: any;

  // https://github.com/mediaelement/mediaelement/issues/643
  private playFlashBack = {
     mode: 'auto_plugin',
    // shows debug errors on screen
    enablePluginDebug: true,
    plugins: ['flash', 'silverlight' ],

    features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume'],
    pluginPath: '/assets/mejs/swf/',
    success: function(mediaElement: any, originalNode: any) {
      console.log('Initialized');
    }
  };

  private play = {
    features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume'],
    pluginPath: '/assets/mejs/swf/',
    success: function(mediaElement: any, originalNode: any) {
      console.log('Initialized');
    }
  };

  constructor() { }

  ngOnInit() {


          // RTMP
        this.video = 'https://www.youtube.com/watch?v=MeGLywchaT0';
        this.player = new MediaElementPlayer('player', this.playFlashBack);


    this.player.setSrc(this.video);
    this.player.load();
  }

}
