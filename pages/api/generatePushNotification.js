// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var webPush = require('web-push');

export default function handler(req, res) {

try {
    var pushSubscription = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v1/gAAAAABiTA_wya7iEmTg1OoLFnp3hrXIzux1WuRcUmgXNXjPn6hkRz2U1cR7aMZkZrcdjNSSO0nZ_o2h5zQ0xv4Qe0mF6DUEaDPGmdF0_No6HnPhqo7o5BT99l42qM9x4ciUfAg-D3g8"}
    // var payload = 'Here is a payload!';
    var options = {
    //   gcmAPIKey: 'AIzaSyD1JcZ8WM1vTtH6Y0tXq_Pnuw4jgj_92yg',
      TTL: 60
    };
    
    webPush.sendNotification(
      pushSubscription,
    //   payload,
    //   options
    );
    res.status(200).send()
} catch (err) {
    res.status(500).send()
}
}
  