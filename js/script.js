const FRAME_TRANS_TIME = 500;
const ELEM_TRANS_TIME = 150;

// setup clock

clock.canvas = document.getElementById("appCanvas");
clock.context = clock.canvas.getContext("2d");

clock.canvas.width = 256;
clock.canvas.height = 256;

clock.animate();

// initialize app

$(document).ready(function () {
  const hidePreloader = callback => {
    $("#preloaderFrame").css({
      transform: "scale(1.5)",
      opacity: 0,
    });

    setTimeout(() => {
      $("#preloaderFrame").hide();
      initApp && initApp();
    }, FRAME_TRANS_TIME);
  };

  setTimeout(hidePreloader, 1000);
});
