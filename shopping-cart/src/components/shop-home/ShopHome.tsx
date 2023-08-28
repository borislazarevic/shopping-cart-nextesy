import { useGetAllProductsQuery } from "../../redux-toolkit";
import { Spinner, Card, Error } from "..";

export const ShopHome = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error statusCode={error.status} />;
  }

  return (
    <div className="shop-home-container">
      {products?.map((product) => (
        <Card
          key={product.id}
          imgSrc={product.image}
          imgAlt={product.title}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};
