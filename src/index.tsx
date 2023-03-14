import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-db-inspector' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const DbInspectorModule = NativeModules.DbInspector;

const DbInspectorNative = DbInspectorModule
  ? DbInspectorModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const show = Platform.select({
  android: DbInspectorNative.show,
  ios: () => {
    // TODO
  },
}) as () => void;

const DbInspector = {
  show,
};

export default DbInspector;
