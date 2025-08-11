import flag from "./Components/images/flag4.png";

function Banner() {
  return (
    <div className="bg-banner text-center pb-0 pt-2 px-4">
      <p className="text-sm sm:text-base font-semibold text-gray-800 tracking-wide barlow inline-flex items-center justify-center gap-1">
        <img
          src={flag}
          alt="American flag"
          className="w-4 h-4 sm:w-4 sm:h-4 mx-1 object-contain inline-block"
        />
        Dedicated to the Mental Health of Norfolk’s Military Community
        
     
      </p>
    </div>
  );
}

export default Banner;
