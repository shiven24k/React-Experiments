import PropTypes from 'prop-types';
function List ({ category = "Category", items = [] }){   
// const fruits = [{id:1,name :"Apple", calories: 98},
//                 {id:2,name :"Mango", calories: 58},
//                 {id:3,name :"Papaya", calories: 58},
//                 {id:4,name :"Leechi", calories: 138},
//                 {id:5,name :"Watermelon", calories: 128}];
  //ALPHABETICAL order
  // fruits.sort((a,b) => a.name.localeCompare(b.name));
  //Reverse ALPHABETICAL order
  // fruits.sort((a,b) => b.name.localeCompare(a.name));
  //sort by caloies
  // fruits.sort((a,b) => a.calories - b.calories);
  //sort in recerse order
  
  // const category = props.category;
  // const itemList = props.items;


  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
  // fruits.sort((a,b) => b.calories - a.calories);

  const listItems = items.map(item =><li key={item.id}>
                                               {item.name}: &nbsp; 
                                               <b>{item.calories}</b></li>)
  
    return(  
      <>
     <h3 className="list-category">{category}</h3>
     <ol className="list-item">{listItems}</ol>
     
     </>
           
     )
}

List.propTypes={
  category:PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                   name:PropTypes.string,
                                   calories:PropTypes.number
  }))
}
export default List;