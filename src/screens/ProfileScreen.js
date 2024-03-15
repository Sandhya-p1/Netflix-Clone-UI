import React from "react";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="bg-black text-white h-screen ">
      <Nav />
      <div className=" py-40  space-y-3">
        <h1 className="text-center text-4xl">Edit Profile</h1>
        <div className="flex  space-x-3 justify-center ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="h-20  "
          />
          <div className="space-y-4 w-2/5">
            <h2 className="bg-gray-400 w-full p-3  text-sm">{user.email}</h2>
            <div>
              <h1 className="font-medium">Plans (Current Plans:premium)</h1>
              <div className="border border-gray-200 w-full" />
            </div>
            <p className="profiletext">Renewal date: 10/05/2024</p>
            <div className="flex justify-between items-center">
              <h1 className=" profiletext">
                Netflix Standard <br />
                <span>1080p</span>
              </h1>
              <button className="profilebtn bg-red-500">Subscribe</button>
            </div>
            <div className="flex justify-between items-center">
              <h1 className=" profiletext">
                Netflix Basic
                <br />
                <span>480p</span>
              </h1>
              <button className="profilebtn bg-red-500">Subscribe</button>
            </div>
            <div className="flex justify-between items-center">
              <h1 className=" profiletext">
                Netflix Premium <br />
                <span>4K+HDR</span>
              </h1>
              <button className="profilebtn bg-red-500">Subscribe</button>
            </div>
            <button
              onClick={() => auth.signOut()}
              className="bg-red-600 rounded-sm hover:bg-red-700 text-white w-full text-center py-2 font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
