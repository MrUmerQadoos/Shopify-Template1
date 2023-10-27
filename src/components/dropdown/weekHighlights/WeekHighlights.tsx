// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image"; // Import the Image component from Next.js

// const WeekHighlight = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="week-highlight">
//       <h2>This Week,s Highlights</h2>
//       <div className="arrows">
//         <div className="arrow left"></div>
//         <div className="arrow right"></div>
//       </div>
//       <Slider {...settings}>
//         <div className="product">
//           <div className="image">
//             <Image
//               src="/image1.jpg"
//               alt="Boxy Denim Jacket"
//               width={190}
//               height={253}
//             />
//           </div>
//           <div className="info">
//             <p>'Boxy Denim Jacket'</p>
//             <p>Regular price $25.00</p>
//           </div>
//         </div>
//         <div className="product">
//           <div className="image">
//             <Image
//               src="/image2.jpg"
//               alt="Another Product"
//               width={190}
//               height={253}
//             />
//           </div>
//           <div className="info">
//             <p>'Another Product'</p>
//             <p>Regular price $XX.XX</p>
//           </div>
//         </div>
//         {/* Add more product items as needed */}
//       </Slider>
//       <style jsx>{`
//         .week-highlight {
//           width: 402px;
//           height: 372px;
//           border: 1px solid #ddd;
//           padding: 10px;
//           position: relative;
//         }
//         h2 {
//           text-align: center;
//         }
//         .arrows {
//           display: flex;
//           justify-content: space-between;
//         }
//         .arrow {
//           width: 30px;
//           height: 30px;
//           border: 1px solid #ddd;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: background 0.3s, border-color 0.3s;
//         }
//         .arrow:hover {
//           background: #000;
//           border-color: #fff;
//         }
//         .left {
//           transform: rotate(180deg);
//         }
//         .product {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }
//         .image {
//           width: 190px;
//           height: 253px;
//           overflow: hidden;
//           position: relative;
//         }
//         .image > Image {
//           width: 100%;
//           height: 100%;
//           transition: transform 0.3s;
//         }
//         .image > Image:hover {
//           transform: scale(1.1);
//         }
//         .info {
//           text-align: center;
//           margin-top: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WeekHighlight;
