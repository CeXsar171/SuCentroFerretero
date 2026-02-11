// Productos organizados por categorías (SIN PRECIOS, SOLO STOCK)
const PRODUCTOS_POR_CATEGORIA = {
  'Tecnología': [
    {id:1, name:'Enchufe Smart dual WiFi exteriores', brand:'NEXXT', sku:'458979', inStock:true, image:'https://picsum.photos/seed/tech1/300/300', description:'Enchufe inteligente para exteriores con conexión WiFi y control remoto.'},
    {id:2, name:'Cámara WiFi exterior sensor movimiento 350°', brand:'NEXXT', sku:'560864', inStock:true, image:'https://picsum.photos/seed/tech2/300/300', description:'Cámara de seguridad WiFi con sensor de movimiento y rotación 360°.'},
    {id:3, name:'Televisor ON THE GO HD 32" ANDROID TV 11', brand:'INDURAMA', sku:'450645', inStock:true, image:'https://picsum.photos/seed/tech3/300/300', description:'Televisor HD de 32 pulgadas con Android TV 11 integrado.'},
    {id:4, name:'Cámara seguridad WiFi detector movimiento', brand:'STEREN', sku:'560801', inStock:true, image:'https://picsum.photos/seed/tech4/300/300', description:'Cámara de seguridad con WiFi y detector automático de movimiento.'},
    {id:5, name:'KIT cámara Smart inalámbrica int/ext', brand:'NEXXT', sku:'560883', inStock:true, image:'https://picsum.photos/seed/tech5/300/300', description:'Kit completo de cámaras inteligentes para interior y exterior.'},
    {id:6, name:'Sistema alarma WiFi con sensores', brand:'STEREN', sku:'560900', inStock:true, image:'https://picsum.photos/seed/tech6/300/300', description:'Sistema de alarma WiFi con multiple sensores de seguridad.'},
    {id:7, name:'Timbre video inteligente WiFi', brand:'NEXXT', sku:'560920', inStock:false, image:'https://picsum.photos/seed/tech7/300/300', description:'Timbre con video y WiFi para visualizar visitantes en tiempo real.'},
    {id:8, name:'Bombilla LED inteligente RGB WiFi', brand:'STEREN', sku:'560940', inStock:true, image:'https://picsum.photos/seed/tech8/300/300', description:'Bombilla LED RGB inteligente controlable por WiFi.'},
    {id:9, name:'Hub Smart WiFi 6 compatible', brand:'NEXXT', sku:'560950', inStock:true, image:'https://picsum.photos/seed/tech9/300/300', description:'Hub inteligente WiFi 6 para conectar todos tus dispositivos.'},
    {id:10, name:'Ceradura Inteligente Digital', brand:'STEREN', sku:'560960', inStock:true, image:'https://picsum.photos/seed/tech10/300/300', description:'Ceradura inteligente para puerta con acceso por código.'},
  ],
  
  'Hogar': [
    {id:351, name:'Cortinas Blackout Gris Oscuro', brand:'HOME', sku:'CRT001', inStock:true, image:'https://picsum.photos/seed/home1/300/300', description:'Cortinas que bloquean la luz para dormitorio o sala.'},
    {id:352, name:'Juego de Sabanas Algodón 140x200', brand:'HOME', sku:'CRT002', inStock:true, image:'https://picsum.photos/seed/home2/300/300', description:'Sábanas de algodón puro suave y cómodas para cama.'},
    {id:353, name:'Almohada Memory Foam Premium', brand:'SLEEP', sku:'CRT003', inStock:true, image:'https://picsum.photos/seed/home3/300/300', description:'Almohada ergonómica con memory foam para mejor descanso.'},
    {id:354, name:'Edredón Ligero Verano', brand:'HOME', sku:'CRT004', inStock:true, image:'https://picsum.photos/seed/home4/300/300', description:'Edredón ligero perfecto para las noches de verano.'},
    {id:355, name:'Tapete de Entrada Antideslizante', brand:'DECOR', sku:'CRT005', inStock:true, image:'https://picsum.photos/seed/home5/300/300', description:'Tapete antideslizante para entrada de casa.'},
    {id:356, name:'Lámpara de Pie LED Regulable', brand:'LIGHT', sku:'CRT006', inStock:true, image:'https://picsum.photos/seed/home6/300/300', description:'Lámpara de pie con LED regulable para cualquier ambiente.'},
  ],

  'Eléctrico': [
    {id:451, name:'Extensión Múltiple 4 Puertos USB', brand:'VOLTECK', sku:'ELE001', inStock:true, image:'https://picsum.photos/seed/elec1/300/300', description:'Extensión con 4 puertos USB y 3 tomas de corriente.'},
    {id:452, name:'Regulador de Voltaje 500VA', brand:'REGULEX', sku:'ELE002', inStock:true, image:'https://picsum.photos/seed/elec2/300/300', description:'Regulador automático de voltaje para proteger equipos.'},
    {id:453, name:'Cable HDMI 3M Blindado', brand:'MAXLINK', sku:'ELE003', inStock:true, image:'https://picsum.photos/seed/elec3/300/300', description:'Cable HDMI 2.1 blindado de 3 metros.'},
    {id:454, name:'Cargador Rápido USB-C 65W', brand:'NEXXT', sku:'ELE004', inStock:true, image:'https://picsum.photos/seed/elec4/300/300', description:'Cargador rápido USB-C 65W para laptops y phones.'},
    {id:455, name:'Regleta con Interruptor y LED', brand:'TIGRE', sku:'ELE005', inStock:false, image:'https://picsum.photos/seed/elec5/300/300', description:'Regleta básica con interruptor de encendido/apagado.'},
  ],

  'Mascotas': [
    {id:551, name:'Collar Antipulgas Perro Pequeño', brand:'PETCARE', sku:'MAS001', inStock:true, image:'https://picsum.photos/seed/pet1/300/300', description:'Collar antipulgas para perros pequeños, efecto 8 meses.'},
    {id:552, name:'Comedero Acero Inoxidable Gato', brand:'PETCARE', sku:'MAS002', inStock:true, image:'https://picsum.photos/seed/pet2/300/300', description:'Comedero de acero inoxidable para gatos con capacidad 500ml.'},
    {id:553, name:'Arena para Gato Premium Arcilla', brand:'CATPRO', sku:'MAS003', inStock:true, image:'https://picsum.photos/seed/pet3/300/300', description:'Arena de gato aglutinante con olor a lavanda, bolsa 10kg.'},
    {id:554, name:'Cama Ortopédica Perro Mediano', brand:'PETCARE', sku:'MAS004', inStock:true, image:'https://picsum.photos/seed/pet4/300/300', description:'Cama ortopédica con memory foam para perros medianos.'},
    {id:555, name:'Juguete Pelota Hilo de Lana', brand:'PETPLAY', sku:'MAS005', inStock:true, image:'https://picsum.photos/seed/pet5/300/300', description:'Juguete interactivo de pelota con hilo para gatos.'},
  ],

  'Ferretería': [
    {id:651, name:'Perno Acero Galvanizado 1/4"x3"', brand:'ADELCA', sku:'FER001', inStock:true, image:'https://picsum.photos/seed/hardware1/300/300', description:'Perno de acero galvanizado resistente a la corrosión.'},
    {id:652, name:'Candado de Seguridad 40mm', brand:'MASTER', sku:'FER002', inStock:true, image:'https://picsum.photos/seed/hardware2/300/300', description:'Candado de acero endurecido para alta seguridad.'},
    {id:653, name:'Bisagra Puerta Acero Inox', brand:'ITAL', sku:'FER003', inStock:true, image:'https://picsum.photos/seed/hardware3/300/300', description:'Bisagra acero inoxidable para puertas.'},
    {id:654, name:'Manija Acero Cromada Premium', brand:'ITAL', sku:'FER004', inStock:true, image:'https://picsum.photos/seed/hardware4/300/300', description:'Manija cromada elegante para puertas y gavetas.'},
    {id:655, name:'Pasador Seguridad Cilíndrico', brand:'MASTER', sku:'FER005', inStock:true, image:'https://picsum.photos/seed/hardware5/300/300', description:'Pasador cilíndrico de seguridad para puertas.'},
  ],

  'Automotriz': [
    {id:751, name:'Filtro Aire Motor Auto', brand:'FRAM', sku:'AUTO001', inStock:true, image:'https://picsum.photos/seed/auto1/300/300', description:'Filtro de aire para motores de automóviles estándar.'},
    {id:752, name:'Pastillas Freno Trasero Sedan', brand:'BREMBO', sku:'AUTO002', inStock:true, image:'https://picsum.photos/seed/auto2/300/300', description:'Pastillas de freno trasero de cerámica para sedanes.'},
    {id:753, name:'Batería Auto 12V 60Ah', brand:'OPTIMA', sku:'AUTO003', inStock:true, image:'https://picsum.photos/seed/auto3/300/300', description:'Batería automotriz de alto rendimiento 60Ah.'},
    {id:754, name:'Limpiaparabrisas Universal 26"', brand:'BOSCH', sku:'AUTO004', inStock:true, image:'https://picsum.photos/seed/auto4/300/300', description:'Limpiadores de parabrisas universales resistentes.'},
    {id:755, name:'Aceite Motor 10W40 Sintético 4L', brand:'MOBIL', sku:'AUTO005', inStock:true, image:'https://picsum.photos/seed/auto5/300/300', description:'Aceite sintético 10W40 para motores de automóviles.'},
  ],

  'Pisos': [
    {id:851, name:'Baldosa Cerámica 45x45 Gris', brand:'CORONA', sku:'PISO001', inStock:true, image:'https://picsum.photos/seed/floor1/300/300', description:'Baldosa cerámica gris mate tamaño 45x45cm.'},
    {id:852, name:'Adhesivo Cerámica Premium 25kg', brand:'MAPEI', sku:'PISO002', inStock:true, image:'https://picsum.photos/seed/floor2/300/300', description:'Adhesivo premium para baldosas cerámicas.'},
    {id:853, name:'Lechada Gris Oscuro 5kg', brand:'CERESITA', sku:'PISO003', inStock:true, image:'https://picsum.photos/seed/floor3/300/300', description:'Lechada gris oscuro para juntas de baldosas.'},
    {id:854, name:'Piso Laminado Querétano 7mm', brand:'DURAFLOOR', sku:'PISO004', inStock:true, image:'https://picsum.photos/seed/floor4/300/300', description:'Piso laminado de roble Querétano 7mm de espesor.'},
    {id:855, name:'Sellador Pisos Brillante 1L', brand:'CERESITA', sku:'PISO005', inStock:true, image:'https://picsum.photos/seed/floor5/300/300', description:'Sellador para pisos con acabado brillante.'},
  ],
  
  'Baños': [
    {id:101, name:'Grifería monocomando lavamanos cromada', brand:'FV', sku:'789456', inStock:true, image:'https://picsum.photos/seed/bath1/300/300', description:'Grifería monocomando cromada elegante para lavamanos.'},
    {id:102, name:'Ducha eléctrica 5500W control temperatura', brand:'EDESA', sku:'123789', inStock:true, image:'https://picsum.photos/seed/bath2/300/300', description:'Ducha eléctrica 5500W con control de temperatura ajustable.'},
    {id:103, name:'Inodoro One Piece descarga dual ahorro agua', brand:'EDESA', sku:'456123', inStock:true, image:'https://picsum.photos/seed/bath3/300/300', description:'Inodoro con descarga dual para ahorrar agua.'},
    {id:104, name:'Lavamanos con pedestal cerámico blanco', brand:'EDESA', sku:'654987', inStock:false, image:'https://picsum.photos/seed/bath4/300/300', description:'Lavamanos cerámico blanco con pedestal.'},
    {id:105, name:'Set accesorios baño 5 piezas cromado', brand:'FV', sku:'321654', inStock:true, image:'https://picsum.photos/seed/bath5/300/300', description:'Set de 5 accesorios cromados para baño.'},
    {id:106, name:'Mezcladora de ducha con regadera', brand:'FV', sku:'789123', inStock:true, image:'https://picsum.photos/seed/bath6/300/300', description:'Mezcladora de ducha con regadera de lluvia.'},
    {id:107, name:'Toallero de aro cromado 25cm', brand:'FV', sku:'456789', inStock:true, image:'https://picsum.photos/seed/bath7/300/300', description:'Toallero de arco cromado de 25cm.'},
    {id:108, name:'Papelera de baño con tapa cromada', brand:'FV', sku:'987654', inStock:true, image:'https://picsum.photos/seed/bath8/300/300', description:'Papelera cromada con tapa para baño.'},
    {id:109, name:'Espejo de baño con marco aluminio 60x80cm', brand:'FV', sku:'654321', inStock:true, image:'https://picsum.photos/seed/bath9/300/300', description:'Espejo grande con marco de aluminio 60x80cm.'},
    {id:110, name:'Repisa flotante para baño vidrio templado', brand:'FV', sku:'147258', inStock:false, image:'https://picsum.photos/seed/bath10/300/300', description:'Repisa flotante de vidrio templado para baño.'},
  ],
  
  'Herramientas Manuales': [
    {id:201, name:'Martillo de Goma 16oz', brand:'Stanley', sku:'HM001', inStock:true, image:'https://picsum.photos/seed/hammer1/300/300', description:'Martillo con cabeza de goma para trabajos delicados.'},
    {id:202, name:'Martillo de Acero 20oz', brand:'DeWalt', sku:'HM002', inStock:true, image:'https://picsum.photos/seed/hammer2/300/300', description:'Martillo profesional de acero de 20 onzas.'},
    {id:203, name:'Juego Destornilladores 12pz', brand:'Stanley', sku:'HM003', inStock:true, image:'https://picsum.photos/seed/screwdriver1/300/300', description:'Set de 12 destornilladores variados.'},
    {id:204, name:'Alicates Múltiples 8"', brand:'Truper', sku:'HM004', inStock:true, image:'https://picsum.photos/seed/pliers1/300/300', description:'Alicates multiusos de 8 pulgadas.'},
    {id:205, name:'Llave Inglesa Ajustable 12"', brand:'Stanley', sku:'HM005', inStock:true, image:'https://picsum.photos/seed/wrench1/300/300', description:'Llave inglesa ajustable de 12 pulgadas.'},
    {id:206, name:'Set de Llaves Stanley 12pz', brand:'Stanley', sku:'HM006', inStock:true, image:'images/Stanley.png', description:'Set de 12 llaves españolas variadas.'},
    {id:207, name:'Alicate VETO 8"', brand:'VETO', sku:'HM007', inStock:true, image:'images/VETO.png', description:'Alicate profesional marca VETO de 8".'},
    {id:208, name:'Sierra de Mano 24"', brand:'Truper', sku:'HM008', inStock:false, image:'https://picsum.photos/seed/saw5/300/300', description:'Sierra manual de 24 pulgadas para cortes precisos.'},
    {id:209, name:'Taladro Manual Acero', brand:'Stanley', sku:'HM009', inStock:true, image:'https://picsum.photos/seed/drill3/300/300', description:'Taladro manual profesional para acero.'},
    {id:210, name:'Nivel Burbuja 60cm', brand:'Stanley', sku:'HM010', inStock:true, image:'https://picsum.photos/seed/level1/300/300', description:'Nivel de burbuja de 60cm con precisión.'},
  ],
  
  'Herramientas Eléctricas': [
    {id:301, name:'Taladro Inalámbrico 20V', brand:'DeWalt', sku:'HE001', inStock:true, image:'https://picsum.photos/seed/drill1/300/300', description:'Taladro inalámbrico de batería 20V profesional.'},
    {id:302, name:'Sierra Circular 7.25"', brand:'DeWalt', sku:'HE002', inStock:true, image:'https://picsum.photos/seed/saw1/300/300', description:'Sierra circular de 7.25" con potencia y precisión.'},
    {id:303, name:'Esmeril Angular 4.5"', brand:'DeWalt', sku:'HE003', inStock:false, image:'https://picsum.photos/seed/grinder1/300/300', description:'Esmeril angular de 4.5" para cortes y pulido.'},
    {id:304, name:'Lijadora Orbital 300W', brand:'DeWalt', sku:'HE004', inStock:true, image:'https://picsum.photos/seed/sander1/300/300', description:'Lijadora orbital de 300W para lijado fino.'},
    {id:305, name:'Atornillador de Impacto', brand:'DeWalt', sku:'HE005', inStock:true, image:'https://picsum.photos/seed/impact1/300/300', description:'Atornillador de impacto para trabajos pesados.'},
    {id:306, name:'Taladro Percutor 850W', brand:'DeWalt', sku:'HE006', inStock:true, image:'https://picsum.photos/seed/drill2/300/300', description:'Taladro percutor de 850W para perforación en concreto.'},
    {id:307, name:'Rotomartillo 26mm', brand:'Bosch', sku:'HE007', inStock:true, image:'https://picsum.photos/seed/drill4/300/300', description:'Rotomartillo profesional de 26mm.'},
    {id:308, name:'Cortadora de Cerámica 800W', brand:'DeWalt', sku:'HE008', inStock:true, image:'https://picsum.photos/seed/cutter1/300/300', description:'Cortadora de cerámica y azulejos 800W.'},
  ],
  
  'Pintura': [
    {id:401, name:'Brocha de Pintura 3"', brand:'3M', sku:'P001', inStock:true, image:'https://picsum.photos/seed/paintbrush1/300/300', description:'Brocha de pintura de 3 pulgadas profesional.'},
    {id:402, name:'Rodillo de Pintura 9"', brand:'3M', sku:'P002', inStock:true, image:'https://picsum.photos/seed/roller1/300/300', description:'Rodillo de pintura de 9 pulgadas para paredes.'},
    {id:403, name:'Masilla para Pared 1kg', brand:'Sika', sku:'P003', inStock:true, image:'https://picsum.photos/seed/putty1/300/300', description:'Masilla de pared blanca 1kg fácil de aplicar.'},
    {id:404, name:'Espátula Profesional 4"', brand:'Stanley', sku:'P004', inStock:false, image:'https://picsum.photos/seed/spatula1/300/300', description:'Espátula profesional de acero 4".'},
    {id:405, name:'Cinta de Enmascarar 48mm', brand:'3M', sku:'P005', inStock:true, image:'images/Logo-3M.png', description:'Cinta de enmascarar 48mm resistente.'},
    {id:406, name:'Lija para Pared Grano 120', brand:'Norton', sku:'P006', inStock:true, image:'https://picsum.photos/seed/sandpaper1/300/300', description:'Lija para pared grano 120 para acabados.'},
    {id:407, name:'Pintura Latex Blanca 1 Galón', brand:'MAACO', sku:'P007', inStock:true, image:'https://picsum.photos/seed/paint1/300/300', description:'Pintura latex blanca 1 galón semi-mate.'},
    {id:408, name:'Thinner Acrílico 4L', brand:'PROA', sku:'P008', inStock:true, image:'https://picsum.photos/seed/paint2/300/300', description:'Thinner para acrílicos 4 litros.'},
  ],
  
  'Materiales': [
    {id:501, name:'Clavos 2.5" x 1kg', brand:'Adelca', sku:'M001', inStock:true, image:'https://picsum.photos/seed/nails1/300/300', description:'Clavos de acero 2.5" en bolsa de 1kg.'},
    {id:502, name:'Tornillos Acero 1" x 100pz', brand:'Adelca', sku:'M002', inStock:true, image:'https://picsum.photos/seed/bolts1/300/300', description:'Tornillos de acero 1" paquete de 100 piezas.'},
    {id:503, name:'Tuercas y Arandelas Set', brand:'Adelca', sku:'M003', inStock:true, image:'https://picsum.photos/seed/nuts1/300/300', description:'Set variado de tuercas y arandelas.'},
    {id:504, name:'Cable Volteck 2.5mm (10m)', brand:'Volteck', sku:'M004', inStock:true, image:'images/volteck.png', description:'Cable eléctrico 2.5mm 10 metros.'},
    {id:505, name:'Regleta Tigre 20cm', brand:'Tigre', sku:'M005', inStock:true, image:'images/tigre.png', description:'Regleta de tuberías Tigre 20cm.'},
    {id:506, name:'Termofusible Plastigama 250ml', brand:'Plastigama', sku:'M006', inStock:true, image:'images/Plastigama.jpg', description:'Termofusible 250ml marca Plastigama.'},
    {id:507, name:'Cemento Blanco 5kg', brand:'CEMEX', sku:'M007', inStock:true, image:'https://picsum.photos/seed/cement1/300/300', description:'Cemento blanco de 5 kilogramos.'},
    {id:508, name:'Arena de Construcción 25kg', brand:'LOCAL', sku:'M008', inStock:true, image:'https://picsum.photos/seed/sand1/300/300', description:'Arena para construcción bolsa de 25kg.'},
  ],
  
  'Seguridad': [
    {id:601, name:'Casco de Seguridad Blanco', brand:'3M', sku:'S001', inStock:true, image:'https://picsum.photos/seed/helmet1/300/300', description:'Casco de seguridad blanco con arnés ajustable.'},
    {id:602, name:'Guantes de Trabajo Nitrilo', brand:'3M', sku:'S002', inStock:true, image:'https://picsum.photos/seed/gloves1/300/300', description:'Guantes de nitrilo para trabajo resistentes.'},
    {id:603, name:'Gafas de Protección Clara', brand:'3M', sku:'S003', inStock:true, image:'https://picsum.photos/seed/goggles1/300/300', description:'Gafas de protección con lentes claros.'},
    {id:604, name:'Chaleco Reflectante Naranja', brand:'3M', sku:'S004', inStock:false, image:'https://picsum.photos/seed/vest1/300/300', description:'Chaleco reflectante naranja de alta visibilidad.'},
    {id:605, name:'Botas Seguridad Punta Acero', brand:'3M', sku:'S005', inStock:true, image:'https://picsum.photos/seed/boots1/300/300', description:'Botas de seguridad con punta de acero.'},
    {id:606, name:'Mascarilla N95 Protección', brand:'PROTEC', sku:'S006', inStock:true, image:'https://picsum.photos/seed/mask1/300/300', description:'Mascarilla N95 protección respiratoria.'},
    {id:607, name:'Arnés de Seguridad Profesional', brand:'PETZL', sku:'S007', inStock:true, image:'https://picsum.photos/seed/harness1/300/300', description:'Arnés profesional para trabajos en altura.'},
  ],
  
  'Iluminación': [
    {id:701, name:'Foco LED 9W Luz Blanca', brand:'Sylvania', sku:'I001', inStock:true, image:'https://picsum.photos/seed/bulb1/300/300', description:'Foco LED 9W luz blanca fría 6500K.'},
    {id:702, name:'Lámpara LED 12W Luz Cálida', brand:'Sylvania', sku:'I002', inStock:true, image:'https://picsum.photos/seed/bulb2/300/300', description:'Lámpara LED 12W luz cálida 3000K.'},
    {id:703, name:'Reflector LED 50W Exterior', brand:'Sylvania', sku:'I003', inStock:true, image:'https://picsum.photos/seed/reflector1/300/300', description:'Reflector LED 50W para exterior IP65.'},
    {id:704, name:'Tira LED 5m RGB con Control', brand:'Sylvania', sku:'I004', inStock:true, image:'https://picsum.photos/seed/ledstrip1/300/300', description:'Tira LED RGB 5m con control remoto.'},
    {id:705, name:'Lámpara Colgante Moderna', brand:'LUXOR', sku:'I005', inStock:true, image:'https://picsum.photos/seed/pendant1/300/300', description:'Lámpara colgante moderna para sala.'},
    {id:706, name:'Downlight Empotrables 20W', brand:'LUXOR', sku:'I006', inStock:true, image:'https://picsum.photos/seed/downlight1/300/300', description:'Downlight empotrables LED 20W cuadrados.'},
  ],

  'Plomería': [
    {id:801, name:'Llave de Paso 1/2"', brand:'TIBER', sku:'PLO001', inStock:true, image:'https://picsum.photos/seed/plumb1/300/300', description:'Llave de paso 1/2 pulgada resistente.'},
    {id:802, name:'Unión Universal 3/4"', brand:'TIBER', sku:'PLO002', inStock:true, image:'https://picsum.photos/seed/plumb2/300/300', description:'Unión universal PVC 3/4 pulgadas.'},
    {id:803, name:'Tubo PVC 1/2" (3m)', brand:'TIBER', sku:'PLO003', inStock:true, image:'https://picsum.photos/seed/plumb3/300/300', description:'Tubo PVC 1/2 pulgada de 3 metros.'},
    {id:804, name:'Codo 90° PVC 3/4"', brand:'TIBER', sku:'PLO004', inStock:true, image:'https://picsum.photos/seed/plumb4/300/300', description:'Codo 90 grados PVC 3/4 pulgadas.'},
    {id:805, name:'Manguera Flexible 1/2" (20m)', brand:'MIFLEX', sku:'PLO005', inStock:true, image:'https://picsum.photos/seed/plumb5/300/300', description:'Manguera flexible 1/2 pulgada 20 metros.'},
  ],

  'Jardín': [
    {id:901, name:'Pala de Jardín Acero', brand:'TRUPER', sku:'JAR001', inStock:true, image:'https://picsum.photos/seed/garden1/300/300', description:'Pala de jardín con mango larguero de acero.'},
    {id:902, name:'Rastrillo 14 Dientes', brand:'TRUPER', sku:'JAR002', inStock:true, image:'https://picsum.photos/seed/garden2/300/300', description:'Rastrillo de 14 dientes para jardín.'},
    {id:903, name:'Maceta Plástico 30cm', brand:'VERDE', sku:'JAR003', inStock:true, image:'https://picsum.photos/seed/garden3/300/300', description:'Maceta de plástico de 30cm diámetro.'},
    {id:904, name:'Tierra de Hoja 25L', brand:'ORGÁNICA', sku:'JAR004', inStock:true, image:'https://picsum.photos/seed/garden4/300/300', description:'Tierra de hoja premium bolsa 25 litros.'},
    {id:905, name:'Manguera Riego 15m', brand:'MIFLEX', sku:'JAR005', inStock:true, image:'https://picsum.photos/seed/garden5/300/300', description:'Manguera de jardín 15 metros resistente.'},
  ],

  'Limpieza': [
    {id:1001, name:'Escoba de Cerdas Naturales', brand:'CLEAN', sku:'LIM001', inStock:true, image:'https://picsum.photos/seed/clean1/300/300', description:'Escoba de cerdas naturales resistentes.'},
    {id:1002, name:'Trapero con Balde Exprimidor', brand:'CLEAN', sku:'LIM002', inStock:true, image:'https://picsum.photos/seed/clean2/300/300', description:'Trapero con balde y exprimidor incorporado.'},
    {id:1003, name:'Detergente Multiusos 1L', brand:'LIMPIOX', sku:'LIM003', inStock:true, image:'https://picsum.photos/seed/clean3/300/300', description:'Detergente multiusos concentrado 1 litro.'},
    {id:1004, name:'Desinfectante Lavanda 750ml', brand:'LYSOL', sku:'LIM004', inStock:true, image:'https://picsum.photos/seed/clean4/300/300', description:'Desinfectante con aroma a lavanda 750ml.'},
    {id:1005, name:'Esponja Abrasiva Multiuso', brand:'SCOTCH', sku:'LIM005', inStock:true, image:'https://picsum.photos/seed/clean5/300/300', description:'Esponja abrasiva multiuso resistente.'},
  ],
};

