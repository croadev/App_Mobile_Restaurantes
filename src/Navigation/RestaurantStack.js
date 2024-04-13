import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import { RestaurantScreen } from "../components/Restaurants/RestaurantScreen";
import { AddRestarantsScreens } from "../components/Restaurants/AddRestarantsScreens";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantScreen}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestarantsScreens}
        options={{ title: "Nuevo Restaurante" }}
      />
    </Stack.Navigator>
  );
}
