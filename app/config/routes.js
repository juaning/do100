import { StackNavigator } from 'react-navigation';
import CameraRecord from '../layouts/CameraRecord';
import VideoPlayer from '../layouts/VideoPlayer';

const AppRoutes = StackNavigator(
  {
    CameraRecord: { screen: CameraRecord },
    VideoPlayer: { screen: VideoPlayer },
    Index: {
      screen: CameraRecord,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  },
);

export default AppRoutes;
