//import FilterableProductTable from './FilterableProductTable'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'
import FilterableProductTable from './FilterableProductTable'
//import PRODUCTS from './data'

function App() {
  return (
    <>
      <FilterableProductTable />
      <SearchBar />
      <ProductTable>
        <ProductCategoryRow />
        <ProductRow />
      </ProductTable>
    </>
  )
}

export default App
