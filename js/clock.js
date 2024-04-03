function clock() {
	let newTime = new Date();
	return document.getElementById("jsTime").innerHTML = newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds();
}