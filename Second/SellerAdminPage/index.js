var z = 0
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/0229ba30fb8a41b0946bbcfa662ad623/productsData")
    .then( (response) => {
        for (let i = 0; i < response.data.length; i++){
            showProductdetails(response.data[i]);
            let a = response.data[i].totalValue ? parseInt(response.data[i].totalValue) : 0
            z += a
        }
        showTotalValue(z,0);
    })
    .catch( err => {
        console.log(err);
        document.body.innerHTML += `<h2> Something went wrong</h2>`
    })
})

var subBtn = document.getElementById("btnSubmit");
subBtn.addEventListener('click', addProduct);


function addProduct(e){
    e.preventDefault();

    var removeDiv = document.getElementById('productdiv');
    var removeCh = document.getElementById('removeChi');
    removeDiv.removeChild(removeCh)

    const sellingPrice = document.getElementById('sellingPrice').value
    const productName = document.getElementById('productName').value
    totalValue = document.getElementById('sellingPrice').value ? parseInt(document.getElementById('sellingPrice').value) : 0
    

    const obj = {
        sellingPrice,
        productName,
        totalValue
    }

    axios.post("https://crudcrud.com/api/0229ba30fb8a41b0946bbcfa662ad623/productsData", obj)
    .then( (response) => {
        console.log(response)
        showProductdetails(response.data);
        showTotalValue(z, response.data.totalValue);
    })
    .catch( err => {
        console.log(err);
        document.body.innerHTML += `<h2> Something went wrong</h2>`
    })
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

    editBtn.onclick = () => {

        document.getElementById('sellingPrice').value = obj.sellingPrice
        document.getElementById('productName').value = obj.productName

        axios.delete(`https://crudcrud.com/api/0229ba30fb8a41b0946bbcfa662ad623/productsData/${obj._id}`)
        .then(console.log('Successfully Deleted'))
        .catch( err => {
            console.log(err);
            document.body.innerHTML += `<h2> Something went wrong</h2>`
        })
        parentElem.removeChild(newli)

        var removeDiv = document.getElementById('productdiv');
        var removeCh = document.getElementById('removeChi');
        removeDiv.removeChild(removeCh);

        showTotalValue(z, (-1 * obj.totalValue))

    }

    deleteBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/0229ba30fb8a41b0946bbcfa662ad623/productsData/${obj._id}`)
        .then(console.log('Successfully Deleted'))
        .catch( err => {
            console.log(err);
            document.body.innerHTML += `<h2> Something went wrong</h2>`
        })
        parentElem.removeChild(newli);
        var removeDiv = document.getElementById('productdiv');
        var removeCh = document.getElementById('removeChi');
        removeDiv.removeChild(removeCh);

        showTotalValue(z, (-1 * obj.totalValue))

    }

}


function showTotalValue(z, totalValue){
    
    var parentparaElem = document.getElementById('productdiv');
    var ptotal = document.createElement('p');
    ptotal.className = "d-inline-block"
    ptotal.id = 'removeChi'
    lastValue = z +  totalValue
    
    ptotal.textContent = lastValue
    
    parentparaElem.appendChild(ptotal)
}