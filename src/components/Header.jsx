import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSearchView = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(`${error.message} (${error.code})`);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-b from-black/90 to-black/0 px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
          <img
            className="w-24 md:w-32 lg:w-40"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix"
          />

          {user && (
            <div className="flex gap-2 md:gap-4">
              <button
                className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-300"
                onClick={handleSearchView}
              >
                GPT Search
              </button>
              <button
                className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
