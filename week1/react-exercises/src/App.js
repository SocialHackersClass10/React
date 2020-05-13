import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList'
import Guarantee from './components/Guarantee'
import Counter from './components/Counter'


const infos = [
    {
        img: "/images/f-delivery.png",
        title: "Free Shipping",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. 
    Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. 
    Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. 
    Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu.`
    },
    {
        img: "/images/coin.png",
        title: "%100 Money back",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. 
    Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. 
    Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. 
    Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu.`
    },
    {
        img: "/images/chat.png",
        title: "Online Support 24/7",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. 
      Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. 
      Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. 
      Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu.`
    }

];

const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

function App() {

    return (
        <div>
            {/*<HobbyList hobbyList={hobbies}/>*/}

            {/*<div className="customerService">
                <Guarantee img={infos[0].img} title={infos[0].title} description={infos[0].description}/>
                <Guarantee img={infos[1].img} title={infos[1].title} description={infos[1].description}/>
                <Guarantee img={infos[2].img} title={infos[2].title} description={infos[2].description}/>
            </div>*/}

            <Counter/>
        </div>

    );
}

export default App;
