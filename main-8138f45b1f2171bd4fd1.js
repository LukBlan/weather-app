(()=>{"use strict";const e={};function t(t,n){void 0===e[t]&&(e[t]=[]),e[t].push(n)}function n(t,n){e[t].forEach((e=>e(n)))}const r=document.querySelector(".search-button"),a=document.getElementById("city-input");function c(e,t){const r=t||a.value;0!==r.length&&(n("deleteErrorMessageIfAny",null),n("makeWeatherApiCall",r))}a.addEventListener("keyup",(function(e){"Enter"===e.key&&c()})),r.addEventListener("click",c);let o=null;function i(e){n("newWeatherInfo",e)}function s(){n("cityNotfoundError",null),n("newWeatherInfo",o)}t("makeWeatherApiCall",(function(e){(async function(e){const t=`https://api.weatherapi.com/v1/forecast.json?KEY=0b3eed6dfdae45bcbad10452232309&q=${e}&days=3&hour=12}`,n=await fetch(t,{mode:"cors"}),r=await n.text();if(!n.ok)throw new Error("City Not Found");return o=JSON.parse(r),console.log(o),o})(e).then(i).catch(s)}));class d{constructor(){this.forecastInfo=[]}setInfo(e){this.info=e}setExtraInfo(e){this.extraInfo=e}addNewForecastInfo(e){this.forecastInfo.push(e)}}class u{constructor(){this.cityWeatherObject=new d}build(e){return this.#e(e),this.#t(e.forecast),this.#n(e),this.cityWeatherObject}#t(e){const t=this.#r(e.forecastday[0]),n=this.#r(e.forecastday[1]),r=this.#r(e.forecastday[2]);this.cityWeatherObject.addNewForecastInfo(t),this.cityWeatherObject.addNewForecastInfo(n),this.cityWeatherObject.addNewForecastInfo(r)}#r(e){const t={};return t.maxtemp_c=e.day.maxtemp_c+"°C",t.maxtemp_f=e.day.maxtemp_f+"°F",t.mintemp_c=e.day.mintemp_c+"°C",t.mintemp_f=e.day.mintemp_f+"°F",t.text=e.day.condition.text,t.icon=e.day.condition.icon,t.date=e.date,t}#e(e){const t={},n=this.#a(e.location),r=this.#c(e.current);t.location=n,t.temperature=r,this.cityWeatherObject.setInfo(t)}#a(e){const t={};return t.name=e.name,t.region=e.region,t.country=e.country,t}#c(e){const t={};return t.temp_c=e.temp_c+"°C",t.temp_f=e.temp_f+"°F",t.condition=e.condition.text,t.icon=e.condition.icon,t}#n(e){const t={};t.wind_kph=e.current.wind_kph+" km/hr",t.wind_dir=e.current.wind_dir,t.precip_mm=e.current.precip_mm+" mm",t.humidity=e.current.humidity+" %",t.vis_km=e.current.vis_km+" km",t.pressure_mb=e.current.pressure_mb+" hPa",this.cityWeatherObject.setExtraInfo(t)}}class p{constructor(e){const t=e.split("-");this.dateRecived=new Date(t[0],t[1]-1,t[2]),this.dateRecived.setHours(0,0,0,0)}checkDate(){const e=new Date;return e.setHours(0,0,0,0),this.dateRecived.toString()===e.toString()?"Today":(e.setDate(e.getDate()+1),this.dateRecived.toString()===e.toString()?"Tomorrow":(e.setDate(e.getDate()+1),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]))}}class m{build(e){const t=document.createElement("div"),n=this.#o(e.info.location),r=this.#i(e.info.temperature),a=this.#s(e.forecastInfo);return t.classList.add("info-section"),t.append(n),t.append(r),t.append(a),t}#i(e){const t=document.createElement("p");return t.innerText=e.temp_c,t.classList.add("temperature"),t}#o(e){const t=document.createElement("div"),n=document.createElement("h2"),r=document.createElement("p"),a=document.createElement("p");return n.innerText=e.name,n.classList.add("city-name"),r.innerText=e.region,a.innerText=e.country,t.append(n),t.append(r),t.append(a),t}#s(e){const t=document.createElement("div");return t.classList.add("forecast-card-list"),e.forEach((e=>{const n=function(e){const t=document.createElement("div"),n=function(e){const t=document.createElement("p"),n=new p(e);return t.innerText=n.checkDate(),t}(e.date),r=function(e){const t=document.createElement("img");return t.classList.add("forecast-image"),t.src=e.icon,t}(e),a=function(e){const t=document.createElement("div"),n=document.createElement("p");return n.innerText=`${e.mintemp_c} / ${e.maxtemp_c}`,t.append(n),t}(e);return t.classList.add("forecast-card"),t.append(n),t.append(r),t.append(a),t}(e);t.append(n)})),t}}class l{build(e){const t=document.createElement("div"),n=this.#d(e,"Wind","wind_kph"),r=this.#d(e,"Wind Direction","wind_dir"),a=this.#d(e,"Pressure","pressure_mb"),c=this.#d(e,"Precipitation","precip_mm"),o=this.#d(e,"Humidity","humidity"),i=this.#d(e,"Visibility","vis_km");return t.classList.add("extra-info-section"),t.append(n),t.append(r),t.append(a),t.append(c),t.append(o),t.append(i),t}#d(e,t,n){const r=document.createElement("div"),a=document.createElement("p"),c=document.createElement("p");return a.innerText=t,c.innerText=e[n],r.append(a),r.append(c),r}}class h{build(e){const t=document.createElement("div"),n=new m,r=new l,a=n.build(e),c=r.build(e.extraInfo);return t.classList.add("weather-wrapper"),t.append(a),t.append(c),t}}const f=document.querySelector(".city-weather-display"),y=new class{constructor(){this.loader=function(){const e=document.createElement("div");return e.classList.add("loader"),e}()}showInScreen(e){e.append(this.loader)}getOutScreen(e){e.removeChild(this.loader)}};let g=null;t("makeWeatherApiCall",(function(){f.innerHTML="",y.showInScreen(f)})),t("newWeatherInfo",(function(e){const t=new u,n=new h,r=t.build(e),a=n.build(r);g=r,y.getOutScreen(f),f.append(a)}));const E=document.querySelector(".search-bar");let w=null;t("cityNotfoundError",(function(){const e=function(e){const t=document.createElement("p");return t.innerText="City Not Found",t.classList.add("error-message"),t}();w=e,E.append(e)})),t("deleteErrorMessageIfAny",(function(){null!=w&&(E.removeChild(w),w=null)})),c(0,"London")})();