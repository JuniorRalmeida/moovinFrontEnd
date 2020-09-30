function changeColors(campName, onOrOff){
	if(campName == 1){
		onOrOff == 1 ? document.getElementById('phone').style.color="green" :
			document.getElementById('phone').style.color="black";
	}else if(campName == 2){
		onOrOff == 1 ? document.getElementById('whatsApp').style.color="green" : document.getElementById('whatsApp').style.color="black";
	}
}