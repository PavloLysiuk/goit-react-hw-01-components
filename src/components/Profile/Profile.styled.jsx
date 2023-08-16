import styled from '@emotion/styled';

export const UserCard = styled.div`
  margin: 40px auto;

  width: 300px;

  border-radius: 10px;
  overflow: hidden;

  background-color: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1);
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px 0;
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

export const UserName = styled.h2`
  margin: 22px 0 0;
  font-size: 20px;
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
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;

  width: 100px;
  height: 85px;

  background: #f4f6f9;
  border: 1px solid #e8edf3;
`;

export const UserStatsTitle = styled.p`
  margin: 0;
  padding: 0;

  font-size: 16px;

  color: #909ca9;
  // background: #f4f6f9;
`;

export const UserStatsQuantity = styled.p`
  margin: 0;
  padding: 0;

  font-size: 16px;
  font-weight: 700;

  color: #1a293b;
`;
