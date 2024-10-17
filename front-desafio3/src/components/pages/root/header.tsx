import { getButtonPath } from "../../utils/getIcon";
const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between h-100">
      <div className="flex flex-row items-center gap-1">
        <img
          src="/src/assets/images/logo.svg"
          alt="Logo"
          className="h-50 w-32"
        />
        <h1 className="text-3xl font-bold font-mont">Furniro</h1>
      </div>
      <div className="flex flex-row font-medium text-sm gap-18">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a>About</a>
        <a>Contact</a>
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
