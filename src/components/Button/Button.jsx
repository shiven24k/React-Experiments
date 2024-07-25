function Button(){
//     let count = 0;
//     const handleClick = (name) => {
//         count++;
//         console.log(`HEY HEY, ${name} you hace clicked this button ${count} timesss`)
//  };
const handleClick =(e) => e.target.textContent=`you clicked`;

 return( <button onClick={(e)=>handleClick(e)}>Click Me</button>)
}
export default Button;