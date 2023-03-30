
import 'materialize-css/dist/css/materialize.min.css';
function CartWidget() {
    return (
      <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">0</span>
      </div>
    );
  }
  
  export default CartWidget;