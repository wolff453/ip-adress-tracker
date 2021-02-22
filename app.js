function enviar(){
    let texto = document.querySelector(".texto").value
    document.querySelector(".inserir").innerHTML = texto
       let foto = document.querySelector(".loading")
            foto.style.display="block"
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_KeWCa3fgyIlOIfbQ4rIIe3OvyjoV0&ipAddress=${texto}`)
    .then(response => response.json())
    .then(dados => {
        let e = Object.entries(dados) 
        let p = e[1]
        let top = p[1]
         var lat =   top.lat 
         var long =  top.lng
             let slice3 = top.city
            document.querySelector(".inserir2").innerHTML = slice3
            let slice4 = top.country
            document.querySelector(".inserir3").innerHTML = slice4
            let slice5 = top.timezone
            let replace = slice5.replace("", "UTC")
            document.querySelector(".inserir4").innerHTML = replace
            let arr3 = e[3]
            let arr4 = arr3[1]
            document.querySelector(".inserir5").innerHTML = arr4
              let foto = document.querySelector(".loading")
            foto.style.display="none"
           //Checando se o mapa já foi iniciado
         var container = L.DomUtil.get('myMap');
            if(container != null){
            container._leaflet_id = null;
             }
            //
            var myMap = L.map('myMap').setView([lat, long], 13)

        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            maxZoom: 18,
        }).addTo(myMap);

        let marker = L.marker([lat, long]).addTo(myMap)

        

        
        myMap.doubleClickZoom.disable()
        myMap.on('dblclick', e => {
        let latLng = myMap.mouseEventToLatLng(e.originalEvent);

        })


     })
 
     

    return false
}
