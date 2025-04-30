import type {Service} from "@/apis";

type ServiceCardProps = { service: Service };
const ServiceCard = ({service}: ServiceCardProps) => {
  return (
      <div className="mb-6 p-8">
        <div className="text-center">
          {/*<i className={service.icon}></i>*/}
          <img className="mx-auto mb-4" src={service.icon} alt={service.title} width={60} />
          <h3 className="text-lg font-bold">{service.title}</h3>
          <p className="text-sm">{service.description}</p>
        </div>
      </div>
  );
};

export default ServiceCard;