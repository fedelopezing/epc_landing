import {Menu} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {useState} from 'react';

const MenuSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="pt-8">
            <a href="#home" onClick={handleLinkClick}>Inicio</a>
          </SheetTitle>
          <SheetDescription className="pt-6">
            <ul className="list-none flex flex-col gap-10">
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <a href="#services">Servicios</a>
              </li>
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <a href="#works">Obras</a>
              </li>
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <a href="#teams">Equipo</a>
              </li>
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;