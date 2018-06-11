# Die Illustrierte App

The mobile frontend for a news site for German class about the novel "Der goldne Topf". Content etc. is fictional, obviously.

## Demo

> TODO: Add demo

## Usage

### Web

```bash
# Install dependencies:
npm install
# Install the ionic cli globaly (run this with sudo):
npm install -g ionic
# Serve with hot reloading at localhost:8100:
ionic serve
```

### Android

```bash
# Run the steps for the web first, except for ionic serve
# Make sure you have gradle, android studio (with the SDKs you need in ~/Android/Sdk) and java installed
# Setting the path's is a bit weird (thank you gradle):
sudo nano /etc/profile # Or use Vim, your choice
# Now enter the following at the bottom of the file (change yourusername to your username, obviously):
ANDROID_HOME=/home/yourusername/Android/Sdk
JAVA_HOME=/usr/lib/jvm/default-java
# CTRL-O and CTRL-X to save and exit
# You now have to either log in and out or run the command above to reload the variables
source /etc/profile
# Gradle is weird, it did not use my JAVA_HOME. I had to do the following:
# Create a symlink for the java version you want to use
sudo ln -sf /usr/lib/jvm/java-1.8.0-openjdk-amd64/jre/bin/java /usr/lib/jvm/default-java
# Choose the one you've created the symlink to with the following command (on Ubuntu/Debian) (remember, arrays start at 0, just like this selection dialog)
sudo update-alternatives --config javac
# That should be it!
# Now compile the APK
ionic cordova build android
# You'll find the APK in ./platforms/android/build/outputs/apk/android-debug.apk
```

## Configuration

If you don't own a device but you want to test the app for it, just set the UI mode to the one you'd like to use in `./src/app/app.module.ts` and run in web mode/on the device you have:

Change line `IonicModule.forRoot(DieIllustrierte),` to `IonicModule.forRoot(DieIllustrierte, {mode: <var>'yourmode'</var>}),` with `<var>'yourmode'</var>` being either `<var>'md'</var>` (Android), `<var>'ios'</var>` (Apple) or `<var>'wp'</var>` (Windows Phone).

## Screenshots

> TODO: Add screenshots

## Documentation

> TODO: Add docs

## Deployment

> TODO: Add deployment

## License

Die Illustrierte App
Copyright (C) 2018 Felix Pojtinger

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
