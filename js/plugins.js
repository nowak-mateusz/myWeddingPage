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