// Estado de visualización por categoría (cuántos productos mostrar)
const viewState = {
  'tecnologia': { showing: 3, total: 0 },
  'banos': { showing: 3, total: 0 },
  'herramientas-manuales': { showing: 3, total: 0 },
  'herramientas-electricas': { showing: 3, total: 0 },
  'pintura': { showing: 3, total: 0 },
  'materiales': { showing: 3, total: 0 },
  'seguridad': { showing: 3, total: 0 },
  'iluminacion': { showing: 3, total: 0 },
  'hogar': { showing: 3, total: 0 },
  'electrico': { showing: 3, total: 0 },
  'mascotas': { showing: 3, total: 0 },
  'ferreteria': { showing: 3, total: 0 },
  'automotriz': { showing: 3, total: 0 },
  'pisos': { showing: 3, total: 0 },
  'plomeria': { showing: 3, total: 0 },
  'jardin': { showing: 3, total: 0 },
  'limpieza': { showing: 3, total: 0 },
};

// Renderizar productos (inicialmente solo 3 por categoría)
function renderCategoryProducts(category, gridId, sectionId) {
  const grid = document.getElementById(gridId);
  const products = PRODUCTOS_POR_CATEGORIA[category] || [];
  
  // Guardar total
  viewState[sectionId].total = products.length;
  
  if(products.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#6b7280; padding:2rem;">No hay productos en esta categoría.</p>';
    return;
  }
  
  grid.innerHTML = '';
  
  // Mostrar solo los primeros X productos
  const toShow = viewState[sectionId].showing;
  const visibleProducts = products.slice(0, toShow);
  
  visibleProducts.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card fade-up';
    card.style.cursor = 'pointer';
    card.setAttribute('data-product-name', product.name);
    card.setAttribute('data-product-description', product.description || '');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
        <div>
          <p style="color:#6b7280; font-size:0.85rem; margin:0 0 0.25rem 0; font-weight:600; text-transform:uppercase;">${product.brand}</p>
          <strong style="font-size:1rem; line-height:1.3;">${product.name}</strong>
          <p style="color:#6b7280; font-size:0.75rem; margin:0.25rem 0;">SKU: ${product.sku}</p>
        </div>
        <div style="margin-top:auto;">
          <span class="badge ${product.inStock ? 'in' : 'out'}">${product.inStock ? '✓ En Stock' : '✗ Agotado'}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => showProductDetail(product));
    grid.appendChild(card);
  });
  
  // Agregar botón "Ver más" si hay más productos
  updateViewMoreButton(sectionId, gridId, category);
}

