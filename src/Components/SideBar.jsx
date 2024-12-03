import React from "react";
import { IoMdClose } from "react-icons/io";

const SideBar = ({ sidebar, SetSideBar }) => {
  return (
    <>
      <div
        className={`${
          !sidebar && "-translate-x-full"
        } transition transform ease-in-out duration-500 h-screen w-screen absolute z-10 top-0 left-0 bottom-0 p-4 bg-[#1B1833]`}
      >
        <div
          onClick={() => SetSideBar(!sidebar)}
          className="h-8 w-8 absolute right-3 top-3"
        >
          <IoMdClose className="h-full w-full" />
        </div>
        <h1 className="text-3xl my-28">This is Side Bar</h1>
      </div>
    </>
  );
};

export default SideBar;
