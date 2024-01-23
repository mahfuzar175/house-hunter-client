const Banner = () => {
  return (
    <div className="p-4">
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/qm73275/banner.jpg)",
        }}

      >
        <div className="hero-overlay bg-opacity-60 rounded-md overflow-hidden"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
            Search with multiple option, as your need!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
