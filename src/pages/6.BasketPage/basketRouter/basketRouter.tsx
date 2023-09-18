import { CartPropsType } from '../../../types/types';
import BasketPage from '../basket';
import EmptyBasket from '../components/emptyBasket/emptyBasket';

const BasketRouter = (props: CartPropsType) => {
  if (localStorage.getItem('CartIsEmpty') === 'false') {
    return <BasketPage userState={props.userState} />;
  } else return <EmptyBasket />;
};

export default BasketRouter;
