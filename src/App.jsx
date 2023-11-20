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

  const year = new Date().getFullYear();

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

      <div className="flex justify-center mt-4 md:mt-20 ">

        {student ? (
          <div className=" ">
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
        ) : (
          <div className=" ">
            <center>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="red">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 5h2v4h-2zm0 6h2v2h-2z" />
                </svg>
              </div>
              <div className="texto">
                <p>Este sitio ha sido reclamado debido al uso indebido de datos. El acceso está denegado conforme a las políticas de privacidad y regulaciones legales. Para más información, contacta al administrador del sitio. Agradecemos tu comprensión.</p>
              </div>

            </center>


            {/* <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 ">

            </div> */}
          </div>
        )}
        {/* {student && (
          <div className=" ">
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
        )} */}
      </div>
      <div>

      </div>



      <div className="footer fixed bottom-0 w-full bg-blue-600 flex flex-col justify-center h-7">
        <p className="text-white text-center text-sm ">© {year} - Desarrollado por <a className='hover:text-black hover:text-base' href="https://github.com/Lesandrod" target='_blank'>Lennard</a> - 🖤</p>




      </div>

    </>
  )
}

export default App

