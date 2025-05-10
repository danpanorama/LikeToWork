import { View, TouchableOpacity } from "react-native";
import { navigations } from "../data";
import { GlobalStyles } from "../styles/GlobalStyles";

const Navbar = () => {
  return (
    <View style={GlobalStyles.navbarContainer}>
      {navigations.map((item) => {
        const IconComponent = item.iconLib; // קבלת הקומפוננטה של האייקון
        return (
          <TouchableOpacity key={item.id} style={GlobalStyles.iconBtn}>
            <IconComponent name={item.iconName} size={30} color="black" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;
