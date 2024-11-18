import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.colors["gray-900"]};
    color: ${({ theme }) => theme.colors["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["gray-500"]};
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  font-weight: bold;
  background: transparent;

  border: 0;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors["green-300"]};
  color: ${({ theme }) => theme.colors["green-300"]};

  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors["green-500"]};
    background: ${({ theme }) => theme.colors["green-500"]};
  }
`;
