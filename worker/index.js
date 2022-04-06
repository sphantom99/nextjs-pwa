self.addEventListener('notificationclose', function(e){
    var notification = e.notification
    console.log('closed notification: ', notification)
})
self.addEventListener('message', event => {
    // HOW TO TEST THIS?
    // Run this in your browser console: 
    //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
    // OR use next-pwa injected workbox object
    //     window.workbox.messageSW({command: 'log', message: 'hello world'})
    console.log(event.data)
  })
  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    // var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      console.log('notificationclickevent triggered')
      clients.openWindow('http://www.example.com');
      notification.close();
    }
  });
  self.addEventListener('push', function(e) {
      console.log(e)
    var options = {
      body: 'This notification was generated from a push!',
      data: {
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Explore this new world'},
        {action: 'close', title: 'Close'}
      ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
      );
});