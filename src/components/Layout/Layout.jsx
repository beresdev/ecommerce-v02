import "./Layout.css";

function Layout({ handleCartClick }) {
  return (
    <div className="layout-container">
      <section className="layout-left">
        <h1>iBuy</h1>
        <div className="pages-container">
          <button>Home</button>
          <button>Sale</button>
          <button>Products</button>
        </div>
      </section>
      <section className="layout-right">
        <button onClick={handleCartClick} className="shop-cart">
          cart
        </button>
        <button>Sign up</button>
        <button>Sign in</button>
      </section>
    </div>
  );
}

export { Layout };
