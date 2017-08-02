import { StackNavigator } from 'react-navigation';
import AlbumExplorer from '../layouts/AlbumExplorer';
import CameraRecord from '../layouts/CameraRecord';
import VideoPlayer from '../layouts/VideoPlayer';

const AppRoutes = StackNavigator(
  {
    AlbumExplorer: { screen: AlbumExplorer },
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
