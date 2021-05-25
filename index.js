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
var audio = new Audio('sounds/f.mp3');
function playSound(key) {
	audio.pause();
	audio.currentTime = 0;
	switch (key) {
		case 'f':
			audio = new Audio('sounds/f.mp3');
			break;
		case 'a':
			audio = new Audio('sounds/a.mp3');
			break;
		case 's':
			audio = new Audio('sounds/s.mp3');
			break;
		case 'd':
			audio = new Audio('sounds/d.mp3');
			break;
		case 'j':
			audio = new Audio('sounds/j.mp3');
			break;
		case 'k':
			audio = new Audio('sounds/k.mp3');
			break;
		case 'l':
			audio = new Audio('sounds/l.mp3');

			break;
		default:
			console.log('What is happing?');
			break;
	}
	audio.play();
}
function animationEffect(key) {
	document.querySelector('.' + key).classList.add('pressed');
	setTimeout(function() {
		document.querySelector('.' + key).classList.remove('pressed');
	}, 100);
}
