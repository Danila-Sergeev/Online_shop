import headerStiles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <div className={headerStiles.header}>
        <ul className={headerStiles.links}>
          <li className={headerStiles.link}>New Arrivals</li>
          <li className={headerStiles.link}>Shop</li>
          <li className={headerStiles.link}>Apout Us</li>
        </ul>
        <h1 className={headerStiles.title}>Online shop</h1>
        <ul className={headerStiles.links}>
          <div className={headerStiles.imgBox}>
            <li className={headerStiles.link}>Search</li>
            <img
              className={headerStiles.img}
              src={require("../../logo/free-icon-search-2414255.png")}
            />
          </div>

          <li className={headerStiles.link}>Sign In</li>
          <div className={headerStiles.imgBox}>
            <li className={headerStiles.link}>14 items</li>
            <img
              className={headerStiles.img_shop}
              src={require("../../logo/free-icon-shopping-bag-4903482.png")}
            />
          </div>
        </ul>
      </div>
      <hr className={headerStiles.line}></hr>
    </div>
  );
}
