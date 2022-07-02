import React from 'react';
import { ProviderCard } from 'components';
import { ThemeProvider } from 'styled-components';

import providers from 'assets/providers.json';
import { THEME } from 'constants/theme';

import 'antd/dist/antd.css';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div>
        {providers.map((provider) => (
          <ProviderCard
            key={provider.providerName}
            {...provider}
          />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
