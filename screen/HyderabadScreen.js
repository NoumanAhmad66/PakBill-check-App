import React, { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const HyderabadScreen = () => {
  const initialUrl = 'http://portal.wasahyd.com.pk:9323/ords/wasa/r/duplicate-bill/';
  const [webViewUrl, setWebViewUrl] = useState(initialUrl);

  const handleNavigationStateChange = (newNavState) => {
    // Check if the URL is about:blank
    if (newNavState.url && newNavState.url.toLowerCase() === 'about:blank') {
      // Reset the WebView URL to the initial URL
      setWebViewUrl(initialUrl);
    } else {
      // Update the URL to show the new page within the WebView
      setWebViewUrl(newNavState.url);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: webViewUrl }}
        style={{ flex: 1 }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

export default  HyderabadScreen;
