import React,{useState} from "react";
function MyComponent(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);
    const [quantity,setQuantity] = useState(0);
    const [comment ,setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping,setShipping] = useState();
    
    const updateName =()=>{
        setName("Shiven")
    }
    const incrementAge =()=>{
        setAge(a=>(a+1))
    }
    const toggleEmployedStatus= ()=>{
        setIsEmployed(!isEmployed);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentWindow(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }


    return(<div>
         <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button><br></br>
        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>
        <textarea value={comment} onChange={handleCommentChange}>{comment}</textarea>
        <p>COMMENT: {comment}</p>
        <select value={payment} onChange={handlePaymentWindow}>
            <option value="">Select an Option</option>
            <option value="giftcard">Giftcard</option>
            <option value="mastercard">Mastercard</option>
            <option value="visa">VISA</option>
        </select>
        <p>Payment: {payment}</p>
        <label>
            <input type="radio" value="Pick Up" 
            checked={shipping == "Pick Up"}
            onChange={handleShippingChange}/>
            Pick Up
        </label>
        <br/>
        <label>
        <input type="radio" value="Delivery" 
            checked={shipping == "Delivery"}
            onChange={handleShippingChange}/>
            Delvery
        </label>
        <p>Shipping: {shipping}</p>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>
        
    </div>)

}
export default MyComponent;