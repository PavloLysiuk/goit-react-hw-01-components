import { GetRandomColor } from './GetRandomColoor';
// import { } from './Statistics.styled';

export const Statistics = () => {
  const randomColor = GetRandomColor();
  return (
    <div
      style={{
        backgroundColor: randomColor,
        color: '#fff',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <h1>Statistics</h1>
    </div>
  );

}
