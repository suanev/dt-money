import { SummaryCardContainer } from "./styles";

interface SummaryCardProps {
  title: string;
  amount: string;
  variant?: "green" | "red";
  icon: React.ElementType;
  variantBackground?: "income" | "outcome";
  variantIconColor?: "income" | "outcome";
}

const SummaryCard = ({
  title,
  amount,
  variantBackground,
  variantIconColor,
  icon,
}: SummaryCardProps) => {
  const Icon = icon;

  return (
    <SummaryCardContainer
      variantBackground={variantBackground}
      variantIconColor={variantIconColor}
    >
      <header>
        <span>{title}</span>

        <Icon size={32} />
      </header>

      <strong>{amount}</strong>
    </SummaryCardContainer>
  );
};

export default SummaryCard;
