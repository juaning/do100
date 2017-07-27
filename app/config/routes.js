import React from 'react';
// import CameraRecord from '../routes/CameraRecord';
// import VideoPlayer from '../routes/VideoPlayer';
import CameraRecord from '../layouts/CameraRecord';
import VideoPlayer from '../layouts/VideoPlayer';

const routes = {
  getCameraRecordRoute() {
    return {
      renderScene(navigator) {
        return <CameraRecord navigator={navigator} />;
      },

      getTitle() {
        return 'Camera';
      },
    };
  },

  getVideoPlayerRoute() {
    return {
      renderScene(navigator) {
        return <VideoPlayer navigator={navigator} />;
      },

      getTitle() {
        return 'Preview';
      },
    };
  },
};

export default routes;
