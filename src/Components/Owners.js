// import img4 from "./images/lemichs.avif";
// import { Link } from "react-router-dom";

// function Owners() {

//   return (
//     <div className="min-h-screen flex items-center justify-center">

//       <div className=" w-full max-w-3xl p-8">
//       <h2 className=" text-4xl text-start mb-5  text-gray-800 mb-1">
//         Meet The Owners.
//       </h2>
//         <div className="text-center">
//           <img
//             src={img4}
//             alt="Gregory and Jennifer Lemich"
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded mb-5 owner-image"
//           />

//           <p className="text-lg text-gray-600 text-justify mt-4 owner-text">
//             The Lemich Clinic was founded by Gregory and Jennifer Lemich.
//             Jennifer is a 22-year US Navy retiree and current Navy employee.
//             Gregory holds a PhD in Counselor Education and Supervision, and
//             is an adjunct professor at Old Dominion University.
//             Together, they have been happily married for 9 years and live in
//             Norfolk, Virginia, with their <Link to="/login" className="text-gray-600 normalize">French Bulldog</Link> and two cats.
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Owners;
import img4 from "./images/lemichs.avif";
import { Link } from "react-router-dom";

function Owners() {
  return (
    <div className="row flex items-center justify-center padding-mobile-owners">
      <div className="col-lg-6 p-lg-5">
        <div className=" w-full ">
          <h2 className=" text-4xl text-start mb-lg-5  text-gray-800 mb-1">
            Meet The Owners.
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 text-justify mt-4 owner-text">
              The Lemich Clinic was founded by Gregory and Jennifer Lemich.
              Jennifer is a 22-year US Navy retiree and current Navy employee.
              Gregory holds a PhD in Counselor Education and Supervision, and is
              an adjunct professor at Old Dominion University. Together, they
              have been happily married for 9 years and live in Norfolk,
              Virginia, with their{" "}
              <Link to="/login" className="text-gray-600 normalize">
                French Bulldog
              </Link>{" "}
              and two cats.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6 p-lg-0 ps-sm-5">
        <div className="">
          <div className="text-center">
            <img
              src={img4}
              alt="Gregory and Jennifer Lemich"
              className="mx-auto border-radius-mobile owner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owners;
