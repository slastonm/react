import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import Articles from './components/Articles'
import Info from './components/Info'
import Product from './components/Product'
import ConditionRendering from './components/ConditionRendering'
import ProductList from './components/ProductList'
import ProTodo from './components/ProTodo'
import UseEfectComponent from './components/UseEfectComponent'
import ComponentA from './components/DataTransfer/ComponentA'

// Router
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
function App() {
  // const [count, setCount] = useState(0)
  let productName = 'mobile';
  let productPrice = 300;
  const values = [
    {name:'Orange',price:75}, 
    {name:'Banan',price:55}, 
    {name:'Kiwi',price:65}, 
    {name:'Salad',price:100}
];
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Header></Header>
      <ComponentA></ComponentA>
      <UseEfectComponent></UseEfectComponent>
      <ProTodo></ProTodo>
      {/* <ProductList data={values}></ProductList> */}
      {/* <ConditionRendering isLogin={true} username={'Testerovich'}></ConditionRendering>
      <ConditionRendering isLogin={false} username={'Tester'}></ConditionRendering> */}

      {/* <Product name='Laptop' price='350'></Product>
      <Product name={productName} price={productPrice}></Product>
      <Product></Product>

      <button className='btn'>
        Test
      </button>
      <Info></Info>
      <Articles></Articles> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Footer></Footer>
    </>
  )
}

export default App
