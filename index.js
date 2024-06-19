const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    }
    
)
}

/* add to cart */
var additemid=0;
function addtocart(){
    var selectitem = document.getElement('div') ;
    selectitem.classList.add('cartimg');
    selectitem.setAttribute('id',additemid);
 
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var cartitem = document.getElementById('title') ;
    selectitem.append(img)
    cartitem.append(selectitem);
}


const product = [
   {
       id: 0,
       image: 'img/13mini-green.jpg',
       title: 'iphone 13 mini',
       price: 500,
       color: 'green',
   },
   {
       id: 1,
       image: 'img/s23.jpg',
       title: 'samsung s23',
       price: 1500,
   },
   {
       id: 2,
       image: 'img/Samsung-S10-5G-256GB.jpg',
       title: 'samsung s10',
       price: 500,
   },
   {
       id: 3,
       image: 'img/Galaxy-S9plus.jpg',
       title: 'samsung s9 plus',
       price: 900,
   }
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
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
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
