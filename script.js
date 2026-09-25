const products = [
  {code:"AT310587", name:"Solenoide de transmisión", brand:"OUSIMA", application:"John Deere", category:"Transmisión", image:""},
  {code:"AT310584", name:"Solenoide de transmisión", brand:"OUSIMA", application:"John Deere", category:"Transmisión", image:""},
  {code:"AT310586", name:"Solenoide de transmisión", brand:"OUSIMA", application:"John Deere", category:"Transmisión", image:""},
  {code:"20301001", name:"Alternador", brand:"Deutz", application:"Maquinaria / motor Deutz", category:"Eléctrico", image:""},
  {code:"020301001", name:"Alternador", brand:"Deutz", application:"Maquinaria / motor Deutz", category:"Eléctrico", image:""},
  {code:"STARTER-5112310159", name:"Motor de arranque", brand:"Raiden", application:"Consultar aplicación", category:"Eléctrico", image:""},
  {code:"FILTER-FLEETGUARD", name:"Filtro Fleetguard", brand:"Fleetguard", application:"Consultar aplicación", category:"Filtros", image:""},
  {code:"MAXIFORCE-JD", name:"Componentes de motor", brand:"Maxiforce", application:"John Deere", category:"Motor", image:""}
];

function wa(code){
  return "https://wa.me/51931869618?text="+encodeURIComponent("Hola TERRAKON PARTS, estoy interesado en el repuesto "+code+". Quisiera consultar disponibilidad y precio.");
}
function render(list=products){
  const grid=document.getElementById("productGrid");
  const no=document.getElementById("noResults");
  grid.innerHTML="";
  no.hidden=list.length!==0;
  list.forEach(p=>{
    const card=document.createElement("article");
    card.className="product-card";
    const visual=p.image ? `<img src="${p.image}" alt="${p.name}">` : `<div><strong>${p.code}</strong><br><span>Foto del producto</span></div>`;
    card.innerHTML=`
      <div class="product-image">${visual}</div>
      <div class="product-body">
        <div class="product-code">${p.code}</div>
        <h3>${p.name}</h3>
        <div class="product-meta"><b>Marca:</b> ${p.brand}<br><b>Aplicación:</b> ${p.application}</div>
        <a class="product-wa" href="${wa(p.code)}" target="_blank">CONSULTAR POR WHATSAPP</a>
      </div>`;
    grid.appendChild(card);
  });
}
function searchProducts(){
  const q=document.getElementById("searchInput").value.toLowerCase().trim();
  if(!q){showAll();return}
  const results=products.filter(p=>Object.values(p).join(" ").toLowerCase().includes(q));
  render(results);
  document.getElementById("productos").scrollIntoView({behavior:"smooth"});
}
function quickSearch(q){document.getElementById("searchInput").value=q;searchProducts()}
function filterCategory(cat){
  render(products.filter(p=>p.category.toLowerCase().includes(cat.toLowerCase())));
  document.getElementById("productos").scrollIntoView({behavior:"smooth"});
}
function showAll(){render(products)}
document.addEventListener("DOMContentLoaded",render);
document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")searchProducts()});
