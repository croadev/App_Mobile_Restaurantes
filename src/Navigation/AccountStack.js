import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import { LoginScreen } from "../components/Account/LoginScreen";
import { Account } from "../components/Account/Account";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={Account}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.Login}
        component={LoginScreen}
        options={{ title: "Iniciar Sesión" }}
      />
    </Stack.Navigator>
  );
}
