import AudioModel from '../src/components/audio-status';

describe('Audio', () => {
  const testAudio = new AudioModel();
  it('should set the audio on', () => {
    testAudio.musicOn = true;
    expect(testAudio.musicOn).toBeTruthy;
  });

  it('should set the audio off', () => {
    testAudio.musicOn = false;
    expect(testAudio.musicOn).toBeFalsy;
  });
});