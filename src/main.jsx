import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <App/>
    </DevSupport>
  </React.StrictMode>,
)
