numberOfDrum = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrum; i++) {
	// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
	//     alert("I got a click");
	// });
	document.querySelectorAll('.drum')[i].addEventListener('click', function() {
		playSound(this.innerHTML);
		animationEffect(this.innerHTML);
	});
}
document.addEventListener('keydown', function(event) {
	playSound(event.key);
	animationEffect(event.key);
});
var audio;
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
function playSound(key) {
	list_key = ['f','a','s','d','j','k','l']
	if(audio && list_key.includes(key)){
		audio.pause();
		audio.currentTime = 0;
		audio.loop = true;	
	}
	switch (key) {
		case 'f':
			audio = new Audio('sounds/f.mp3');
			audio.play();
			break;
		case 'a':
			audio = new Audio('sounds/a.mp3');
			audio.play();
			break;
		case 's':
			audio = new Audio('sounds/s.mp3');
			audio.play();
			break;
		case 'd':
			audio = new Audio('sounds/d.mp3');
			audio.play();
			break;
		case 'j':
			audio = new Audio('sounds/j.mp3');
			audio.play();
			break;
		case 'k':
			audio = new Audio('sounds/k.mp3');
			audio.play();
			break;
		case 'l':
			audio = new Audio('sounds/l.mp3');
			audio.play();
			break;
		default:
			console.log('What is happing?');
			break;
	}
	
}
function animationEffect(key) {
	document.querySelector('.' + key).classList.add('pressed');
	setTimeout(function() {
		document.querySelector('.' + key).classList.remove('pressed');
	}, 100);
}
