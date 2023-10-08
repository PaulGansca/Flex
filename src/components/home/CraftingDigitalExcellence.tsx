import useLoadAnimation from '../../hooks/useLoadAnimation';

export const CraftingDigitalExcellence = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  return (
    <div className="break-the-mold section flex flex-wrap lg:justify-center lg:items-center lg:px-40 lg:py-[20.5%] w-full pt-28 pb-20 px-7 sm:pb-56 sm:pt-48 sm:px-[7.5%] justify-around items-start bg-white">
      <div
        ref={ref}
        className="w-full flex flex-wrap justify-between items-center"
      >
        <h2
          className={`w-full max-w-full sm:w-[45%] text-5xl sm:text-6xl lg:text-7xl mb-12 sm:mb-6 font-bold font-title sm:max-w-[11ch] text-gray-900 ${
            loadAnimationOnMount ? 'mounted' : 'first-render'
          }`}
        >
          Crafting Digital Excellence
        </h2>
        <div
          className={`sm:w-[45%] w-full font-body ${
            loadAnimationOnMount ? 'mounted' : 'first-render'
          }`}
        >
          <p className="text-xl mb-6 text-gray-900">
            Your website’s your opportunity to stand out. Why settle?
            <br />
            At FLEX, we're not just web developers; we're digital architects,
            creative wizards, and problem-solving enthusiasts. With a passion
            for pixels and a commitment to excellence, we transform your online
            aspirations into stunning, functional, and user-friendly websites
            that leave a lasting impression.
          </p>
          <p className="text-xl mb-6 text-gray-900">
            We don't just build websites; we sculpt online experiences that
            captivate, engage, and convert. Whether you're a startup, an
            established brand, or an entrepreneur with a vision, we're your
            trusted partners in the digital realm.
          </p>
          <p className="text-xl mb-6 text-gray-900">
            We believe in close collaboration and open communication. As your
            dedicated service provider, your ideas and feedback are invaluable
            to us, and we work hand-in-hand with you to bring your digital
            vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};
