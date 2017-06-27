// export default {
//   SERVER_URL: 'ws://localhost:3000/websocket',
//   // SERVER_URL: 'ws://192.168.1.102:3000/websocket',
//   errorStyles: {
//     text: { color: '#fff' },
//     container: { backgroundColor: '#F44336' },
//   },
// };


// tip oon dynamically seting trype of url based on Platformhttp
// learn.handlebarlabs.com/courses/127542/lectures/1866772/comments/310365

import { Platform } from 'react-native';

export default {
  SERVER_URL: Platform.OS === 'ios' ? 'ws://localhost:3000/websocket' : 'ws://192.168.1.101:3000/websocket',
  errorStyles: {
    text: { color: '#fff' },
    container: { backgroundColor: '#F44336' },
  },
};
