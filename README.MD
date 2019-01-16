# Web Notification in Nodejs

This project is in Node.js, which is use Node.js, Express, Webpush and some other packages to push the notification.

### Usage

```sh
$ npm install
```

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
```
### Example
The best part is that how would you generate the keys

```javascript

1. // Navigate to the folder from terminal

2. //Go to the webpush nodemodules like
./node_modules/.bin/web-push

3. //Run command
generate-vapid-keys

ex=>  ./node_modules/.bin/web-push generate-vapid-keys (to generate the keys)
```

#### Other way Generate keys

```javascript
// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();
```

For more info please check [web-push](https://www.npmjs.com/package/web-push#usage)

#### Using VAPID Key for applicationServerKey

When using your VAPID key in your web app, you'll need to convert the URL safe base64 string to a Uint8Array to pass into the subscribe call, which you can do like so:

```javascript
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

```
For more info please check [web-push](https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey)


### Keys

Open "keys.js" and add your publicVapidKey, privateVapidKey:

## Authors

[Sumit Kumar](https://github.com/sumitkumar1207)
