import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://3dc7824f21c2ce3bf0ca8b9deb4b4f3e@o4506263574282240.ingest.sentry.io/4506263583653888",
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
