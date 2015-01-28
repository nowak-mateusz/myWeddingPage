function mapaStart()  
{  
   var centerPoint = new google.maps.LatLng(52.40,16.55);
   var mapSettings = {
     zoom: 11,
     center: centerPoint,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   var map = new google.maps.Map(document.getElementById("map"), mapSettings);
   
   var info = new google.maps.InfoWindow();
   var churchPoint = new google.maps.LatLng(52.43837,16.591931);
   var churchIcon = new google.maps.MarkerImage("img/church-2.png", 
                                                   new google.maps.Size(32,37), 
                                                   new google.maps.Point(0,0), 
                                                   new google.maps.Point(15,34));
   var churchMarkerSettings = {
      position: churchPoint,
      map: map,
      draggable: false,
      icon: churchIcon
   };

   var churchMarker = new google.maps.Marker(churchMarkerSettings);
   google.maps.event.addListener(churchMarker,'click',function(event){
        info.setContent('<div class="mapinfo"><strong>Parafia pw. św. Stanisława Biskupa i Męczennika</strong> <br />Bukowska 4<br />62-080 Ceradz Kościelny <br /> \
            <a href="https://www.google.pl/maps/dir//Parafia+pw.+%C5%9Bw.+Stanis%C5%82awa+Biskupa+i+M%C4%99czennika,+Bukowska+4,+62-080+Ceradz+Ko%C5%9Bcielny/@52.422455,16.5313341,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470439072608909b:0x32f18ddfaffb89c8!2m2!1d16.591931!2d52.43837!3e0?hl=pl" onclick="window.open(this.href); return false;">Wyznacz trasę</a> \
            </div>'); 
        info.open(map, churchMarker);
    });

   var receptionPoint = new google.maps.LatLng(52.348431,16.511537);
   var receptionIcon = new google.maps.MarkerImage("img/wedding.png", 
                                                   new google.maps.Size(32,37), 
                                                   new google.maps.Point(0,0), 
                                                   new google.maps.Point(15,34));
   
   

   var receptionMarkerSettings = {
      position: receptionPoint,
      map: map,
      draggable: false,
      icon: receptionIcon
   };
   var receptionMarker = new google.maps.Marker(receptionMarkerSettings);
   google.maps.event.addListener(receptionMarker,'click',function(event){
        info.setContent('<div class="mapinfo"><strong>Hotel i Restauracja Melodia</strong> <br />Lipowa 30 <br />64-320 Buk<br /> \
            <a href="https://www.google.pl/maps/dir//Restauracja+Melodia,+Lipowa,+Buk/@52.3491451,16.5094755,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470436c2c81bf56f:0x668a781aa835d8ef!2m2!1d16.511537!2d52.348431!3e0?hl=pl" onclick="window.open(this.href); return false;">Wyznacz trasę</a> </div>'); 
        info.open(map, receptionMarker);
    });
}