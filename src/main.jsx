import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import todoStore from './REDUX/todoStore.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={todoStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
