import {
  UserCard,
  UserWrapper,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsItem,
  UserStatsTitle,
  UserStatsQuantity,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <UserCard>
      <UserWrapper>
        <UserAvatar src={avatar} alt="User Avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserWrapper>
      <UserStatsList>
        <UserStatsItem>
          <UserStatsTitle>Followers</UserStatsTitle>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsTitle>Views</UserStatsTitle>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsTitle>Likes</UserStatsTitle>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStatsList>
    </UserCard>
  );
};
