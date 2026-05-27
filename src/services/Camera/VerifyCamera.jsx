import { Platform } from "react-native";
import { useEffect, useState } from "react";

export default function VerifyCamera() {
  const [CameraComponent, setCameraComponent] = useState(null);

  useEffect(() => {
    async function loadCamera() {
      if (Platform.OS !== "web") {
        const module = await import("./CameraService");
        setCameraComponent(() => module.default);
      }
    }

    loadCamera();
  }, []);

  if (Platform.OS === "web") {
    return null;
  }
  if (!CameraComponent) return null;
  return <CameraComponent />;
}