import {Image, StyleSheet, Text, View} from 'react-native';
import {PluginRegistry} from '../../src/types/plugin_registry';

class MyPlugin {
    init = (pluginRegistry: PluginRegistry) => {
        const userId = pluginRegistry.getUserId();
        pluginRegistry.registerComponent('github', () => (
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
                GitHub plugin
            </Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png',
                }}
            />
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
