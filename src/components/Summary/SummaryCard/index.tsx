import { SummaryCardContainer } from "./styles";

interface SummaryCardProps {
  title: string;
  amount: string;
  icon: React.ElementType;
  variantBackgroundColor?: "income" | "outcome";
  variantIconColor?: "income" | "outcome";
}

const SummaryCard = ({
  title,
  amount,
  variantBackgroundColor,
  variantIconColor,
  icon,
}: SummaryCardProps) => {
  const Icon = icon;

  return (
    <SummaryCardContainer
      variantBackgroundColor={variantBackgroundColor}
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
