// prompt to enter a song
const parseNote = function() {

  let music = window.prompt("Enter a song to play"); // prompt for user input
  let musicArray = music.split(" "); // split the music string into an array
  let arr = []; // initialize the array

  for (let i = 0; i < musicArray.length; i++) { // looping through the array
    let note = musicArray[i].split("*"); // splitting the array on a * input
    let obj = {};
    let beat = 1;
    let pitch = musicArray[i];
    if (note.length > 1) { // looping to locate the second element of the musicArray
      beat = note[1];
      pitch = note[0];
    }
    obj.pitch = pitch.toUpperCase(); // all strings will be made uppercase
    obj.beats = parseInt(beat); // parsing the input after the * into an integer
    arr.push(obj);
  }
  return arr;
};

const onComplete = function () {
   console.log('Song finished playing');
}

playSong(parseNote(), 100, onComplete);

// Bonus
// When the song if finished playing, prompt the user for another song, forever! Hint: You can pass an optional 3rd parameter to playSong, a function that will get called when the song is finished playing, as shown below.
