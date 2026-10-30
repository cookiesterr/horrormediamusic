const audioPlayer= document.getElementById('audio-player');
const audioSource= document.getElementById('audio-source');
const currentTrackTitle= document.getElementById('current-track-title');
const trackItems= document.getElementById('track=item');

function playTrack(item) {
    const trackSrc= item.getAttribute('data-src');
    const trackTitle= item.getAttribute('data-title');

    trackItems.forEach(i=> i.classList.remove('active'));
    item.classList.add('active');

    currentTrackTitle.textContent = trackTitle;
    audioSource.src= trackSrc;
    audioPlayer.load();
    audioPlayer.play().catch(err=> console.log("Autoplay blocked:", err));
}

trackItems.forEach(item=> {
    item.addEventListener('click',() => {
        playTrack(item);
    });
});