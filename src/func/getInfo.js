import axios from "axios"
const SearchPhoto = (id) => {
    const url = `https://api.tecsup.edu.pe/intranettecsup-api/api/docencia/picture/${id}`
    return url

}

const getCV = async (id) => {
    try {
        const response = await axios.get(`https://backinfotecv2.vercel.app/api/alumno/cv/${id}`);

        return response.data.archivoNombreCv
    } catch (error) {
        return "0"
    }


}

const SearchData1 = async (state, state1, state2, id) => {

    try {
        const response = await axios.get(`https://backinfotecv2.vercel.app/api/alumno/v2/${id}`);

        const codCarnet = response.data.codCarnet;
        const cvData = await getCV(response.data.codCarnet);
        const photoData = await SearchPhoto(codCarnet);

        state2(cvData);
        state1(photoData);
        state(response.data);


    } catch (error) {
        console.error("Error en SearchData1:", error);

    }

}



const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};






export {
    SearchPhoto,
    SearchData1,
    getRandomInt
}


// import axios from "axios"
// const SearchPhoto = (state, id) => {
//     const url = `https://api.tecsup.edu.pe/intranettecsup-api/api/docencia/picture/${id}`
//     state(url)
// }

// const SearchData1 = async (state, id) => {

//     const response = await axios.get(`https://backinfotecv2.vercel.app/api/alumno/v1/${id}`)
//     console.log(response.data);
//     state(response.data);

// }


// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };






// export {
//     SearchPhoto,
//     SearchData1,
//     getRandomInt
// }