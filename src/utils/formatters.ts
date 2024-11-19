export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
};

export const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    signDisplay: "auto",
  }).format(amount);
};
