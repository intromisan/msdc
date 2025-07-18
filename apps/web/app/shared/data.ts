import { NavigationLink } from "./types";

export const navigationLinks: NavigationLink[] = [
  {
    title: "Главная",
    isSelected: true,
    path: "/",
  },
  {
    title: "Для бизнеса",
    isSelected: false,
    path: "/business",
  },
  {
    title: "Программа",
    isSelected: false,
    path: "/courses",
  },
  {
    title: "Отзывы",
    isSelected: false,
    path: "/reviews",
  },
  {
    title: "FAQ",
    isSelected: false,
    path: "/faq",
  },
];
