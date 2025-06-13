import { ConfigContext } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.saurabhp75.expotutorial.dev';
  }

  if (IS_PREVIEW) {
    return 'com.saurabhp75.expotutorial.preview';
  }

  return 'com.saurabhp75.expotutorial';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'ExpoTutorial (Dev)';
  }

  if (IS_PREVIEW) {
    return 'ExpoTutorial (Preview)';
  }

  return 'ExpoTutorial: A Complete Guide';
};


export default ({ config }: ConfigContext) => ({
  ...config,
  name: getAppName(),
  slug: "expo-tutorial",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "expotutorial",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: getUniqueIdentifier(),
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: "38a8a6dd-41c1-47a8-845d-188704290701",
    },
  },
});
