import NavbarComponent from '@/components/shared/navbar';
import ButtonBudget from '@/components/shared/button-budget';
// import '@/styles/app.css';

const HeroComponent = () => {
  return (
      <section id="home" className="hero">
        <NavbarComponent />
        <div className="container grid lg:grid-cols-2 gap-4 mx-auto">
          <div className="flex flex-col justify-center px-6 md:px-0">
            <h5 className="mb-3 text-md md:text-2xl">
              Especialistas en construcciones
            </h5>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8">
              Construimos tus proyectos con pasión y confianza
            </h1>
            <p className="mb-10 font-light">
              Ofrecemos soluciones de construcción que garantizan durabilidad, precisión y ahorro para tus proyectos más ambiciosos.
            </p>

            <ButtonBudget isOutline={false} />
          </div>
        </div>
      </section>
  );
};

export default HeroComponent;