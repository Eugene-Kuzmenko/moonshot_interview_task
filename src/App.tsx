import React from 'react';
import 'App.css';
import { ProviderCard } from 'components';

import providers from './assets/providers.json';

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
