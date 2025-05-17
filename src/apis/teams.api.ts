const getTeams = () => {
  return [
    {
      id: 1,
      name: 'JAZMÍN SUÁREZ',
      description: ['Ingeniera Civil', 'Depto. Financiero', 'Obras'],
      image: '/images/teams/ingeniera.svg'
    },
    {
      id: 2,
      name: 'ANTONIO RAMOS',
      description: ['Ingeniero Civil', 'Depto. Técnico', 'Obras'],
      image: '/images/teams/ingeniero.svg'
    },
    {
      id: 3,
      name: 'PABLO MARTÍNEZ',
      description: ['Depto. Técnico', 'Obras'],
      image: '/images/teams/obra.svg'
    },
    {
      id: 4,
      name: 'EZVALO',
      description: ['Administración Tercerizada'],
      image: '/images/teams/ezvalo.svg'
    }
  ];
};

export { getTeams };