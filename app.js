const slideShow = [ "./images/img_band_la.jpg", "./images/img_band_ny.jpg", "./images/img_band_chicago.jpg"];

let i = 0;

const changeImg = () => {
  if (i < slideShow.length) {
  document.querySelector(".slide-img").src=slideShow[i];
  i += 1;
}
}

setInterval(function() {
  if (i < slideShow.length) {
  changeImg();
} else {
  i=0;
  changeImg();
}
}, 4000);
