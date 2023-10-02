import axios from "axios"
const SearchPhoto = (state, id) => {
    const url = `https://api.tecsup.edu.pe/intranettecsup-api/api/docencia/picture/${id}`
    state(url)
}

const SearchData1 = async (state, id) => {
    
    const response = await axios.get(`http://localhost:1234/api/alumno/${id}`)
    state(response.data);
}


  
  
export {
    SearchPhoto,
    SearchData1
}