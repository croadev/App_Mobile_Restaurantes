import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import { SearchScreen } from "../components/SearchScreen";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.search.search}
        component={SearchScreen}
        options={{ title: "Busqueda" }}
      />
    </Stack.Navigator>
  );
}
