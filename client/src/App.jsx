import './App.css';
import Header from './components/Header.jsx';
import axios from 'axios'
import Filters from './components/filter-section/index.jsx';
import ProductsSection from './components/ProductsSection.jsx';
import { FilterContextProvider } from './context/FilterContext.jsx';

function App() {

  axios.defaults.baseURL = 'http://localhost:4000';

  
  





  return (
    <>
<FilterContextProvider>

      <Header />
      <div className='flex flex-col md:flex-row p-2 gap-2 bg-slate-100  '>


      <Filters />
      <ProductsSection />
      </div>

      </FilterContextProvider>


    </>
  )
}

export default App
