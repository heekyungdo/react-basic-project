import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Notification from './components/UI/Notification';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // !!isInitial일 때 장바구니 업데이트 X => 처음 렌더링될 때 빈 장바구니가 서버에 담기지 않도록 하기 위해.
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(!cart.changed) {
      return
    }
    
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
