import { StackNavigator } from 'react-navigation';
import AlbumExplorer from '../layouts/AlbumExplorer';
import CameraRecord from '../layouts/CameraRecord';
import GoogleSigninLayout from '../layouts/GoogleSigninLayout';
import VideoPlayer from '../layouts/VideoPlayer';

const AppRoutes = StackNavigator(
  {
    AlbumExplorer: { screen: AlbumExplorer },
    CameraRecord: { screen: CameraRecord },
    GoogleSigninLayout: { screen: GoogleSigninLayout },
    VideoPlayer: { screen: VideoPlayer },
    Index: {
      // screen: CameraRecord,
      screen: GoogleSigninLayout,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  },
);

export default AppRoutes;
