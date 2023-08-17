import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto 40px;

  width: 475px;

  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  overflow: hidden;

  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 12px rgba(50, 100, 150, 0.25);
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  padding: 24px 0;

  text-transform: uppercase;

  color: #1a293b;

  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  border-radius: 7px;

  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 95px;
  height: 95px;
`;

export const Label = styled.p`
  margin: 0;
  padding: 0;

  font-size: 16px;

  color: #fff;
  text-shadow: 0 2px 0px rgba(0, 0, 0, 0.35);
`;

export const Percentage = styled.p`
  margin: 0;
  padding: 0;

  font-size: 24px;
  font-weight: 700;

  color: #fff;
  text-shadow: 0 2px 0px rgba(0, 0, 0, 0.35);
`;
