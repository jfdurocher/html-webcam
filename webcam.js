const video = document.getElementById('webcam');
const errorMessage = document.getElementById('error-message');

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error("Error accessing webcam: ", error);
            errorMessage.textContent = "Error accessing webcam. Please check your browser settings and allow webcam access.";
        });
} else {
    console.error("getUserMedia not supported by this browser.");
    errorMessage.textContent = "getUserMedia not supported by this browser.";
}
