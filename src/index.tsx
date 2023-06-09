import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-db-inspector' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const DbInspectorModule = isTurboModuleEnabled
  ? require('./NativeDbInspector').default
  : NativeModules.DbInspector;

const DbInspector = DbInspectorModule
  ? DbInspectorModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default {
  show: Platform.select({
    android: DbInspector.show,
    ios: () => {
      // TODO
    },
  }),
};
