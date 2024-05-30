import { AmountInput } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount(Number(amount * currencyInfo[to]));
  };

  console.log(convertedAmount);

  const reset = () => {
    setAmount(0)
    setConvertedAmount(0)
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-green-950 font-montserrat">
        <div className="relative flex justify-center items-center flex-col bg-green-500 px-10 py-8 rounded-3xl border-t-2 border-green-300 gap-5">
          <AmountInput
            amountLabel="Currency"
            currencyLabel="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
          />
          <AmountInput
            amountLabel="Currency"
            currencyLabel="To"
            amount={convertedAmount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={options}
            amountDisabled={true}
          />

          <button
            className="bottom-[50%] absolute p-3 bg-green-500 rounded-2xl border-white border-[8px] text-white hover:bg-green-900"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className="p-3 bg-white hover:bg-gray-400 text-black rounded-xl font-medium"
            onClick={convertCurrency}
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
