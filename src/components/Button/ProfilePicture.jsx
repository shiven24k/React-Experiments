

function ProfilePicture(){
  const imgUrl = "./src/assets/lufy.jpg"

  const handleClick =(e)=> e.target.style.display = "none";

  return(<img src={imgUrl} onClick={(e)=>handleClick(e)}></img>)
}
export default ProfilePicture;