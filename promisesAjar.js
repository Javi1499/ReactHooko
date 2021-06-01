const descargarUsuarios = cantidad => new Promise((resolve, reject) =>{

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    //llamado ajax

    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true)

    xhr.onload = () =>{
        if(xhr.status===200){
resolve(JSON.parse(xhr.responseText).results);
        } else{
reject(Error(xhr.statusText));
        }
    }

//opcional on Error

    xhr.send()
});

descargarUsuarios(500)
.then(
    miembros => imprimirHTML(miembros), 
    error2 => console.log( 
       new Error('Hubo un error ' + error2)
       ) 
    
);

function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
       html += `
        <li>
        Nombre: ${usuario.name.first} ${usuario.name.last}
        Pais: ${usuario.nat}
        Imagen: 
        <img src="${usuario.picture.medium}">
        </li>
        `;
    });

    const contenedora = document.querySelector('#app');
contenedora.innerHTML= html
}