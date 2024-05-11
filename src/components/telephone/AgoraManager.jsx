import { useEffect, useState } from 'react';
import {
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteUsers,
  RemoteUser,
  LocalVideoTrack,
  useClientEvent,
} from 'agora-rtc-react';
import './telemedicine.css';
import { CiMicrophoneOff, CiMicrophoneOn } from 'react-icons/ci';
import { ProfileCircle, Video, VideoSlash } from 'iconsax-react';
import { MdOutlineCallEnd } from 'react-icons/md';
import Logo from '../../assets/Logo.png';

const AgoraManager = ({ AppID, channelName, token, uid }) => {
  // Retrieve local camera and microphone tracks and remote users
  const agoraEngine = useRTCClient();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const { isLoading: isLoadingMic, localMicrophoneTrack } =
    useLocalMicrophoneTrack();

  const remoteUsers = useRemoteUsers();
  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(false);
  const [isCameraMuted, setIsCameraMuted] = useState(false);
  const [noOfPeopleOnCall, setNoOfPeopleOnCall] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [endSession, setEndSession] = useState(false);
  const [showEndSessionModal, setShowEndSessionModal] = useState(false);

  useEffect(() => {
    setNoOfPeopleOnCall(remoteUsers.length);
  }, [remoteUsers]);

  // Publish local tracks
  usePublish([localMicrophoneTrack, localCameraTrack]);

  // Join the Agora channel with the specified configuration
  useJoin({
    appid: AppID,
    channel: channelName,
    token: token || null,
    uid: uid || null,
  });

  useClientEvent(agoraEngine, 'user-joined', (user) => {
    console.log('The user', user.uid, 'has joined the channel');
  });

  useClientEvent(agoraEngine, 'user-left', (user) => {
    console.log('The user', user.uid, 'has left the channel');
  });

  useClientEvent(agoraEngine, 'user-published', (user, mediaType) => {
    console.log('The user', user.uid, 'has published media in the channel');
  });

  useEffect(() => {
    return () => {
      localCameraTrack?.close();
      localMicrophoneTrack?.close();
    };
  }, []);

  useEffect(() => {
    const getAndSetTime = setInterval(() => {
      const currentTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(new Date());
      setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(getAndSetTime);
  }, []);

  const toggleEndSession = () => {
    setShowEndSessionModal(!showEndSessionModal);
  };

  const toggleWebcam = () => {
    localCameraTrack.setMuted(!isCameraMuted);
    setIsCameraMuted(!isCameraMuted);
  };

  const toggleMicrophone = () => {
    localMicrophoneTrack.setMuted(!isMicrophoneMuted);
    setIsMicrophoneMuted(!isMicrophoneMuted);
  };

  const handleEndCall = () => {
    setEndSession(true);
    setTimeout(() => {
      window.close();
    }, 3000);
  };

  const VideoContainer = ({ children, variant, bg }) => (
    <div
      className={` ${
        variant
          ? 'relative w-[400px] h-[250px]'
          : 'relative w-full max-w-[800px] h-3/4'
      } ${bg ? bg : ''} `}
      id="video-container">
      {children}
    </div>
  );

  const MicContainer = ({ children }) => (
    <span
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '50%',
        padding: '8px',
        cursor: 'pointer',
      }}>
      {children}
    </span>
  );

  const UsernameContainer = ({ children }) => (
    <span
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        fontSize: '16px',
        color: '#F5F5F5',
        backgroundColor: '#362F2E',
        textAlign: 'center',
        fontWeight: 400,
        borderRadius: '20px',
      }}>
      {children}
    </span>
  );

  const Controls = () => {
    return (
      <>
        <div className="flex flex-row self-center bg-[#F5F5F5] p-4 rounded-[20px] sm:w-[393.9px] gap-2 w-full items-center justify-around">
          <button
            className={`${
              isMicrophoneMuted ? 'bg-[#E4D7D5]' : 'bg-[#fff]'
            } rounded-[100px] w-[40px] h-[40px] flex items-center justify-center`}
            onClick={toggleMicrophone}>
            {isMicrophoneMuted ? (
              <CiMicrophoneOff size={24} color="#C00010" />
            ) : (
              <CiMicrophoneOn size={24} />
            )}
          </button>
          <button
            onClick={toggleEndSession}
            className="p-2 flex flex-col sm:flex-row items-center gap-2 bg-[#f737a7] rounded-lg bg-Tmred text-white w-[119px]">
            <MdOutlineCallEnd color="#fff" size={24} />
            <span>End Call</span>
          </button>
          <button
            className={`${
              isCameraMuted ? 'bg-[#E4D7D5]' : 'bg-[#fff]'
            } rounded-[100px] w-[40px] h-[40px] flex items-center justify-center`}
            onClick={toggleWebcam}>
            {isCameraMuted ? (
              <VideoSlash size={24} color="#C00010" />
            ) : (
              <Video size={24} color="#534341" />
            )}
          </button>
        </div>
      </>
    );
  };

  const ControlContainer = () => (
    <div className="flex sm:flex-row flex-col justify-evenly gap-2 sm:items-center w-full bg-[#cc9bb769] p-4 mt-8 rounded-[20px]">
      <p className="text-[14px] font-medium text-center sm:text-left">
        {currentTime}
      </p>
      <Controls />
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-[30px]" />
        <div className="flex items-center text-[#f737a7]">
          <h2 className="text-2xl font-semibold"> DeLiCeCuiSiNe</h2>
        </div>
      </div>
    </div>
  );

  if (isLoadingMic || isLoadingCam)
    return <div className="flex justify-center">Loading devices...</div>;

  if (!localCameraTrack || !localMicrophoneTrack)
    return (
      <div className="flex justify-start flex-col ">
        Preparing session please wait...
      </div>
    );

  if (endSession)
    return (
      <div className="flex justify-start flex-col ">
        Session will end in the next 3 seconds...
      </div>
    );

  if (noOfPeopleOnCall === 0) {
    return (
      <div className="flex flex-wrap justify-center items-center box-border h-screen">
        <div className="flex items-center justify-center">
          <h3 className="bg-[#f737a7] rounded-[200px] my-3 py-4 px-3 mr-7 text-[18px] text-[#fff] text-center sm:w-fit">
            Waiting for customer to join call...
          </h3>
        </div>
        <VideoContainer>
          {isCameraMuted ? (
            <div className="w-full h-full relative overflow-hidden">
              <div className="w-full h-full bg-lightTmrRed flex justify-center items-center">
                <ProfileCircle size={100} color="#222" />
              </div>
            </div>
          ) : (
            <LocalVideoTrack
              track={localCameraTrack}
              play={true}
              style={{ width: '100%', height: '100%' }}
            />
          )}
          {localMicrophoneTrack && (
            <MicContainer>
              {isMicrophoneMuted ? (
                <CiMicrophoneOff size={24} color="#C00010" />
              ) : (
                <CiMicrophoneOn size={24} />
              )}
            </MicContainer>
          )}
          <UsernameContainer>
            <p className="py-2 px-3">You</p>
          </UsernameContainer>
        </VideoContainer>
        <ControlContainer />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4 justify-center items-center box-border h-screen">
        <VideoContainer bg="bg-lightTmrRed">
          {isCameraMuted ? (
            <div className="w-full h-full flex justify-center items-center">
              <ProfileCircle size={100} color="#222" />
            </div>
          ) : (
            <LocalVideoTrack
              track={localCameraTrack}
              play={true}
              style={{ width: '100%', height: '100%' }}
            />
          )}
          {localMicrophoneTrack && (
            <MicContainer>
              {isMicrophoneMuted ? (
                <CiMicrophoneOff size={24} color="#C00010" />
              ) : (
                <CiMicrophoneOn size={24} />
              )}
            </MicContainer>
          )}
          <UsernameContainer>
            <p className="py-2 px-3">You</p>
          </UsernameContainer>
        </VideoContainer>
        {remoteUsers.map((remoteUser) => (
          <>
            {remoteUser.hasVideo ? (
              <VideoContainer key={remoteUser.uid}>
                <RemoteUser
                  user={remoteUser}
                  playVideo={true}
                  playAudio={true}
                  style={{ width: '100%', height: '100%' }}
                />
                <MicContainer>
                  {remoteUser.hasAudio ? (
                    <CiMicrophoneOn size={24} />
                  ) : (
                    <CiMicrophoneOff size={24} color="#C00010" />
                  )}
                </MicContainer>
                <UsernameContainer>
                  <p className="py-2 px-3">{remoteUser.uid}</p>
                </UsernameContainer>
              </VideoContainer>
            ) : (
              <VideoContainer key={remoteUser.uid} bg="bg-lightTmrRed">
                <div className="w-full h-full flex justify-center items-center">
                  <ProfileCircle size={100} color="#222" />
                </div>
                <MicContainer>
                  {remoteUser.hasAudio ? (
                    <CiMicrophoneOn size={24} />
                  ) : (
                    <CiMicrophoneOff size={24} color="#C00010" />
                  )}
                </MicContainer>
                <UsernameContainer>
                  <p className="py-2 px-3">{remoteUser.uid}</p>
                </UsernameContainer>
              </VideoContainer>
            )}
          </>
        ))}
      </div>
      <ControlContainer />
    </div>
  );
};

export default AgoraManager;
