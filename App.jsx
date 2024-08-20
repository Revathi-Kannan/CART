import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[count, setcount] = useState(0)


  return (
  <div>
       <h1 className="header">SHOPIFY</h1>
<AllProducts setcount={setcount} count={count}/>
<CartCount count={count}/>
</div>
  )
}
export default App

function AllProducts({setcount, count}){
  const pro1 = {
    pic:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1052146/Coko6ahvHu-1052146_1.jpg",
    Details:"Lotus Makeup Natural Blend Swift Makeup Stick SPF 15 - 730 Creamy Peach (10g)",
    shipper: "RELIANCE RETAIL LIMITED",
    price: "₹318 (25% off)"
    
  }

  const pro2 = {
    pic:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/gk-hair/COMBO_231111111706-V2B/0/ed5__1hDRW-1102801_combo_16_1.jpg",
    Details:"GK Hair Silver Bombshell Shampoo 710 ml with Moisturizing Conditioner 300ml",
    shipper: "RELIANCE RETAIL LIMITED",
    price: "₹1,520 ₹1,900 (20% off)"
    
  }

  const pro3 = {
    pic:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1012319/ro7jY2K67n-1.png",
    Details:"Fashion Colour Professional Makeup Kit - 03 Shade (209.3g)",
    shipper: "RELIANCE RETAIL LIMITED",
    price: "₹910"
    
  }
  

  const pro4 = {
    pic:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1104360/95QWqkcRu-8904173505381_1.jpg",
    Details:"Ramsons U R Lovely Eau De Parfum (30ml)",
    shipper: "RELIANCE RETAIL LIMITED",
    price: "₹131"
    
  }
  
  const pro5 = {
    pic:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1131724/B_VujeLBrM-1131724_1.jpg",
    Details:"WishCare Tinted Ceramide Lip Balm with SPF 50 PA+++ Kojic Acid & Niacinamide (5g)",
    shipper: "RELIANCE RETAIL LIMITED",
    price: "₹251"
    
  }
  
  const pro6 = {
    pic:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/UJrTOIR-T-Prada-Luna-Rossa-Ocean-Set-Eau-De-Parfum-and-Travel-Size-Spray-(2Pcs).jpeg",
    Details:"Prada Luna Rossa Ocean Set Eau De Parfum & Travel Size Spray (2Pcs)",
    shipper: "RELIANCE RETAIL LIMITED",
    price: "₹9000"
    
  }
  return(
<div className="AllProd">
<Overall model ={pro1} setcount={setcount} count={count}/>
<Overall model = {pro2} setcount={setcount} count={count}/>
<Overall model = {pro3} setcount={setcount} count={count}/>
<Overall model = {pro4} setcount={setcount} count={count}/>
<Overall model = {pro5} setcount={setcount} count={count}/>
<Overall model = {pro6} setcount={setcount} count={count}/>
</div>
  )
}

function Overall({model, setcount, count}){
  const[show, setshow] = useState(true)

  function changebuy(){
    setshow(!show)
    setcount(count+1)
  }

  function changeremove(){
    setshow(!show)
    setcount(count-1)
  }

return(
  <div className="overall">
 
<img className="picture" src= {model.pic} alt ="#"/>
<p className="Description">{model.Details}</p>
<p className= "price"> Price: {model.price}</p>
<p className="Shipper">Shipper: {model.shipper}</p>
{/* Conditional Rendering */}
{show ? <button className="Add"onClick={changebuy} >Add to Cart</button> : 
<button className ="Remove" onClick={changeremove}>Remove from Cart</button>}

  </div>
  )
}

function CartCount({count}){
 
  return(
    <div className="cartheader">
        <div className="cart-count"></div>
     
      <img className='cartpic' src="https://th.bing.com/th/id/OIP.iDVurdWMV4YcAhqCEaT1bQHaHa?w=1076&h=1076&rs=1&pid=ImgDetMain" alt="#"/>
      CART: {count}</div>
  )

}

