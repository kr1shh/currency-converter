import { AmountInput } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("inr")
  const [ amount, setAmount] = useState(0)
  const [ convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(amount)
  const options = Object.keys(currencyInfo)


  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-green-950 font-montserrat">
        <div className="relative flex justify-center items-center flex-col bg-green-500 px-10 py-8 rounded-3xl border-t-2 gap-5">
          <AmountInput
              amountLabel = "Amount"
              currencyLabel = "From"
              amount = { amount }
              onAmountChange = {(amount)=>setFrom(amount)} 
              onCurrencyChange = {(currency)=>setTo(currency)}
              currencyOptions = { options } />
          <AmountInput
          amountLabel = "Amount"
          currencyLabel = "From"
          amount = { amount }
          onAmountChange = {(amount)=>setFrom(amount)} 
          onCurrencyChange = {(currency)=>setTo(currency)}
          currencyOptions = { options }
          amountDisabled = { true }
          currencyDisabled = { true }/>

          <button className="bottom-[50%] absolute p-3 bg-green-500 rounded-2xl border-white border-[8px] text-white hover:bg-green-900">
            Swap
          </button>
          <button className="p-3 bg-white hover:bg-gray-400 text-black rounded-xl font-medium">
            Convert
          </button>
        </div>
      </div>
    </>
  )
}

export default App;
