import { LoginScreen } from "../features/screens/Login"
import { NotFoundScreen } from "../features/screens/NotFound"
import { RecuperarSenhaScreen } from "../features/screens/RecuperarSenha"

import { StackNav } from ".";

export type PublicNavigatorParamList = {
  Login: undefined;
  RecuperarSenha: undefined;
  NotFound: undefined;
};

export const PublicNavigator = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Login"
        component={LoginScreen}
      />

      <StackNav.Screen
        name="RecuperarSenha"
        component={RecuperarSenhaScreen}
      />
    </StackNav.Navigator>
  )
}