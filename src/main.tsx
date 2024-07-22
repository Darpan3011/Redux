import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { storeee } from './store/redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={storeee}>
    <App />
  </Provider>,
)
