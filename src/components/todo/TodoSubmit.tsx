import styled from 'styled-components';

export default function TodoSubmit() {
  return (
    <section>
      <FormArea>
        <label>제목 : </label>
        <input type="text" name="title" />
        <label>내용 : </label>
        <input type="text" name="content" />
        <button>추가하기</button>
      </FormArea>
    </section>
  );
}

const FormArea = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 1rem;
  & label {
    font-weight: bold;
  }
  & input {
    margin-left: -1.6rem;
    border: none;
    border-bottom: 2px solid black;
    width: 280px;
    height: 30px;
    outline: none;
  }
  & button {
    border: none;
    border-radius: 5px;
    background-color: #00ff00;
    width: 150px;
    height: 30px;
    margin-left: auto;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
  }
  & button:hover {
    background-color: #00e900;
  }
`;
