import axios from "axios"
const SearchPhoto = (state, id) => {
    const url = `https://api.tecsup.edu.pe/intranettecsup-api/api/docencia/picture/${id}`
    state(url)
}

const SearchData1 = async (state, id) => {

    const response = await axios.get(`https://backinfotecv2.vercel.app/api/alumno/${id}`)
    console.log(response.data);
    state(response.data);

}


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};






export {
    SearchPhoto,
    SearchData1,
    getRandomInt
}