// ====================================
// CHATBOT CON IA PARA FERRETERÍA
// ====================================

const KNOWLEDGE_BASE = {
  // Recomendaciones por proyecto
  'construcción': {
    keywords: ['construir', 'construcción', 'obra', 'edificar', 'levantar pared'],
    productos: ['Herramientas', 'Materiales', 'Seguridad'],
    respuesta: 'Para construcción te recomiendo: Herramientas manuales (martillos, palas), Materiales (cemento, clavos, tornillos), y Equipo de seguridad (cascos, guantes). ¿Qué tipo de construcción vas a realizar?'
  },
  'baño': {
    keywords: ['baño', 'ducha', 'inodoro', 'lavamanos', 'grifería', 'sanitario'],
    productos: ['Baños'],
    respuesta: 'Tenemos todo para baños: Griferías monocomando, duchas eléctricas, inodoros, lavamanos y accesorios. ¿Estás renovando o instalando desde cero?'
  },
  'tecnología': {
    keywords: ['cámara', 'seguridad', 'wifi', 'smart', 'domótica', 'tecnología', 'televisor'],
    productos: ['Tecnología'],
    respuesta: 'En tecnología tenemos: Cámaras WiFi de seguridad, enchufes smart, televisores y sistemas domóticos. ¿Buscas seguridad para el hogar o entretenimiento?'
  },
  'pintar': {
    keywords: ['pintar', 'pintura', 'brocha', 'rodillo', 'color', 'pared'],
    productos: ['Pintura'],
    respuesta: 'Para pintar necesitarás: Brochas, rodillos, masilla, lijas y cinta de enmascarar. ¿Vas a pintar interior o exterior?'
  },
  'herramientas': {
    keywords: ['herramienta', 'taladro', 'martillo', 'destornillador', 'sierra'],
    productos: ['Herramientas Manuales', 'Herramientas Eléctricas'],
    respuesta: 'Tenemos herramientas manuales (martillos, destornilladores, llaves) y eléctricas (taladros, sierras, lijadoras). ¿Para qué tipo de trabajo las necesitas?'
  },
  'iluminación': {
    keywords: ['luz', 'foco', 'lámpara', 'led', 'iluminación', 'bombilla'],
    productos: ['Iluminación'],
    respuesta: 'En iluminación tenemos: Focos LED, lámparas, reflectores y tiras LED. ¿Buscas para interior o exterior?'
  },
  'hogar': {
    keywords: ['hogar', 'casa', 'cortina', 'almohada', 'sábana', 'edredón', 'decoración'],
    productos: ['Hogar'],
    respuesta: 'Para tu hogar tenemos: Cortinas, sábanas, almohadas, edredones y accesorios de confort. ¿Qué necesitas para tu casa?'
  },
  'mascotas': {
    keywords: ['mascota', 'perro', 'gato', 'collar', 'comida', 'cama', 'juguete'],
    productos: ['Mascotas'],
    respuesta: 'Tenemos productos para mascotas: Collares, camas, juguetes, comida y accesorios. ¿Tienes perro o gato?'
  },
  'plomería': {
    keywords: ['plomería', 'tubería', 'caño', 'llave paso', 'manguera', 'codo pvc'],
    productos: ['Plomería'],
    respuesta: 'En plomería tenemos: Tuberías PVC, mangueras, llaves de paso, uniones y accesorios. ¿Necesitas reparar o instalar algo nuevo?'
  },
  'ferretería': {
    keywords: ['ferretería', 'bisagra', 'candado', 'pasador', 'manija', 'perno'],
    productos: ['Ferretería'],
    respuesta: 'Tenemos artículos de ferretería: Bisagras, candados, manijas, pasadores y herrajes diversos. ¿Qué tipo de instalación necesitas?'
  },
  'automotriz': {
    keywords: ['auto', 'coche', 'carro', 'vehículo', 'filtro', 'batería', 'pastilla freno'],
    productos: ['Automotriz'],
    respuesta: 'Para tu vehículo tenemos: Filtros, baterías, pastillas de freno, aceite y accesorios automotrices. ¿Qué necesita tu auto?'
  },
  'jardín': {
    keywords: ['jardín', 'pala', 'rastrillo', 'maceta', 'tierra', 'plantas', 'riego'],
    productos: ['Jardín'],
    respuesta: 'Para tu jardín tenemos: Palas, rastrillos, macetas, tierra y herramientas de jardinería. ¿Estás preparando tu jardín?'
  },
  'limpieza': {
    keywords: ['limpieza', 'escoba', 'trapo', 'detergente', 'desinfectante', 'esponja'],
    productos: ['Limpieza'],
    respuesta: 'Tenemos productos de limpieza: Escobas, detergentes, desinfectantes, esponjas y más. ¿Buscas algo específico?'
  },
  'eléctrico': {
    keywords: ['eléctrico', 'cables', 'extensión', 'regulador', 'regleta', 'conectores'],
    productos: ['Eléctrico'],
    respuesta: 'En materiales eléctricos tenemos: Cables, extensiones, regletas, reguladores y conectores. ¿Qué necesitas instalar?'
  },
  'ubicación': {
    keywords: ['dónde', 'ubicación', 'dirección', 'sucursal', 'local', 'tienda'],
    productos: [],
    respuesta: 'Tenemos 3 sucursales:\n\n🏢 Sucursal Centro\n🏢 Sucursal Norte (Aláquez)\n🏢 Sucursal Sur (Sanbuenaventura)\n\nPuedes ver el mapa completo en nuestra página de <a href="branches.html">Sucursales</a>.'
  },
  'horario': {
    keywords: ['horario', 'hora', 'abierto', 'cerrado', 'abren', 'cierran'],
    productos: [],
    respuesta: 'Nuestros horarios:\n\n📅 Lun-Vie: 7:30-13:00 | 14:00-18:00\n📅 Sábado: 7:30-13:00\n\n¿Qué sucursal te queda más cerca?'
  },
  'precio': {
    keywords: ['precio', 'costo', 'cuánto', 'valor', 'cuanto cuesta'],
    productos: [],
    respuesta: 'Para consultar precios y disponibilidad, puedes:\n\n💬 Contactarnos por WhatsApp\n📞 Llamar a cualquiera de nuestras sucursales\n🏢 Visitarnos personalmente\n\n¿Te gustaría que te pase el contacto de WhatsApp?'
  }
};

