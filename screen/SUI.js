import React, { useState } from 'react';
import { View ,Linking} from 'react-native';
import { WebView } from 'react-native-webview';

const SUI = () => {
  const initialUrl = 'https://suigasbills.pk/';
  const [webViewUrl, setWebViewUrl] = useState(initialUrl);

  const customCSS = `
  p,nav,h1,h2,span,ul,li, .site-footer {
    display: none !important;
}
.gngpl-bills-form{
  margin-bottom: 25px !important;
}
`;

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
  const handleLinkPress = (event) => {
    const { url } = event;

    // Handle links internally within the app
    if (url && url.includes('suigasbills.pk')) {
      // Use Linking to open the URL within the app
      Linking.openURL(url);

      // Prevent the WebView from loading the URL
      return false;
    }

    // Allow the WebView to handle external links
    return true;
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: webViewUrl }}
        style={{ flex: 1 }}
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScriptBeforeContentLoaded={`
          var style = document.createElement('style');
          style.innerHTML = ${JSON.stringify(customCSS)};
          document.head.appendChild(style);
        `}
        onShouldStartLoadWithRequest={handleLinkPress}
      />
    </View>
  );
};

export default SUI;
