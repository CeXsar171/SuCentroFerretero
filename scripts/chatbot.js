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
     keywords: ['cámara', 'seguridad', 'wifi', 'smart', 'domótica', 'tecnología'],
    productos: ['Tecnología'],
     respuesta: 'En tecnología tenemos: Cámaras WiFi, sistemas domóticos y accesorios inteligentes. ¿Buscas mejorar la seguridad o automatización de tu hogar?'
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
     keywords: ['hogar', 'casa', 'decoración', 'confort'],
    productos: ['Hogar'],
     respuesta: 'Para tu hogar tenemos accesorios y artículos de confort. ¿Buscas algo específico para mejorar tu casa?'
  },
  'mascotas': {
     keywords: ['mascota', 'perro', 'gato', 'collar', 'cuidado'],
    productos: ['Mascotas'],
     respuesta: 'Tenemos productos y accesorios para el cuidado de mascotas. ¿Qué necesitas para tu mascota?'
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
     keywords: ['auto', 'coche', 'carro', 'vehículo', 'motor'],
    productos: ['Automotriz'],
     respuesta: 'Tenemos accesorios automotrices y herramientas para tu vehículo. ¿Qué tipo de trabajos necesitas hacer?'
  },
  'jardín': {
    keywords: ['jardín', 'pala', 'rastrillo', 'maceta', 'tierra', 'plantas', 'riego'],
    productos: ['Jardín'],
    respuesta: 'Para tu jardín tenemos: Palas, rastrillos, macetas, tierra y herramientas de jardinería. ¿Estás preparando tu jardín?'
  },
  'limpieza': {
     keywords: ['limpieza', 'escoba', 'trapo', 'desinfectante', 'esponja'],
    productos: ['Limpieza'],
     respuesta: 'Tenemos herramientas y productos de limpieza. ¿Para qué tipo de limpieza necesitas ayuda?'
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
  ,
  'devoluciones': {
    keywords: ['devolución', 'devoluciones', 'devolver', 'cambio', 'reclamo'],
    productos: [],
    respuesta: 'Aceptamos devoluciones o cambios según la política: productos con defecto o error en el envío pueden cambiarse dentro de 15 días con factura. ¿Quieres que te deje los pasos para gestionar una devolución?'
  },
  'pagos': {
    keywords: ['pago', 'pagos', 'tarjeta', 'visa', 'mastercard', 'transferencia', 'medios de pago'],
    productos: [],
    respuesta: 'Aceptamos tarjetas Visa y MasterCard, transferencias bancarias y pagos en efectivo en sucursal. Si necesitas datos para transferencia, dime la sucursal.'
  },
  'garantia': {
    keywords: ['garantía', 'garantia', 'garantias', 'reclamo', 'servicio técnico'],
    productos: [],
    respuesta: 'Algunos productos cuentan con garantía del fabricante. Conserva la factura y contáctanos por WhatsApp para iniciar el reclamo o servicio técnico.'
  },
  'promociones': {
    keywords: ['promoción', 'promociones', 'oferta', 'ofertas', 'descuento', 'rebaja'],
    productos: [],
    respuesta: 'Publicamos promociones en nuestra web y redes sociales. Puedo mostrarte ofertas actuales si me indicas la categoría que te interesa.'
  },
  'stock': {
    keywords: ['stock', 'existencia', 'disponible', 'disponibilidad', 'agotado'],
    productos: [],
    respuesta: 'La disponibilidad varía por sucursal. Para confirmar stock de un producto, envíame el nombre o SKU y te lo verifico.'
  },
  'contacto': {
    keywords: ['contacto', 'teléfono', 'telefono', 'whatsapp', 'email', 'correo'],
    productos: [],
    respuesta: 'Puedes contactarnos por WhatsApp al +593985569688, por teléfono en nuestras sucursales, o por correo a sucentroferretero@gmail.com. ¿Quieres que te pase el link de WhatsApp?'
  }
  ,
  'saludo': {
    keywords: ['hola', 'buenos', 'buenas', 'holaa', 'buen dia', 'buenas tardes', 'buenas noches'],
    productos: [],
    respuesta: '¡Hola! 👋 Soy el asistente de Su Centro Ferretero. ¿En qué puedo ayudarte hoy?'
  },
  'estado': {
    keywords: ['cómo estás', 'como estas', 'como estás', 'todo bien', 'qué tal', 'que tal'],
    productos: [],
    respuesta: 'Estoy bien, gracias por preguntar. Estoy aquí para ayudarte a encontrar productos, verificar stock, horarios y más.'
  },
  'nombre': {
    keywords: ['tu nombre', 'cómo te llamas', 'como te llamas', 'quien eres'],
    productos: [],
    respuesta: 'Puedes llamarme Asistente de Su Centro Ferretero. ¿Quieres que te ayude con algo específico?'
  },
  'capacidad': {
    keywords: ['qué puedes hacer', 'que puedes hacer', 'puedes hacer', 'qué haces', 'que haces', 'ayuda', 'servicios'],
    productos: [],
    respuesta: 'Puedo ayudarte a buscar productos por nombre o categoría, verificar stock, horarios, sucursales, métodos de pago, y darte información sobre envíos y devoluciones. ¿Qué necesitas?'
  },
  'despedida': {
    keywords: ['adiós', 'adios', 'hasta luego', 'nos vemos', 'gracias', 'muchas gracias'],
    productos: [],
    respuesta: '¡Gracias a ti! Si necesitas algo más, aquí estaré. ¡Que tengas un buen día! 😊'
  }
};

