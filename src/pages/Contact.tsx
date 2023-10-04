import { ContactForm } from '../components/contact/ContactForm';
import { ParticlesBg } from '../components/contact/particles-bg';
import useLoadAnimation from '../hooks/useLoadAnimation';

export const Contact = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();

  return (
    <div
      ref={ref}
      className={`h-full w-full overflow-x-hidden xl:h-screen section text-black ${
        loadAnimationOnMount ? 'mounted' : 'first-render'
      }`}
    >
      <ParticlesBg />
      <div className="lg:flex lg:gap-20 sm:px-[15%] relative -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <h1 className="m-auto font-bold text-7xl text-center max-lg:mb-10">
          {'Contact Us'}
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};
