import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image } from "react-native-elements";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils/ScreenName";
import { LoginForm } from "../../../components2/auth";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.Register);
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <Text onPress={goToRegister}>Registrarse</Text>
      </View>
    </ScrollView>
  );
}
