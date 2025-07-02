import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { changeLanguage } from "../../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const navItems = [
    { name: "Home", path: "/browse" },
    { name: "TV Shows", path: "/shows" },
    { name: "Movies", path: "/movies" },
    { name: "Web Series", path: "/webseries" },
  ];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    if (showGptSearch) {
      // If already in GPT search, go back to previous page
      navigate(-1); // Or navigate to a specific default page
    } else {
      // If not in GPT search, navigate to GPT search page
      navigate("/gptsearch");
    }
    // Toggle the GPT search view state
    dispatch(toggleGptSearchView());

    // Toggle GPT Search

    // dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {user && location.pathname !== "/" && (
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <p
                key={item.name}
                className="text-white text-lg hover:text-gray-300 transition cursor-pointer text-sm font-medium"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
      {user && location.pathname !== "/" && (
        <div className="flex p-2 justify-between ">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="flex items-center gap-2 py-2 px-5 mx-4 text-white font-medium rounded-full bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 shadow-md transition-all duration-300"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search "}
          </button>
          <img
            className="hidden md:block w-12 h-12 rounded-sm "
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            ( Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
