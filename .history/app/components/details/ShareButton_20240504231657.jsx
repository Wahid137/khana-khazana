// components/ShareButton.js
"use client";

import { useState } from "react";
import Modal from "react-modal";
import { FacebookShareButton, TwitterShareButton } from "react-share";

Modal.setAppElement("#root");

const ShareButton = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Share Modal"
      >
        <h2>Share via:</h2>
        <FacebookShareButton url={url}>
          <span>Facebook</span>
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <span>Twitter</span>
        </TwitterShareButton>
        {/* Add more share buttons for other social media platforms */}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default ShareButton;