function updateViewMoreButton(sectionId, gridId, category) {
  const section = document.getElementById(sectionId);
  const existing = section.querySelector('.view-more-container');
  if(existing) existing.remove();
  
  const showing = viewState[sectionId].showing;
  const total = viewState[sectionId].total;
  
  if(showing < total) {
    const container = document.createElement('div');
    container.className = 'view-more-container';
    container.innerHTML = `
      <button class="btn-view-more-section" onclick="showMore('${sectionId}', '${gridId}', '${category}')">
        Ver más
      </button>
    `;
    section.appendChild(container);
  }
}

function showMore(sectionId, gridId, category) {
  // Mostrar todos los productos
  viewState[sectionId].showing = viewState[sectionId].total;
  renderCategoryProducts(category, gridId, sectionId);
}

// Mostrar detalles del producto
function showProductDetail(product) {
  const modal = document.createElement('div');
  modal.className = 'product-detail-modal';
  modal.innerHTML = `
    <div class="product-detail-content">
      <button class="close-detail" onclick="this.closest('.product-detail-modal').remove()">✕</button>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:start;">
        <div>
          <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:8px;" />
        </div>
        <div>
          <p style="color:#6b7280; font-size:0.85rem; margin:0 0 0.5rem 0; font-weight:600; text-transform:uppercase;">${product.brand}</p>
          <h2 style="margin:0 0 1rem 0;">${product.name}</h2>
          <p style="color:#6b7280; font-size:0.9rem; margin-bottom:1rem;">${product.description || 'Producto de calidad premium.'}</p>
          <div style="background:#f3f4f6; padding:1rem; border-radius:8px; margin-bottom:1.5rem;">
            <p style="margin:0.5rem 0;"><strong>SKU:</strong> ${product.sku}</p>
            <p style="margin:0.5rem 0;"><strong>Estado:</strong> <span class="badge ${product.inStock ? 'in' : 'out'}" style="margin-left:0.5rem;">${product.inStock ? '✓ En Stock' : '✗ Agotado'}</span></p>
          </div>
          <button class="btn" style="width:100%; padding:0.75rem; cursor:pointer;" onclick="window.open('https://wa.me/593098556988?text=Hola%20quiero%20consultar%20sobre%20el%20producto:%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku})', '_blank'); this.closest('.product-detail-modal').remove();">CONSULTAR VÍA WHATSAPP</button>
        </div>
      </div>
    </div>
  `;
  modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.remove();
  });
  document.body.appendChild(modal);
}

