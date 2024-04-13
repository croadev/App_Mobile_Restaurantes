import { ScrollView } from "react-native";
import React from "react";
import { Text, Button, Image } from "react-native-elements";
import { styles } from "./UserGuestScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/ScreenName";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.Login);
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Perfil de la App</Text>
      <Text style={styles.description}>
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado mas y
        comenta como ha sido tu experiencia
      </Text>

      <Button
        tittle="Ver Tu Perfil"
        onPress={goToLogin}
        style={styles.btnStyles}
      />
    </ScrollView>
  );
}
