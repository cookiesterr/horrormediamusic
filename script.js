document.addEventListener('DOMContentLoaded', ()=> {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const currentTrackTitle = document.getElementById('current-track-title');
    const trackItems = document.querySelectorAll('track-item');

    trackItems.forEach(item => {
        item.addEventListener('click', () => {
            const trackSrc=item.getAttribute('data-src');
            const trackTitle=item.getAttribute('data-title');

            trackItems.forEach(i=> i.classList.remove('active'));
            item.classList.add('active');

            if (currentTrackTitle) {
                currentTrackTitle.textContent = trackTitle;
            }

            if (audioSource) {
                audioSource.src = trackSrc;
            }
            audioPlayer.src = trackSrc;
            audioPlayer.load();
            audioPlayer.play().catch(err => console.log("Playback Error:", err));
        });
    });
});