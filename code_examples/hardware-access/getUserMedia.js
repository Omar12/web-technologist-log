navigator.getUserMedia(
  // constraints
  {
    video: true,
    audio: true
  },
  //successCallback
  function(localMediaStream) {
    // select the 'video' object on the DOM
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);
    video.onloadedmetadata = function(e) {
      // let the video magic begin
    }
  },
  // error!
  function(err) {
    console.log("Oh noes, there was the following error:" + err);
  }
);