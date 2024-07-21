import propTypes from 'prop-types';
function condionalRendering({isLoggedIn= false}){

  return(
    isLoggedIn ? <h1>Logged In </h1>
                     : <h1>Logged Out</h1>);
  
}
condionalRendering.propTypes = {
  isLoggedIn: propTypes.bool
}
// condionalRendering.defaultProps = {
//   isLoggedIn: false
// }
export default condionalRendering;