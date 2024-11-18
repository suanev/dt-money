import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "styled-components";

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  position: fixed;

  // Centraliza o modal
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors["gray-800"]};

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;
      padding: 1rem;

      color: ${({ theme }) => theme.colors["gray-300"]};
      background: ${({ theme }) => theme.colors["gray-900"]};

      &::placeholder {
        color: ${({ theme }) => theme.colors["gray-500"]};
      }
    }

    button[type="submit"] {
      font-weight: bold;
      height: 58px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;

      border: 0;
      border-radius: 6px;

      cursor: pointer;

      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors["green-500"]};
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  background: transparent;

  cursor: pointer;

  line-height: 0;

  color: ${({ theme }) => theme.colors["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 0.5rem;
`;

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  padding: 1rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  color: ${({ theme }) => theme.colors["gray-300"]};
  background: ${({ theme }) => theme.colors["gray-700"]};

  svg {
    color: ${({ theme, variant }) =>
      variant === "income"
        ? theme.colors["green-300"]
        : theme.colors["red-300"]};
  }

  &[data-state="unchecked"] {
    &:hover {
      transition: background-color 0.2s;
      background: ${({ theme }) => theme.colors["gray-600"]};
    }
  }

  &[data-state="checked"] {
    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    transition: background-color 0.2s, color 0.2s;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme, variant }) =>
      variant === "income"
        ? theme.colors["green-500"]
        : theme.colors["red-500"]};
  }
`;
