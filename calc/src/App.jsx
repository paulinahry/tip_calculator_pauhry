import './index.css'
//ICONS
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
// STATES
import { useState } from 'react'



function App() {

  //STATES
  const [bill, setBill] = useState(0)
  const [counter, setCounter] = useState(1) // counter
  const [tip, setTip] = useState(10)  


  //CONSTANCES
  const tipTotal = ( bill /100 ) * tip
  const tipProPerson = tipTotal / counter
  const toPay = Number(bill) + Number(tipTotal)
  const toPayProPerson =  ( bill/counter ) + tipProPerson
  const billProPerson = bill / counter
    

  //Check splitting  
  function handleDecrement(){
    setCounter(Math.max(1, counter - 1))
  }

  function handleIncrement(){
    setCounter(counter+1)
    console.log('plus')
  }

 

  return (
    <section className="App p-8 
    bg-[url('./assets/img/wave.svg')] bg-cover  bg-no-repeat 
    border border-gray-300 rounded-md  flex justify-center 
    md:w-[60%] 
    sm:w-[80%] 
    lg:w-[40%] 
    2xl:w-[20%] 
    mx-auto md:mt-6" >
   

    <div className=" flex justify-center flex-col md:mx-auto bg-neutral-50/50 rounded-xl" >

      
        <h1 className='text-4xl md:text-5xl text-darky-green tracking-wide text-center mt-2 font-macherie font-bold italic'>Tipsy</h1>


        {/*ENTER BILL TOTAL   */}
        <section className="flex text-center  flex-col mt-16 text-gray-500 mx-auto" >
          <span className='text-left ml-20'>Enter bill total </span>
          <div>
            <label htmlFor="billIpnut"
            className='text-darky-green text-2xl'></label>
            <input 
            className=' w-[30%] border-b-2 outline-none text-2xl text-darky-green '
            type="number" 
            placeholder='0.00'
            id='billIpnut'
            onChange={(e) => setBill(e.target.value)} />
          </div>
        </section>


        {/* TIP SLIDER */}
        <section className='flex text-center justify-center flex-col p-2 m-4 w- mx-auto w-[80%]' >
          <span className=' text-gray-500 text-left ml-9'>Choose tip* </span>

          <div className=' text-center'>
          <span>{tip}%</span>
          <span className='mx-2'> =</span>
          <span >{tipTotal.toFixed(2)}</span>
          </div>

          <input type="range" 
            className='text-darky-green  bg-gray-200'
            min={0} max={100} defaultValue={10}  value={tip}
            onChange={(e)=>setTip(e.target.value)} />
        </section>


        {/* SPLIT */}
        <section className="flex justify-center flex-col text-center item-baseline gap-2 p-2 w-full mx-auto">
          <span className=' text-gray-500 text-left ml-16 px-3' >Split: </span>
          <div>
            <button 
            onClick={handleDecrement}>
            {<AiOutlineMinus size={25}/>}
            </button>

            <span className='text-4xl m-0.5'>{counter}</span>

            <button 
            onClick={handleIncrement}>
            {<AiOutlinePlus  size={25}/>}
            </button>
          </div>

        </section>


        {/* RESULTS CALCULATIONS - GREEN BOX */}
        <section className="bg-green-200 m-4 p-4 w-[75%] rounded-xl flex text-center justify-center  flex-col mx-auto text-darky-green">

          <div>
            <p className=' text-gray-500'>Total per person :</p>
            <span className='text-3xl'>{toPayProPerson.toFixed(2)}</span>
          </div>


          <div className='flex justify-around'>
            <div>
              <p className=' text-gray-500'>
                bill:
                </p>
              <span>{billProPerson.toFixed(2)}</span>
            </div>

            <div>
              <p className=' text-gray-500'>
                tip:
                </p>
              <span>{tipProPerson.toFixed(2)}</span> 
            </div>
          </div>

        </section>
                                                                                                
        <p className='text-xs text-gray-400 p-2 mt-4'>* 10% recommended if everything was ok </p>
      </div>
    </section>
  )
}

export default App
