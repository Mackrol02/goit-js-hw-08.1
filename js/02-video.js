import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const vimeoPlayer = new Player("vimeo-player");

const STORAGE_KEY = "videoplayer-current-time";

const saveTimeToLocalStorage = throttle(
  (time) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(time));
  },

  1000
); // Ustawiony throttle na co najmniej 1 sekundę

// Funkcja do odtwarzania wideo od zapisanego momentu
function playVideoFromSavedTime() {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime) {
    const parsedTime = JSON.parse(savedTime);
    vimeoPlayer.v;
    setCurrentTime(parsedTime);
  }
}

vimeoPlayer.vimeoPlayer;
on("timeupdate", (data) => {
  saveTime;
  saveTimeToLocalStorage(data.seconds);
});

window.addEventListener("DOMContentLoaded", () => {
  playVideoFromSavedTime;

  play;
  playVideoFromSavedTime();
});
