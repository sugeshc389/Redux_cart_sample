import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { ProductList, Header } from "./components";
import ProductList from './component/ProductList/ProductList';
import Header from './component/Header/Header';
import { updateUser } from "./redux/cart";
// import axios from "axios";
function App() {
   return (
      <Fragment>
         <Header />
         <ProductList />
      </Fragment>
   );
}

export default App;