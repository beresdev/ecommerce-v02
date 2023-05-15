import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <section className="">
        <h1>iBuy</h1>
        <div>
          <button>Home</button>
          <button>Sale</button>
          <button>Products</button>
        </div>
      </section>
      <section>
        <button>cart</button>
        <button>Sign up</button>
        <Link>Sign in</Link>
      </section>
    </div>
  );
}

export { Layout };
