import React from 'react';
import Modal from 'react-modal';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

Modal.setAppElement('#root');

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        padding: '1px',
        overflow: 'hidden',
        borderRadius: '28px',
        border:'none',
        backdropFilter: 'sblur(10px)',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        height: 'auto', 
    },
};

const ReviewModal = ({ isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Review Modal"
            style={customModalStyles} // Apply the custom styles
            overlayClassName="fixed inset-0 bg-white bg-opacity-60 backdrop-blur drop-shadow-2xl"
        >
            <div className="modal-card p-5 mt-2 fade-in rounded-3xl overflow-none w-80 h-80 sm:h-96 sm:w-auto ">
                <button className="absolute top-3 mr-3 bg-card text-secondary rounded-3xl p-1 right-2" onClick={closeModal}>
                    <AiOutlineClose size={20} />
                </button>

                {/* Star rating */}
                <div className="flex items-center mb-7 cursor-pointer">
                    <div className="text-yellow-400 mr-2">
                        <BsStarFill size={20} />
                    </div>
                    <div className="text-yellow-400 mr-2">
                        <BsStarFill size={20} />
                    </div>
                    <div className="text-yellow-400 mr-2">
                        <BsStarFill size={20} />
                    </div>
                    <div className="text-yellow-400 mr-2">
                        <BsStarFill size={20} />
                    </div>
                    <div className="text-gray-400">
                        <BsStar size={20} />
                    </div>
                </div>

                {/* Title field */}
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 bg-card border rounded-xl mb-4 focus:outline-none"
                />

                {/* Message textarea */}
                <textarea
                    placeholder="Description"
                    className="w-full p-2 bg-card border rounded-xl mb-4 h-40 focus:outline-none"
                />

                {/* Submit button */}
                <button className="bg-space-gray text-white py-2 mb-4 px-4 rounded-3xl float-right">
                    Submit
                </button>
            </div>
        </Modal>
    );
};

export default ReviewModal;
