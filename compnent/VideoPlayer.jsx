import React from 'react';
import Head from 'next/head'; // Import the Head component from Next.js

const MaterialDesignPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Styles - Material Design 3 - Browse color, shape, typography, and more</title>
        <meta name="og:title" content="Styles - Material Design 3 - Browse color, shape, typography, and more" />
        <meta name="twitter:title" content="Styles - Material Design 3 - Browse color, shape, typography, and more" />
        <meta name="description" content="Styles are the visual aspects of a UI that give it a distinct look and feel. They can be customized by changing your Material theme." />
        <meta name="twitter:description" content="Styles are the visual aspects of a UI that give it a distinct look and feel. They can be customized by changing your Material theme." />
        <meta property="og:description" content="Styles are the visual aspects of a UI that give it a distinct look and feel. They can be customized by changing your Material theme." />
        <meta property="og:image" content="https://lh3.googleusercontent.com/wT_VRcr1F26D9-YlbeUqii1zZjKYuRgGqEFVePdOcgRITVEEKLmd9sUCT13lORm18Pwl85M2UETDOy5_2OwJ9O9n8QirWi7nc5hPD5fSpRQIBBUi_PA" />
        <meta property="og:url" content="https://m3.material.io/styles" />
        <meta property="og:site_name" content="Material Design" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://m3.material.io/styles" />
        <link rel="icon" href="/static/assets/m3-favicon.ico" sizes="any" />
        <link rel="icon" href="/static/assets/m3-favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/static/assets/m3-favicon-apple-touch.png" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </Head>

      <style>
        {`
          @font-face {
            font-family: 'Google Material Icons';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/googlematerialicons/v143/Gw6kwdfw6UnXLJCcmafZyFRXb3BL9rvi0QZG3Sy7X00.woff2) format('woff2');
          }
          html, body {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            vertical-align: baseline;
          }
          body {
            line-height: 1;
            font-family: 'Google Sans Text', sans-serif;
            color: #1f1f1f;
          }
        `}
      </style>

      <mio-root></mio-root>
      <noscript>This website requires JavaScript.</noscript>

      {/* Google Tag Manager */}
      <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NHRPF8"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QPQ2NRV856'); // Replace with your Google Analytics Tracking ID
        `}
      </script>
    </div>
  );
};

export default MaterialDesignPage;
