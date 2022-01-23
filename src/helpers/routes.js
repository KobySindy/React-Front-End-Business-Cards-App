import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { FaUserPlus, FaUserTie, FaSignInAlt } from "react-icons/fa";

import { TiBusinessCard, TiStarFullOutline } from "react-icons/ti";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import AddEditCardPage from "../pages/AddEditCardPage";
import BusinessRegistrationPage from "../pages/BusinessRegistrationPage";
import SimpleRegistrationPage from "../pages/SimpleRegistrationPage";
import MyCardsPage from "../pages/MyCardsPage";
import BusinessCardsPage from "../pages/BusinessCardsPage";
import FavoriteCardsPage from "../pages/FavoriteCardsPage";

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
  // {
  //   name: "About",
  //   href: "/about",
  //   page: AboutPage,
  //   state: DISPLAY_STATES.GENERAL,
  //   icon: <FcAbout></FcAbout>,
  // },
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
    name: "Favorites",
    href: "/favorite-cards",
    page: FavoriteCardsPage,
    state: DISPLAY_STATES.PRIVATE,
    icon: <TiStarFullOutline />,
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
    href: "/add-edit-card",
    page: AddEditCardPage,
    state: DISPLAY_STATES.HIDDEN,
  },
];

export function routesFilter(user, routes, DISPLAY_STATES) {
  const isLoggedIn = Boolean(user._id);
  const isbiz = user.biz;

  const filterdRoutes = routes
    .map((route, index) => {
      if (route.state === DISPLAY_STATES.HIDDEN && !isLoggedIn) {
        return null;
      }
      if (route.state === DISPLAY_STATES.PRIVATE && !isLoggedIn) {
        return null;
      }
      if (route.state === DISPLAY_STATES.LOGGED_OUT && isLoggedIn) {
        return false;
      }

      if (route.state === DISPLAY_STATES.IS_BIZ && !isbiz) {
        return null;
      }
      return {
        key: index,
        to: route.href,
        as: Link,
        icon: route.icon,
        name: route.name,
      };
      // <Link key={index} to={route.href} as={Link}>
      //   {route.icon} {route.name}
      // </Link>
    })
    .filter(Boolean);

  return filterdRoutes;
}
