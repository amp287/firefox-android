function removeImagesAndVideos() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      images[i].remove();
    }
    
    var videos = document.getElementsByTagName("video");
    for (var i = 0; i < videos.length; i++) {
      videos[i].remove();
    }
  }
  
  removeImagesAndVideos();


  function exponentialTimer(func, delay, maxDelay) {
    removeImagesAndVideos();

    if (delay < maxDelay) {
      setTimeout(function() {
        exponentialTimer(func, delay * 2, maxDelay);
      }, delay);
    }
  }

  exponentialTimer(removeImagesAndVideos, 10, 5000); 