// IA Simple: Analiza el texto y encuentra la mejor respuesta
function analyzarMensaje(mensaje) {
  mensaje = mensaje.toLowerCase().trim();
  
  // Buscar coincidencias en knowledge base
  for (const [categoria, data] of Object.entries(KNOWLEDGE_BASE)) {
    for (const keyword of data.keywords) {
      if (mensaje.includes(keyword)) {
        return {
          respuesta: data.respuesta,
          productos: data.productos,
          categoria: categoria
        };
      }
    }
  }
  
  // Respuesta por defecto
  return {
    respuesta: 'No estoy seguro de entender. ¿Podrías ser más específico? Puedo ayudarte con:\n\n🏠 Hogar\n🔨 Herramientas\n📺 Tecnología\n🚿 Baños\n🎨 Pintura\n🧱 Materiales\n📦 Pisos\n🔧 Plomería\n⚡ Eléctrico\n🐕 Mascotas\n🔩 Ferretería\n🚗 Automotriz\n🌱 Jardín\n🧹 Limpieza\n💡 Iluminación\n📍 Ubicaciones',
    productos: [],
    categoria: null
  };
}

// DOM Elements
let chatbotToggle, chatbotWindow, chatbotClose, chatbotMessages, chatbotInput, chatbotSend;

document.addEventListener('DOMContentLoaded', () => {
  chatbotToggle = document.getElementById('chatbot-toggle');
  chatbotWindow = document.getElementById('chatbot-window');
  chatbotClose = document.getElementById('chatbot-close');
  chatbotMessages = document.getElementById('chatbot-messages');
  chatbotInput = document.getElementById('chatbot-input-field');
  chatbotSend = document.getElementById('chatbot-send');
  
  // Toggle chatbot
  if(chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
      chatbotWindow.classList.toggle('active');
      chatbotToggle.classList.toggle('hidden');
      if(chatbotWindow.classList.contains('active')) {
        chatbotInput.focus();
      }
    });
  }
  
  // Close chatbot
  if(chatbotClose) {
    chatbotClose.addEventListener('click', () => {
      chatbotWindow.classList.remove('active');
      chatbotToggle.classList.remove('hidden');
    });
  }
  
  // Send message
  if(chatbotSend) {
    chatbotSend.addEventListener('click', enviarMensaje);
  }
  
  if(chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
      if(e.key === 'Enter') enviarMensaje();
    });
  }
});

function enviarMensaje() {
  const mensaje = chatbotInput.value.trim();
  if(!mensaje) return;
  
  // Mostrar mensaje del usuario
  agregarMensaje(mensaje, 'user');
  chatbotInput.value = '';
  
  // Simular "escribiendo..."
  agregarMensaje('Escribiendo...', 'bot', true);
  
  setTimeout(() => {
    // Remover "escribiendo..."
    const typing = chatbotMessages.querySelector('.typing');
    if(typing) typing.remove();
    
    // Analizar mensaje con IA
    const respuesta = analyzarMensaje(mensaje);
    
    // Mostrar respuesta del bot
    agregarMensaje(respuesta.respuesta, 'bot');
    
    // Si hay productos relacionados, mostrar botones
    if(respuesta.productos.length > 0) {
      agregarBotonesProductos(respuesta.productos);
    }
  }, 1000);
}

function agregarMensaje(texto, tipo, isTyping = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${tipo}-message ${isTyping ? 'typing' : ''}`;
  messageDiv.innerHTML = `<p>${texto}</p>`;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function agregarBotonesProductos(productos) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot-message';
  
  let html = '<p>Te recomiendo ver estas categorías:</p><div class="quick-options">';
  productos.forEach(prod => {
    html += `<button class="quick-btn" onclick="verCategoria('${prod}')">Ver ${prod}</button>`;
  });
  html += '</div>';
  
  messageDiv.innerHTML = html;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function verCategoria(categoria) {
  // Redirigir a products.html con la categoría
  sessionStorage.setItem('filterCategory', categoria);
  window.location.href = 'products.html';
}

window.quickAsk = function(pregunta) {
  // Enviar pregunta rápida al chatbot
  if(chatbotInput) chatbotInput.value = pregunta;
  if(chatbotMessages) {
    enviarMensaje();
    if(chatbotWindow) chatbotWindow.classList.add('active');
    if(chatbotToggle) chatbotToggle.classList.add('hidden');
  }
};
