import { MagnifyingGlass } from "phosphor-react";
import { SearchButton, SearchFormContainer } from "./styles";

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <SearchButton type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
