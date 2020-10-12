import {reject} from 'lodash';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let sound: Sound;

const initPlayer = (filePath: string) => {
  return new Promise((resolve, reject) => {
    sound = new Sound(filePath, '', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(sound);
      }
    });
  });
};

const playComplete = () => {
  return new Promise((resolve, reject) => {
    sound.play((success) => {
      if (success) {
        resolve(sound);
      } else {
        reject();
      }
    });
  });
};

const stop = () => {
  return new Promise((resolve, reject) => {
    if (sound) {
      sound.stop(() => {
        resolve();
      });
    } else {
      reject();
    }
  });
};

const getCurrentTime = () => {
  return new Promise((resolve, reject) => {
    if (sound && sound.isLoaded()) {
      sound.getCurrentTime((seconds) => {
        resolve(seconds);
      });
    } else {
      reject();
    }
  });
};

const getDuration = () => {
  if (sound) {
    return sound.getDuration();
  }
  return 0;
};

export {sound, initPlayer, playComplete, stop, getCurrentTime, getDuration};

""