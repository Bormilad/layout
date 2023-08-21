import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Component} from 'react'
// @import url('https://fonts.googleapis.com/icon?family=Material+Icons')

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const ImgFunc = ({img}) => (
    <>
        <div>
            <div>{img.name}</div>
            <div>{img.color}</div>
            <img src={img.img}/>
            <div>${img.price}</div>
        </div>
    </>
)

class ShopCard extends Component{
    constructor(props){
        super(props);
    }
    render(){

        const {img} = this.props;
        if(true){
            console.log("if");
        }
        else{
            console.log("else");
        }
        return(
            <>
                <div>{img.name}</div>
                <div>{img.color}</div>
                <img src={img.img}/>
                <div>${img.price}</div>
            </>
        )
    }
}
class IconSwitch extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.img);
        return(
            <>
            <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"/>
            </>
        )
    }
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")}/>

      <div className="card">
              <button onClick={() => setCount((count) => count = count > 0? 0: 1)}>
                count is {count}
              </button>

      </div>

      {products.map((item) => (
        <ShopCard key={item.img} img={item}/>
        ))}

        </>
  )
}

export default App
