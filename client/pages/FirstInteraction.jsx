import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../styles/GlobalStyles";

const FirstInteraction = () => {
  const navigation = useNavigation();

  return (
    <View style={{ gap: 16 }}>
      <TouchableOpacity
        style={[GlobalStyles.btn, GlobalStyles.btnPrimary]}
        onPress={() => navigation.navigate("SignUp")} // שם המסך שאליו אתה רוצה לנווט
      >
        <Text style={GlobalStyles.btnText}>הרשמה</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyles.btn, GlobalStyles.btnSecondary]}
        onPress={() => navigation.navigate("Home")} // שם המסך השני
      >
        <Text style={GlobalStyles.btnTextAlt}>התחברות</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstInteraction;
