import { Platform } from "react-native";

export default {
    android: Platform.OS === "android",
    ios: Platform.OS === "ios",
    mac: Platform.OS === "macos",
    windows: Platform.OS === "windows",
    web: Platform.OS === "web"
}