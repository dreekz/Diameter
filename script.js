const videoElement = document.getElementById('video');

if (!(videoElement instanceof HTMLVideoElement)) {
    throw new Error("Element is not a video element.");
}

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera", err);
    });

videoElement.addEventListener('click', () => {
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
});