async function fetchData(){

    const response = await fetch('https://fakestoreapi.com/products', { mode: "cors" })
    return response.json();

}

export async function fetch3Items(){

    const response = await fetch('https://fakestoreapi.com/products?limit=3', { mode: "cors" })
    return response.json();

}

export default fetchData;