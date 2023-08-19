import {
  Container,
  Header,
  Title,
  Rows,
  RowsText,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <Container>
      <Header>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </Header>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Rows key={id}>
            <RowsText>{type}</RowsText>
            <RowsText>{amount}</RowsText>
            <RowsText>{currency}</RowsText>
          </Rows>
        ))}
      </tbody>
    </Container>
  );
};
