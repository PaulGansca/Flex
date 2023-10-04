import useLoadAnimation from "../../hooks/useLoadAnimation";

export const BreakTheMold = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  return (
    <div className="break-the-mold section flex flex-wrap lg:justify-center lg:items-center lg:px-40 lg:py-[20.5%] w-full pt-28 pb-20 px-7 sm:pb-56 sm:pt-48 sm:px-[7.5%] justify-around items-start bg-white">
      <div
        ref={ref}
        className="w-full flex flex-wrap justify-between items-center"
      >
        <h2
          className={`w-full max-w-full sm:w-[45%] text-5xl sm:text-6xl lg:text-7xl mb-12 sm:mb-6 font-bold font-title sm:max-w-[11ch] text-gray-900 ${
            loadAnimationOnMount ? "mounted" : "first-render"
          }`}
        >
          Beautiful websites that break the mold
        </h2>
        <div
          className={`sm:w-[45%] w-full font-body ${
            loadAnimationOnMount ? "mounted" : "first-render"
          }`}
        >
          <p className="text-xl mb-6 text-gray-900">
            Your website’s your opportunity to stand out. So why settle for
            something bland?
            <br />
            At FLEX, our clients benefit from stunning sites that are carefully
            crafted and custom-made by some of the industry’s leading artistic
            minds.
          </p>
          <p className="text-xl mb-6 text-gray-900">
            We begin the design journey with a series of discovery sessions,
            absorbing ourselves in your brand and industry to make sure your
            website resonates with customers and reinforces your key message.
          </p>
          <p className="text-xl mb-6 text-gray-900">
            As your dedicated web design agency, you can depend on our
            award-winning team to create a digital experience that inspires
            action. Drawing inspiration from different mediums, we’ll design
            your website to leave a lasting impression on your audience.
          </p>
        </div>
      </div>
    </div>
  );
};