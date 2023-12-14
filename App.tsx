import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

import {PluginRegistryProvider} from './src/plugin_registry';

import {PluginsView} from './src/plugins_view';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PluginRegistryProvider>
        <PluginsView/>
      </PluginRegistryProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
