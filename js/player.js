//start audio sources
const flumeAudio = document.querySelector('#flume');
const sanAudio = document.querySelector('#san');
const rufusAudio = document.querySelector('#rufus');
const diploAudio = document.querySelector('#diplo');
//end audio sources

//start flume buttons
const flumePlay = document.querySelector('.flume-play');
const flumePause = document.querySelector('.flume-pause');
const flumeRestart = document.querySelector('.flume-restart');

flumePlay.addEventListener('click', function() {
    flumeAudio.play();
    diploAudio.pause();
    diploAudio.currentTime = 0;
    sanAudio.pause();
    sanAudio.currentTime = 0;
    rufusAudio.pause();
    rufusAudio.currentTime = 0;
});

flumePause.addEventListener('click', function() {
    flumeAudio.pause();
});

flumeRestart.addEventListener('click', function() {
    flumeAudio.currentTime = 0;
});
//end flume buttons

//start san buttons
const sanPlay = document.querySelector('.san-play');
const sanPause = document.querySelector('.san-pause');
const sanRestart = document.querySelector('.san-restart');

sanPlay.addEventListener('click', function() {
    sanAudio.play();
    diploAudio.pause();
    diploAudio.currentTime = 0;
    flumeAudio.pause();
    flumeAudio.currentTime = 0;
    rufusAudio.pause();
    rufusAudio.currentTime = 0;
});

sanPause.addEventListener('click', function() {
    sanAudio.pause();
});

sanRestart.addEventListener('click', function() {
    sanAudio.currentTime = 0;
});
//end san buttons

//start rufus buttons
const rufusPlay = document.querySelector('.rufus-play');
const rufusPause = document.querySelector('.rufus-pause');
const rufusRestart = document.querySelector('.rufus-restart');

rufusPlay.addEventListener('click', function() {
    rufusAudio.play();
    diploAudio.pause();
    diploAudio.currentTime = 0;
    flumeAudio.pause();
    flumeAudio.currentTime = 0;
    sanAudio.pause();
    sanAudio.currentTime = 0;
});

rufusPause.addEventListener('click', function() {
    rufusAudio.pause();
});

rufusRestart.addEventListener('click', function() {
    rufusAudio.currentTIme = 0;
});
//end rufus buttons

//start diplo buttons
const diploPlay = document.querySelector('.diplo-play');
const diploPause = document.querySelector('.diplo-pause');
const diploRestart = document.querySelector('.diplo-restart');

diploPlay.addEventListener('click', function() {
    diploAudio.play();
    flumeAudio.pause();
    flumeAudio.currentTime = 0;
    sanAudio.pause();
    sanAudio.currentTime = 0;
    rufusAudio.pause();
    rufusAudio.currentTime = 0;
});

diploPause.addEventListener('click', function() {
    diploAudio.pause();
});

diploRestart.addEventListener('click', function(){ 
    diploAudio.currentTime = 0;
});
//end diplo buttons