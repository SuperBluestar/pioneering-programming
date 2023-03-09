import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store, { persistor } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
