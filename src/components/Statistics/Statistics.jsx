import { getRandomHexColor } from './GetRandomColor';
import {
  StatisticWrapper,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <StatisticWrapper>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          const randomColor = getRandomHexColor();
          return (
            <StatisticItem key={id} style={{ backgroundColor: randomColor }}>
              <StatisticLabel>{label}</StatisticLabel>
              <StatisticPercentage>{percentage}%</StatisticPercentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticWrapper>
  );
};
