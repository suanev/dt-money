import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { SearchButton, SearchFormContainer } from "./styles";

/**
 * Por que um componente renderiza?
 * - Hooks changed (mudou estado, contexto, reducer)
 * - Props changed (mudou propriedades)
 * - Parent rerendered (componente pai renderizou)
 *
 * Qual o fluxo de renderização?
 * 1. O React decide quais componentes renderizar
 * 2. Qual o componente a ser redenrizado
 * 3. Quais as props de cada componente
 * 4. O componente é redenrizado na tela
 *
 * Memo:
 * 0. Hooks changed, props changed (deep comparison)
 * 0.1 Comparar a versão anterior dos hooks e props
 * 0.2 SE mudou algo, ele vai permitir a redenrização
 */

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

const SearchForm = () => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
