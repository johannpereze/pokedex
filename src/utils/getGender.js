const API_GENDER = "https://pokeapi.co/api/v2/gender/";
const NUMBER_OF_GENDERS = 3;
//Esta es la de getData. Hay que hacerla funcionar aquí apra descargar los 3 generos y luego buscar por ID cuales le corresponden

const getGenders = async () => {
  const genders = [];
  for (let index = 1; index < NUMBER_OF_GENDERS + 1; index++) {
    let gender = await getGender(index);
    genders.push(gender);
  }
  return genders;
};

const getGender = async (id) => {
  const apiURL = `${API_GENDER}${id}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default getGenders;

/* 
const API_GENDER = "https://pokeapi.co/api/v2/gender/";
const NUMBER_OF_GENDERS = 3;

//Esta es la de getData. Hay que hacerla funcionar aquí para descargar los 3 generos y luego buscar por ID cuales le corresponden
const getGenders = async () =>{
  const gendersArray = []
  for (let index = 1; index < NUMBER_OF_GENDERS + 1; index++) {
  
  const getGender = ({const apiURL = `${API_GENDER}${index}`;
  try {
      const response = await fetch(apiURL);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log('Error:', error  );
  }}
};

for (let index = 1; index < NUMBER_OF_GENDERS + 1; index++) {
  let gender = await getGender(index);
  genders.push(gender);
}

export default getGenders; */
