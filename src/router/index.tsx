import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrivateNavigator, PrivateNavigatorParamList } from "./PrivateNavigator";
import { PublicNavigator, PublicNavigatorParamList } from "./PublicNavigator";
import { useAuthStore } from "../features/store/auth.store";

export type RootStackParamList = PrivateNavigatorParamList & PublicNavigatorParamList;
export type StackNavigation = NavigationProp<RootStackParamList>;

export const StackNav = createNativeStackNavigator<RootStackParamList>();

export const AppRouter = () => {
  const isAuthenticated = useAuthStore(state => state.isLoggedIn());

  return <NavigationContainer  linking={{
    enabled: true,
    prefixes: ['heteroidentificacao://'],
  }}>
    {isAuthenticated ? <PrivateNavigator /> : <PublicNavigator />}
  </NavigationContainer>
}
