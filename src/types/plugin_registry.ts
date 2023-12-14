export type PluginRegistry = {
    getUserId: () => string;
    registerComponent: (key: string, component: React.ElementType) => void;
};
