

const AmountInput = () => {
  return (
    <div className="flex w-[340px] h-28 justify-around items-center p-2 bg-white rounded-xl">
    <div className="flex flex-col gap-2">
      <label htmlFor="from">From</label>
      <input 
      className="outline-none focus:outline-none"
      type="number" 
      name="from"
      // onChange={}
      placeholder="Enter Amount"/>
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="cFrom">Currency</label>
      <select
      className="focus:outline-none" 
      name="cFrom">
        <option value="inr">INR</option>
      </select>
    </div>
  </div>
  )
}

export default AmountInput