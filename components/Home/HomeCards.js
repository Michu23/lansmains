import Image from "next/image";

function HomeCards({ title, bannerSrc, features, onLearnMore, onCallNow }) {
  return (
    <div className="p-2 text-white text-center position-relative">
      <div
        className="bsbs text-black text-start position-relative"
        style={{
          maxWidth: "460px",
        }}
      >
        <div className="p-3">
          <div
            className="bg-warning text-black d-flex justify-content-center align-items-center px-4 py-2"
            style={{
              width: "fit-content",
              borderRadius: "10px",
            }}
          >
            <p className="button-text m-0">Language</p>
          </div>
          <h3 className="title mt-3">{title}</h3>
          <ul className="mb-4 mt-2 p-0">
            {features.map((feature) => (
              <li className="mb-2" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-primary px-4 py-1" onClick={onLearnMore}>
              <p className="button-text text-white m-0">Learn more</p>
            </button>
            <button
              className="btn btn-outline-secondary px-4 py-1"
              onClick={onCallNow}
            >
              <p className="button-text m-0">Call now</p>
            </button>
          </div>
        </div>
        <div
          className="card-banner position-relative mt-md-3 mt-2"
          style={{ width: "100%", height: "170px", overflow: "hidden" }}
        >
          <Image
            src={bannerSrc}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Main Image"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
