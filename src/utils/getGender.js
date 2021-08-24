const API_GENDER = "https://pokeapi.co/api/v2/gender/";

//Esta es la de getData. Hay que hacerla funcionar aquí para descargar los 3 generos y luego buscar por ID cuales le corresponden
const getGender = async (id) =>{
  const apiURL = `${API_GENDER}${id}`;
  try {
      const response = await fetch(apiURL);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log('Error:', error  );
  }
};

export default getGender;