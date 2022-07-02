import React, { memo } from 'react';
import { Rate as AntdRate, RateProps as AntdRateProps } from 'antd';

interface RatingStars extends Omit<AntdRateProps, 'count'> {
  rating: number,
}

const toStarCount = (rating: number): number => rating / 2;


const RatingStars = (props: RatingStars) => {
  const { rating, className, ...rateProps } = props;

  return (
    <AntdRate
      {...rateProps}
      className={className}
      count={toStarCount(rating)}
    />
  );
};

export default memo(RatingStars);