// Lista de ciudades con cobertura de envío (solo Latacunga)
const COVERED_CITIES = ['latacunga'];

// IA Simple: Analiza el texto y encuentra la mejor respuesta
// Utilities: normalizar texto y calcular similitud (Levenshtein)
function normalizeText(str){
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
}

function levenshtein(a, b){
  if(!a || !b) return (a||b) ? Math.max(a?.length||0, b?.length||0) : 0;
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));
  for(let i=0;i<=m;i++) dp[i][0]=i;
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      const cost = a[i-1] === b[j-1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost);
    }
  }
  return dp[m][n];
}

function similarity(a,b){
  a = normalizeText(a);
  b = normalizeText(b);
  const dist = levenshtein(a,b);
  const maxLen = Math.max(a.length, b.length);
  if(maxLen === 0) return 1;
  return 1 - (dist / maxLen);
}

async function callExternalAI(mensaje){
  // Placeholder: si quieres integrar una IA externa, configúrala y activa `window.USE_EXTERNAL_AI = true`.
  if(!window.USE_EXTERNAL_AI) return null;
  try{
    const res = await fetch('/api/ai', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({message: mensaje})
    });
    if(!res.ok) return null;
    const data = await res.json();
    return data.respuesta || data.answer || null;
  }catch(e){
    return null;
  }
}

