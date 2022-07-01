import React, { memo } from 'react';

import { ProviderCardData } from 'types/provider';

import Card from './components/Card';
import Content from './components/Content';


type CasinoBrandCardProps = ProviderCardData;

const ProviderCard = (props: CasinoBrandCardProps) => {
  return (
    <Card>
      <Content>

      </Content>
    </Card>
  );
};

export default memo(ProviderCard);
