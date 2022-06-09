/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import ErrorBoundary from '../components/ErrorBoundary';

const AppProvider: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <ErrorBoundary>
          <ToastProvider>
            <AuthProvider>{children}</AuthProvider>
          </ToastProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
