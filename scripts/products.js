// Productos organizados por categorías
const PRODUCTOS_POR_CATEGORIA = {
  'Tecnología': [
    {id:1, name:'Enchufe Smart dual WiFi exteriores', brand:'NEXXT', price:23.00, oldPrice:36.42, discount:37, sku:'458979', inStock:true, image:'https://picsum.photos/seed/tech1/300/300'},
    {id:2, name:'Cámara WiFi exterior sensor movimiento 350°', brand:'NEXXT', price:49.95, oldPrice:59.99, discount:17, sku:'560864', inStock:true, image:'https://picsum.photos/seed/tech2/300/300'},
    {id:3, name:'Televisor ON THE GO HD 32" ANDROID TV 11', brand:'INDURAMA', price:505.31, oldPrice:689.00, discount:27, sku:'450645', inStock:true, image:'https://picsum.photos/seed/tech3/300/300'},
    {id:4, name:'Cámara seguridad WiFi detector movimiento', brand:'STEREN', price:34.99, oldPrice:39.95, discount:12, sku:'560801', inStock:true, image:'https://picsum.photos/seed/tech4/300/300'},
    {id:5, name:'KIT cámara Smart inalámbrica int/ext', brand:'NEXXT', price:79.99, oldPrice:89.95, discount:11, sku:'560883', inStock:true, image:'https://picsum.photos/seed/tech5/300/300'},
    {id:6, name:'Sistema alarma WiFi con sensores', brand:'STEREN', price:125.00, oldPrice:160.00, discount:22, sku:'560900', inStock:true, image:'https://picsum.photos/seed/tech6/300/300'},
  ],
  
  'Baños': [
    {id:101, name:'Grifería monocomando lavamanos cromada', brand:'FV', price:45.00, oldPrice:60.00, discount:25, sku:'789456', inStock:true, image:'https://picsum.photos/seed/bath1/300/300'},
    {id:102, name:'Ducha eléctrica 5500W control temperatura', brand:'EDESA', price:65.60, oldPrice:80.00, discount:18, sku:'123789', inStock:true, image:'https://picsum.photos/seed/bath2/300/300'},
    {id:103, name:'Inodoro One Piece descarga dual ahorro agua', brand:'EDESA', price:189.00, oldPrice:270.00, discount:30, sku:'456123', inStock:true, image:'https://picsum.photos/seed/bath3/300/300'},
    {id:104, name:'Lavamanos con pedestal cerámico blanco', brand:'EDESA', price:78.00, oldPrice:100.00, discount:22, sku:'654987', inStock:true, image:'https://picsum.photos/seed/bath4/300/300'},
    {id:105, name:'Set accesorios baño 5 piezas cromado', brand:'FV', price:34.00, oldPrice:40.00, discount:15, sku:'321654', inStock:true, image:'https://picsum.photos/seed/bath5/300/300'},
    {id:106, name:'Mezcladora de ducha con regadera', brand:'FV', price:55.00, oldPrice:70.00, discount:21, sku:'789123', inStock:true, image:'https://picsum.photos/seed/bath6/300/300'},
    {id:107, name:'Toallero de aro cromado 25cm', brand:'FV', price:12.50, oldPrice:18.00, discount:31, sku:'456789', inStock:true, image:'https://picsum.photos/seed/bath7/300/300'},
    {id:108, name:'Papelera de baño con tapa cromada', brand:'FV', price:15.00, oldPrice:20.00, discount:25, sku:'987654', inStock:true, image:'https://picsum.photos/seed/bath8/300/300'},
  ],
  
  'Herramientas Manuales': [
    {id:201, name:'Martillo de Goma 16oz', brand:'Stanley', price:12.50, oldPrice:15.00, discount:17, sku:'HM001', inStock:true, image:'https://picsum.photos/seed/hammer1/300/300'},
    {id:202, name:'Martillo de Acero 20oz', brand:'DeWalt', price:18.00, oldPrice:22.00, discount:18, sku:'HM002', inStock:true, image:'https://picsum.photos/seed/hammer2/300/300'},
    {id:203, name:'Juego Destornilladores 12pz', brand:'Stanley', price:25.00, oldPrice:32.00, discount:22, sku:'HM003', inStock:true, image:'https://picsum.photos/seed/screwdriver1/300/300'},
    {id:204, name:'Alicates Múltiples 8"', brand:'Truper', price:15.50, oldPrice:20.00, discount:23, sku:'HM004', inStock:true, image:'https://picsum.photos/seed/pliers1/300/300'},
    {id:205, name:'Llave Inglesa Ajustable 12"', brand:'Stanley', price:22.00, oldPrice:28.00, discount:21, sku:'HM005', inStock:true, image:'https://picsum.photos/seed/wrench1/300/300'},
    {id:206, name:'Set de Llaves Stanley 12pz', brand:'Stanley', price:45.00, oldPrice:60.00, discount:25, sku:'HM006', inStock:true, image:'images/Stanley.png'},
    {id:207, name:'Alicate VETO 8"', brand:'VETO', price:18.00, oldPrice:24.00, discount:25, sku:'HM007', inStock:true, image:'images/VETO.png'},
    {id:208, name:'Sierra de Mano 24"', brand:'Truper', price:28.00, oldPrice:35.00, discount:20, sku:'HM008', inStock:true, image:'https://picsum.photos/seed/saw5/300/300'},
  ],
  
  'Herramientas Eléctricas': [
    {id:301, name:'Taladro Inalámbrico 20V', brand:'DeWalt', price:89.00, oldPrice:120.00, discount:26, sku:'HE001', inStock:true, image:'https://picsum.photos/seed/drill1/300/300'},
    {id:302, name:'Sierra Circular 7.25"', brand:'DeWalt', price:125.00, oldPrice:160.00, discount:22, sku:'HE002', inStock:true, image:'https://picsum.photos/seed/saw1/300/300'},
    {id:303, name:'Esmeril Angular 4.5"', brand:'DeWalt', price:75.00, oldPrice:95.00, discount:21, sku:'HE003', inStock:false, image:'https://picsum.photos/seed/grinder1/300/300'},
    {id:304, name:'Lijadora Orbital 300W', brand:'DeWalt', price:65.00, oldPrice:85.00, discount:24, sku:'HE004', inStock:true, image:'https://picsum.photos/seed/sander1/300/300'},
    {id:305, name:'Atornillador de Impacto', brand:'DeWalt', price:95.00, oldPrice:125.00, discount:24, sku:'HE005', inStock:true, image:'https://picsum.photos/seed/impact1/300/300'},
    {id:306, name:'Taladro Percutor 850W', brand:'DeWalt', price:110.00, oldPrice:145.00, discount:24, sku:'HE006', inStock:true, image:'https://picsum.photos/seed/drill2/300/300'},
  ],
  
  'Pintura': [
    {id:401, name:'Brocha de Pintura 3"', brand:'3M', price:5.50, oldPrice:7.00, discount:21, sku:'P001', inStock:true, image:'https://picsum.photos/seed/paintbrush1/300/300'},
    {id:402, name:'Rodillo de Pintura 9"', brand:'3M', price:8.00, oldPrice:10.00, discount:20, sku:'P002', inStock:true, image:'https://picsum.photos/seed/roller1/300/300'},
    {id:403, name:'Masilla para Pared 1kg', brand:'Sika', price:6.50, oldPrice:8.50, discount:24, sku:'P003', inStock:true, image:'https://picsum.photos/seed/putty1/300/300'},
    {id:404, name:'Espátula Profesional 4"', brand:'Stanley', price:4.50, oldPrice:6.00, discount:25, sku:'P004', inStock:false, image:'https://picsum.photos/seed/spatula1/300/300'},
    {id:405, name:'Cinta de Enmascarar 48mm', brand:'3M', price:3.50, oldPrice:5.00, discount:30, sku:'P005', inStock:true, image:'images/Logo-3M.png'},
    {id:406, name:'Lija para Pared Grano 120', brand:'Norton', price:2.00, oldPrice:3.00, discount:33, sku:'P006', inStock:true, image:'https://picsum.photos/seed/sandpaper1/300/300'},
  ],
  
  'Materiales': [
    {id:501, name:'Clavos 2.5" x 1kg', brand:'Adelca', price:4.50, oldPrice:6.00, discount:25, sku:'M001', inStock:true, image:'https://picsum.photos/seed/nails1/300/300'},
    {id:502, name:'Tornillos Acero 1" x 100pz', brand:'Adelca', price:3.50, oldPrice:5.00, discount:30, sku:'M002', inStock:true, image:'https://picsum.photos/seed/bolts1/300/300'},
    {id:503, name:'Tuercas y Arandelas Set', brand:'Adelca', price:5.00, oldPrice:7.00, discount:29, sku:'M003', inStock:true, image:'https://picsum.photos/seed/nuts1/300/300'},
    {id:504, name:'Cable Volteck 2.5mm (10m)', brand:'Volteck', price:18.00, oldPrice:24.00, discount:25, sku:'M004', inStock:true, image:'images/volteck.png'},
    {id:505, name:'Regleta Tigre 20cm', brand:'Tigre', price:2.50, oldPrice:4.00, discount:38, sku:'M005', inStock:true, image:'images/tigre.png'},
    {id:506, name:'Termofusible Plastigama 250ml', brand:'Plastigama', price:4.50, oldPrice:6.00, discount:25, sku:'M006', inStock:true, image:'images/Plastigama.jpg'},
  ],
  
  'Seguridad': [
    {id:601, name:'Casco de Seguridad Blanco', brand:'3M', price:12.00, oldPrice:16.00, discount:25, sku:'S001', inStock:true, image:'https://picsum.photos/seed/helmet1/300/300'},
    {id:602, name:'Guantes de Trabajo Nitrilo', brand:'3M', price:8.50, oldPrice:12.00, discount:29, sku:'S002', inStock:true, image:'https://picsum.photos/seed/gloves1/300/300'},
    {id:603, name:'Gafas de Protección Clara', brand:'3M', price:6.00, oldPrice:9.00, discount:33, sku:'S003', inStock:true, image:'https://picsum.photos/seed/goggles1/300/300'},
    {id:604, name:'Chaleco Reflectante Naranja', brand:'3M', price:15.00, oldPrice:20.00, discount:25, sku:'S004', inStock:false, image:'https://picsum.photos/seed/vest1/300/300'},
    {id:605, name:'Botas Seguridad Punta Acero', brand:'3M', price:45.00, oldPrice:60.00, discount:25, sku:'S005', inStock:true, image:'https://picsum.photos/seed/boots1/300/300'},
  ],
  
  'Iluminación': [
    {id:701, name:'Foco LED 9W Luz Blanca', brand:'Sylvania', price:3.50, oldPrice:5.00, discount:30, sku:'I001', inStock:true, image:'https://picsum.photos/seed/bulb1/300/300'},
    {id:702, name:'Lámpara LED 12W Luz Cálida', brand:'Sylvania', price:4.50, oldPrice:6.50, discount:31, sku:'I002', inStock:true, image:'https://picsum.photos/seed/bulb2/300/300'},
    {id:703, name:'Reflector LED 50W Exterior', brand:'Sylvania', price:28.00, oldPrice:38.00, discount:26, sku:'I003', inStock:true, image:'https://picsum.photos/seed/reflector1/300/300'},
    {id:704, name:'Tira LED 5m RGB con Control', brand:'Sylvania', price:22.00, oldPrice:30.00, discount:27, sku:'I004', inStock:true, image:'https://picsum.photos/seed/ledstrip1/300/300'},
  ],
};

