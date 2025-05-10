import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../buttom_navBar/navbar";

const Home = () => {
  return (
    <View style={GlobalStyles.content}>
      <Text style={GlobalStyles.heading}>כותרת</Text>
      <Text>בדיקה</Text>

      <TouchableOpacity style={[GlobalStyles.btn, GlobalStyles.btnPrimary]}>
        <Text>כפתור</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <Navbar />
    </View>
  );
};

export default Home;
