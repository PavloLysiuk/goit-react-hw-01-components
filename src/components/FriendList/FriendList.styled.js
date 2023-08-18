import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const FriendsItem = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 10px 20px;
  width: 286px;

  border-radius: 8px;
  border: 1px solid #fff;

  background-color: ${props => (props.status ? '#fff' : '#f4f6f980')};

  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 12px rgba(50, 100, 150, 0.25);
  }
`;

export const FriendsAvatar = styled.img`
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);

  opacity: ${props => (props.status ? '1' : '0.5')};

  &:hover {
    filter: drop-shadow(0 4px 2px rgba(50, 100, 150, 0.25));
  }
`;

export const FriendsName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #1a293b;

  color: ${props => (props.status ? '#1a293b' : '#1a293b50')};
`;

export const FriendsStatus = styled.span`
  width: 15px;
  height: 15px;

  border-radius: 50%;

  background-color: ${props => (props.status ? '#009900' : '#ee0000')};
`;
