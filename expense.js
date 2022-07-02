window.addEventListener("load",()=>{
    const form = document.querySelector(".main_form");
    const name = document.querySelector(".name");
    const date = document.querySelector(".date");
    const amount =  document.querySelector(".amount");
    const values = document.querySelector(".values");
    const tabla = document.querySelector(".tablasRe")


form.addEventListener("submit",(e)=>{
    e.preventDefault();

        const name_el = name.value;
        const date_el = date.value;
        const amount_el = amount.value;

        if(!name_el|!date_el|!amount_el){
            alert("Ingrese todos los datos porfavor")
        }else if(amount_el<0){
            alert("No puedes ingresar cuentas negativas")
        }

        const line = document.createElement("tr")
        const name_td = document.createElement("td")
        name_td.innerText = name_el

        const date_td = document.createElement("td");
        date_td.innerText = date_el;


        const amount_td = document.createElement("td");
        amount_td.innerText = amount_el;


        line.appendChild(name_td);
        line.appendChild(date_td);
        line.appendChild(amount_td)
        tabla.appendChild(line);
        console.log(name_el,date_el,amount_el);
})
})