var z = 0
window.addEventListener('DOMContentLoaded', async () => {
    try{
        let response = await axios.get("https://crudcrud.com/api/c380ba9ebe1d4dca87ef515264996cab/productsData")
        for (let i = 0; i < response.data.length; i++){
            showProductdetails(response.data[i]);
            let a = response.data[i].totalValue ? parseInt(response.data[i].totalValue) : 0
            z += a
        }
        showTotalValue(z,0);

    } 
    
    catch(err){
        console.log(err);
        document.body.innerHTML += `<h2> Something went wrong</h2>`
    }
})


var subBtn = document.getElementById("btnSubmit");
subBtn.addEventListener('click', addProduct);


async function addProduct(e){
    try{
        e.preventDefault();

        var removeDiv = document.getElementById('productdiv');
        var removeCh = document.getElementById('removeChi');
        removeDiv.removeChild(removeCh)
        let temp = removeCh.textContent
    
        const sellingPrice = document.getElementById('sellingPrice').value
        const productName = document.getElementById('productName').value
        totalValue = document.getElementById('sellingPrice').value ? parseInt(document.getElementById('sellingPrice').value) : 0
        
        const obj = {
            sellingPrice,
            productName,
            totalValue
        }

        let response = await axios.post("https://crudcrud.com/api/c380ba9ebe1d4dca87ef515264996cab/productsData", obj)
        console.log(response)
        showProductdetails(response.data);
        showTotalValue(parseInt(temp), response.data.totalValue);

    } catch (err){
        console.log(err);
        document.body.innerHTML += `<h2> Something went wrong</h2>`
    }
}

function showProductdetails(obj){

        var parentElem = document.getElementById('productdetails');
        var newli = document.createElement('li');
        newli.textContent = 'Selling Price: ' + obj.sellingPrice + " and " + "Product Name: " + obj.productName
    
        var editBtn = document.createElement('button');
        editBtn.id = 'edtBtn';
        editBtn.className = 'btn btn-info edit';
        editBtn.appendChild(document.createTextNode(" Edit "));
        newli.appendChild(editBtn)
        parentElem.appendChild(newli)
    
        var deleteBtn = document.createElement('button');
        deleteBtn.id = 'dltBtn';
        deleteBtn.className = 'btn btn-danger delete';
        deleteBtn.appendChild(document.createTextNode(" Delete "));
        newli.appendChild(deleteBtn)
        parentElem.appendChild(newli)



    editBtn.onclick = async() => {
        try {

            document.getElementById('sellingPrice').value = obj.sellingPrice
            document.getElementById('productName').value = obj.productName

            await axios.delete(`https://crudcrud.com/api/c380ba9ebe1d4dca87ef515264996cab/productsData/${obj._id}`)
            parentElem.removeChild(newli)

            var removeDiv = document.getElementById('productdiv');
            var removeCh = document.getElementById('removeChi');
            removeDiv.removeChild(removeCh);
    
            z = removeCh.textContent - obj.sellingPrice
            showTotalValue(z,0)

        } catch(err) {
            console.log(err);
            document.body.innerHTML += `<h2> Something went wrong</h2>`
        }

    }

    deleteBtn.onclick = async () => {

        try{
            await axios.delete(`https://crudcrud.com/api/c380ba9ebe1d4dca87ef515264996cab/productsData/${obj._id}`)

            parentElem.removeChild(newli);
            var removeDiv = document.getElementById('productdiv');
            var removeCh = document.getElementById('removeChi');
            removeDiv.removeChild(removeCh);
    
            z = removeCh.textContent - obj.sellingPrice
            showTotalValue(z,0)

        } catch(err){
            console.log(err);
            document.body.innerHTML += `<h2> Something went wrong</h2>`
        }

    }

}


function showTotalValue(smallValue, totalValue){
    
    var parentparaElem = document.getElementById('productdiv');
    var ptotal = document.createElement('p');
    ptotal.className = "d-inline-block"
    ptotal.id = 'removeChi'
    let lastValue = smallValue +  totalValue
    ptotal.textContent = lastValue
    
    parentparaElem.appendChild(ptotal)
}