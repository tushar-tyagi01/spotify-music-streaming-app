console.log("welcome to spotify");
let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
     { songName: "Jhoome Jo Pathan", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Let Me Love You", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Lal Pari", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kesariya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Tum Hi Ho", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Natu Natu", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" }
]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
         masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
}
)
let next=document.getElementById('next');
next.addEventListener('click',()=>{
    if(songindex>=songs.length-1){
       songindex=0;
    }
    else{
        songindex++;
    }
    audioElement.src=songs[songindex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
let back=document.getElementById('back');
back.addEventListener('click',()=>{
    if(songindex<=0){
        songindex=songs.length-1;
    }
    else{
        songindex--;
    }
    audioElement.src=songs[songindex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
let icon=document.getElementsByClassName('songplayitem');

