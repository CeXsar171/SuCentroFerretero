document.addEventListener('DOMContentLoaded', ()=>{
  // Small app utilities
  const clearBtn = document.getElementById('clear-search');
  if(clearBtn){
    clearBtn.addEventListener('click', ()=>{
      const input = document.getElementById('search');
      if(input){ input.value=''; input.dispatchEvent(new Event('input')) }
    })
  }
  
  // Brand filter functionality
  const brandItems = document.querySelectorAll('.brand-item[data-brand]');
  brandItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', (e) => {
      const brand = item.getAttribute('data-brand');
      // Store the brand filter in sessionStorage and redirect to products page
      sessionStorage.setItem('filterBrand', brand);
      window.location.href = 'products.html';
    });
    
    item.addEventListener('mouseover', (e) => {
      item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseout', (e) => {
      item.style.transform = 'scale(1)';
    });
  });
});

// Filter by category - stores category and subcategory in sessionStorage for products page
function filterByCategory(category, subcategory){
  if(subcategory){
    sessionStorage.setItem('filterSubcategory', subcategory);
  } else {
    sessionStorage.setItem('filterCategory', category);
  }
  window.location.href = 'products.html';
}

// Expose a small util for opening WhatsApp in a new window (can be used by modules)
function openWhatsApp(number){
  const url = `https://wa.me/${number}`;
  window.open(url,'_blank','noopener');
}
