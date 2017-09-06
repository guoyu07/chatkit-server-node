var ChatKit = require('../target/index');

// var PusherPlatform = require('../node_modules/pusher-platform-node/target/index');

// Just for local testing where using self signed certs
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const baseClient = new PusherPlatform.BaseClient({
//   host: 'localhost',
//   port: 10443
// })

const chatkit = new ChatKit.default({
  instanceId: 'v1:us1:example',
  key: 'your:key'
});

chatkit.createRoomRole(
  'admin-another',
  ['message:create', 'room:leave', 'room:members:add']
).then(() => {
  console.log('Success');
}).catch((err) => {
  console.log(err);
});
