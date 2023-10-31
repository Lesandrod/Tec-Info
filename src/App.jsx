import { useState } from 'react'
import { SearchPhoto, SearchData1 } from './func/getInfo'

import { AiOutlineMail, AiOutlineHome, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BiCake, BiRadar } from "react-icons/bi";
import { BsShieldCheck, BsTelephone } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi2";
import './App.css'


function App() {
  const [code, setCode] = useState('')
  const [student, setStudent] = useState(null)
  const [inputValue, setInputValue] = useState('')

  let fechaFormateada = '';


  //opcion para formatear la fecha 
  if (student && student.fecNacimiento) {
    const fechaNacimiento = student.fecNacimiento;
    if (Array.isArray(fechaNacimiento) && fechaNacimiento.length >= 3) {
      const [age, mes, dia] = fechaNacimiento
      fechaFormateada = `${dia < 10 ? '0' + dia : dia}/${mes}/${age}`;


    } else {
      fechaFormateada = 'Fecha no válida'
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const BuscarFoto = (e) => {
    e.preventDefault();
    SearchData1(setStudent, inputValue)
    SearchPhoto(setCode, inputValue)

  }

  return (
    <>

      <center>
        <div className="lupa mt-9">
          <form onSubmit={BuscarFoto}>
            <input
              value={inputValue}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ingrese código alumno"
            />
            <button
              type="submit"
              disabled={inputValue.length === 0}
              style={inputValue.length === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : null}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Buscar
            </button>
          </form>

        </div>

      </center>

      <div className="flex justify-center mt-20 ">


        {student && (
          <div className="m-5">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 ">
              <img className="object-cover w-49 rounded-t-lg p-2  md:h-auto  md:rounded-none md:rounded-l-lg" src={code} alt="Foto del alumno" width={247} />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{student.fullname}</h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  <BsShieldCheck size={22} className="inline-block mr-5" /> {student.especialidad}
                </p>

                <p className="mb-3 font-normal text-gray-700 ">
                  <AiOutlineMail size={22} className="inline-block mr-5" /> {student.correoInstitucional}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                  <BiCake size={22} className="inline-block mr-5" /> {fechaFormateada}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                  <HiOutlineIdentification size={22} className="inline-block mr-5" /> {student.numDocumento}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                  <AiOutlineHome size={22} className="inline-block mr-5" /> {student.dirDomicilio}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                  <BsTelephone size={22} className="inline-block mr-5" /> {student.telCelular}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                  <BiRadar size={22} className="inline-block mr-5" />   Ciclo {student.ciclo}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">{student.sexo === 'M' ? <p><AiOutlineMan size={22} className="inline-block mr-5" /> Man</p> : <p><AiOutlineWoman size={22} className="inline-block mr-2" /> Woman</p>} </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>

      </div>





    </>
  )
}

export default App