// Función para renderizar productos en una sección específica
function renderCategoryProducts(category, gridId) {
  const grid = document.getElementById(gridId);
  const products = PRODUCTOS_POR_CATEGORIA[category] || [];
  
  if(products.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#6b7280; padding:2rem;">No hay productos en esta categoría.</p>';
    return;
  }
  
  grid.innerHTML = '';
  
  products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card fade-up';
    card.innerHTML = `
      <div style="position:relative;">
        ${product.discount ? `<span class="discount-badge" style="position:absolute; top:10px; right:10px; background:#dc2626; color:white; padding:0.4rem 0.6rem; border-radius:6px; font-weight:700; font-size:0.85rem;">-${product.discount}%</span>` : ''}
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
        <div>
          <p style="color:#6b7280; font-size:0.85rem; margin:0 0 0.25rem 0; font-weight:600; text-transform:uppercase;">${product.brand}</p>
          <strong style="font-size:1rem; line-height:1.3;">${product.name}</strong>
          <p style="color:#6b7280; font-size:0.75rem; margin:0.25rem 0;">SKU: ${product.sku}</p>
        </div>
        <div>
          <p style="font-size:1.4rem; font-weight:700; color:var(--accent); margin:0.5rem 0;">
            $${product.price.toFixed(2)}
            ${product.oldPrice ? `<span style="font-size:0.9rem; color:#6b7280; text-decoration:line-through; font-weight:400; margin-left:0.5rem;">$${product.oldPrice.toFixed(2)}</span>` : ''}
          </p>
          <p style="font-size:0.75rem; color:#6b7280; margin:0 0 0.75rem 0;">Incluye IVA</p>
        </div>
        <div style="margin-top:auto;">
          <span class="badge ${product.inStock ? 'in' : 'out'}">${product.inStock ? 'En Stock' : 'Agotado'}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Cargar todos los productos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryProducts('Tecnología', 'tecnologia-grid');
  renderCategoryProducts('Baños', 'banos-grid');
  renderCategoryProducts('Herramientas Manuales', 'herramientas-manuales-grid');
  renderCategoryProducts('Herramientas Eléctricas', 'herramientas-electricas-grid');
  renderCategoryProducts('Pintura', 'pintura-grid');
  renderCategoryProducts('Materiales', 'materiales-grid');
  renderCategoryProducts('Seguridad', 'seguridad-grid');
  renderCategoryProducts('Iluminación', 'iluminacion-grid');
  
  // Búsqueda global
  const globalSearch = document.getElementById('global-search');
  if(globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if(!query) {
        // Mostrar todas las secciones
        document.querySelectorAll('.category-section').forEach(section => {
          section.style.display = 'block';
        });
        return;
      }
      
      // Buscar en todas las categorías
      Object.keys(PRODUCTOS_POR_CATEGORIA).forEach(category => {
        const products = PRODUCTOS_POR_CATEGORIA[category];
        const filtered = products.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query)
        );
        
        // Ocultar sección si no hay resultados
        const sectionId = category.toLowerCase().replace(/\s+/g, '-').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
        const section = document.getElementById(sectionId);
        
        if(filtered.length === 0 && section) {
          section.style.display = 'none';
        } else if(section) {
          section.style.display = 'block';
          
          // Renderizar solo productos filtrados
          const gridId = sectionId + '-grid';
          const grid = document.getElementById(gridId);
          if(grid) {
            grid.innerHTML = '';
            filtered.forEach(product => {
              const card = document.createElement('article');
              card.className = 'product-card fade-up';
              card.innerHTML = `
                <div style="position:relative;">
                  ${product.discount ? `<span class="discount-badge" style="position:absolute; top:10px; right:10px; background:#dc2626; color:white; padding:0.4rem 0.6rem; border-radius:6px; font-weight:700; font-size:0.85rem;">-${product.discount}%</span>` : ''}
                  <img src="${product.image}" alt="${product.name}" loading="lazy" />
                </div>
                <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
                  <div>
                    <p style="color:#6b7280; font-size:0.85rem; margin:0 0 0.25rem 0; font-weight:600; text-transform:uppercase;">${product.brand}</p>
                    <strong style="font-size:1rem; line-height:1.3;">${product.name}</strong>
                    <p style="color:#6b7280; font-size:0.75rem; margin:0.25rem 0;">SKU: ${product.sku}</p>
                  </div>
                  <div>
                    <p style="font-size:1.4rem; font-weight:700; color:var(--accent); margin:0.5rem 0;">
                      $${product.price.toFixed(2)}
                      ${product.oldPrice ? `<span style="font-size:0.9rem; color:#6b7280; text-decoration:line-through; font-weight:400; margin-left:0.5rem;">$${product.oldPrice.toFixed(2)}</span>` : ''}
                    </p>
                    <p style="font-size:0.75rem; color:#6b7280; margin:0 0 0.75rem 0;">Incluye IVA</p>
                  </div>
                  <div style="margin-top:auto;">
                    <span class="badge ${product.inStock ? 'in' : 'out'}">${product.inStock ? 'En Stock' : 'Agotado'}</span>
                  </div>
                </div>
              `;
              grid.appendChild(card);
            });
          }
        }
      });
    });
  }
  
  // Limpiar filtros
  const clearBtn = document.getElementById('clear-filters');
  if(clearBtn) {
    clearBtn.addEventListener('click', () => {
      if(globalSearch) globalSearch.value = '';
      document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'block';
      });
      // Recargar productos originales
      renderCategoryProducts('Tecnología', 'tecnologia-grid');
      renderCategoryProducts('Baños', 'banos-grid');
      renderCategoryProducts('Herramientas Manuales', 'herramientas-manuales-grid');
      renderCategoryProducts('Herramientas Eléctricas', 'herramientas-electricas-grid');
      renderCategoryProducts('Pintura', 'pintura-grid');
      renderCategoryProducts('Materiales', 'materiales-grid');
      renderCategoryProducts('Seguridad', 'seguridad-grid');
      renderCategoryProducts('Iluminación', 'iluminacion-grid');
    });
  }
});
