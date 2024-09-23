function leaflet_zone_selector_shortcode() {
    ob_start();
    ?>
    <div id="map-selector">
        <label for="zone-select">Seleccione la zona:</label>
        <select id="zone-select" onchange="moveMap()">
            <option value="">Seleccione una zona</option>
            <option value="CABA">Buenos Aires, CABA</option>
            <option value="BahiaBlanca">Buenos Aires, Bahía Blanca</option>
            <option value="LaPlata">Buenos Aires, La Plata</option>
            <option value="MarDelPlata">Buenos Aires, Mar del Plata</option>
            <option value="Hurlingham">Buenos Aires, Hurlingham</option>
            <option value="Junin">Buenos Aires, Junín</option>
            <option value="Pergamino">Buenos Aires, Pergamino</option>
            <option value="Quilmes">Buenos Aires, Quilmes</option>
            <option value="SanNicolas">Buenos Aires, San Nicolás</option>
            <option value="SanPedro">Buenos Aires, San Pedro</option>
            <option value="ZonaNorte">Buenos Aires, Zona Norte</option>
            <option value="ZonaSur">Buenos Aires, Zona Sur</option>
            <option value="CatamarcaCapital">Catamarca, Capital</option>
            <option value="CordobaCapital">Córdoba, Capital</option>
            <option value="Oliva">Córdoba, Oliva</option>
            <option value="RioCuarto">Córdoba, Río Cuarto</option>
            <option value="SanFrancisco">Córdoba, San Francisco</option>
            <option value="CorrientesCapital">Corrientes, Capital</option>
            <option value="Resistencia">Chaco, Resistencia</option>
            <option value="Trelew">Chubut, Trelew</option>
            <option value="Parana">Entre Ríos, Paraná</option>
            <option value="Concordia">Entre Ríos, Concordia</option>
            <option value="FormosaCapital">Formosa, Capital</option>
            <option value="JujuyCapital">Jujuy, Capital</option>
            <option value="GeneralPico">La Pampa, General Pico</option>
            <option value="LaRiojaCapital">La Rioja, Capital</option>
            <option value="MendozaCapital">Mendoza, Capital</option>
            <option value="Posadas">Misiones, Posadas</option>
            <option value="NeuquenCapital">Neuquén, Capital</option>
            <option value="GeneralRoca">Río Negro, General Roca</option>
            <option value="SaltaCapital">Salta, Capital</option>
            <option value="SanJuanCapital">San Juan, Capital</option>
            <option value="VillaMercedes">San Luis, Villa Mercedes</option>
            <option value="RioGallegos">Santa Cruz, Río Gallegos</option>
            <option value="SantaFeCapital">Santa Fe, Capital</option>
            <option value="SantiagoDelEstero">Santiago del Estero, Santiago del Estero</option>
            <option value="RioGrande">Tierra del Fuego, Río Grande</option>
            <option value="TucumanCapital">Tucumán, Capital</option>
        </select>
    </div>

    <script>
    function moveMap() {
        var zone = document.getElementById("zone-select").value;

        var mapLocations = {
            "CABA": [-34.6037, -58.3816],
            "BahiaBlanca": [-38.7167, -62.2833],
            "LaPlata": [-34.9205, -57.9536],
            "MarDelPlata": [-38.0055, -57.5426],
            "Hurlingham": [-34.5883, -58.6358],
            "Junin": [-34.5838, -60.9454],
            "Pergamino": [-33.894, -60.5736],
            "Quilmes": [-34.7203, -58.2545],
            "SanNicolas": [-33.3345, -60.2268],
            "SanPedro": [-33.6797, -59.6616],
            "ZonaNorte": [-34.4803, -58.5603],
            "ZonaSur": [-34.7909, -58.3729],
            "CatamarcaCapital": [-28.4696, -65.7852],
            "CordobaCapital": [-31.4201, -64.1888],
            "Oliva": [-32.0407, -63.5669],
            "RioCuarto": [-33.1232, -64.3497],
            "SanFrancisco": [-31.4276, -62.0827],
            "CorrientesCapital": [-27.4696, -58.8341],
            "Resistencia": [-27.4514, -58.9867],
            "Trelew": [-43.2489, -65.305],
            "Parana": [-31.7333, -60.5333],
            "Concordia": [-31.3929, -58.0209],
            "FormosaCapital": [-26.1849, -58.1731],
            "JujuyCapital": [-24.1858, -65.2995],
            "GeneralPico": [-35.6566, -63.7517],
            "LaRiojaCapital": [-29.4135, -66.8565],
            "MendozaCapital": [-32.8895, -68.8458],
            "Posadas": [-27.3671, -55.8961],
            "NeuquenCapital": [-38.9516, -68.0591],
            "GeneralRoca": [-39.0349, -67.5895],
            "SaltaCapital": [-24.7821, -65.4232],
            "SanJuanCapital": [-31.5375, -68.5364],
            "VillaMercedes": [-33.6757, -65.4583],
            "RioGallegos": [-51.6226, -69.2181],
            "SantaFeCapital": [-31.6239, -60.6954],
            "SantiagoDelEstero": [-27.7824, -64.2667],
            "RioGrande": [-53.7913, -67.6986],
            "TucumanCapital": [-26.8083, -65.2176]
        };

        if (mapLocations[zone]) {
            var coords = mapLocations[zone];
            // Asegúrate de que 'mymap' sea el ID correcto de tu mapa Leaflet
            // var map = L.map('mymap'); 
            var map = L.map('leaflet-map'); 
            map.setView([coords[0], coords[1]], 13); // Zoom nivel 13
        } else {
            alert("Por favor, selecciona una zona válida.");
        }
    }
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('leaflet_zone_selector', 'leaflet_zone_selector_shortcode');
