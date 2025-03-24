import { AgendamentosScreen } from "../features/screens/Agendamentos"
import { AnalisesScreen } from "../features/screens/Analises"
import { AtualizarDadosScreen } from "../features/screens/AtualizarDados"
import { CandidatoCapturarMediaScreen } from "../features/screens/CandidatoCapturarMedia"
import { CandidatoGerenciarPresencaScreen } from "../features/screens/CandidatoGerenciarPresenca"
import { CandidatosScreen } from "../features/screens/Candidatos"
import { HomeScreen } from "../features/screens/Home"
import { ProdutosScreen } from "../features/screens/Produtos"

import { StackNav } from ".";
import { ProdutoDetalheScreen } from "../features/screens/ProdutosDetalhe"
import { colors } from "@core/theme/colors"

export type PrivateNavigatorParamList = {
  Produtos: undefined;
  ProdutoDetalhe: {
    produtoId: string
  },
  Home: undefined;
  Agendamentos: undefined;
  Analises: undefined;
  AtualizarDados: undefined;
  Candidatos: undefined;
  CandidatoCapturarMedia: undefined;
  CandidatoGerenciarPresenca: undefined;
};


export const PrivateNavigator = () => {
  return (
    <StackNav.Navigator screenOptions={{
      headerTitleStyle: {
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold'
      }
    }} initialRouteName="Produtos">
      <StackNav.Screen
        name="Produtos"
        component={ProdutosScreen}
      />

      <StackNav.Screen
        name="ProdutoDetalhe"
        component={ProdutoDetalheScreen}
      />

      <StackNav.Screen
        name="Home"
        component={HomeScreen}
      />

      <StackNav.Screen
        name="Agendamentos"
        component={AgendamentosScreen} />

      <StackNav.Screen
        name="Analises"
        component={AnalisesScreen} />

      <StackNav.Screen
        name="AtualizarDados"
        component={AtualizarDadosScreen} />

      <StackNav.Screen
        name="Candidatos"
        component={CandidatosScreen} />

      <StackNav.Screen
        name="CandidatoCapturarMedia"
        component={CandidatoCapturarMediaScreen} />

      <StackNav.Screen
        name="CandidatoGerenciarPresenca"
        component={CandidatoGerenciarPresencaScreen} />
    </StackNav.Navigator>
  )
}