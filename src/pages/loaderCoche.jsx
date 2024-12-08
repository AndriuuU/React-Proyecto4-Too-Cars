
export const loaderCoche = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`https://www.freetestapi.com/api/v1/cars/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    return response.json();
  };
  