// Función para ir a un producto desde sugerencias
window.goToProduct = function(productName) {
  const normalizedName = normalizeText(productName);
  const cards = document.querySelectorAll('.product-card');
  
  for(let card of cards) {
    if(normalizeText(card.getAttribute('data-product-name') || '') === normalizedName) {
      card.click();
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return true;
    }
  }
  return false;
};
document.addEventListener('DOMContentLoaded', () => {
  // Leer filtros de sessionStorage
  const filterCategory = sessionStorage.getItem('filterCategory');
  const filterBrand = sessionStorage.getItem('filterBrand');
  const globalSearch = sessionStorage.getItem('globalSearch');
  
  // Mapeo de nombres de categorías a IDs de sección
  const categoryMap = {
    'Tecnología': { name: 'Tecnología', id: 'tecnologia' },
    'Hogar': { name: 'Hogar', id: 'hogar' },
    'Eléctrico': { name: 'Eléctrico', id: 'electrico' },
    'Mascotas': { name: 'Mascotas', id: 'mascotas' },
    'Baños': { name: 'Baños', id: 'banos' },
    'Herramientas Manuales': { name: 'Herramientas Manuales', id: 'herramientas-manuales' },
    'Herramientas Eléctricas': { name: 'Herramientas Eléctricas', id: 'herramientas-electricas' },
    'Pintura': { name: 'Pintura', id: 'pintura' },
    'Materiales': { name: 'Materiales', id: 'materiales' },
    'Ferretería': { name: 'Ferretería', id: 'ferreteria' },
    'Automotriz': { name: 'Automotriz', id: 'automotriz' },
    'Pisos': { name: 'Pisos', id: 'pisos' },
    'Seguridad': { name: 'Seguridad', id: 'seguridad' },
    'Iluminación': { name: 'Iluminación', id: 'iluminacion' },
    'Plomería': { name: 'Plomería', id: 'plomeria' },
    'Jardín': { name: 'Jardín', id: 'jardin' },
    'Limpieza': { name: 'Limpieza', id: 'limpieza' },
  };
  
  // Renderizar todas las categorías
  Object.values(categoryMap).forEach(cat => {
    const products = PRODUCTOS_POR_CATEGORIA[cat.name] || [];
    const grid = document.getElementById(cat.id + '-grid');
    if(grid) renderCategoryProducts(cat.name, cat.id + '-grid', cat.id);
  });
  
  // Aplicar filtrado de categoría
  if(filterCategory && categoryMap[filterCategory]) {
    const catInfo = categoryMap[filterCategory];
    document.querySelectorAll('.category-section').forEach(section => {
      section.style.display = section.id === catInfo.id ? '' : 'none';
    });
    sessionStorage.removeItem('filterCategory');
  }
  
  // Aplicar filtrado de marca
  if(filterBrand) {
    showBrandOnly(filterBrand);
    sessionStorage.removeItem('filterBrand');
  }
  
  // Búsqueda global desde header
  if(globalSearch) {
    const searchInput = document.getElementById('global-search');
    if(searchInput) searchInput.value = globalSearch;
    filterProductsBySearch(globalSearch);
    sessionStorage.removeItem('globalSearch');
  }
  
  // Búsqueda global (sin cambio, mantiene el comportamiento de global-search si existe)
  const searchInput = document.getElementById('global-search');
  if(searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterProductsBySearch(query);
    });
  }
  // Indicar que los productos ya fueron renderizados
  window.productsRendered = true;
});

