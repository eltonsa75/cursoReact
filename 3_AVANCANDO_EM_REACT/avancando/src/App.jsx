import './App.css'

// 2 - imagem assets
import assassins from "./assets/assassins.png";

// 3- useDate
import Data from './components/Data';

// 4 Renderização de lista
import ListRender from './components/ListRender';

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender';

// 8 - Props
import ShowUserName from './components/ShowUserName';

// 9 - desestruturando props
import CarDetails from './components/CarDetails';

// 11 - renderização de lista com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km:15900},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000},
];

function App() {
  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1> Avançando em React</h1>
      {/* 1 - imagem em public  */}
      <img src="/cavaleiros.JPG" alt="Alguma imagem"></img>
      {/* 2 - imagem em assets */}
      <img src={assassins} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - render de lista */}
      <ListRender/>
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Elton"/>
      {/* 9 - Desestruturando props */}
      <CarDetails brand="Ford" km={2018} color="preto" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={123444} color="branco" />
      <CarDetails brand="Audi" km={9987} color="azul" />
      {/* 11 - renderização de lista com componente */ }
      {cars.map((car)=> (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
    </div>
  )
}

export default App
