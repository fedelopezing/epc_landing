import Icon from '@/components/ui/Icon';
import ButtonBudget from '@/components/shared/button-budget';

const CtaComponent = () => {
  return (
      <section className="cta bg-gray-50 py-12">
        <div className="container px-10 mx-auto">
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <h2 className="text-gray-950 font-bold text-2xl mb-4">
                ¿Listo para transformar tu próximo proyecto?
              </h2>
              <p className="text-gray-950">
                Nuestro equipo está listo para brindarte las mejores soluciones en infraestructura. Contacta con
                nuestros técnicos para una consulta personalizada
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-end gap-2 mt-6 lg:mt-0">
              {/*<ButtonBudget isOutline={true}/>*/}
              <a
                  className="px-6 py-3 rounded border-gray-950 border-2 min-w-72 font-semibold text-gray-950 bg-gray-50 lg:min-w-60"
                  href="https://wa.link/8m7jdx"
                  target="_blank">
              <span className="flex gap-1">
                <Icon name="bxl-whatsapp"/>
                Contácta con un técnico
              </span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CtaComponent;