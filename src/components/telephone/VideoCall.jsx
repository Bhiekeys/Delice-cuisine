import { useEffect, useState } from 'react';
import { AgoraRTCProvider, useRTCClient } from 'agora-rtc-react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import AgoraManager from './AgoraManager';

const VideoCall = () => {
  const agoraEngine = useRTCClient(
    AgoraRTC.createClient({ codec: 'vp8', mode: 'rtc' })
  );
  const AppID = import.meta.env.VITE_REACT_AGORA_APP_ID;
  console.log("here is appId", AppID)

  const [isLoading, setIsLoading] = useState(false);

  // Function to check camera and microphone permissions
  const checkPermissions = () => {
    // Check if camera permission is granted
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        console.log('Camera permission granted');
        // Access to camera is allowed
      })
      .catch(function (error) {
        console.log('Camera permission denied');
        // Access to camera is not granted
        // Request camera permission
        requestCameraPermission();
      });

    // Check if microphone permission is granted
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        console.log('Microphone permission granted');
        // Access to microphone is allowed
      })
      .catch(function (error) {
        console.log('Microphone permission denied');
        // Access to microphone is not granted
        // Request microphone permission
        requestMicrophonePermission();
      });
  };

  // Function to request camera permission
  const requestCameraPermission = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        console.log('Camera permission granted');
        // Camera permission is now granted
      })
      .catch(function (error) {
        console.log('Camera permission denied');
        // Camera permission is still denied
      });
  };

  // Function to request microphone permission
  const requestMicrophonePermission = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        console.log('Microphone permission granted');
        // Microphone permission is now granted
      })
      .catch(function (error) {
        console.log('Microphone permission denied');
        // Microphone permission is still denied
      });
  };

  useEffect(() => {
    // Call the checkPermissions function to start checking permissions
    checkPermissions();
  }, []);

  return (
    <div className="flex flex-col flex-1 justify-center bg-white w-full p-4 ">
      {isLoading ? (
        <div className="flex justify-center items-center py-64">
          <h2>Loading . . .</h2>
        </div>
      ) : (
        <div className="bg-white w-full">
          <div className="flow-root px-2 mx-4 mt-2">
            <h1 className="float-left text-[#201A19] text-[28px] font-semibold">
              Consumer Video Call
            </h1>
            <div className="float-right">
              <button className="flex justify-center items-center text-xs border-[1px] border-[#857371] rounded-[10px] text-red px-4 py-2">
                Invite Staff
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-between mx-4 mt-4">
            <AgoraRTCProvider client={agoraEngine}>
              <div className="md:w-full w-2/3 p-4">
                <AgoraManager
                  channelName="bhiekeys"
                  AppID={AppID}
                  token=""
                  uid=""
                />
              </div>
            </AgoraRTCProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCall;
