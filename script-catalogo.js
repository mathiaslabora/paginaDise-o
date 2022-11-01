



let carsPut = document.getElementById('carsPut');






const cars = [
    {
        'id': '0',
        'marca': 'Fiat',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the p dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '1',
        'marca': 'Renault',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the priummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '2',
        'marca': 'Fiat',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the priummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '3',
        'marca': 'Renault',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the prdummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '4',
        'marca': 'Fiat',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the d dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '5',
        'marca': '',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the prinmmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '6',
        'marca': 'Renault',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the prdummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '7',
        'marca': 'Fiat',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the printiy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '8',
        'marca': '',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of ndard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '9',
        'marca': 'Fiat',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the prdummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '10',
        'marca': '',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of thard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '11',
        'marca': '',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text ofandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '12',
        'marca': 'Suzuki',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of tdard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '13',
        'marca': '',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of tdard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '14',
        'marca': 'Renault',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of tdard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '15',
        'marca': 'Fiat',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '16',
        'marca': '',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '17',
        'marca': 'Suzuki',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    {
        'id': '18',
        'marca': 'Fiat',
        'modelo': '',
        'descripcion': `Lorem Ipsum is simply  typesetting industry. Lorem Ipsum has been the indua galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        'precio': '',
    },
    
]

//logica para carga de cards con imagenes
for (let index = 0; index < cars.length; index++) {

    carsPut.innerHTML += `
    <div class="col">
          <div class="card shadow-sm">
          <img src="./fotos/Autos/${index}.jpg" class="d-block w-100" alt="...">

            <div class="card-body">
            <b>${cars[index].marca} - ${cars[index].modelo}</b>
              <p class="card-text">${cars[index].descripcion}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="window.location.href ='producto.html'" >View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        `

}