
let getSalesCoffee = async () =>{
    try{

        const result = await fetch("https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml");
        
        if(!result.ok){
            throw new Error(`Error HTTP: ${result.status}`);
        }

        let text = await result.text();
        const parser = new DOMParser();
        const data = parser.parseFromString(text, "application/xml");

        return {success: true, body: data}

    }catch(error){

        return {success: false, body: error.message}

    }
}

export{getSalesCoffee}