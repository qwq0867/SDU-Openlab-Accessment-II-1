var player;
var playBtn;
var pauseBtn;
var isPlaying; 
var file;
var source;
window.onload=function()
{
    player=document.getElementById("player");
    playBtn=document.getElementById("playBtn");
    pauseBtn=document.getElementById("pauseBtn");
    file=document.getElementById("fileSelector");
    source=document.getElementById("videoSource");
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
function loadvideo()
{
    
    //player.src=file.files[0];
    var myurl=URL.createObjectURL(file.files[0]);
    source.src=myurl;
    player.load();
}