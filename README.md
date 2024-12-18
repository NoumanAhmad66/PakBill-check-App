# Pakbill Project

This is a mobile application built using **Expo SDK 50**, **React Native**, and other modern libraries. This README will guide you through the setup and running of the app on your local machine.

## Technologies Used

- **Expo SDK 50**: Framework for building universal React applications with native capabilities.
- **React Native**: Core framework for building the mobile app's UI.
- **React Navigation**: For navigation and routing within the app.
- **React Native Paper**: Material Design components for React Native.
- **React Native WebView**: To embed web content inside the app.
- **Async Storage**: For local storage management.
- **React Native Vector Icons**: For customizable icons.

## Prerequisites

Ensure you have the following tools installed:

- **Node.js** (version 16 or higher)
- **Expo CLI** (for running the app in development)
- **Android Studio** or **Xcode** (for running the app on Android or iOS, respectively)

## Installation Instructions

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/NoumanAhmad66/PakBill-check-App.git
cd pakbill
```

### 2. Install Dependencies

Make sure you have `npm` or `yarn` installed. If not, you can follow the [npm installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [Yarn installation guide](https://classic.yarnpkg.com/en/docs/install).

Then, install the project dependencies:

```bash
npm install
```

or if you're using Yarn:

```bash
yarn install
```

### 3. Install the Correct Version of Expo Go

Since the project is using **Expo SDK 50**, you need to install **Expo Go version 50** to avoid compatibility issues.

1. **Uninstall the current Expo Go version** (if already installed):
   - On Android: Go to **Settings** > **Apps** > **Expo Go** > **Uninstall**.
   - On iOS: Long press the **Expo Go** app icon and select **Delete App**.

2. **Install Expo Go version 50**:
   Run the following command to install the correct version of Expo Go that is compatible with SDK 50:

   ```bash
   expo install expo-go@50
   ```

### 4. Start the Project

After installing the dependencies and Expo Go, you can now start the development server.

```bash
npm start
```

This will open **Expo DevTools** in your browser. From here, you can scan the QR code with your Expo Go app (installed in the previous step) to run the project on your Android/iOS device or emulator.

Alternatively, use the following commands to run the app on a specific platform:

- For **Android**:
  ```bash
  npm run android
  ```

- For **iOS**:
  ```bash
  npm run ios
  ```

- For **Web**:
  ```bash
  npm run web
  ```

## Project Structure

- **/assets**: Contains images and other static files.
- **/components**: Reusable React components for the app’s UI.
- **/navigation**: Contains the app’s navigation setup.
- **/screens**: Screens or pages that make up the app.
- **/src**: Source code, utilities, and services.

## Key Dependencies

Here are the key dependencies used in this project:

- **`@react-navigation/native`**: For app navigation.
- **`expo-linear-gradient`**: To create gradient effects in the UI.
- **`react-native-paper`**: Material Design components.
- **`react-native-vector-icons`**: Icons for UI components.
- **`react-native-webview`**: For embedding web content.
- **`react-native-async-storage/async-storage`**: For local data storage.
- **`expo-status-bar`**: To manage the status bar.
- **`@expo/metro-runtime`**: Metro bundler runtime for Expo apps.

