import React from 'react';
import { ProviderCard } from 'components';

import providers from './assets/providers.json';

import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      {providers.map((provider) => (
        <ProviderCard
          key={provider.providerName}
          {...provider}
        />
      ))}
    </div>
  );
}

export default App;