// Analizar mensaje con tolerancia a faltas y posibilidad de IA externa
async function analyzarMensaje(mensaje) {
  const raw = mensaje || '';
  const normMsg = normalizeText(raw);

  // Buscar coincidencias en knowledge base (tolerancia a faltas)
  for (const [categoria, data] of Object.entries(KNOWLEDGE_BASE)) {
    for (const keyword of data.keywords) {
      const normKey = normalizeText(keyword);
      // coincidencia simple
      if(normMsg.includes(normKey)){
        // Caso especial: envíos — aceptar cualquier parroquia dentro de Latacunga
        if(categoria === 'envio'){
          // Intentar extraer la parroquia desde el texto del usuario
          let parish = raw.replace(/\b(env[ií]o|envio|envío|domicilio|entrega|a|para|en)\b/gi, '').trim();
          if(!parish) parish = 'tu parroquia';
          const respuesta = `Sí, hacemos envíos a cualquier parroquia dentro de Latacunga. Para coordinar un envío a ${parish} escríbenos por WhatsApp.`;
          const waText = `Hola, quiero coordinar un envío dentro de Latacunga (parroquia: ${parish}).`;
          return {respuesta, productos: [], categoria, waText};
        }
        return {respuesta: data.respuesta, productos: data.productos, categoria};
      }
      // comparar palabras individuales con similitud
      const tokens = normMsg.split(/\s+/).filter(Boolean);
      for(const token of tokens){
        // Evitar falsos positivos aumentando umbral de similitud
        if(similarity(token, normKey) >= 0.80){
          // Caso especial: envíos — detectar ciudad en comparación difusa
          if(categoria === 'envio'){
            for(const city of COVERED_CITIES){
              if(similarity(token, city) >= 0.90){
                const cityName = city.charAt(0).toUpperCase() + city.slice(1);
                const respuesta = `Sí hacemos envíos a ${cityName}. Los tiempos y costos dependen de la dirección exacta. ¿Quieres que te contactemos por WhatsApp para coordinar?`;
                const waText = `Hola,%20quiero%20coordinar%20un%20envío%20a%20${encodeURIComponent(cityName)}.`;
                return {respuesta, productos: [], categoria, waText};
              }
            }
          }
          return {respuesta: data.respuesta, productos: data.productos, categoria};
        }
      }
      // comparar mensaje completo con la keyword
      if(similarity(normMsg, normKey) >= 0.80){
        if(categoria === 'envio'){
          // intentar detectar ciudad comparando con lista
          for(const city of COVERED_CITIES){
            if(similarity(normMsg, city) >= 0.85){
              const cityName = city.charAt(0).toUpperCase() + city.slice(1);
              const respuesta = `Sí hacemos envíos a ${cityName}. Los tiempos y costos dependen de la dirección exacta. ¿Quieres que te contactemos por WhatsApp para coordinar?`;
              const waText = `Hola,%20quiero%20coordinar%20un%20envío%20a%20${encodeURIComponent(cityName)}.`;
              return {respuesta, productos: [], categoria, waText};
            }
          }
        }
        return {respuesta: data.respuesta, productos: data.productos, categoria};
      }
    }
  }

  // Si no hay match local, intentar IA externa (si está configurada)
  const external = await callExternalAI(raw);
  if(external){
    return {respuesta: external, productos: [], categoria: 'ia-external'};
  }

  // Respuesta por defecto
  return {
    respuesta: 'No estoy seguro de entender. ¿Podrías ser más específico? Puedo ayudarte con:\n\n🔨 Herramientas\n🚿 Baños\n🎨 Pintura\n🧱 Materiales\n📦 Pisos\n🔧 Plomería\n⚡ Eléctrico\n🏠 Hogar\n🐕 Mascotas\n🔩 Ferretería\n🚗 Automotriz\n🌱 Jardín\n🧹 Limpieza\n💡 Iluminación\n📍 Ubicaciones',
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
      if(e.key === 'Enter') {
        e.preventDefault();
        enviarMensaje();
      }
    });
    // Add keydown as some browsers/clients handle Enter differently
    chatbotInput.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
        e.preventDefault();
        enviarMensaje();
      }
    });
  }
});

async function enviarMensaje() {
  const mensaje = chatbotInput.value.trim();
  if(!mensaje) return;

  // Mostrar mensaje del usuario
  agregarMensaje(mensaje, 'user');
  chatbotInput.value = '';

  // Simular "escribiendo..."
  agregarMensaje('Escribiendo...', 'bot', true);

  setTimeout(async () => {
    // Remover "escribiendo..."
    const typing = chatbotMessages.querySelector('.typing');
    if(typing) typing.remove();

    // Si estamos esperando que el usuario indique una parroquia para envío, manejar aquí
    if(window.chatbotExpecting === 'envio_parish'){
      const parish = mensaje || 'tu parroquia';
      const respuestaText = `Sí, hacemos envíos a cualquier parroquia dentro de Latacunga. Para coordinar un envío a ${parish} escríbenos por WhatsApp.`;
      agregarMensaje(respuestaText, 'bot');
      agregarWhatsAppButton(encodeURIComponent(`Hola, quiero coordinar un envío dentro de Latacunga (parroquia: ${parish}).`));
      window.chatbotExpecting = null;
      return;
    }

    // Analizar mensaje con IA (ahora puede ser asíncrono)
    const respuesta = await analyzarMensaje(mensaje);

    // Mostrar respuesta del bot
    agregarMensaje(respuesta.respuesta, 'bot');

    // Si el analizador respondió pidiendo la parroquia (envío sin waText), poner estado de espera
    if(respuesta.categoria === 'envio' && !respuesta.waText){
      window.chatbotExpecting = 'envio_parish';
    }

    // Si el analizador decidió incluir un enlace de WhatsApp, mostrar botón
    if(respuesta.waText){
      agregarWhatsAppButton(respuesta.waText);
    }

    // Si hay productos relacionados, mostrar botones
    if(respuesta.productos && respuesta.productos.length > 0) {
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

function agregarWhatsAppButton(texto, phone = '+593985569688'){
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot-message';
  const waUrl = `https://wa.me/${phone.replace(/\D/g,'')}?text=${texto}`;
  msgDiv.innerHTML = `<p>¿Quieres que te contactemos por WhatsApp?</p><div style="margin-top:0.5rem;"><a class="btn" href="${waUrl}" target="_blank" rel="noopener">Contactar por WhatsApp</a></div>`;
  chatbotMessages.appendChild(msgDiv);
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
