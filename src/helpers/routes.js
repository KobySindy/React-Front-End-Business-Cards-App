import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SignInPage from "../pages/SignInPage";
import UpsetCardPage from "../pages/UpsetCardPage";
import BusinessRegistrationPage from "../pages/BusinessRegistrationPage";
import SimpleRegistrationPage from "../pages/SimpleRegistrationPage";
import MyCardsPage from "../pages/MyCardsPage";
import { BiHome } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FaUserPlus, FaUserTie, FaSignInAlt } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import BusinessCardsPage from "../pages/BusinessCardsPage";

export const DISPLAY_STATES = {
  GENERAL: 1,
  PRIVATE: 2,
  LOGGED_OUT: 3,
  IS_BIZ: 4,
  HIDDEN: 5,
};

export const routes = [
  {
    name: "Home",
    href: "/home",
    page: HomePage,
    state: DISPLAY_STATES.GENERAL,
    icon: <BiHome> </BiHome>,
  },
  {
    name: "About",
    href: "/about",
    page: AboutPage,
    state: DISPLAY_STATES.GENERAL,
    icon: <FcAbout></FcAbout>,
  },
  {
    name: "Simple Registration",
    href: "/simple-registration",
    page: SimpleRegistrationPage,
    state: DISPLAY_STATES.LOGGED_OUT,
    icon: <FaUserPlus></FaUserPlus>,
  },
  {
    name: "Business Registration",
    href: "/business-registration",
    page: BusinessRegistrationPage,
    state: DISPLAY_STATES.LOGGED_OUT,
    icon: <FaUserTie></FaUserTie>,
  },
  {
    name: "Business Cards",
    href: "/business-cards",
    page: BusinessCardsPage,
    state: DISPLAY_STATES.PRIVATE,
    icon: <FaUserTie></FaUserTie>,
  },
  {
    name: "My Cards",
    href: "/my-cards",
    page: MyCardsPage,
    state: DISPLAY_STATES.IS_BIZ,
    icon: <TiBusinessCard></TiBusinessCard>,
  },
  {
    name: "Sign In",
    href: "/sign-in",
    page: SignInPage,
    state: DISPLAY_STATES.LOGGED_OUT,
    icon: <FaSignInAlt></FaSignInAlt>,
  },
  {
    href: "/upset-card",
    page: UpsetCardPage,
    state: DISPLAY_STATES.HIDDEN,
  },
];
