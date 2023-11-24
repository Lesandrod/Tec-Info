import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer fixed bottom-0 w-full bg-blue-600 flex flex-col justify-center h-7">
                <p className="text-white text-center text-sm ">© {year} - Desarrollado por <a className='hover:text-black hover:text-base' href="https://github.com/Lesandrod" target='_blank'>Lennard</a> - 🖤</p>




            </div>


        </>
    )
}

export default Footer