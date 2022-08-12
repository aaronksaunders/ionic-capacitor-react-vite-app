# ionic-capacitor-react-vite-app

This template should help get you started developing with React Ionic and Capacitor using Vite.

Updated 8/11/22

## Getting Live Reload To Work In You Vite Ionic Project

I dont use Live reload that often, but this is a manual approach to get it going with the Vite project

**First Start Your Server**
```
aaronksaunders@Aarons-14MacBookProM1Pro my-react-app % npm run dev

> my-react-app@0.0.0 dev
> vite


  VITE v3.0.6  ready in 359 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
12:57:47 AM [vite] hmr update /src/App.tsx
```


**Then modify `capacitor.config.ts`** using the address the server is running on from the command above
```
const config: CapacitorConfig = {
  appId: 'my.react.app',
  appName: 'my-react-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  server : {
    "url" : "http://127.0.0.1:5173/"  //<= use address the server is running on locally
  }
};
```
**And finally deploy your app to the device**
```
aaronksaunders@Aarons-14MacBookProM1Pro my-react-app % npx cap run ios --external  --target=73CE91C9-4855-496B-9481-CA486652E9D7
✔ Copying web assets from dist to ios/App/App/public in 12.83ms
✔ Creating capacitor.config.json in ios/App/App in 1.35ms
✔ copy ios in 25.05ms
✔ Updating iOS plugins in 1.96ms
[info] Found 4 Capacitor plugins for ios:
       @capacitor/app@4.0.1
       @capacitor/haptics@4.0.1
       @capacitor/keyboard@4.0.1
       @capacitor/status-bar@4.0.1
✔ Updating iOS native dependencies with pod install in 2.53s
✔ update ios in 2.56s
✔ Running xcodebuild in 3.20s
✔ Deploying App.app to 73CE91C9-4855-496B-9481-CA486652E9D7 in 1.51s
aaronksaunders@Aarons-14MacBookProM1Pro my-react-app % 
```
Now your mobile app is pointing to the local server running and you basically have live-reload working. I am certain there is another approach, but like I said I don't use it often enough. Hopefully, this gets you moving

**REMEMBER**
remove the edit to the `capacitor.config.ts` before deploying to production otherwise the app will be looking for the local server to run the app !!