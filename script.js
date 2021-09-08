const videoElement = document.getElementById("video");
const button = document.getElementById("button");

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadeddata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log("Error:", err.message);
  }
};

button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});
// on Load
selectMediaStream();
