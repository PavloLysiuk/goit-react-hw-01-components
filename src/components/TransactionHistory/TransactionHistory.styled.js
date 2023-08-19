import styled from 'styled-components';

export const Container = styled.table`
  margin: 0 auto;

  text-align: center;

  border-radius: 8px;
  overflow: hidden;

  background-color: #fff;

  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 12px rgba(50, 100, 150, 0.25);
  }
`;

export const Header = styled.thead`
  border-radius: 8px;
`;

export const Title = styled.th`
  border-radius: 8px;
  padding: 10px;

  font-size: 16px;

  color: #1a293a;
  background-color: #f4f6f9;
`;

export const Rows = styled.tr`
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(even) {
    background-color: #f4f6f9;
  }
  &:hover {
    background-color: #f0f2f5;
  }
`;

export const RowsText = styled.td`
width: 158px;
  padding: 8px 0;
  font-size: 14px;

  color: #909ca9;
`;
