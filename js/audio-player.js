const audioFiles = ['../music/Eyes_Rufus_Du_Sol.mp3',
                    '../music/Light_San_Holo.mp3',
                    '../music/On_My_Mind_Diplo.mp3',
                    '../music/Sleepless_Flume.mp3'];

const musicSection = document.querySelector('.music');

const musicPlayer = document.querySelector('.music audio');

const nextButton = document.querySelector('.next');


function play() {

    let i = 0;

    if (musicPlayer == null)
        throw 'playlist player does not exist...';
    else {
        musicPlayer.src = audioFiles[i];
        musicPlayer.addEventListener('ended', next, false);
        nextButton.addEventListener('click', next, false);
    }

    function next() {
        if (i == audioFiles.length - 1)
            i = 0;
        else
            i++;
        musicPlayer.src = audioFiles[i];
    }

}

play();