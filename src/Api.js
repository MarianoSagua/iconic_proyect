export const getAllProducts = async ()=>{
    try {      
        let URL = "https://api.escuelajs.co/api/v1/products";
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

