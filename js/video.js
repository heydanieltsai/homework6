var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video);
}

function pauseVid() {
	video.pause()
	console.log("Pause Video");
	console.log(video);
}

function decreaseSpeed() {
	video.playbackRate=0.8;
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate=1.25;
  console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;

		if(video.currentTime >= video.duration-60){
			video.currentTime = 0;
			console.log("Video restarted");
		}

	console.log("Current location is "+ video.currentTime);

}

function mute() {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("muted");
		}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("unmuted");
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100+ "%");
}


function gray() {
	document.querySelector("#myVideo").classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	document.querySelector("#myVideo").classList.remove("grayscale");
	console.log("In color");
}
