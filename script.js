        
function inputCheck(){

        // ID's to be declared
    const Name = document.getElementById('nameInput');
    const Brand = document.getElementById('brandInput');
    const Price = document.getElementById('priceInput');
    const Date = document.getElementById('dateInput');
    const Type = document.getElementById('TypeSelect');
    

        // Output Segments
    const nameOutput = document.getElementById('nameOutput');
    const brandOutput = document.getElementById('brandOutput');
    const priceOutput = document.getElementById('priceOutput');
    const dateOutput = document.getElementById('dateOutput');
    const typeOutput = document.getElementById('typeOutput');
    const saleOutput = document.getElementById('saleOutput');

        // Input Values
    const NameValue = document.getElementById('nameInput').value;
    const BrandValue = document.getElementById('brandInput').value;
    const PriceValue = document.getElementById('priceInput').value;
    const DateValue = document.getElementById('dateInput').value;
    const TypeValue = document.getElementById('typeSelect').value;
    const NoValue = document.getElementById('ans1').checked;
    const YesValue = document.getElementById('ans2').checked;

    counter = 0;

        // Product Name
    if(NameValue != '' && NameValue.length < 30 && NameValue.length > 3){
            Name.style.border = "2px solid green";
            nameOutput.innerHTML = "";
            counter++;
    } else {
            nameOutput.innerHTML = "*Please Insert The Product's Name!!";
            Name.style.border = "2px solid red";
            counter--;
    }

        // Product Brand
        if(BrandValue != '' && BrandValue.length < 30 && NameValue.length > 3){
            Brand.style.border = "2px solid green";
            brandOutput.innerHTML = "";
            counter++;
        } else {
            Brand.style.border = "2px solid red";
            brandOutput.innerHTML = "*Please Insert The Product's Brand!!";
            counter--; 
        }
        
        // Product Price
        if(PriceValue === ''){
            Price.style.border = "2px solid red";
            priceOutput.innerHTML = "*Please Insert The Product's Price!!";
            counter--;
        } else {
            Price.style.border = "2px solid green";
            priceOutput.innerHTML = "";
            counter++;
        }

        // Product Prod. Date
        if(DateValue === ''){
            Date.style.border = "2px solid red";
            dateOutput.innerHTML = "*Please Insert The Production Date!!";
            counter--;
        } else {
            Date.style.border = "2px solid green";
            dateOutput.innerHTML = "";
            counter++;
        }

        // Product Type 
        if(TypeValue === ''){
            typeSelect.style.border = "2px solid red";
            typeOutput.innerHTML = "*Please Insert The Product Type!!";
            counter--;
        } else {
            typeSelect.style.border = "2px solid green";
            typeOutput.innerHTML = "";
            counter++;
        }

        // Product Sale
        if(NoValue || YesValue){
            saleOutput.innerHTML = "";
            counter++;
         
        } else {
            saleOutput.innerHTML = "*Please specify whether the product is on sale or not!!";
            counter--;
        }
    
        if(counter === 6) {
            Ajouter()
        }
    }

        function Ajouter(){

    //creating new table Row 
    let table = document.querySelector('myTable');
    const tBody = document.querySelector('tbody');
    const NameValue = document.getElementById('nameInput').value;
    const BrandValue = document.getElementById('brandInput').value;
    const PriceValue = document.getElementById('priceInput').value;
    const TypeValue = document.getElementById('typeSelect').value;

    // Element Creation
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        let col2 = document.createElement('td');
        let col3 = document.createElement('td');
        let col4 = document.createElement('td');
        let col5 = document.createElement('td');
        let col6 = document.createElement('td');
        let btnedit = document.createElement('button');
        let btndelete = document.createElement('button');
            

        for (let x = 0 ; x <= 1 ; x++){
            let column = document.createElement('td');
            let btnedit = document.createElement('button');
            let btndelete = document.createElement('button');
            table.appendChild('row');

            for(let y = 0 ; y <= 7; y++){   
                row.appendChild(column);
                if (y == 0) {
                    cell.innerText = NameValue; 
                }
               
                if(y == 1){
                    cell.innerText = BrandValue;
                }
                if(y == 2){
                    cell.innerText = PriceValue;
                }
                if(y == 3){
                    cell.innerText = DateValue;
                }
                if(y == 4){ 
                    cell.innerText = TypeValue;
                }
                if(y == 5){
                    var getSelectedValue = d    agi ocument.querySelector( 'input[name="sale"]:checked');
                    cell.innerText = getSelectedValue.value;
                }

            }
        }


            // col1;innerHTML = NameValue;
            // col2.innerHTML = BrandValue;
            // col3.innerHTML = PriceInput;
            // col4.innerHTML = DateValue;
            // col5.innerHTML = TypeValue;

            
            // row.appendChild('col1');
            // row.appendChild('col2');
            // row.appendChild('col3');
            // row.appendChild('col4');
            // row.appendChild('col5');
            // row.appendChild('col6');
    }
