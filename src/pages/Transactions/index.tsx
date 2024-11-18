import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Desenvolvimento</td>
              <td>13/11/2024</td>
            </tr>
            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>
                <PriceHighlight variant="outcome">R$ 1.200,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>13/11/2024</td>
            </tr>
            <tr>
              <td width="50%">Conta de luz</td>
              <td>
                <PriceHighlight variant="outcome">R$ 100,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>13/11/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};

export default Transactions;