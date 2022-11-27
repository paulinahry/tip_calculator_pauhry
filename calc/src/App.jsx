import './index.css'
import IceIceBaby from './assets/img/73713_22_11_16_08_43_17.png'

//material UI
import {Slider} from '@mui/material'

//ICONS
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'




import { useState } from 'react'



function App() {


  //states
  const [bill, setBill] = useState(0)
  const [counter, setCounter] = useState(1) // counter
  const [tip, setTip] = useState(0)  


  //CONSTANCES
  const tipTotal = ( bill /100 ) * tip
  const tipProPerson = tipTotal / counter
  const toPay = Number(bill) + Number(tipTotal)
  const toPayProPerson =  ( bill/counter ) + tipProPerson
    

  //Check splitting  
  function handleDecrement(){
    if(counter > 0){
      setCounter(counter-1)
      console.log('minus');
    }else{
      setCounter(0)
    }
  }

  function handleIncrement(){
    setCounter(counter+1)
    console.log('plus');
  }

 

  return (
    <div className="flex justify-center bg-slate-50 md:w-[50%] md:mx-auto md:my-[10%]" >
   

      <div className="w-full flex justify-center flex-col bg-white/50 rounded-md
      bg-[url('./assets/img/wave.svg')] bg-no-repeat " >

      
      <h1 className='text-2xl text-center mt-4'>Tipsy</h1>
      
        <div className="flex text-center justify-around mt-16" >
          <span>Enter bill total </span>
          <div>
            <label htmlFor="billIpnut">€ </label>
            <input 
            className=' w-[30%] border-b-2 outline-none '
            type="number" 
            placeholder='0.00'
            id='billIpnut'
            onChange={(e) => setBill(e.target.value)} />
          </div>
        </div>

        <div className='flex text-center justify-center flex-col p-2 m-2' >
          <span>Choose tip </span>

          <div>
          <span>{tip}%</span>
          <span className="ml-[10%]">€ {tipTotal.toFixed(2)}</span>
          </div>

         <Slider
          onChange={(e)=>setTip(e.target.value)}
          aria-label="tip"
          defaultValue={10}
          // getAriaValueText={valuetext}
          // valueLabelDisplay="auto"
          step={5}
          max={100}
        /> 
        </div>

        <div className="flex justify-center item-baseline gap-2 p-2">
          <span className='px-2'>Split: </span>
          <div >
            <button 
            onClick={handleDecrement}>
            {<AiOutlineMinus />}
            </button>

            <span className='text-xl'>{counter}</span>

            <button 
            onClick={handleIncrement}>
            {<AiOutlinePlus  />}
            </button>
          </div>

        </div>

       
        {/* <input type="range" className='tip-range-slider' min={0} max={100} defaultValue={10}  value={tip}
          onChange={(e)=>setTip(e.target.value)} /> */}

        <div className="bg-green-100 m-4 rounded-xl flex text-center justify-center flex-col">
          <div>
          <p>Total per person :</p>
          <span className='text-3xl'>€{toPayProPerson.toFixed(2)}</span>
          </div>


          <div className='flex justify-around'>
            <div>
              <p>bill:</p>
              <span>€{toPay.toFixed(2)}</span>
            </div>

            <div>
              <p>tip</p>
              <span>€{tipProPerson.toFixed(2)}</span> 
            </div>
          </div>

         

        </div>
      </div>
    </div>
  )
}

export default App
