import flag from "./Components/images/flag4.png";

function Banner() {
  return (
    <div className="bg-banner text-center py-2 px-4">
      <p className="text-sm sm:text-base font-semibold text-gray-800 tracking-wide barlow inline-flex items-center justify-center gap-1">
        Military Mental Health Services in Norfolk, VA
        <img
          src={flag}
          alt="American flag"
          className="w-5 h-5 sm:w-5 sm:h-5 mx-1 object-contain inline-block"
        />
        — TRICARE Accepted
      </p>
    </div>
  );
}

export default Banner;
