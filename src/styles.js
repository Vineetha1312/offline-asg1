import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

export const Header = styled.h1`
  text-align: center;
  color: #4a90e2;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #357ab8;
  }
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NoteCard = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
`;

export const NoteActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:first-child {
      background-color: #ffc107;
      color: white;

      &:hover {
        background-color: #e0a800;
      }
    }

    &:last-child {
      background-color: #dc3545;
      color: white;

      &:hover {
        background-color: #b21f2d;
      }
    }
  }
`;
