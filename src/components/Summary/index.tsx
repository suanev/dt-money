import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer } from "./styles";
import SummaryCard from "./SummaryCard";
import { useTheme } from "styled-components";

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard
        title="Entradas"
        variantIconColor="income"
        amount="R$ 17.400,00"
        icon={ArrowCircleUp}
      />
      <SummaryCard
        title="Saídas"
        variantIconColor="outcome"
        amount="R$ 1.259,00"
        icon={ArrowCircleDown}
      />
      <SummaryCard
        title="Total"
        variantBackground="income"
        amount="R$ 16.141,00"
        icon={CurrencyDollar}
      />
    </SummaryContainer>
  );
};

export default Summary;
