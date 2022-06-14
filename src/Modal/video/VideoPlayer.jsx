import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import ControlBar from '../controls/ControlsBar';
import Poster from '../poster/Poster';
// Video source
const source = 'https://www.youtube.com/watch?v=7nRg2mWN-hY';

function ReactPlayerTest() {
  const player = useRef(null);
  const RPRef = useRef(null);
  const [state, setState] = useState({
    volume: 0.5,
    played: 0,
  });
  const { volume, played } = state;
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [playIcon, setPlayIcon] = useState(true);
  const [muteIcon, setMuteIcon] = useState(false);
  const [poster, setPoster] = useState('poster');
  const [fullScreenSize, setFullScreenSize] = useState('400px');
  const [controlSet, setcontrolSet] = useState(null);
  const playHandler = () => {
    setPlay(play === false ? true : false);
    setPlayIcon(playIcon === true ? false : true);
    setPoster(poster === 'poster' ? 'noPoster' : 'poster');
  };
  const muteHandler = () => {
    setMute(mute === true ? false : true);
    setMuteIcon(muteIcon === true ? false : true);
  };
  const screenHandler = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(player.current);
    }
    setFullScreen(fullScreen === false ? true : false);
    setFullScreenSize(fullScreenSize === '400px' ? '100%' : '400px');
    setcontrolSet('video');
  };
  const rewindHandler = () => {
    RPRef.current.seekTo(RPRef.current.getCurrentTime() - 10);
  };
  const forwardHandler = () => {
    RPRef.current.seekTo(RPRef.current.getCurrentTime() + 10);
  };
  const volumeUpHandler = (e, newValue) => {
    setState({ ...state, volume: parseFloat(newValue / 100) });
    setMute(mute === 0 ? true : false);
  };
  const volumeDownHandler = (e, newValue) => {
    setState({ ...state, volume: parseFloat(newValue / 100) });
  };
  const progressHandler = (changeState) => {
    console.log(changeState);
    setState(...state, ...changeState);
  };

  return (
    <div>
      <div ref={player} className='wrapper'>
        {/* <Poster playHandler={playHandler} poster={poster} /> */}
        <div className='videoHolder'>
          <ReactPlayer
            width={'80%'}
            onClick={playHandler}
            volume={volume}
            poster={poster}
            ref={RPRef}
            playing={play}
            muted={mute}
            url={source}
            config={{
              youtube: {
                preload: true,
              },
              vimeo: {
                preload: true,
              },
            }}
            onProgress={progressHandler}
          />
        </div>
        <div className='controlHolder'>
          <ControlBar
            playHandler={playHandler}
            screenHandler={screenHandler}
            muteHandler={muteHandler}
            rewindHandler={rewindHandler}
            forwardHandler={forwardHandler}
            volumeUpHandler={volumeUpHandler}
            volumeDownHandler={volumeDownHandler}
            playIcon={playIcon}
            muteIcon={muteIcon}
            fullScreen={fullScreen}
            volume={volume}
            played={played}
            controlSet={controlSet}
          />
        </div>
      </div>
    </div>
  );
}

export default ReactPlayerTest;
