import { getButtonPath } from "../../utils/getIcon";
const Header = () => {
  return (
    <header className="h-100 flex flex-row items-center justify-between px-14">
      <div className="flex flex-row items-center gap-1">
        <img
          src="/src/assets/images/logo.svg"
          alt="Logo"
          className="h-50 w-32"
        />
        <h1 className="font-mont text-3xl font-bold">Furniro</h1>
      </div>
      <div className="gap-18 flex flex-row text-sm font-medium">
        <a className="general-link" href="/">
          Home
        </a>
        <a className="general-link" href="/shop">
          Shop
        </a>
        <a className="general-link" href="#">
          About
        </a>
        <a className="general-link" href="#">
          Contact
        </a>
      </div>
      <div className="flex flex-row justify-end gap-12">
        <button>
          <img src={getButtonPath("login")} alt="Login" />
        </button>
        <button>
          <img src={getButtonPath("search")} alt="Search" />
        </button>
        <button>
          <img src={getButtonPath("favorites")} alt="Favorites" />
        </button>
        <button>
          <img src={getButtonPath("cart")} alt="Cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
