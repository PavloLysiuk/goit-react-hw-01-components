import {
  Card,
  Wrapper,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsQuantity,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <Card>
      <Wrapper>
        <Avatar src={avatar} alt="User Avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Wrapper>
      <StatsList>
        <StatsItem>
          <StatsTitle>Followers</StatsTitle>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Views</StatsTitle>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Likes</StatsTitle>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </Card>
  );
};
