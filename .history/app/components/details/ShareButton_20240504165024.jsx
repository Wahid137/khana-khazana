const ShareButton = ({ handleShareButtonClick }) => {
  return (
    <div
      onClick={() => handleShareButtonClick("facebook")}
      className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M8.7 10.7l6.6 -3.4" />
        <path d="M8.7 13.3l6.6 3.4" />
      </svg>
      <span>Share</span>
    </div>
  );
};

export default ShareButton;
