const Footer = () => {
  return (
    <footer className="p-8">
      <div className="grid grid-cols-6">
        <div className="col-span-2 flex flex-col text-sm text-gray-400">
          <h2 className="font-mont mb-6 text-2xl font-bold text-black">
            Furniro.
          </h2>
          <div className="mt-8">
            <p className="m-0">400 University Drive Suite 200 Coral</p>
            <p className="m-0">Gables,</p>
            <p className="m-0">FL 33134</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-sm font-medium">
          <h3 className="font-medium text-gray-400">Links</h3>
          <div className="w-auto">
            <a className="general-link inline-flex" href="#">
              Home
            </a>
          </div>
          <div className="w-auto">
            <a className="general-link inline-flex" href="/shop">
              Shop
            </a>
          </div>
          <div className="w-auto">
            <a className="general-link inline-flex" href="#">
              About
            </a>
          </div>
          <div className="w-auto">
            <a className="general-link inline-flex" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-sm font-medium">
          <h3 className="font-medium text-gray-400">Help</h3>
          <div className="w-auto">
            <a className="general-link inline-flex" href="#">
              Payment Options
            </a>
          </div>
          <div className="w-auto">
            <a className="general-link inline-flex" href="#">
              Returns
            </a>
          </div>
          <div className="w-auto">
            <a className="general-link inline-flex" href="#">
              Privacy Policies
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm font-medium">
          <h3 className="font-medium text-gray-400">Newsletter</h3>
          <div className="flex flex-row gap-2">
            <div className="border-b border-solid border-black">
              <input
                style={{ all: "unset" }}
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <button className="border-b border-solid border-black">
              <span className="email-subscribe">SUBSCRIBE</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="my-9 w-full opacity-40" />
      <span>2023 furniro. All rights reserved</span>
    </footer>
  );
};

export default Footer;
