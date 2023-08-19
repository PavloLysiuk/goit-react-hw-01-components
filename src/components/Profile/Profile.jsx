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

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
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
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Views</StatsTitle>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Likes</StatsTitle>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </Card>
  );
};
