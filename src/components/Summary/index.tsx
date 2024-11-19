import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { useSummary } from "../../hooks/useSummary";
import { formatAmount } from "../../utils/formatters";
import { SummaryContainer } from "./styles";
import SummaryCard from "./SummaryCard";

const Summary = () => {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard
        title="Entradas"
        variantIconColor="income"
        amount={formatAmount(summary.income)}
        icon={ArrowCircleUp}
      />

      <SummaryCard
        title="Saídas"
        variantIconColor="outcome"
        amount={formatAmount(summary.outcome)}
        icon={ArrowCircleDown}
      />

      <SummaryCard
        title="Total"
        variantBackground={summary.total > 0 ? "income" : "outcome"}
        amount={formatAmount(summary.total)}
        icon={CurrencyDollar}
      />
    </SummaryContainer>
  );
};

export default Summary;
