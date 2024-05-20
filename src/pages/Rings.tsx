import img1 from "../assets/img/rings/img1.svg";
import img2 from "../assets/img/rings/img2.svg";
import img3 from "../assets/img/rings/img3.svg";
import img4 from "../assets/img/rings/img4.svg";
import img5 from "../assets/img/rings/img5.svg";
import img6 from "../assets/img/rings/img6.svg";
import img7 from "../assets/img/rings/img7.svg";
import img8 from "../assets/img/rings/img8.svg";
import img9 from "../assets/img/rings/img9.svg";
import img10 from "../assets/img/rings/img10.svg";
import img11 from "../assets/img/rings/img11.svg";
import img12 from "../assets/img/rings/img12.svg";
import img13 from "../assets/img/rings/img13.svg";
import img14 from "../assets/img/rings/img14.svg";
import img15 from "../assets/img/rings/img15.svg";
import star from "../assets/svg/start.svg";

const Rings = () => {
  const data = [
    { name: "Gold Rings", price: "1000", image: img1 },
    { name: "Gold Rings", price: "5000", image: img9 },
    { name: "Heart Necklaces", price: "7000", image: img2 },
    { name: "small Hoop Earrings ", price: "5000", image: img3 },
    { name: "Silver watch", price: "1000", image: img4 },
    { name: "Gold Braceletes", price: "7000", image: img5 },
    { name: "Gold Rings", price: "5000", image: img6 },
    { name: "Gold Rings", price: "1000", image: img7 },
    { name: "Gucci watch", price: "7000", image: img8 },
    { name: "Gold Rings", price: "1000", image: img10 },
    { name: "Silver Braceletes", price: "7000", image: img11 },
    { name: "Gold watch", price: "5000", image: img12 },
    { name: "Silver Rings", price: "1000", image: img13 },
    { name: "Silver Rings", price: "7000", image: img3 },
    { name: "Silver Braceletes", price: "5000", image: img7 },
    { name: "Gold watch", price: "8000", image: img14 },
    { name: "Silver Braceletes", price: "3000", image: img15 },
  ];
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="row g-3 justify-content-center">
          {data.map((e) => (
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div className="card rounded-4 rounded-bottom-2">
                <div className="img">
                  <img src={e.image} alt={e.name} className="rounded-0 w-100" />
                </div>
                <div className="name ps-3 pt-2">
                  <h5 className="mb-1">{e.name}</h5>
                  <div className="icon mb-1">
                    <img src={star} alt="star" />
                  </div>
                  <p>{e.price} LE</p>
                  <div className="add-to-cart mb-3">
                    <button className="btn cartbtn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rings;
