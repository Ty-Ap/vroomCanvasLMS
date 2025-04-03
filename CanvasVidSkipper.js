// let button = document.querySelector('[data-test="PlayerButton-Play"]');
// button.click(); 

// we have to click and inspect the video to have it register to the DOM due to how canvas lazy and dynamically loads/hydrates media. rightclick inspect on the playbutton, (or use puppeteer with headless set to false to sim this interaction and automate completely, I'm not your boss).

let video = $$('video')[0]; //first video in media array on page. if theres multiple just add 1 to the [0] section until you reach the end. you can technically do this in a one-liner, just append.playbackRate = <integer>; to the above. 

video.playbackRate = 5; //0r 30 0r wh4t3v3r. Higher = faster.
