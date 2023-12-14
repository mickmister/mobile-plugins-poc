import {Text, View} from 'react-native';
import {PluginRegistry} from '../../src/types/plugin_registry';

class MyPlugin {
    init = (pluginRegistry: PluginRegistry) => {
        const userId = pluginRegistry.getUserId();
        pluginRegistry.registerComponent('mycomponent', () => (
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
        <View>
            <Text>
                My Plugin
            </Text>
        </View>
    );
};

export default new MyPlugin();
