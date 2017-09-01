function initSwiper(){
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    keyboardControl: true
  });
}

function initialize(data){
  document.title = data.title;

  var slides = ""

  for(var i = 0; i < data.images.length; i++){
    slides += "<div class='swiper-slide'>";
    slides += "<img src='slider-images/" + data.images[i].path + "' alt='" + data.images[i].text + "'>";
    slides += "<p>" + data.images[i].text.replace('LINDBERG','<span class="lindberg">LINDBERG</span>') + "</p>";
    slides += "</div>";
  }

  document.getElementById('swiper-wrapper').innerHTML = slides;
  initSwiper();
  document.getElementsByClassName('preloader')[0].style.opacity = 0;
  document.getElementsByClassName('swiper-container')[0].style.opacity = 1;
}

function getJson(){
  var request = new XMLHttpRequest();
  request.open('GET','slider.json',true);
  request.onload = function(){
    if(this.status >= 200 && this.status < 400){
      var data = JSON.parse(this.response);
      initialize(data);
    }
    else {
      console.log('error?');
    }
  }
  request.onerror = function(){
    // Connection error
    console.log('connection error');
  }

  request.send();
}

if(document.readyState != 'loading') getJson();
else if(document.addEventListener) document.addEventListener('DOMContentLoaded', getJson);
else document.attachEvent('onreadystatechange', function(){
  if(document.readyState == 'complete') getJson();
});
