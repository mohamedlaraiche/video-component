import Modal from '@material-ui/core/Modal';
import VideoPlayer from './video/VideoPlayer';
import './modal.css';

const SimpleModal = ({ open, closeModal }) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div className='modalWrapper'>
          <div className='closeBtn'>
            <button onClick={closeModal}> X</button>
          </div>
          <VideoPlayer />
        </div>
      </Modal>
    </div>
  );
};

export default SimpleModal;
