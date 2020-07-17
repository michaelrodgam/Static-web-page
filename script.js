let currentImageDev= 1;
let lastImageDev= 7;

function showSlide(number, type){
	if(type == 0){
		currentImageDev = currentImageDev + number;
		if(currentImageDev > lastImageDev){
			currentImageDev = 1;
		}
		if(currentImageDev < 1){
			currentImageDev = lastImageDev;
		}
		document.getElementById("imageDev").src = "./images/dev"+currentImageDev+".jpg";
	}
	else{
		document.getElementById("imageGame").src = "./images/game"+number+".jpg";
	}
}

function valueRadio(value){
	var radio = document.getElementById("moreInfoText");
	if(value === 1){
		radio.style.visibility = "visible";
	}
	if(value === 0){
		radio.style.visibility = "hidden";
	}
}