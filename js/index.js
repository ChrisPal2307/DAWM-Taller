import { getSalesCoffee } from "./requirements.js";

let processSalesCoffee = async () => {
    try{
        const response = await getSalesCoffee();
        if(response.success){
            const xmlDoc = response.body;
            const rows = xmlDoc.getElementsByTagName("row");
            const data = [];

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                
                data.push({
                    Date: row.getElementsByTagName("Date")[0].textContent,
                    Weekday: row.getElementsByTagName("Weekday")[0].textContent,
                    Time: row.getElementsByTagName("Time")[0].textContent,
                    Coffee: row.getElementsByTagName("coffee_name")[0].textContent,
                    Cash_type: row.getElementsByTagName("cash_type")[0].textContent,                    
                    Money: row.getElementsByTagName("money")[0].textContent
                });
            }

            $('#example').DataTable({
                data: data,
                columns: [
                    { data: 'Date' },
                    { data: 'Weekday' },
                    { data: 'Time' },
                    { data: 'Coffee' },
                    { data: 'Cash_type' },
                    { data: 'Money' }
                ]
            });


        }else{
            console.error("Data loading failed:", response.body);
        }
    
    }catch(error) {
        console.error("Error en el proceso:", error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    processSalesCoffee();
});