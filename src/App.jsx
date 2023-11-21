import { useState, useEffect } from 'react'
import { SearchPhoto, SearchData1 } from './func/getInfo'
import Yop from './assets/PINTR.svg';
import Navidad from './assets/navidad.svg';
import { AiOutlineMail, AiOutlineHome, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BiCake, BiRadar } from "react-icons/bi";
import { BsShieldCheck, BsTelephone } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi2";
import './App.css'


function App() {
  const [code, setCode] = useState('')
  const [student, setStudent] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [selectedSVG, setSelectedSVG] = useState('');
  const year = new Date().getFullYear();



  let fechaFormateada = '';



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
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {

    const randomNumber = getRandomInt(1, 2);


    if (randomNumber === 1) {
      setSelectedSVG(Yop);
    } else {
      setSelectedSVG(Navidad);
    }
  }, []);

  return (
    <>

      <section className='text-center mt-5'>
        <h1 className='text-3xl font-bold font-mono text-blue-700 uppercase'>Buscador de Estudiantes de Tecsup</h1>
      </section>
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
          <div className="mt-20 p-5 md:mt-1 md:p-1">
            <center>
              <img src={selectedSVG} width={300} alt="DDDD" />

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

