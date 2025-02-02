import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/Favorites",
    name: "Favorites",
    component: () => import("./pages/FavoritesPage"),
  },
  {
    path: "/Family",
    name: "Family",
    component: () => import("./pages/FamilyPage"),
  },
  {
    path: "/Personal",
    name: "Personal",
    component: () => import("./pages/PersonalPage"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("./pages/ProfilePage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "PersonalRecipe",
    component: () => import("./pages/RecipeViewPagePersonal"),
  },
  {
    path: "/recipe/:recipeId",
    name: "FamilyRecipe",
    component: () => import("./pages/RecipeViewPageFamily"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
