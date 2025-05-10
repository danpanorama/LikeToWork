import { AntDesign, FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';

export const navigations = [
  {
    id: 1,
    iconLib: AntDesign,
    iconName: "home", // מסך בית
    to: "home",
  },
  {
    id: 2,
    iconLib: FontAwesome,
    iconName: "heart", // לב
    to: "favorites",
  },
  {
    id: 3,
    iconLib: FontAwesome,
    iconName: "user", // פרופיל
    to: "profile",
  },
  {
    id: 4,
    iconLib: Feather,
    iconName: "search", // חיפוש
    to: "search",
  },
];
