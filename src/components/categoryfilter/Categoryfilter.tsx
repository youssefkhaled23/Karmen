import Selection from "./selection/Selection";
import style from "./categoryfilter.module.css"

const { categoryfilter, input } = style;
const Categoryfilter = () => {
  return (
    <>
      <div className={categoryfilter}>
        <div>
          <div className="filter mt-2">
            <input type="text" placeholder="Filter by" className={input} />
          </div>
          <h5 className="mt-3">Category</h5>
        </div>
        <Selection type="checkbox" label="All" />
        <Selection type="checkbox" label="Rings" />
        <Selection type="checkbox" label="Rings" />
        <Selection type="checkbox" label="Earings" />
        <Selection type="checkbox" label="Earings" />
        <hr />
        <h5>Category</h5>
        <Selection type="checkbox" label="Newest" />
        <Selection type="checkbox" label="Highly Rated" />
        <Selection type="checkbox" label="Nost Ordered" />
        <hr />
        <h5>Show Product</h5>
        <Selection type="checkbox" label="Newest" />
        <Selection type="checkbox" label="All Products" />
        <hr />
        <h5>Price</h5>
        <input type="range" className="w-100" />
      </div>
    </>
  );
};

export default Categoryfilter;
