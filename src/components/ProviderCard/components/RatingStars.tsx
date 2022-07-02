import React, { memo } from 'react';
import { Rate as AntdRate, RateProps as AntdRateProps } from 'antd';
import styled from 'styled-components';

interface RatingStars extends Omit<AntdRateProps, 'value'> {
  rating: number,
}

const toStarCount = (rating: number): number => rating / 2;


const RatingStars = (props: RatingStars) => {
  const { rating, ...rateProps } = props;

  return (
    <AntdRate
      allowHalf
      {...rateProps}
      value={toStarCount(rating)}
    />
  );
};

export default styled(memo(RatingStars))`
  color: ${({ theme }) => theme.colors.rating};
  white-space: nowrap;
  margin-bottom: 4px;
  
  .ant-rate-star {
    margin-right: 2px;
  }
`;
