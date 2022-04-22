import React, { useState } from "react";
import { AiOutlineHome, AiFillAlert } from "react-icons/ai";
function Sidebar(props) {
  const [sidebarItem] = useState([
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "Setting",
      path: "/",
      icon: <AiFillAlert />,
    },
  ]);

  return (
    <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 w-14 flex flex-col ">
      {sidebarItem.map((item, _index) => {
        return (
          <div className="flex align-middle justify-center w-full cursor-pointer">
            <div className="text-white text-2xl  hover:text-gray m-4">
              {item.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
