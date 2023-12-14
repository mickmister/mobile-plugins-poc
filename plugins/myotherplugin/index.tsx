import {StyleSheet, Text, View} from 'react-native';
import {PluginRegistry} from '../../src/types/plugin_registry';

class MyPlugin {
    init = (pluginRegistry: PluginRegistry) => {
        const userId = pluginRegistry.getUserId();
        pluginRegistry.registerComponent('myothiehgiwhg', () => (
            <MyComponent
                userId={userId}
            />
        ));
    }
}

type MyComponentProps = {
    userId: String;
}

const MyComponent = ({userId}: MyComponentProps) => {
    return (
        <View style={styles.container}>
            <Text>
                My Other Plugin
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});


export default new MyPlugin();
