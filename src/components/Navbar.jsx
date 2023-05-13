import { useSelector } from "react-redux";
import { NoSymbol, CartIcon } from "../assets/icon";

const Navbar = () => {
  //selector gives us access
  //to the global store(entire app state)
  const { amount } = useSelector((state) => state.cart);

  console.log(useSelector(state => state))

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <NoSymbol/>
          <CartIcon />
          </div>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar