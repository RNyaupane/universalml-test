import React from 'react';
import Modal from 'react-modal';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import bigAppLogo from '../assets/ai-store-images/app-logo-big.png'

Modal.setAppElement('#root');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    padding: '1px',
    overflow: 'hidden',
    borderRadius: '28px',
    border: 'none',
    backdropFilter: 'sblur(10px)',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
  },
};

const RemoveAppModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Review Modal"
      style={customModalStyles} // Apply the custom styles
      overlayClassName="fixed inset-0 bg-white bg-opacity-60 backdrop-blur drop-shadow-2xl "
    >
      <div className="modal-card p-10 mt-2 fade-in rounded-3xl overflow-none w-[330px] md:w-[450px] h-full ">
                <button className="absolute top-3 mr-3 bg-card text-secondary rounded-3xl p-1 right-2" onClick={closeModal}>
                    <AiOutlineClose size={20} />
                </button>

        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-lg md:text-2xl font-semibold md:my-4 text-center">Are you sure you want to <br/>remove the app?</h3>
          <img src={bigAppLogo} alt="Logo" className="object-contain w-28 h-28 md:w-32 md:h-32 " />
          <p className='text-sm md:text-base'>Task manager AI</p>
          <button className="bg-card text-red-500 font-bold mt-10 md:mt-16 w-full py-2 md:py-3 rounded-3xl cursor-pointer">Remove</button>
        </div>
      </div>

    </Modal>
  );
};

export default RemoveAppModal;
