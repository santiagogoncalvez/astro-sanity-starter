const phone = "";
export const mail = "";
export const instagram = "";
export const whatsApp = `https://wa.me/${phone}`;

// 1. Mensaje General (el que ya tenías)
const messageGeneral = "";

// 2. Mensaje para Botón de Servicio (dinámico para que sepas qué servicio les interesó)
// Podes pasar el nombre del servicio como parámetro al generar la URL
const messageService = (serviceTitle) => `${serviceTitle}`;

// 3. Mensaje para el CTA Final "Consultar Agenda"
// Este es más directo hacia la acción de reserva
const messageEnd = "";

// Exportación de URLs (Ejemplos de uso)
export const whatsappUrlGeneral = `https://wa.me/${phone}?text=${encodeURIComponent(messageGeneral)}`;

export const getWhatsappServiceUrl = (serviceTitle) => {
   return `https://wa.me/${phone}?text=${encodeURIComponent(messageService(serviceTitle))}`;
};

export const whatsappUrlEnd = `https://wa.me/${phone}?text=${encodeURIComponent(messageEnd)}`;
