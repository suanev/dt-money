import styled from "styled-components";

interface SummaryCardContainerProps {
  variantBackground?: "income" | "outcome";
  variantIconColor?: "income" | "outcome";
}

export const SummaryCardContainer = styled.div<SummaryCardContainerProps>`
  padding: 2rem;
  border-radius: 6px;
  background: ${({ theme, variantBackground }) =>
    variantBackground === "income"
      ? theme.colors["green-700"]
      : variantBackground === "outcome"
      ? theme.colors["red-700"]
      : theme.colors["gray-600"]};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors["gray-300"]};
  }

  svg {
    color: ${({ theme, variantIconColor }) =>
      variantIconColor === "income"
        ? theme.colors["green-300"]
        : variantIconColor === "outcome"
        ? theme.colors["red-300"]
        : theme.colors["white"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
