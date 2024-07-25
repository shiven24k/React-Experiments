import { useState } from 'react'
import './App.css'
import Card from './components/Card/card'
import Conditional from './components/ConditionalRendering/conditionalRendering'
import Button from './components/Button/Button'
import lufy from './assets/lufy.jpg'
import nami from './assets/nami.jpeg'
import zoro from './assets/zoro.jpg'
import ussop from './assets/ussop.jpeg'
import sanji from './assets/sanji.jpeg'
import chopper from './assets/chopper.jpeg'
import brook from './assets/brook.jpeg'
import jinbe from './assets/jinbe.jpeg'
import franky from './assets/franky.jpeg'
import robin from './assets/robin.jpeg'
import List from './components/List/List'
import ProfilePicture from './components/Button/ProfilePicture'
import MyComponent from './components/MyComponent/MyComponent'
import Counter from './components/Counter/Counter'
import ColorPicker from './components/ColorPicker/ColorPicker'
import ObjInState from './components/ObjInState/ObjInState'

const characters = {
  lufy,
  nami,
  zoro,
  ussop,
  sanji,
  chopper,
  brook,
  jinbe,
  franky,
  robin,
};
const fruits = [{id:1,name :"Apple", calories: 98},
                  {id:2,name :"Mango", calories: 58},
                  {id:3,name :"Papaya", calories: 58},
                  {id:4,name :"Leechi", calories: 138},
                  {id:5,name :"Watermelon", calories: 128}
  ];

  const vegetables = [{id:1,name :"Tomato", calories: 98},
    {id:2,name :"Celery", calories: 58},
    {id:3,name :"Carrot", calories: 58},
    {id:4,name :"Potato", calories: 138},
    {id:5,name :"Bringle", calories: 128}];
  
function App() {

  return (
    <>
     

      <Card img={characters.lufy} charName="Lufy"/>
      <Card img={characters.ussop} charName="Ussop"/>
      <Card img={characters.zoro} charName="Zoro"/>
      <Card img={characters.sanji} charName="Sanji"/>
      <Card img={characters.nami} charName="Nami"/>
      <Card img={characters.chopper} charName="Chopper"/>
      <Card img={characters.brook} charName="Brook"/>
      <Card img={characters.jinbe} charName="Jinbe"/>
      <Card img={characters.franky} charName="Franky"/>
      <Card img={characters.robin} charName="Robin"/>
      
      <Card/>
      <Conditional isLoggedIn={true}/>

      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0  && <List items={vegetables} category="Vegetables"/>}
      <List/>

      <Button/>
      <ProfilePicture/>

      <MyComponent/>
      <Counter/>

      <ColorPicker/>
      <ObjInState/>
      
    </>
  )
}

export default App
