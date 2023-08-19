import { getRandomHexColor } from './GetRandomColor';
import {
  Wrapper,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          const randomColor = getRandomHexColor();
          return (
            <Item key={id} style={{ backgroundColor: randomColor }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
