import { useState, useEffect } from 'react'
import { getRandomInt } from '../func/getInfo';
import { SearchPhoto, SearchData1 } from '../func/getInfo'
import Yop from '../assets/PINTR.svg';
import Navidad from '../assets/navidad.svg';
import { AiOutlineMail, AiOutlineHome, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BiCake, BiRadar } from "react-icons/bi";
import { BsShieldCheck, BsTelephone } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi2";



const Buscador = () => {

    const [code, setCode] = useState('')
    const [student, setStudent] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [selectedSVG, setSelectedSVG] = useState('');
    const [useCv, setCv] = useState(null);
    const year = new Date().getFullYear();




    var fechaFormateada = ''
    if (student && student.persona.fecNacimiento) {
        const fechaCompleta = student.persona.fecNacimiento

        const fechaObjeto = new Date(fechaCompleta);
        var fechaFormateada = fechaObjeto.toISOString().split('T')[0];

    }





    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const BuscarFoto = (e) => {
        e.preventDefault();
        SearchData1(setStudent, setCode, setCv, inputValue)
        console.log(useCv);



    }
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
                <h1 className='text-2xl text-black font-bold font-mono text-blue-700 uppercase'>Buscador de Estudiantes de Tecsup</h1>
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
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{student.persona.nomUno} {student.persona.nomDos} {student.persona.apePaterno} {student.persona.apeMaterno}</h5>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    <BsShieldCheck size={22} className="inline-block mr-5" /> {student.codCarnet}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    <BsShieldCheck size={22} className="inline-block mr-5" /> {student.especialidad.especialidadCompleta}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    <AiOutlineMail size={22} className="inline-block mr-5" /> {student.correo}
                                </p>

                                <p className="mb-3 font-normal text-gray-700 ">
                                    <BiCake size={22} className="inline-block mr-5" /> {fechaFormateada}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    <HiOutlineIdentification size={22} className="inline-block mr-5" /> {student.persona.numDocumento}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    <AiOutlineHome size={22} className="inline-block mr-5" /> {student.persona.dirDomicilio}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    <BsTelephone size={22} className="inline-block mr-5" /> {student.persona.telCelular}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    <BiRadar size={22} className="inline-block mr-5" />   Ciclo {student.ciclo}
                                </p>

                                {(useCv !== 0 && useCv !== null) ? (
                                    <button
                                        type="button"
                                        disabled={inputValue.length === 0}
                                        style={inputValue.length === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : null}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                        onClick={() => {
                                            if (inputValue.length > 0) {
                                                window.location.href = `https://app.tecsup.edu.pe/radarpasantias-api/api/curriculo/files/pasantia/${useCv}`;
                                            }
                                        }}
                                    >
                                        Descargar CV
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        style={{ opacity: 0.5, cursor: 'not-allowed' }}
                                        className="bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded"
                                    >
                                        No existe CV
                                    </button>
                                )}


                                {/* 
                               
                               
                               
                                
                                
                                
                                <p className="mb-3 font-normal text-gray-700 ">{student.sexo === 'M' ? <p><AiOutlineMan size={22} className="inline-block mr-5" /> Man</p> : <p><AiOutlineWoman size={22} className="inline-block mr-2" /> Woman</p>} </p> */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-20 p-5 md:mt-1 md:p-1">
                        <center>
                            <img src={selectedSVG} width={240} alt="DDDD" />

                        </center>


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







        </>
    )
}

export default Buscador