// Función para filtrar productos por marca
function filterProductsByBrand(brand) {
  document.querySelectorAll('.category-section').forEach(section => {
    const products = section.querySelectorAll('.product-card');
    let hasProductsFromBrand = false;
    
    products.forEach(card => {
      // El primer párrafo contiene la marca
      const brandElement = card.querySelector('p');
      const cardBrand = brandElement ? brandElement.textContent.trim() : '';
      
      if(cardBrand === brand) {
        card.style.display = '';
        hasProductsFromBrand = true;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Mostrar u ocultar la sección si tiene productos de la marca
    section.style.display = hasProductsFromBrand ? '' : 'none';
  });
}

// Renderizar una lista plana de productos (sin secciones por categoría)
function renderFlatProducts(products, title) {
  // Ocultar secciones existentes
  document.querySelectorAll('.category-section').forEach(sec => sec.style.display = 'none');

  // Crear o reutilizar la sección de resultados por marca
  let container = document.getElementById('brand-results');
  if(!container) {
    container = document.createElement('section');
    container.className = 'category-section';
    container.id = 'brand-results';
    container.innerHTML = `
      <div class="container">
        <div class="category-header">
          <h2 id="brand-results-title">${title}</h2>
        </div>
        <p class="category-subtitle" id="brand-results-subtitle"></p>
        <div id="brand-results-grid" class="product-grid"></div>
      </div>
    `;
    const main = document.querySelector('main');
    if(main) main.insertBefore(container, main.firstChild);
  } else {
    container.style.display = '';
    const titleEl = container.querySelector('#brand-results-title');
    if(titleEl) titleEl.textContent = title;
  }

  const grid = document.getElementById('brand-results-grid');
  grid.innerHTML = '';

  if(!products || products.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#6b7280; padding:2rem;">No hay productos para esta marca.</p>';
    return;
  }

  products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card fade-up';
    card.style.cursor = 'pointer';
    card.setAttribute('data-product-name', product.name);
    card.setAttribute('data-product-description', product.description || '');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
        <div>
          <p style="color:#6b7280; font-size:0.85rem; margin:0 0 0.25rem 0; font-weight:600; text-transform:uppercase;">${product.brand}</p>
          <strong style="font-size:1rem; line-height:1.3;">${product.name}</strong>
          <p style="color:#6b7280; font-size:0.75rem; margin:0.25rem 0;">SKU: ${product.sku}</p>
        </div>
        <div style="margin-top:auto;">
          <span class="badge ${product.inStock ? 'in' : 'out'}">${product.inStock ? '✓ En Stock' : '✗ Agotado'}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => showProductDetail(product));
    grid.appendChild(card);
  });
}

