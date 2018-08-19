// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
//     xhr.overrideMimeType("application/json");
//     xhr.open("GET",file,true);
//     xhr.onreadystatechange=function(){
//     	if(xhr.readyState === 4 && xhr.status =="200"){
//     		callback(xhr.responseText);
//     	}
//     };
// xhr.send(null);
// }
// Loadjson("data.json",function(text){
// var data=JSON.parse(text);
// console.log(data);
// basics(data.details);
// carrerinfo(data.carrer);
// educationinfo(data.education);

// skillset(data.skills);
// achivement(data.achivements);

// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));

			}
		})
	})

}
var newfile=loadjson("data.json");
newfile.then(data=>{
 console.log(data);
basics(data.details);
carrerinfo(data.carrer);
educationinfo(data.education);

skillset(data.skills);
achivement(data.achivements);	
})




var left=document.querySelector(".left");
function basics(det){
var img =document.createElement("img");
img.src = det.image;
left.appendChild(img);
var name1=document.createElement("h3");
name1.textContent=det.name;
left.appendChild(name1);
var phoneno1=document.createElement("h3");
phoneno1.textContent=det.phoneno;
left.appendChild(phoneno1);
var email=document.createElement("a");
email.href="mailto:komakulalakshmi13@gmail.com";
email.textContent=det.emailid;
left.appendChild(email);
var add=document.createElement("h2");
add.textContent="address";
left.appendChild(add);
var hr=document.createElement("hr");
left.appendChild(hr);
var p=document.createElement("p");
p.textContent=det.address;
left.appendChild(p);


}
var right=document.querySelector(".right");
function carrerinfo(info){
var carrer=document.createElement("h2");
carrer.textContent="carrer objective";
right.appendChild(carrer);
var hr=document.createElement("hr");
right.appendChild(hr);
var carrer1=document.createElement("p");
carrer1.textContent=info.info;
right.appendChild(carrer1);
}
function education(educationalqualifications){
var educationalqualifications=document.createElement("h2");
educationalqualifications.textContent="educationalqualifications";
right.appendChild(educationalqualifications);
var hr1=document.createElement("hr");
right.appendChild(hr1);

}
function educationinfo(edu){
	var ed=document.createElement("h1");
	ed.textContent="educationalqualifications";
	right.appendChild(ed);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var table1=document.createElement("table");
	table1.border="2";
	right.appendChild(table1);
	tabledata="";
	for (i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
}
	table1.innerHTML=tabledata;


}
function skillset(skill){
	var sk=document.createElement("h1");
	sk.textContent="tecnicalskills";
	right.appendChild(sk);

	var hr=document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<skill.length;i++){
		var s=document.createElement("h3");
		s.textContent=skill[i].title;
		right.appendChild(s);
		var ul=document.createElement("ul");
		var li=document.createElement("li");
		li.textContent=skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}

}
function achivement(achive){
	var ac=document.createElement("h1");
	ac.textContent="achivements";
	right.appendChild(ac);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<achive.length;i++){
		var ul=document.createElement("ul");
		var li=document.createElement("li");
		li.textContent=achive[i].title;
		ul.appendChild(li);
		right.appendChild(ul);
	}
	
}
function openpage(){
	window.open("resume.html","_self",true)
}