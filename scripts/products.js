class ProductRepository {
  constructor(products){
    this._products = products || [];
  }
  getAll(){ return [...this._products] }
  search(q){
    if(!q) return this.getAll();
    q = q.trim().toLowerCase();
    return this._products.filter(p=> p.name.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q)) || (p.brand && p.brand.toLowerCase().includes(q)));
  }
  getByBrand(brand){
    return this._products.filter(p=> p.brand && p.brand.toLowerCase() === brand.toLowerCase());
  }
  getByCategory(category){
    return this._products.filter(p=> p.category && p.category.toLowerCase() === category.toLowerCase());
  }
}

class ProductListView {
  constructor(container){
    this.container = container;
  }
  render(products){
    this.container.innerHTML = '';
    if(!products.length){
      this.container.innerHTML = '<p class="muted">No hay productos con esa búsqueda.</p>';
      return;
    }
    for(const p of products){
      const card = document.createElement('article');
      card.className = 'product-card fade-up';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <div>
          <div>
            <strong style="font-size:1.05rem">${p.name}</strong>
            <div style="color:#6b7280;font-size:0.9rem">Marca: <span style="color:var(--accent);font-weight:600">${p.brand || 'N/A'}</span></div>
          </div>
          <div class="product-meta">
            <div class="category-tags">
              <span class="cat-badge">${p.category}</span>
              ${p.subcategory ? `<span class="subcat-badge">${p.subcategory}</span>` : ''}
            </div>
            <span class="badge ${p.inStock? 'in':'out'}">${p.inStock? 'Stock':'Agotado'}</span>
          </div>
        </div>
      `;
      this.container.appendChild(card);
    }
  }
}

// Sample product data with hardware categories
const SAMPLE_PRODUCTS = [
  // HERRAMIENTAS MANUALES
  {id:1,name:'Martillo de Goma',category:'Herramientas',subcategory:'Manuales',brand:'Stanley',inStock:true,image:'https://picsum.photos/seed/hammer1/400/300'},
  {id:2,name:'Martillo de Acero',category:'Herramientas',subcategory:'Manuales',brand:'DeWalt',inStock:true,image:'https://picsum.photos/seed/hammer2/400/300'},
  {id:3,name:'Juego de Destornilladores',category:'Herramientas',subcategory:'Manuales',brand:'Bosch',inStock:true,image:'https://picsum.photos/seed/screwdriver1/400/300'},
  {id:4,name:'Alicates Múltiples',category:'Herramientas',subcategory:'Manuales',brand:'Stanley',inStock:true,image:'https://picsum.photos/seed/pliers1/400/300'},
  {id:5,name:'Llave Inglesa',category:'Herramientas',subcategory:'Manuales',brand:'Craftsman',inStock:true,image:'https://picsum.photos/seed/wrench1/400/300'},
  {id:6,name:'Destornillador Eléctrico',category:'Herramientas',subcategory:'Manuales',brand:'Makita',inStock:false,image:'https://picsum.photos/seed/screwdriver2/400/300'},
  
  // HERRAMIENTAS ELÉCTRICAS/MAQUINARIA
  {id:7,name:'Taladro Inalámbrico',category:'Maquinaria',subcategory:'Herramientas Eléctricas',brand:'DeWalt',inStock:true,image:'https://picsum.photos/seed/drill1/400/300'},
  {id:8,name:'Sierra Circular',category:'Maquinaria',subcategory:'Herramientas Eléctricas',brand:'Makita',inStock:true,image:'https://picsum.photos/seed/saw1/400/300'},
  {id:9,name:'Cortadora Angular',category:'Maquinaria',subcategory:'Herramientas Eléctricas',brand:'Bosch',inStock:false,image:'https://picsum.photos/seed/grinder1/400/300'},
  {id:10,name:'Lijadora Orbital',category:'Maquinaria',subcategory:'Herramientas Eléctricas',brand:'DeWalt',inStock:true,image:'https://picsum.photos/seed/sander1/400/300'},
  {id:11,name:'Pistola de Tornillos',category:'Maquinaria',subcategory:'Herramientas Eléctricas',brand:'Makita',inStock:true,image:'https://picsum.photos/seed/impact1/400/300'},
  {id:12,name:'Compresor de Aire',category:'Maquinaria',subcategory:'Herramientas Eléctricas',brand:'Craftsman',inStock:false,image:'https://picsum.photos/seed/compressor1/400/300'},
  
  // MAQUINARIA PESADA
  {id:13,name:'Soldadora MIG',category:'Maquinaria',subcategory:'Soldadura',brand:'Miller',inStock:true,image:'https://picsum.photos/seed/welder1/400/300'},
  {id:14,name:'Compresor Industrial',category:'Maquinaria',subcategory:'Soldadura',brand:'Atlas Copco',inStock:false,image:'https://picsum.photos/seed/industrial1/400/300'},
  
  // PINTURA Y ACABADOS
  {id:15,name:'Brocha de Pintura Grande',category:'Pintura',subcategory:'Aplicadores',brand:'Purdy',inStock:true,image:'https://picsum.photos/seed/paintbrush1/400/300'},
  {id:16,name:'Rodillo de Pintura',category:'Pintura',subcategory:'Aplicadores',brand:'Wooster',inStock:true,image:'https://picsum.photos/seed/roller1/400/300'},
  {id:17,name:'Masilla para Pared',category:'Pintura',subcategory:'Acabados',brand:'DAP',inStock:true,image:'https://picsum.photos/seed/putty1/400/300'},
  {id:18,name:'Espátula Profesional',category:'Pintura',subcategory:'Acabados',brand:'Stanley',inStock:false,image:'https://picsum.photos/seed/spatula1/400/300'},
  {id:19,name:'Cinta de Enmascarar',category:'Pintura',subcategory:'Accesorios',brand:'3M',inStock:true,image:'https://picsum.photos/seed/tape1/400/300'},
  
  // MATERIALES Y SUMINISTROS
  {id:20,name:'Clavos Surtidos',category:'Materiales',subcategory:'Fasteners',brand:'Ramset',inStock:true,image:'https://picsum.photos/seed/nails1/400/300'},
  {id:21,name:'Tornillos de Acero',category:'Materiales',subcategory:'Fasteners',brand:'Spax',inStock:true,image:'https://picsum.photos/seed/bolts1/400/300'},
  {id:22,name:'Tuercas y Arandelas',category:'Materiales',subcategory:'Fasteners',brand:'Fastenal',inStock:true,image:'https://picsum.photos/seed/nuts1/400/300'},
  {id:23,name:'Cadena de Acero',category:'Materiales',subcategory:'Hardware',brand:'Stihl',inStock:false,image:'https://picsum.photos/seed/chain1/400/300'},
  {id:24,name:'Candado de Seguridad',category:'Materiales',subcategory:'Hardware',brand:'Master Lock',inStock:true,image:'https://picsum.photos/seed/lock1/400/300'},
  {id:25,name:'Bisagras de Puerta',category:'Materiales',subcategory:'Hardware',brand:'Hager',inStock:true,image:'https://picsum.photos/seed/hinge1/400/300'},
  
  // HOGAR Y DECORACIÓN
  {id:26,name:'Tuercas Decorativas',category:'Hogar',subcategory:'Decoración',brand:'Kohler',inStock:true,image:'https://picsum.photos/seed/decor1/400/300'},
  {id:27,name:'Cortineros Metálicos',category:'Hogar',subcategory:'Decoración',brand:'Kenney',inStock:true,image:'https://picsum.photos/seed/curtain1/400/300'},
  {id:28,name:'Estantes de Pared',category:'Hogar',subcategory:'Muebles',brand:'Rubbermaid',inStock:false,image:'https://picsum.photos/seed/shelf1/400/300'},
  {id:29,name:'Cerco de Escalera',category:'Hogar',subcategory:'Seguridad',brand:'Safety 1st',inStock:true,image:'https://picsum.photos/seed/railing1/400/300'},
  {id:30,name:'Puerta de Garaje',category:'Hogar',subcategory:'Puertas',brand:'Clopay',inStock:true,image:'https://picsum.photos/seed/door1/400/300'},
  
  // SEGURIDAD Y PROTECCIÓN
  {id:31,name:'Casco de Seguridad',category:'Seguridad',subcategory:'Protección',brand:'3M',inStock:true,image:'https://picsum.photos/seed/helmet1/400/300'},
  {id:32,name:'Guantes de Trabajo',category:'Seguridad',subcategory:'Protección',brand:'Mechanix',inStock:true,image:'https://picsum.photos/seed/gloves1/400/300'},
  {id:33,name:'Gafas de Protección',category:'Seguridad',subcategory:'Protección',brand:'Pyramex',inStock:true,image:'https://picsum.photos/seed/goggles1/400/300'},
  {id:34,name:'Chaleco Reflectante',category:'Seguridad',subcategory:'Protección',brand:'Ergodyne',inStock:false,image:'https://picsum.photos/seed/vest1/400/300'},
  {id:35,name:'Botas de Seguridad',category:'Seguridad',subcategory:'Protección',brand:'Timberland PRO',inStock:true,image:'https://picsum.photos/seed/boots1/400/300'},
  
  // MEDICIÓN Y NIVELACIÓN
  {id:36,name:'Cinta Métrica de 5m',category:'Medición',subcategory:'Medidores',brand:'Stanley',inStock:true,image:'https://picsum.photos/seed/tape2/400/300'},
  {id:37,name:'Nivel de Burbuja',category:'Medición',subcategory:'Medidores',brand:'Stabila',inStock:true,image:'https://picsum.photos/seed/level1/400/300'},
  {id:38,name:'Transportador Angular',category:'Medición',subcategory:'Medidores',brand:'Starrett',inStock:false,image:'https://picsum.photos/seed/protractor1/400/300'},
  {id:39,name:'Brújula Magnética',category:'Medición',subcategory:'Medidores',brand:'Suunto',inStock:true,image:'https://picsum.photos/seed/compass1/400/300'}
];

const repo = new ProductRepository(SAMPLE_PRODUCTS);

document.addEventListener('DOMContentLoaded', ()=>{
  const listEl = document.getElementById('product-list');
  const input = document.getElementById('search');
  const view = new ProductListView(listEl);
  
  // Check if there's a brand filter from the carousel click
  const filterBrand = sessionStorage.getItem('filterBrand');
  const filterCategory = sessionStorage.getItem('filterCategory');
  let initialProducts = SAMPLE_PRODUCTS;
  
  if(filterCategory){
    initialProducts = repo.getByCategory(filterCategory);
    input.value = filterCategory; // Show the category in search box
    // Add a clear indicator
    const heroSection = document.querySelector('.products-hero');
    const clearCategoryBtn = document.createElement('button');
    clearCategoryBtn.className = 'btn small';
    clearCategoryBtn.textContent = '✕ Limpiar Categoría';
    clearCategoryBtn.style.marginLeft = '10px';
    clearCategoryBtn.addEventListener('click', ()=>{
      sessionStorage.removeItem('filterCategory');
      window.location.href = 'products.html';
    });
    heroSection.appendChild(clearCategoryBtn);
    sessionStorage.removeItem('filterCategory'); // Clear it after using
  }
  
  if(filterBrand){
    initialProducts = repo.getByBrand(filterBrand);
    input.value = filterBrand; // Show the brand in search box
    // Add a clear indicator
    const heroSection = document.querySelector('.products-hero');
    const clearBrandBtn = document.createElement('button');
    clearBrandBtn.className = 'btn small';
    clearBrandBtn.textContent = '✕ Limpiar Marca';
    clearBrandBtn.style.marginLeft = '10px';
    clearBrandBtn.addEventListener('click', ()=>{
      sessionStorage.removeItem('filterBrand');
      window.location.href = 'products.html';
    });
    heroSection.appendChild(clearBrandBtn);
    sessionStorage.removeItem('filterBrand'); // Clear it after using
  }
  
  view.render(initialProducts);

  if(input){
    input.addEventListener('input', (e)=>{
      const results = repo.search(e.target.value);
      view.render(results);
    })
  }
});
