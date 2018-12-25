// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Faranesh-image.png') {
      myImage.setAttribute ('src','images/Faranesh-image-2.jpg');
	} else {
	  myImage.setAttribute ('src','images/Faranesh-image.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('لطفاً نام خود را وارد کنید:');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'سلام ' + myName + ',خوش آمدید';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'سلام ' + storedName + ',خوش آمدید';
}

myButton.onclick = function() {
  setUserName();
}