// Mostrar sólo productos de una marca en vista plana
function showBrandOnly(brand) {
  const matches = [];
  for(const [cat, products] of Object.entries(PRODUCTOS_POR_CATEGORIA)) {
    for(const p of products) {
      if((p.brand || '').toLowerCase() === (brand || '').toLowerCase()) {
        matches.push(p);
      }
    }
  }

  renderFlatProducts(matches, `Resultados para: ${brand}`);
}

// Función para normalizar tildes y caracteres especiales
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Palabras relacionadas sinónimos
const WORD_ALIASES = {
  'camara': ['cámara', 'camera'],
  'camera': ['cámara', 'camara'],
  'martillo': ['martelo', 'hammer'],
  'taladro': ['taladrador', 'drill'],
  'luz': ['foco', 'bombilla', 'lamp', 'led'],
  'foco': ['luz', 'bombilla', 'lamp', 'led'],
  'tubo': ['tubería', 'caño', 'tubo pvc'],
  'caño': ['tubería', 'tubo', 'tubo pvc'],
  'pintura': ['pintar', 'paint', 'color'],
  'destornillador': ['destornilador', 'screwdriver'],
  'herramienta': ['tool', 'tools'],
  'llave': ['key', 'wrench'],
  'manguera': ['hose', 'mangueras'],
  'piso': ['pisos', 'floor', 'suelo'],
  'baño': ['bathroom', 'sanitario'],
  'griferia': ['grifo', 'griferías', 'faucet'],
  'grifo': ['grifería', 'faucet']
};

