import React from "react";

function Button() {
  function Click(){
    const about = document.querySelector("#about");
    about.scrollIntoView({behavior:"smooth",block:"end"});
  }
  return (
    <div className="flex justify-self-center p-2 pl-4 items-center rounded-full bg-yellow-400 hover:bg-yellow-200" onClick={Click} >
      <div className="text-white">더 알아보기</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10"
        viewBox="0 0 20 20"
        fill="currentColor"
        color="white"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Button;
