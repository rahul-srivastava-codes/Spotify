function Cards({ data, heading }) {
  return (
    <div>
      <div>
        <h1 className="text-2xl mt-4 hover:text-emerald-600 font-semibold hover:font-extrabold duration-300">
          {heading}
        </h1>
      </div>
      <div className="trending mt-4 w-full flex gap-4 flex-wrap ">
        {data.map((s, i) => (
          <div
            key={i}
            className="hover:scale-105 duration-150 w-[10vw] h-[30vh] rounded-lg"
          >
            <div className="w-full h-[75%]">
              <img
                src={
                  s.image?.[2]?.url || s.image?.[1]?.url || s.image?.[0]?.url
                }
                className="object-cover w-full h-full "
                alt="No image Available"
              />
            </div>
            <div className="px-2 w-full h-[25%]">
              <div className=" font-semibold text-xm  overflow-scroll h-[60%]">
                {s.name}
              </div>
              <div className="text-xs h-[40%] overflow-hidden">
                {s.artists.all[0].name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
