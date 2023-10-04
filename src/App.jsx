import { useState } from 'react'
import { SearchPhoto, SearchData1 } from './func/getInfo'
import chico from '../public/chico.svg'
import chica from '../public/chica.svg'
import './App.css'


function App() {
  const [code, setCode] = useState('')
  const [student, setStudent] = useState(null)
  const [inputValue, setInputValue] = useState('')


  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const BuscarFoto = () => {
    SearchData1(setStudent, inputValue)
    SearchPhoto(setCode, inputValue)
  }

  return (
    <>

      <center>
        <div className="lupa mt-9">
          <input value={inputValue} onChange={handleInputChange} class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Ingrese codigo alumno" />
          <button onClick={BuscarFoto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Buscar
          </button>
        </div>

      </center>

      <div className="flex justify-center mt-20 ">


        {student && (
          <div className="text-center">
            <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-49 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={code} alt="Foto del alumno" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{student.fullname}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{student.especialidad}</p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{student.correoInstitucional}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">DNI: {student.numDocumento}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dirección: {student.dirDomicilio}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{student.ciclo} Ciclo</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><img src={student.sexo === 'M' ? chico : chica} width={40} /> </p>
              </div>
            </div>
          </div>
        )}
      </div>





    </>
  )
}

export default App

