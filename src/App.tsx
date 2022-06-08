import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

import { GlobalStyle } from './styles/global';

function App(): JSX.Element {
  return (
    <BrowserRouter>
     <GlobalStyle/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;