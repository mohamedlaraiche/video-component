import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Replay10Icon from '@material-ui/icons/Replay10';
import Forward10Icon from '@material-ui/icons/Forward10';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import './controlBar.css';
function ControlsBar({
  playHandler,
  screenHandler,
  muteHandler,
  rewindHandler,
  forwardHandler,
  volumeUpHandler,
  volumeDownHandler,
  playIcon,
  muteIcon,
  fullScreen,
  volume,
  played,
  controlSet,
}) {
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
    return (
      <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
        {children}
      </Tooltip>
    );
  }
  return (
    <div className='cb' id={controlSet}>
      <div className='vol'>
        <span>
          {muteIcon === true ? (
            <VolumeUpIcon onClick={muteHandler} />
          ) : (
            <VolumeOffIcon onClick={muteHandler} />
          )}
        </span>
        <Slider
          min={0}
          max={100}
          value={volume * 100}
          ValueLabelComponent={ValueLabelComponent}
          onChange={volumeUpHandler}
          onChangeCommitted={volumeDownHandler}
          className='vs'
        />
      </div>
      <div className='play'>
        <span>
          <Replay10Icon onClick={rewindHandler} />
        </span>
        <span>
          {playIcon === true ? (
            <PlayArrowIcon onClick={playHandler} />
          ) : (
            <PauseIcon onClick={playHandler} />
          )}
        </span>
        <span>
          <Forward10Icon onClick={forwardHandler} />
        </span>
      </div>
      <div className='progress'>
        <span>00:00</span>{' '}
        <Slider
          min={0}
          max={100}
          ValueLabelComponent={ValueLabelComponent}
          value={played * 100}
          className='ps'
        />{' '}
        <span>00:00</span>
      </div>
      <div className='fullscreen'>
        <span>
          {fullScreen === false ? (
            <FullscreenIcon onClick={screenHandler} />
          ) : (
            <FullscreenExitIcon onClick={screenHandler} />
          )}
        </span>
      </div>
    </div>
  );
}

export default ControlsBar;
