import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoriteScreem } from "../components/FavoriteScreem";
import { screen } from "../utils/ScreenName";

const Stack = createNativeStackNavigator();

export function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorite.favorites}
        component={FavoriteScreem}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
