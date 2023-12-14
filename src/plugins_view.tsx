import React from 'react';
import {usePluginComponents} from './plugin_registry';
import {StyleSheet, Text, View} from 'react-native';

export const PluginsView = () => {
    const {components} = usePluginComponents();

    return (
        <div>
            {Object.entries(components).map(([key, Component]) => (
                <View style={styles.container}>
                    <View style={styles.pluginContainer}>
                        <Text>
                            View Id: {key}
                        </Text>
                        <Component key={key} />
                    </View>
                </View>
            ))}
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 50,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginBottom: 30,
    },
    pluginContainer: {
        padding: 50,
        border: '5px solid',
        marginBottom: 30,
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
