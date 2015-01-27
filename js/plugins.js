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
   
   var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';


   var churchMarker = new google.maps.Marker(churchMarkerSettings);
   google.maps.event.addListener(churchMarker,'click',function(event){
        info.setContent('<strong>Parafia pw. św. Stanisława Biskupa i Męczennika</strong> <br />Bukowska 4<br />62-080 Ceradz Kościelny <br /> \
            <a href="https://www.google.pl/maps/dir//52.43837,16.5919266/@52.4384353,16.5886865,17z/data=!4m2!4m1!3e0?hl=pl">asdasdasd</a> \
            '); 
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
        info.setContent('<div style=\'font-family: sans-serif\'><strong>Hotel i Restauracja Melodia</strong> <br />Lipowa 30 <br />64-320 Buk</div>'); 
        info.open(map, receptionMarker);
    });
}    
/*
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// Google maps
$("#map").gMap({ 
	controls: ["GSmallMapControl", "GMapTypeControl"],
	scrollwheel: false,
	latitude:  52.40,
   longitude: 16.55,
	markers: [
		{ 
			latitude: 52.43837,
			longitude: 16.591931,
			html: "<strong>Parafia pw. św. Stanisława Biskupa i Męczennika</strong> <br />Bukowska 4<br />62-080 Ceradz Kościelny",
			icon: 
			{
				image: "img/map-pin-church.png",
				iconsize: [26, 46],
				iconanchor: [12,46],
				infowindowanchor: [13, 0] 
			}
		},
		{ 
			latitude: 52.348431,
			longitude: 16.511537,
			html: "<strong>Hotel i Restauracja Melodia</strong> <br />Lipowa 30 <br />64-320 Buk",
			icon: 
			{
				image: "img/map-pin.png",
				iconsize: [26, 46],
				iconanchor: [12,46],
				infowindowanchor: [13, 0] 
			}
		}],
		zoom: 11 
	});
*/
