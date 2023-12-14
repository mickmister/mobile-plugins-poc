import React, {useState, createContext, useContext, PropsWithChildren, useEffect} from 'react';

import {PluginRegistry} from './types/plugin_registry';
import {getUserIdFromDatabase} from './db';
import {initPlugins} from './loadedPlugins';

const defaultRegistry: PluginRegistry = {
    registerComponent: () => { /* Default implementation or empty function */},
    getUserId: () => '',
};

// Context to hold registered components
const PluginComponentsContext = createContext<{
    components: {[key: string]: React.ElementType};
    registry: PluginRegistry;
}>({
    components: {},
    registry: defaultRegistry,
});

export const usePluginComponents = () => {
    return useContext(PluginComponentsContext);
};

export const PluginRegistryProvider = ({children}: PropsWithChildren) => {
    const [components, setComponents] = useState<{[key: string]: React.ElementType}>({});

    const registerComponent = (key: string, component: React.ElementType) => {
        setComponents(prev => ({...prev, [key]: component}));
    };

    const registry: PluginRegistry = {
        getUserId: getUserIdFromDatabase,
        registerComponent,
    };

    useEffect(() => {
        initPlugins(registry);
    }, []);

    const Provider = PluginComponentsContext.Provider;

    return (
        <Provider value={{
            components,
            registry,
        }}>
            {children}
        </Provider>
    );
};
