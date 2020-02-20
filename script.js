var sliderCheckDelay = setInterval(sliderCheck, 1);

document.getElementById("worksCited").style.display = 'none';

function sliderCheck() {
  var one = 'none'
  var two = 'none'
  var three = 'none'
  var four = 'none'
  var five = 'none'
  
  
  if (document.getElementById("myRange").value == 1) {
    one = 'block';
  }else if (document.getElementById("myRange").value == 2) {
    two = 'block';
  }else if (document.getElementById("myRange").value == 3) {
    three = 'block';
  }else if (document.getElementById("myRange").value == 4) {
    four = 'block';
  }else if (document.getElementById("myRange").value == 5) {
    five = 'block';
  }

  
  document.getElementById("timeline1").style.display = one;
  document.getElementById("timeline2").style.display = two;
  document.getElementById("timeline3").style.display = three;
  document.getElementById("timeline4").style.display = four;
  document.getElementById("timeline5").style.display = five;
}

function worksCited() {
  document.getElementById("worksCited").style.display = 'block';
  document.getElementById("homePage").style.display = 'none';
}

function homePage() {
  document.getElementById("worksCited").style.display = 'none';
  document.getElementById("homePage").style.display = 'block';
}