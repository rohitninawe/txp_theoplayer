function init({ player }) {
  if (player) {
    // setting up the rewind button by setting up a video-js component
    var videojs = THEOplayer.videojs;
    var controlBar = player.ui.getChild('controlBar');
    var Button = videojs.getComponent('Button');
    var lastTap = null;
    let showRewind = false;

    var RewindButton = videojs.extend(Button, {
      constructor: function () {
        Button.apply(this, arguments);
        /* initialize your button */
      },
      handleClick: () => {
        // var now = Date.now();
        // var DOUBLE_PRESS_DELAY = 300;
        // if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
          player.currentTime -= 30;
        //   showRewind = true;
        //   setTimeout(function () {
        //     showRewind = false
        //   },1000)
        // } else {
        //   lastTap = now;
        // }
      },
      buildCSSClass: function () {
        // if (showRewind) {
          return 'custom-icon-rewind'; // insert all class names here
        // }
        // else{
        //   return 'custom-icon-rewind-light'
        // }
      }
    });

    var ForwardButton = videojs.extend(Button, {
      constructor: function () {
        Button.apply(this, arguments);
        /* initialize your button */
      },
      handleClick: () => {
      //   const now = Date.now();
      //   const DOUBLE_PRESS_DELAY = 300;
      //   if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
          player.currentTime += 30;
        //   showRewind = true
        // } else {
        //   lastTap = now;
        // }
      },
      buildCSSClass: () => {
        return 'custom-icon-forward'; // insert all class names here
      }
    });

    videojs.registerComponent('RewindButton', RewindButton);
    videojs.registerComponent('ForwardButton', ForwardButton);

    controlBar.addChild('ForwardButton', {});
    controlBar.addChild('RewindButton', {});
  }



  // Create center controlbar
var ControlBar = videojs.getComponent('ControlBar');
var CustomCenterControlBar = videojs.extend(ControlBar, {
    constructor: function (player, options) {
        options.children = [];
        ControlBar.call(this, player, options);
        this.addClass('custom-center-controlbar');
    }
});
videojs.registerComponent('CustomCenterControlBar', CustomCenterControlBar);

var customCenterControlBar = player.ui.addChild('CustomCenterControlBar');

// Create custom big play pause button
var PlayToggle = videojs.getComponent('playToggle');
var CustomBigPlayToggle = videojs.extend(PlayToggle, {
    constructor: function(player, options) {
        PlayToggle.call(this, player, options);
        this.addClass('custom-big-play-pause-button');
    }
});
videojs.registerComponent('CustomBigPlayToggle', CustomBigPlayToggle);

// Add custom big play pause toggle to center controlbar
customCenterControlBar.addChild('CustomBigPlayToggle');

}
