const Footer = () => {
  return (
    <footer className="p-8">
      <div className="grid grid-cols-4">
        <div className="flex flex-col text-sm text-gray-400">
          <h2 className="text-2xl font-bold font-mont text-black mb-6">
            Furniro.
          </h2>
          <p className="m-0">400 University Drive Suite 200 Coral</p>
          <p className="m-0">Gables,</p>
          <p className="m-0">FL 33134</p>
        </div>
        <div className="flex flex-col gap-8 text-sm font-medium">
          <h3 className="text-gray-400">Links</h3>
          <a href="#">
            <span>Home</span>
          </a>
          <a href="#">
            <span>Shop</span>
          </a>
          <a href="#">
            <span>About</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
        <div className="flex flex-col gap-8 text-sm font-medium">
          <h3 className="text-gray-400">Help</h3>
          <a href="#">
            <span>Payment Options</span>
          </a>
          <a href="#">
            <span>Returns</span>
          </a>
          <a href="#">
            <span>Privacy Policies</span>
          </a>
        </div>
        <div className="flex flex-col gap-8 text-sm font-medium">
          <h3 className="text-gray-400">Newsletter</h3>
          <div>
            <input type="email" placeholder="Enter your email" />
            <button>
              <span>SUBSCRIBE</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="my-9 w-full border-gray-300 opacity-40" />
      <span>2023 furniro. All rights reserved</span>
    </footer>
  );
};

export default Footer;
