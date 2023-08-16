import styled from '@emotion/styled';

export const StatisticWrapper = styled.div`
  margin: 0 auto 40px;

  width: 475px;

  border: 1px solid #fff;
  border-radius: 6px;
  overflow: hidden;

  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);
`;

export const StatisticTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  padding: 24px 0;

  text-transform: uppercase;

  color: #1a293b;
  background-color: #fff;

  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 95px;
  height: 95px;
`;

export const StatisticLabel = styled.p`
  margin: 0;
  padding: 0;

  font-size: 16px;

  color: #fff;
  text-shadow: 0 2px 0px rgba(0, 0, 0, 0.35);
`;

export const StatisticPercentage = styled.p`
  margin: 0;
  padding: 0;

  font-size: 24px;
  font-weight: 700;

  color: #fff;
  text-shadow: 0 2px 0px rgba(0, 0, 0, 0.35);
`;
