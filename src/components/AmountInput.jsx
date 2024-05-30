const AmountInput = ({
  amountLabel,
  currencyLabel,
  amount,
  onAmountChange,
  onCurrencyChange,
  amountDisabled = false,
  currencyDisabled = false,
  currencyOptions = [],
}) => {
  return (
    <div className="flex w-[340px] h-28 justify-around items-center p-2 bg-white rounded-xl">
      <div className="flex flex-col gap-2">
        <label htmlFor={amountLabel}>{amountLabel}</label>
        <input
          className="outline-none focus:outline-none"
          type="number"
          name={amountLabel}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="Enter Amount"
          disabled={amountDisabled}
          value={amount}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={currencyLabel}>{currencyLabel}</label>
        <select
          className="focus:outline-none"
          name="cFrom"
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          <option value="Select">Select</option>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AmountInput;
