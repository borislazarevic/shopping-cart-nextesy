import {
  CustomError,
  addToCart,
  useGetAllProductsQuery,
} from "../../redux-toolkit";
import { Spinner, Card, Error } from "..";
import { useDispatch } from "react-redux";

export const ShopHome = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  const dispatch = useDispatch();

  const handleAddToCart = (productId: number) => {
    const product = products.find((product) => product.id === productId);
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error statusCode={(error as CustomError).status} />;
  }

  return (
    <div className="shop-home-container">
      {products?.map((product) => (
        <Card
          key={product.id}
          productId={product.id}
          imgSrc={product.image}
          imgAlt={product.title}
          title={product.title}
          price={product.price}
          description={product.description}
          addToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
