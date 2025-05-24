import { useCallback } from 'react';
import useSound from 'use-sound';

const useSoundEffects = (soundEnabled) => {
  const [playPlace] = useSound('/assets/sounds/place.mp3', { volume: 0.5 });
  const [playVanish] = useSound('/assets/sounds/vanish.mp3', { volume: 0.5 });
  const [playWin] = useSound('/assets/sounds/win.mp3', { volume: 0.5 });
  const [playBackground] = useSound('/assets/sounds/background.mp3', {
    volume: 0.3,
    loop: true,
  });

  const playSound = useCallback(
    (type) => {
      if (!soundEnabled) return;
      switch (type) {
        case 'place':
          playPlace();
          break;
        case 'vanish':
          playVanish();
          break;
        case 'win':
          playWin();
          break;
        case 'background':
          playBackground();
          break;
        default:
          break;
      }
    },
    [soundEnabled, playPlace, playVanish, playWin, playBackground]
  );

  return { playSound };
};

export default useSoundEffects;
