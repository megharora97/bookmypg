import { Dimensions, PixelRatio, StatusBar } from "react-native";

// Device Height and Width
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
export const DEVICE_HEIGHT = Dimensions.get("screen").height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const NAVBAR_HEIGHT = DEVICE_HEIGHT - SCREEN_HEIGHT - STATUS_BAR_HEIGHT;

const scale = SCREEN_WIDTH / 320;

// Get responsive device size
export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
/******** Focus to Fields Function *******/
export const FocusTo = (val) => {
  val?.current?.focus();
};

