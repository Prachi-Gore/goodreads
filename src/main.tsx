/* eslint-disable simple-import-sort/imports */
import './index.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'Redux/Slices/store.js'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
   </Provider >,
)
