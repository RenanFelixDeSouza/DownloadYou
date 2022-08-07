const form = document.querySelector('form');

const dowloadVideos = () => {


    const videoDownload = document.querySelector('html5-video-container')

document.videoDownload.style.background = "green";

  }


form.addEventListener('submit', async (event) => {
    event.preventDefault();
const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: dowloadVideos,
});

});