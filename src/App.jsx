import { useEffect } from "react"
import CartContainer from "./components/CartContainer"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"
import { useSelector, useDispatch } from "react-redux"
import { getCartItems } from "./redux/cart/cartSlice"

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, cartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
