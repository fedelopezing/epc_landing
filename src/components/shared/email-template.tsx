import * as React from 'react';

type EmailTemplateProps = {
  values: {} & {
    name: string;
    email: string;
    project: string;
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({values}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto border border-gray-200">
      <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">Solicitud de presupuesto</h1>
      <div className="space-y-3">
        <p>
          <span className="font-semibold text-gray-700">Nombre:</span>
          <span className="ml-2 text-gray-900">{values.name}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-700">Email:</span>
          <span className="ml-2 text-gray-900">{values.email}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-700">Proyecto:</span>
          <span className="ml-2 text-gray-900">{values.project}</span>
        </p>
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} EPC. Todos los derechos reservados.
      </div>
    </div>
  );
};
