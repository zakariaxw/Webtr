let mysong = document.getElementById("mysong");
let play = document.getElementById("play");
play.onclick=function(){
    if(mysong.paused){

        mysong.play();
        play.src="images/pause.png";
    }
    else{
        mysong.pause();
        play.src = "images/play.png";
    }

}