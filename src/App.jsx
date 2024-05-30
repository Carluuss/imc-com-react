import { useState } from 'react'

import Calculation from './components/Calculation'
import Tabela from './components/Tabela'


function App() {

  const [imc, setImc] = useState(null);

  const calculationIMC = (altura, peso) => {
    if (altura > 0 && peso > 0){
        const imcValue = peso / (altura ** 2);
        setImc(imcValue.toFixed(2));
    }else {
        setImc(null);
    }
  }
  
 
  return (
    <div className='container'>
      <Calculation  calculationIMC={calculationIMC} imc={imc} />
      <Tabela imc={imc} />
    </div>
  )
}

export default App
