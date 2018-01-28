# die-illustrierte-app
> The mobile frontend for a news site for German class about the novel "Der goldne Topf". Content etc. is fictional, obviously.

## Build Setup

``` bash
# FOR THE WEB
# install dependencies with npm:
npm install
# OR with yarn:
yarn install
# install the ionic cli globaly (run this with sudo) with npm:
npm install -g ionic
# OR with yarn (run this with sudo as well):
yarn global add ionic
# serve with hot reloading at localhost:8100:
ionic serve

# FOR ANDROID
# run the steps for the web first, except for ionic serve
# make sure you have gradle, android studio (with the SDKs you need in ~/Android/Sdk) and java installed
# setting the path's is a bit weird (thank you gradle):
sudo nano /etc/profile # Or use Vim, your choice
# now enter the following at the bottom of the file (change yourusername to your username, obviously):
ANDROID_HOME=/home/yourusername/Android/Sdk
JAVA_HOME=/usr/lib/jvm/default-java
# CTRL-O and CTRL-X to save and exit
# You now have to either log in and out or run the command above to reload the variables
source /etc/profile
# gradle is weird, it did not use my JAVA_HOME. I had to do the following:
# create a symlink for the java version you want to use
sudo ln -sf /usr/lib/jvm/java-1.8.0-openjdk-amd64/jre/bin/java /usr/lib/jvm/default-java
# choose the one you've created the symlink to with the following command (on Ubuntu/Debian) (remember, arrays start at 0, just like this selection dialog)
sudo update-alternatives --config javac
# That should be it!
# Now compile the APK
ionic cordova build android
```

## Choose UI Look
If you don't own a device but you want to test the app for it, just set the UI mode to the one you'd like to use in ```./src/app/app.module.ts``` and run in web mode/on the device you have:


Change line ```IonicModule.forRoot(MyApp),``` to ```IonicModule.forRoot(MyApp, {mode: <var>'yourmode'</var>}),``` with <var>'yourmode'</var> being either <var>'md'</var> (Android), <var>'ios'</var> (Apple) or <var>'wp'</var> (Windows Phone).