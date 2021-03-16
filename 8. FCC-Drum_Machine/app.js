// Declare vars
const clips = document.querySelectorAll('audio');
const pads = document.querySelectorAll('.container div');
const display = document.getElementById('display');

// Event Listeners
window.addEventListener('keydown', handleKeyPress);
document.getElementById('drum-machine').addEventListener('click', handleClick);

// Functions
function handleKeyPress(e) {
  let key = e.key.toUpperCase();
  // On Keypress
  clips.forEach(clip => {
    if(key === clip.id) {
      clip.play();
      clip.currentTime = 0;
      // Display the key
      display.querySelector('h4').innerText = `${clip.id} is playing.` 
    }   
  });
  // Add active class
  pads.forEach(pad =>{
    if(key === pad.id){
        pad.classList.add('active');
        setTimeout( () => pad.classList.remove('active'), 250);
    }
  });
  
}

function handleClick(e) {
  let key = e.target.id;
  
  // On Click
  clips.forEach(clip => {
    if(key === clip.id) {
      clip.play();
      clip.currentTime = 0;
      // Display the key
      display.querySelector('h4').innerText = `${clip.id} is playing.`
    }
  });
  // Add active class
  pads.forEach(pad =>{
    if(key === pad.id){
        pad.classList.add('active');
        setTimeout( () => pad.classList.remove('active'), 250);
    }
  });
}
