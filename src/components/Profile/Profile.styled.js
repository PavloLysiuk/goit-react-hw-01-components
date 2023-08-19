import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto 40px;

  width: 285px;

  border-radius: 8px;
  overflow: hidden;

  border: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 12px rgba(50, 100, 150, 0.25);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  display: block;

  width: 100px;
`;

export const AvatarWrapper = styled.div`
  width: 100px;
`;

export const Name = styled.h2`
  margin: 22px 0 0;
  font-size: 24px;
  color: #1a293b;
`;

export const Tag = styled.p`
  margin: 10px 0 0;

  font-size: 16px;

  color: #909ca9;
`;

export const Location = styled.p`
  margin: 10px 0 0;

  font-size: 16px;

  color: #909ca9;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;

  border-radius: 7px;
  overflow: hidden;
  border: 2px solid #e7ecf2;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;

  width: 95px;
  height: 95px;

  background: #f4f6f9;
  border-right: 2px solid #e7ecf2;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #e7ecf2;
  }
`;

export const StatsTitle = styled.p`
  font-size: 14px;

  color: #909ca9;
`;

export const StatsQuantity = styled.p`
  font-size: 16px;
  font-weight: 700;

  color: #1a293b;
`;
