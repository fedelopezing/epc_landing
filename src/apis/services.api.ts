export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/**
 * Returns an array of Service objects.
 */
const getServices = (): Service[] => {
  return [
    {
      id: 1,
      title: 'Excavaciones para Edificaciones',
      description: 'De precisión para cualquier tipo de proyecto',
      icon: '/images/services/excavation.svg',
    },
    {
      id: 2,
      title: 'Movimiento de Suelo y Pavimento',
      description: 'Soluciones duraderas para pavimentos rígidos, flexibles y articulados',
      icon: '/images/services/tractor.svg',
    },
    {
      id: 3,
      title: 'Fiscalización de Obra',
      description: 'Supervisión técnica para asegurar que los proyectos se desarrollen con los más altos estándares',
      icon: '/images/services/work.svg',
    },
    {
      id: 4,
      title: 'Sistemas de desagües cloacales, pluviales e industriales',
      description: 'Soluciones técnicas para el el manejo de aguas residuales, con materiales de alto rendimiento.',
      icon: '/images/services/desague.svg',
    }
  ];
};

export { getServices };
