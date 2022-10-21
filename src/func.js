var player;
var playBtn;
var pauseBtn;
var isPlaying; 
window.onload=function()
{
    player=document.getElementById("player");
    playBtn=document.getElementById("playBtn");
    pauseBtn=document.getElementById("pauseBtn");
    isPlaying=false;
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function playvideo()
{
    player.play();
    isPlaying=true;
    playBtn.style.display="none";
    pauseBtn.style.display="flex";
}
function pausevideo()
{
    player.pause();
    isPlaying=false;
    pauseBtn.style.display="none";
    playBtn.style.display="flex";
}