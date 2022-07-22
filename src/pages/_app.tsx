import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@fontsource/poppins';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Layout from '../components/layout';
import '../styles/globals.css';
import { persistor, store } from '../store/store';
import { handleLog } from '../utils/logger';
import { EnvironmentNameEnum } from '../enums/EnvironmentNameEnum';

config.autoAddCss = false;

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (
    process.env.ENVIRONMENT_NAME === EnvironmentNameEnum.RELEASE ||
    process.env.NEXT_PUBLIC_ENVIRONMENT_NAME === EnvironmentNameEnum.RELEASE
  ) {
    return;
  }

  handleLog(metric as any);
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* This is a work around to ensure SSR works for redux-persist https://github.com/vercel/next.js/issues/8240 */}
        {() => (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </PersistGate>
    </Provider>
  );
};

export default App;
