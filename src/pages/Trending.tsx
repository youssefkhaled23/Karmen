import img1 from "../assets/img/trending/img1.svg";
import img2 from "../assets/img/trending/img2.svg";
import img3 from "../assets/img/trending/img3.svg";
import img4 from "../assets/img/trending/img4.svg";
import img5 from "../assets/img/trending/img5.svg";
import img6 from "../assets/img/trending/img6.svg";
import img7 from "../assets/img/trending/img7.svg";
import img8 from "../assets/img/trending/img8.svg";
import img9 from "../assets/img/trending/img9.svg";
import img10 from "../assets/img/trending/img10.svg";
import img11 from "../assets/img/trending/img11.svg";
import img12 from "../assets/img/trending/img12.svg";
import img13 from "../assets/img/trending/img13.svg";
import img14 from "../assets/img/trending/img14.svg";
import img15 from "../assets/img/trending/img15.svg";
import star from "../assets/svg/start.svg";
import { useNavigate } from "react-router-dom";
const Trending = () => {
  const data = [
    { id: 1, name: "Gold Rings", price: "1000", image: img1 },
    { id: 2, name: "Gold Rings", price: "5000", image: img9 },
    { id: 3, name: "Heart Necklaces", price: "7000", image: img2 },
    { id: 4, name: "small Hoop Earrings ", price: "5000", image: img3 },
    { id: 5, name: "Silver watch", price: "1000", image: img4 },
    { id: 6, name: "Gold Braceletes", price: "7000", image: img5 },
    { id: 7, name: "Gold Rings", price: "5000", image: img6 },
    { id: 8, name: "Gold Rings", price: "1000", image: img7 },
    { id: 9, name: "Gucci watch", price: "7000", image: img8 },
    { id: 10, name: "Gold Rings", price: "1000", image: img10 },
    { id: 11, name: "Silver Braceletes", price: "7000", image: img11 },
    { id: 12, name: "Gold watch", price: "5000", image: img12 },
    { id: 13, name: "Silver Rings", price: "1000", image: img13 },
    { id: 14, name: "Silver Rings", price: "7000", image: img3 },
    { id: 15, name: "Silver Braceletes", price: "5000", image: img7 },
    { id: 16, name: "Gold watch", price: "8000", image: img14 },
    { id: 17, name: "Silver Braceletes", price: "3000", image: img15 },
  ];
  const navgiate = useNavigate();
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="row g-3 justify-content-center">
          {data.map((e) => (
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div
                className="card rounded-4 rounded-bottom-2"
                onClick={() => navgiate(`/Descrption?message=descrption?id=${e.id}`)}
              >
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

export default Trending;
