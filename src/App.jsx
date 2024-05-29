import { AmountInput } from "./components/index";

function App() {

  return (
    <>
        <div className="w-full h-screen flex justify-center items-center bg-green-950 font-montserrat">
          <div className="relative flex justify-center items-center flex-col bg-green-500 px-10 py-8 rounded-3xl border-t-2 gap-5">
            <AmountInput/>
            <AmountInput/>

<button
className="bottom-[50%] absolute p-3 bg-green-500 rounded-2xl border-white border-[8px] text-white">
  Swap
</button>
            <button
            className="p-3 bg-white text-black rounded-xl font-medium">
              Convert
            </button>
          </div>
        </div>
    </>
  )
}

export default App
