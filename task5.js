let productContainer = document.getElementById("productContainer");

let message = document.getElementById("message");

let searchInput = document.getElementById("searchInput");

let categoryFilter = document.getElementById("categoryFilter");

let sortPrice = document.getElementById("sortPrice");

let allProducts = [];


message.innerText = "Loading...";

fetch("https://fakestoreapi.com/products")

.then((response)=>{
    return response.json();
})

.then((data)=>{

    message.innerText = "";

    allProducts = data;

    displayProducts(allProducts);

    loadCategories(allProducts);
})

.catch((error)=>{

    console.log(error);

    message.innerText = "Failed to load data";
});


function displayProducts(data){

    productContainer.innerHTML = "";

    data.forEach((product)=>{

        let card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

        <img src="${product.image}">

        <h2>${product.title.slice(0,50)}...</h2>

        <p class="price">₹ ${product.price}</p>

        <p class="desc">
        ${product.description.slice(0,60)}...
        </p>

        <div class="btns">

            <button class="viewBtn"
            onclick="viewMore(
            '${product.title}',
            '${product.description}'
            )">
            View More
            </button>

            <button class="cartBtn"
            onclick='addToCart(${JSON.stringify(product)})'>
            Add Cart
            </button>

        </div>
        `;

        productContainer.append(card);
    });
}


function viewMore(title,description){

    alert(
        "TITLE : " + title + 
        " DESCRIPTION : " + description
    );
}


searchInput.addEventListener("input",()=>{

    let value = searchInput.value.toLowerCase();

    let filteredData = allProducts.filter((product)=>{

        return product.title
        .toLowerCase()
        .includes(value);
    });

    displayProducts(filteredData);
});

function loadCategories(products){

    let categories = [];

    products.forEach((product)=>{

        if(!categories.includes(product.category)){

            categories.push(product.category);
        }
    });

    categories.forEach((cat)=>{

        let option = document.createElement("option");

        option.value = cat;

        option.innerText = cat;

        categoryFilter.append(option);
    });
}

categoryFilter.addEventListener("change",()=>{

    let selected = categoryFilter.value;

    if(selected === "all"){

        displayProducts(allProducts);

    }else{

        let filtered = allProducts.filter((product)=>{

            return product.category === selected;
        });

        displayProducts(filtered);
    }
});


sortPrice.addEventListener("change",()=>{

    let sorted = [...allProducts];

    if(sortPrice.value === "lowToHigh"){

        sorted.sort((a,b)=> a.price - b.price);
    }

    else if(sortPrice.value === "highToLow"){

        sorted.sort((a,b)=> b.price - a.price);
    }

    displayProducts(sorted);
});
