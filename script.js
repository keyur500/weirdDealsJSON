window.addEventListener("load", function(){

    function getJsonData(){
       const JsonFileURL = "https://keyur500.github.io/weirdDealsJSON/deals.json";
       
       fetch(JsonFileURL)
        .then(resonse => resonse.json())
        .then(data => { addData(data); });
    }

    function addData(data){
    
        let productsContainer = document.getElementById("products");
        
        //console.log(productsContainer);
        
        console.log(data);
        
        //looping through the data 
        for(let i=0; i< data.length; i++){
            let cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.setAttribute("style", "width: 18rem;");
            
                console.log(cardDiv);

            let productImg = document.createElement("img");
                productImg.classList.add("card-img-top");
                productImg.setAttribute("src", data[i].productImage);

            let productCardBody = document.createElement("div");
                productCardBody.classList.add("card-body");

            //<h5 class="card-title">Card title</h5>
            let productCardTitle = document.createElement("h5");
                productCardTitle.classList.add("card-title");    
                productCardTitle.appendChild(document.createTextNode(data[i].productTitle));
   
            //<p class="card-text"> Product Description </p>
            let productDesc = document.createElement("p");
                productDesc.classList.add("card-text");
                productDesc.appendChild(document.createTextNode(data[i].productDescription));
                
            //<a href="#" class="btn btn-primary">Go somewhere</a>    
            let productPurchase = document.createElement("a");
                productPurchase.classList.add("btn");
                productPurchase.classList.add("btn-primary");
                productPurchase.appendChild(document.createTextNode("$"+data[i].productPrice));

            // adding it to the product card body 
            productCardBody.appendChild(productCardTitle);
            productCardBody.appendChild(productImg);
            productCardBody.appendChild(productDesc);
            productCardBody.appendChild(productPurchase);

            cardDiv.appendChild(productCardBody);
            //cardDiv.appendChild(productImg);
            
            productsContainer.appendChild(cardDiv);
            console.log(cardDiv);
        }

    }

    getJsonData();
})