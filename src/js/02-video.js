import Player from '@vimeo/player';
// console.log(Player);
import throttle from 'lodash/throttle';

const CURRENT_PLAYER_TIME = 'videoplayer-current-time';
  
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay (currentTime) {
    const seconds = currentTime.seconds
    localStorage.setItem(CURRENT_PLAYER_TIME, JSON.stringify(seconds))
};
 
setCurrentTime()

function setCurrentTime(){
const savedTime = localStorage.getItem(CURRENT_PLAYER_TIME);
if(!savedTime){
return
}
player.setCurrentTime(savedTime)
}