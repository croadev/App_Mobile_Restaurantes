import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils/ScreenName";

export function RestaurantScreen(props) {
  const { navigation } = props;

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };
  return (
    <>
      <View>
        <Text>Estamos en la Pantalla de restaurantes</Text>

        <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
      </View>
    </>
  );
}
