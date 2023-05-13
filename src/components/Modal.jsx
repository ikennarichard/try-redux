import { useDispatch } from "react-redux"
import { clearCart } from "../redux/cart/cartSlice"
import { closeModal } from "../redux/modal/modalSlice"

export default function Modal() { 
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart</h4>
        <div className="btn-container">
          <button type="button" className="btn confirrm-btn" onClick={() => {
            dispatch(clearCart())
            dispatch(closeModal())
          }}>
            Confirm
          </button>
          <button type="button" className="btn clear-btn"
          onClick={() => {
            dispatch(clearCart())
            dispatch(closeModal())
          }}>
            Cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
