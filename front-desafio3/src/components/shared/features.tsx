import { getIconPath } from "../utils/getIcon";

const Features = () => {
  return (
    <section className="p-12 flex justify-around bg-features">
      <div className="flex items-center space-x-2">
        <img height={55} width={55} src={getIconPath("throphy")} />
        <div>
          <h3 className="font-bold m-0 space-x-2">High Quality</h3>
          <p className="m-0 space-x-2 text-sm font-medium text-gray-500">
            Crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img height={55} width={55} src={getIconPath("warranty")} alt="" />
        <div>
          <h3 className="font-bold m-0 space-x-2">Warranty Protection</h3>
          <p className="m-0 space-x-2 text-sm font-medium text-gray-500">
            Over 2 years
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img height={55} width={55} src={getIconPath("shipping")} alt="" />
        <div>
          <h3 className="font-bold m-0 space-x-2">Free Shipping</h3>
          <p className="m-0 space-x-2 text-sm font-medium text-gray-500">
            Order over 150 $
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img height={55} width={55} src={getIconPath("support")} alt="" />
        <div>
          <h3 className="font-bold m-0 space-x-2">24 / 7 Support</h3>
          <p className="m-0 space-x-2 text-sm font-medium text-gray-500">
            Dedicated support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
