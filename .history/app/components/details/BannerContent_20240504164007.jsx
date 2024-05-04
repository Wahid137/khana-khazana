const BannerContent = ({ recipeInfo, handleShareButtonClick }) => {
  return (
    <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
      <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
        {recipeInfo?.name}
      </h2>
      <p className="text-xs text-[#eb4a36] italic my-2">
        {recipeInfo?.category}
      </p>
      <p className="text-gray-600 text-sm my-6 leading-6">
        {recipeInfo?.description}
      </p>

      <div className="flex gap-4 justify-center divide-x my-12">
        <div className="flex-1 text-center">
          <h3 className="font-medium text-lg text-gray-700 mt-2">Prep time</h3>
          <p className="text-gray-500 text-sm">{recipeInfo?.activeTime}</p>
        </div>
        <div className="flex-1 text-center">
          <h3 className="font-medium text-lg text-gray-700 mt-2">Cook time</h3>
          <p className="text-gray-500 text-sm">{recipeInfo?.totalTime}</p>
        </div>
        <div className="flex-1 text-center">
          <h3 className="font-medium text-lg text-gray-700 mt-2">Servings</h3>
          <p className="text-gray-500 text-sm">{recipeInfo?.serves}</p>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <div
          className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
          onClick={() => handleShareButtonClick("facebook")}
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-share"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="18" cy="18" r="3"></circle>
            <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"></line>
            <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"></line>
          </svg>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
