function changeColors(campName, onOrOff){
	if(campName == 1){
		if(onOrOff == 1){
			document.getElementById('phone').style.color="green";
		}else{
			document.getElementById('phone').style.color="black";
		}
	}else if(campName == 2){
		if(onOrOff == 1){
			document.getElementById('whatsApp').style.color="green";
		}else{
			document.getElementById('whatsApp').style.color="black";
		}
	} 
}