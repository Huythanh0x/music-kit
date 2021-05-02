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

function playSound(key) {
	switch (key) {
		case 'f':
			var audio = new Audio('sounds/f.mp3');
			audio.play();
			break;
		case 'a':
			var audio = new Audio('sounds/a.mp3');
			audio.play();
			break;
		case 's':
			var audio = new Audio('sounds/s.mp3');
			audio.play();
			break;
		case 'd':
			var audio = new Audio('sounds/d.mp3');
			audio.play();
			break;
		case 'j':
			var audio = new Audio('sounds/j.mp3');
			audio.play();
			break;
		case 'k':
			var audio = new Audio('sounds/k.mp3');
			audio.play();
			break;
		case 'l':
			var audio = new Audio('sounds/l.mp3');
			audio.play();
			break;
		default:
			console.log('What is happing?');
			break;
	}	
}
function animationEffect(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
    
}   
