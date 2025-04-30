'use client';
import MenuSheet from '@/components/shared/menu-sheet';
import {useEffect, useState} from 'react';


const NavbarComponent = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['home', 'services', 'works', 'teams', 'contact'];

    const observer = new IntersectionObserver(
        (entries) => {
          const activeId = entries.find((entry) => entry.isIntersecting)?.target.id;
          if (activeId) setActiveSection(activeId);
        },
        {threshold: 0.6}
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      section && observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        section && observer.unobserve(section);
      });
    };
  }, []);


  // Render-------------------------------------------------------------------------------------
  return (
      <nav className="p-4 bg-secondary fixed top-0 w-full z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
              <img
                  src="/images/epc-logo.svg"
                  width="150"
                  alt="EPC Logo"
              />
            </a>

            <div className="!visible mt-2 hidden items-center lg:!flex">
              <ul className="list-none flex gap-10">
                <li className={activeSection === 'home' ? 'active' : ''}>
                  <a href="#home">Inicio</a>
                </li>
                <li className={activeSection === 'services' ? 'active' : ''}>
                  <a href="#services">Servicios</a>
                </li>
                <li className={activeSection === 'works' ? 'active' : ''}>
                  <a href="#works">Obras</a>
                </li>
                <li className={activeSection === 'teams' ? 'active' : ''}>
                  <a href="#teams">Equipo</a>
                </li>
                <li className={activeSection === 'contact' ? 'active' : ''}>
                  <a href="#contact">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="lg:hidden">
              <MenuSheet />
            </div>
          </div>
        </div>
      </nav>
  );
};

export default NavbarComponent;