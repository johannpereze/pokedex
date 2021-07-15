const API_GENDER = "https://pokeapi.co/api/v2/gender/";

//Esta es la de getData. Hay que hacerla funcionar aquí apra descargar los 3 generos y luego buscar por ID cuales le corresponden
const getData = async (id) =>{
  id === '/' ? id = 25 : id;
  const apiURL = id ? `${API}${id}`: `${API}${25}`;
  try {
      const response = await fetch(apiURL);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log('Error:', error  );
  }
};

export default getData;