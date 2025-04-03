# vroomCanvasLMS
make canvas videos go fasterfied

🎥 CanvasVidSkipper.js

    Hacky lil' script to speed up Canvas LMS videos because we are not watching that at 1x like a chump.

🛠 What it does

    Finds the <video> element on the page, even with canvas trying to hide things from us. (shout-out security thru obscurity lol)

    Cranks up the playbackRate so you can zoom through lectures.

    Useful on platforms like Canvas that lazy-load or dynamically hydrate media only after user interaction.

⚙️ Usage

    Open dev tools (F12 or Ctrl+Shift+I) on the video page.

    Right-click and Inspect the play button to make sure the DOM loads the video element.

    Paste this into the console:

let video = $$('video')[0];
video.playbackRate = 5; // or 30 or 9000, go wild (rip canvas data overhead)

If you’re super lazy (respect), you can just make it a one-liner:

$$('video')[0].playbackRate = 5;

🤖 Bonus: Automate it with Puppeteer

You can simulate the click on the play button using Puppeteer with headless: false:

let button = document.querySelector('[data-test="PlayerButton-Play"]');
button.click();

📌 Notes

    If there's more than one video element, change [0] to [1], [2], etc.

    Canvas doesn’t always hydrate the video until there's user interaction, so make sure it’s visible and playing first.

💤 Disclaimer

I'm not your boss. Run wild.

Let me know if you want it styled fancier or tailored for GitHub or something.
