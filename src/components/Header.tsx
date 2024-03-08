import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderArea>
      <h1>My Todo List</h1>
      <h1>React + TypeScript</h1>
    </HeaderArea>
  );
}

const HeaderArea = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  & h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
