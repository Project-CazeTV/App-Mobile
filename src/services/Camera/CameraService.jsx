import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useFaceDetector } from 'react-native-vision-camera-face-detector';

export default function FaceCheck() {
  const devices = useCameraDevices();
  const device = devices.front;

  const { detectFaces } = useFaceDetector({
    performanceMode: 'fast',
  });

  if (!device) return null;

  return (
    <Camera
      style={{ flex: 1 }}
      device={device}
      isActive={true}
      frameProcessor={(frame) => {
        'worklet';

        const faces = detectFaces(frame);

        if (faces.length > 0) {
          console.log("Rosto detectado");
        }
      }}
    />
  );
}