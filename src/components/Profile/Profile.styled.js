import styled from 'styled-components';

export const UserCard = styled.div`
  margin: 40px auto;

  width: 285px;

  border-radius: 8px;
  overflow: hidden;

  border: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.img`
  display: block;

  width: 100px;
`;

export const UserAvatarWrapper = styled.div`
  width: 100px;
`;

export const UserName = styled.h2`
  margin: 22px 0 0;
  font-size: 24px;
  color: #1a293b;
`;

export const UserTag = styled.p`
  margin: 10px 0 0;

  font-size: 16px;

  color: #909ca9;
`;

export const UserLocation = styled.p`
  margin: 10px 0 0;

  font-size: 16px;

  color: #909ca9;
`;

export const UserStatsList = styled.ul`
  display: flex;
  justify-content: center;

  padding: 0;
  margin: 0;

  list-style: none;

  border-radius: 7px;
  overflow: hidden;
  border: 2px solid #e7ecf2;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;

  width: 95px;
  height: 95px;

  background: #f4f6f9;
  border-right: 2px solid #e7ecf2;

  &:last-child {
    border: none;
  }
`;

export const UserStatsTitle = styled.p`
  margin: 0;
  padding: 0;

  font-size: 14px;

  color: #909ca9;
`;

export const UserStatsQuantity = styled.p`
  margin: 0;
  padding: 0;

  font-size: 16px;
  font-weight: 700;

  color: #1a293b;
`;
