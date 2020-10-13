import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let sound: Sound;

const initPlayer = (filePath: string) => {
  console.log('>>>>>filePath', filePath);
  return new Promise((resolve, reject) => {
    sound = new Sound(filePath, '', (error) => {
      if (error) {
        console.log('>>>>>', error);
        reject(error);
      } else {
        console.log('>>>>>sound', sound);
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

const pause = () => {
  return new Promise((resolve, reject) => {
    if (sound) {
      sound.pause(() => {
        resolve();
      });
    } else {
      reject();
    }
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

export {
  sound,
  initPlayer,
  playComplete,
  pause,
  stop,
  getCurrentTime,
  getDuration,
};
