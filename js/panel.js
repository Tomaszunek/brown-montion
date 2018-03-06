document.addEventListener('input', function (event) {
  if ( event.target.className == "paramInput") {
    if(event.target.name == "circleCount"){
      inputValues.circleCount =  {'parName' : 'cicrleCount', 'v' : event.target.value};
    } else if(event.target.name == "frameRate") {
      inputValues.frameRate = {'parName' : 'frameRate', 'v' : event.target.value};
    }
  } else if(event.target.className == "circleColor"){
    circleColor = event.target.value;
    document.getElementsByClassName("canvasCont")[0].style.border = "2px solid" + event.target.value;
  } else if(event.target.className == "circleFillColor"){
    circleColorFill = event.target.value;
  } else if(event.target.className == "nearColor"){
    nearLineColor = event.target.value;
    calculateColor();
  } else if(event.target.className == "farColor"){
    farLineColor = event.target.value;
    calculateColor();
  } else if(event.target.className == "backgroundColor"){
    document.getElementsByClassName("canvasCont")[0].style.backgroundColor = event.target.value;
  }
}, false);

var button = document.getElementById("reloadButton");
button.onclick = function() {
  reloadPage();
};
