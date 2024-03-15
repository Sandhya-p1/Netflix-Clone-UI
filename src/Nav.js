import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const handleNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavBar);
    return () => window.removeEventListener("scroll", handleNavBar);
  }, []);
  return (
    <div
      className={`${
        show && "bg-black"
      } w-full h-[10%] p-5 fixed top-0 z-10  transition-all ease-in duration-500`}
    >
      {/* nav contents */}
      <div className="flex justify-between items-center">
        <img
          onClick={() => {
            history.push("/");
          }}
          src="https://banner2.cleanpng.com/20180702/qac/kisspng-netflix-television-show-streaming-media-film-netflix-logo-5b3a032be0bbd4.1045980715305285559205.jpg"
          className="h-10 w-14 fixed left-2 cursor-pointer top-4 "
        />
        <img
          onClick={() => {
            history.push("/profile");
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="h-10 w-10 fixed right-2 cursor-pointer top-4"
        />
      </div>
    </div>
  );
}

export default Nav;
