$(document).ready(function () {
    var playing = false,
        artistname = $(".artist-name"),
        musicName = $(".music-name"),
        time = $(".time"),
        fillBar = $(".fillBar");

    let audioData = [];

    var song = new Audio();
    var CurrentSong = 0;
    window.onload = load();

    function load() {

        audioData = [
            {
                name: "Genius ft. Sia, Diplo, Labrinth",
                artist: "Sia",
                src:
                    "audio/1.mp3",
            },
            {
                name: "Gimme Gimme",
                artist: "INNA",
                src:
                    "audio/2.mp3",
            },
            {
                name: "'TMM TMM' prod. by Miksu",
                artist: "Summer Cem",
                src: "audio/3.mp3"
            }
        ];

        artistname.html(audioData[CurrentSong].artist);
        musicName.html(audioData[CurrentSong].name);
        song.src = (audioData[CurrentSong].src);
    }

    function playSong() {
        var curSong = audioData[CurrentSong];
        artistname.html(curSong.artist);
        musicName.html(curSong.name);
        song.src = (curSong.src);
        song.play();
        $("#play").addClass("fa-pause");
        $("#play").removeClass("fa-play");
        $("img").addClass("active");
        $(".player-track").addClass("active")
    }

    song.addEventListener("timeupdate", function() {
        
        var position = (100 / song.duration) * song.currentTime;
        var current = song.currentTime;
        var duration = song.duration;
        var durationMinute = Math.floor(duration / 60);
        var durationSecond = Math.floor(duration - durationMinute * 60);
        var durationLabel = durationMinute + ":" + durationSecond; 
            currentSecond = Math.floor(current);
            currentMinute = Math.floor(currentSecond / 60);
            currentSecond = currentSecond - (currentMinute * 60);
           // currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
             if(currentSecond < 10){
                 ( currentSecond = "0" + currentSecond);
             }
        var currentLabel = currentMinute + ":" + currentSecond;
        var indicatorLabel = currentLabel + " / " + durationLabel

        fillBar.css("width", position + '%');
        
        $(".time").html(indicatorLabel);
        
    });


    $("#play").click(function playOrPause() {
        if (song.paused) {
            song.play();
            playing = true;
            $("#play").addClass("fa-pause");
            $("#play").removeClass("fa-play");
            $("img").addClass("active");
        } else {
            song.pause();
            playing = false;
            $("#play").removeClass("fa-pause");
            $("#play").addClass("fa-play");
            $("img").removeClass("active");
        }
    });

    $("#prev").click(function prev() {
        CurrentSong--;
        if (CurrentSong < 0) {
            CurrentSong = 2;
        }
        playSong();
    });

    $("#next").click(function next() {
        CurrentSong++;
        if (CurrentSong > 2) {
            CurrentSong = 0;
        }
        playSong();
    });
});  