import './App.css';
import { Category } from './components/category';

function App() {

  const navbar=[
    {
      image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title:"grocery",
    },
    {
      image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title:"grocery",
    },
  ];
  return (
    <div>category
      {
     navbar.map((el)=>{
       <Category image={el.image} label={el.title}/>
       })
     } 
    </div>
  );

}
export default App;
