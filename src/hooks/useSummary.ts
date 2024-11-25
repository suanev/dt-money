import { useContextSelector } from "use-context-selector";

import { TransactionsContext } from "../contexts/TransactionsContext";
import { useMemo } from "react";

export const useSummary = () => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.amount;
        } else {
          acc.outcome += transaction.amount;
        }

        acc.total = acc.income - acc.outcome;

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return summary;
};
