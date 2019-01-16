console.log('Service Worker loaded');

//Listen for push event
self.addEventListener('push', e => {
  const data = e.data.json();
  console.log("Push Recieved...");

  //Send notification
  self.registration.showNotification(data.title, {
    body: 'Notification from Nodejs',
    icon: 'https://www.capshun.co/wp-content/uploads/2018/11/sticky-logo-copy-3-1.png'
  })
})