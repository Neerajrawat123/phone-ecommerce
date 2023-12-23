import Filters from './components/filter-section/index.jsx'
import ProductsSection from './components/ProductsSection.jsx'

function ContentSection() {
  return (
    <div className='flex p-2 gap-2 bg-slate-100'>

        <Filters />
        <ProductsSection />


    </div>
    )
}

export default ContentSection