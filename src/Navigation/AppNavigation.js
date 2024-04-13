import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { RestaurantStack } from "./RestaurantStack";
import { FavoriteStack } from "./FavoriteStack";
import { AccountStack } from "./AccountStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { screen } from "../utils/ScreenName";

import { SearchScreen } from "../components/SearchScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00A680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => iconChange(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Busqueda" }}
      />
      <Tab.Screen
        name={screen.favorite.tab}
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
    </Tab.Navigator>
  );
}

function iconChange(route, color, size) {
  let iconName;

  if (route.name === screen.restaurant.tab) {
    iconName = "silverware-fork-knife";
  }

  if (route.name === screen.favorite.tab) {
    iconName = "heart-outline";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name === screen.account.tab) {
    iconName = "account";
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
