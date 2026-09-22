const nav=document.getElementById('nav');
const progress=document.querySelector('.progress span');
const menu=document.querySelector('.menu');
const panel=document.querySelector('.mobile-panel');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>30);
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max?window.scrollY/max*100:0)+'%';
});
menu?.addEventListener('click',()=>panel.classList.toggle('open'));
panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>panel.classList.remove('open')));
const cursor=document.querySelector('.cursor');
window.addEventListener('pointermove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});

const data={
 memoria:{k:'COLECCIÓN · 2025',title:'Memoria Invisible',desc:'Una colección desarrollada desde la memoria, el territorio y la identidad cultural de Santa Fe de Antioquia. El proyecto reúne investigación, concepto, materialidad y propuesta fotográfica.',tags:['Investigación cultural','Colección','Identidad','Narrativa visual'],imgs:['assets/memoria-invisible-portada.png','assets/fotos_proyectos_memoria_invisible_02.JPEG','assets/fotos_proyectos_memoria_invisible_03.JPEG','assets/fotos_proyectos_memoria_invisible_04.JPEG','assets/fotos_proyectos_memoria_invisible_05.JPEG','assets/fotos_proyectos_memoria_invisible_infografico_final.png']},
 evolver:{k:'COLECCIÓN · 2025',title:'EVOLVER',desc:'Propuesta sostenible construida desde el upcycling, la experimentación material y el desarrollo de prendas.',tags:['Upcycling','Materiales alternativos','Sostenibilidad'],imgs:['assets/fotos_proyectos_Evolver_01.jpeg','assets/fotos_proyectos_Evolver_02.jpeg','assets/fotos_proyectos_Evolver_proceso_1.jpeg','assets/fotos_proyectos_Evolver_proceso_2.jpeg','assets/fotos_proyectos_Evolver_proceso_3.jpeg','assets/fotos_proyectos_Evolver_proceso_4.jpeg']},
 thalassa:{k:'DENIM · 2026',title:'Thalassa x Levi\'s',desc:'Ejercicio intensivo de diseño en denim mediante upcycling, desarrollado desde un brief creativo y una narrativa inspirada en Los Juegos del Hambre.',tags:['Denim','Upcycling','Brief creativo'],imgs:['assets/fotos_proyectos_thalassa_x_lives_01.jpeg','assets/fotos_proyectos_thalassa_x_lives_02.JPEG','assets/fotos_proyectos_thalassa_x_lives_03.JPEG']},
 lula:{k:'MARCA · 2026',title:'LULA',desc:'Proyecto de marca que integra investigación, conceptualización, comunicación y experiencia para fortalecer la conexión con el consumidor.',tags:['Investigación','Experiencia de marca','Comunicación'],imgs:['assets/lula-campana.jpeg','assets/lula-03.jpeg','assets/fotos_proyectos_lula_03_activaci_U00f3n_de_marca.jpeg','assets/fotos_proyectos_lula_02_revista.jpeg']},
 maquillaje:{k:'IMAGEN',title:'Maquillaje',desc:'Exploraciones de maquillaje aplicadas a la construcción de imagen, belleza y propuestas visuales.',tags:['Maquillaje','Beauty','Imagen'],imgs:['assets/fotos_proyectos_maquillaje_01_makeup.JPEG','assets/fotos_proyectos_maquillaje_maquillaje_fantasia.jpeg','assets/fotos_proyectos_maquillaje_mimetismo.JPEG','assets/fotos_proyectos_maquillaje_ilusion_optica.jpeg']},
 fotografia:{k:'IMAGEN',title:'Fotografía & edición',desc:'Exploraciones de retrato y fotografía de moda acompañadas por procesos de edición.',tags:['Fotografía','Retrato','Edición'],imgs:['assets/fotos_proyectos_fotografia_y_edici_U00f3n_01_retrato.jpg','assets/fotos_proyectos_fotografia_y_edici_U00f3n_01_book.jpg','assets/fotos_proyectos_fotografia_y_edici_U00f3n_02_book.jpg']}
};
const modal=document.querySelector('.modal'), gallery=document.getElementById('modal-gallery'), mt=document.getElementById('modal-title'), md=document.getElementById('modal-description'), mk=document.getElementById('modal-kicker'), tags=document.getElementById('modal-tags');
function openModal(key){const d=data[key];if(!d)return;mk.textContent=d.k;mt.textContent=d.title;md.textContent=d.desc;tags.innerHTML=d.tags.map(t=>`<span class="tag">${t}</span>`).join('');gallery.innerHTML=d.imgs.map((src,i)=>`<figure class="reveal"><img src="${src}" alt="${d.title} — imagen ${i+1}"></figure>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.card').forEach(c=>c.addEventListener('click',()=>openModal(c.dataset.modal)));
document.querySelector('.close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.card').forEach(card=>{card.classList.toggle('hidden',f!=='all'&&card.dataset.category!==f)})}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.card,.steps article,.tools-list div,.archive-grid div,.portrait-wrap,.method-head,.intro-copy').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(22px)';el.style.transition='opacity .8s ease,transform .8s ease';observer.observe(el)});
const style=document.createElement('style');style.textContent='.visible{opacity:1!important;transform:none!important}';document.head.appendChild(style);
