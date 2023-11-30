const product= [
    {
    id: 0,
    image:'images/burger-baner.png',
    title: 'Ultimate Bacon BBQ Burger',
    price: 29,
},

{
    id: 0,
    image:'images/product-1.png',
    title: 'SIZZLING CAJUN CREOLE BURGER',
    price: 30,
},

{
    id: 0,
    image:'images/product-3.png',
    title: 'Mushroom Swiss Delight',
    price: 25,
},
{
    id: 0,
    image:'images/product-4.png',
    title: 'Aloha Teriyaki Burger',
    price: 28,
},

{
    id: 0,
    image:'images/product-5.png',
    title: 'Southwest Chipotle Bliss',
    price: 27,
},
{
    id: 0,
    image:'images/product-2.png',
    title: 'SPICY JALAPEÑO FIESTA BURGER',
    price: 35,
},
];
const categories= [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class= 'box'>
            <div class='img-box'>
                <img class= 'images' src= ${image}></img>
        </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>P ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'> + Add to Cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.lenght==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty"
        document.getElementById('total').innerHTML = "P" + 0 + ".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price}= items;
            total=total+price;
            document.getElementById("total").innerHTML = "P" + total + ".00";
            return(
                `<div class= 'cart-item'>
                <div class= 'row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>P${price}.00</h2>`+
                "<i class='fa-solid fa-trash'onclick='delElement("+ (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
