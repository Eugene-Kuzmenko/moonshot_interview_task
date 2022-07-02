import React, { memo } from 'react';
import { Progress, ProgressProps } from 'antd';
import { STROKE_1_COLOR, RATING_COLOR } from '../../../../constants/colors';

type OmittedProgressProps = 'percent' | 'format' | 'type';

interface RatingCircleProps extends Omit<ProgressProps, OmittedProgressProps>{
  rating: number
}

const toPercent = (rating: number): number => rating * 10;

const formatRating = (percent?: number): string => (
  ((percent ?? 0) * 0.1).toFixed(1)
);

const ScoreCircle = (props: RatingCircleProps) => {
  const {
    rating,
    ...progressProps
  } = props;


  return (
    <Progress
      type="circle"
      strokeColor={RATING_COLOR}
      trailColor={STROKE_1_COLOR}
      strokeLinecap="butt"
      strokeWidth={3}
      width={58}
      percent={toPercent(rating)}
      format={formatRating}
      {...progressProps}
    />
  );
};

export default memo(ScoreCircle);
