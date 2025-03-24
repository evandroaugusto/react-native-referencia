import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { AppRouter } from './router';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  const [isSplashReady, setIsSplashReady] = React.useState(false);

  React.useEffect(() => {
    setIsSplashReady(true);
  },[]);

  if(!isSplashReady) {
    return null;
  }

  return (
    <AppRouter />
  );
}
