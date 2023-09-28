const links = document.querySelectorAll('.menu-link');

const btnInicio = document.getElementById('btnInicio')
const btnProdutos = document.getElementById('btnProdutos')
const btnServicos = document.getElementById('btnServicos')
const btnContato = document.getElementById('btnContato')



function icones_menu(event) {

    links.forEach((link) => {
        link.classList.remove('active');
    });
        
   if(event === btnInicio.id) {
        btnInicio.classList.add('active')
   }

   if(event === btnProdutos.id) {
        btnProdutos.classList.add('active')
    }

    if(event === btnServicos.id) {
        btnServicos.classList.add('active')
    }

    if(event === btnContato.id) {
        btnContato.classList.add('active')
    }

    
}
