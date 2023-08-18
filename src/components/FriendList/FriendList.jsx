import {
  FriendsList,
  FriendsItem,
  FriendsStatus,
  FriendsAvatar,
  FriendsName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem key={id} status={isOnline}>
          <FriendsStatus status={isOnline}>{isOnline}</FriendsStatus>
          <FriendsAvatar
            status={isOnline}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <FriendsName status={isOnline}>{name}</FriendsName>
        </FriendsItem>
      ))}
    </FriendsList>
  );
};
