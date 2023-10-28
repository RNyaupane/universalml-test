import React, { useState, useEffect } from 'react';
import appLogoBig from '../assets/ai-store-images/app-logo-big.png';
import RemoveAppModal from '../Modal/RemoveAppModal';

const InstalledApp = () => {
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openContextMenu = (e) => {
        e.preventDefault(); // Prevent the default context menu
        setIsContextMenuOpen(true);
    };

    const closeContextMenu = () => {
        setIsContextMenuOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
        closeContextMenu(); // Close the context menu when the modal opens
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleDocumentClick = () => {
            if (isContextMenuOpen) {
                closeContextMenu();
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isContextMenuOpen]);

    return (
        <>
            <div
                className="relative md:w-[30%] lg:w-[20%]"
                onContextMenu={openContextMenu} // Handle right-click
            >
                {/* Card */}
                <div className="custom-card  flex flex-col items-center justify-between">
                    <img
                        src={appLogoBig}
                        alt="Logo"
                        className="object-contain w-[45%] lg:w-[55%] cursor-pointer"
                    />
                    <h2 className="text-center text-sm font-semibold mt-2 mb-8">
                        Task manager AI
                    </h2>
                </div>

                {/* Overlapping Button (Context Menu) */}
                {isContextMenuOpen && (
                    <div className="absolute top-[-5px] right-[-45px]">
                        <button onClick={openModal} className="text-xs lg:text-sm bg-[#F5F5F5] text-red-500 px-3 py-2 rounded-xl fade-in">
                            <i className="bi bi-trash pr-1"></i> Remove app
                        </button>
                    </div>
                )}
                <RemoveAppModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </>
    );
};

export default InstalledApp;
