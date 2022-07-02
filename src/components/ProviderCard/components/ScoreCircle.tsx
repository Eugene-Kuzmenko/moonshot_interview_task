import React, { memo } from 'react';
import { Progress, ProgressProps } from 'antd';
import { useTheme } from 'styled-components';

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

  const theme = useTheme()

  return (
    <Progress
      type="circle"
      strokeColor={theme.colors.rating}
      trailColor={theme.colors.stroke1}
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
