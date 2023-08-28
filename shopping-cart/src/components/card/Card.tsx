import { Button } from "../button/Button";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: string;
  description: string;
}

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  price,
  description,
}: CardProps) => {
  return (
    <div className="card-container">
      <img className="card-image" src={imgSrc} alt={imgAlt} />
      <div className="card-wrapper">
        <div className="card-body">
          <div className="card-title-wrapper">
            <h4 className="card-title">{title}</h4>
            <p className="card-price">{price}$</p>
          </div>
          <p className="card-info">{description}</p>
        </div>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};