// Función para calcular similitud entre dos palabras (Levenshtein distance simplificado)
function getSimilarity(str1, str2) {
  const len = Math.max(str1.length, str2.length);
  if(len === 0) return 1;
  
  let differences = 0;
  for(let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if(str1[i] !== str2[i]) differences++;
  }
  
  return 1 - (differences / len);
}

// Función para generar sugerencias mientras el usuario escribe
function getSuggestions(query) {
  if(!query || query.length < 1) return [];

  const normalizedQuery = normalizeText(query);
  const suggestions = [];
  const seen = new Set();

  // Recorrer los productos a partir de los datos (no del DOM)
  for(const [categoryName, products] of Object.entries(PRODUCTOS_POR_CATEGORIA)) {
    const matching = [];
    for(const p of products) {
      const name = p.name || '';
      const normalizedName = normalizeText(name);
      if(normalizedName.includes(normalizedQuery)) {
        if(!seen.has(name)) {
          suggestions.push({ type: 'suggestion', text: name, category: categoryName });
          seen.add(name);
        }
        matching.push(name);
      }
    }

    if(matching.length > 0) {
      // agregar categoría con hasta 3 items que coincidan
      suggestions.push({ type: 'category', category: categoryName, items: matching.slice(0,3) });
    }
  }

  // Priorizar sugerencias directas (productos) y limitar total
  const productSugs = suggestions.filter(s => s.type === 'suggestion').slice(0,6);
  const categorySugs = suggestions.filter(s => s.type === 'category').slice(0,6);
  return [...productSugs, ...categorySugs].slice(0, 15);
}

// Función para filtrar productos por búsqueda — compare SOLO con el NOMBRE del producto
function filterProductsBySearch(query) {
  // Si no hay query, restaurar todo
  if(!query) {
    document.querySelectorAll('.category-section').forEach(section => {
      section.style.display = '';
      const grid = section.querySelector('.product-grid');
      const sectionId = section.id;
      const catName = Object.keys(PRODUCTOS_POR_CATEGORIA).find(n => normalizeText(n).replace(/\s+/g,'-') === sectionId) || null;
      if(catName && grid) {
        // volver a renderizar primeros X productos
        const products = PRODUCTOS_POR_CATEGORIA[catName] || [];
        grid.innerHTML = '';
        const toShow = viewState[sectionId] ? viewState[sectionId].showing : products.length;
        products.slice(0, toShow).forEach(p => {
          const card = document.createElement('article');
          card.className = 'product-card fade-up';
          card.style.cursor = 'pointer';
          card.setAttribute('data-product-name', p.name);
          card.setAttribute('data-product-description', p.description || '');
          card.innerHTML = `
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
            <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
              <div>
                <p style="color:#6b7280; font-size:0.85rem; margin:0 0 0.25rem 0; font-weight:600; text-transform:uppercase;">${p.brand}</p>
                <strong style="font-size:1rem; line-height:1.3;">${p.name}</strong>
                <p style="color:#6b7280; font-size:0.75rem; margin:0.25rem 0;">SKU: ${p.sku}</p>
              </div>
              <div style="margin-top:auto;">
                <span class="badge ${p.inStock ? 'in' : 'out'}">${p.inStock ? '✓ En Stock' : '✗ Agotado'}</span>
              </div>
            </div>`;
          card.addEventListener('click', () => showProductDetail(p));
          grid.appendChild(card);
        });
      }
    });
    return;
  }

  const normalizedQuery = normalizeText(query);
  const qwords = normalizedQuery.split(/\s+/).filter(Boolean);

  // Construir lista unificada de coincidencias (todas las categorías)
  const unifiedMatches = [];
  for(const [categoryName, products] of Object.entries(PRODUCTOS_POR_CATEGORIA)) {
    for(const p of products) {
      const name = normalizeText(p.name || '');
      let matched = false;
      for(const qw of qwords) {
        if(name.includes(qw)) { matched = true; break; }
        if(WORD_ALIASES[qw]) {
          for(const alias of WORD_ALIASES[qw]) {
            if(name.includes(normalizeText(alias))) { matched = true; break; }
          }
          if(matched) break;
        }
        if(qw.length > 2) {
          const nameWords = name.split(/\s+/);
          for(const nw of nameWords) {
            if(getSimilarity(qw, nw) > 0.8) { matched = true; break; }
          }
          if(matched) break;
        }
      }
      if(matched) unifiedMatches.push({ product: p, category: categoryName });
    }
  }

  // Mostrar resultados en una sola sección
  const resultsSection = document.getElementById('search-results');
  const resultsGrid = document.getElementById('search-results-grid');
  if(!resultsSection || !resultsGrid) return;

  // Ocultar secciones por categoría
  document.querySelectorAll('.category-section').forEach(sec => sec.style.display = 'none');

  resultsGrid.innerHTML = '';
  if(unifiedMatches.length === 0) {
    resultsSection.style.display = 'block';
    document.getElementById('search-results-title').textContent = `No se encontraron resultados para "${query}"`;
    return;
  }

  document.getElementById('search-results-title').textContent = `Resultados para "${query}"`;
  unifiedMatches.forEach(item => {
    const p = item.product;
    const card = document.createElement('article');
    card.className = 'product-card fade-up';
    card.style.cursor = 'pointer';
    card.setAttribute('data-product-name', p.name);
    card.setAttribute('data-product-description', p.description || '');
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
        <div>
          <p style="color:#6b7280; font-size:0.85rem; margin:0 0 0.25rem 0; font-weight:600; text-transform:uppercase;">${p.brand}</p>
          <strong style="font-size:1rem; line-height:1.3;">${p.name}</strong>
          <p style="color:#6b7280; font-size:0.75rem; margin:0.25rem 0;">SKU: ${p.sku}</p>
        </div>
        <div style="margin-top:auto;">
          <span class="badge ${p.inStock ? 'in' : 'out'}">${p.inStock ? '✓ En Stock' : '✗ Agotado'}</span>
        </div>
      </div>`;
    card.addEventListener('click', () => showProductDetail(p));
    resultsGrid.appendChild(card);
  });

  resultsSection.style.display = 'block';
}
