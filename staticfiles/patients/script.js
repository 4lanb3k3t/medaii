alert("JS WORKS");

document.addEventListener("DOMContentLoaded", function(){

const analyzeBtn =
document.getElementById("analyze-btn");

const resultDiv =
document.getElementById("result");

const nameInput =
document.getElementById("name");

const symptomsInput =
document.getElementById("symptoms");

const historyDiv =
document.getElementById("history");

const patientsCount =
document.getElementById("patients-count");

const analysisCount =
document.getElementById("analysis-count");

const callsCount =
document.getElementById("calls-count");

const consultBtn =
document.getElementById("consult-btn");

const consultResult =
document.getElementById("consult-result");

const callBtn =
document.getElementById("call-doctor");

const addressInput =
document.getElementById("address");

const doctorStatus =
document.getElementById("doctor-status");

const statusText =
document.getElementById("status-text");

const eta =
document.getElementById("eta");

const progressBar =
document.getElementById("progress-bar");

const gps =
document.getElementById("gps");

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

let analysis =
parseInt(localStorage.getItem("analysis")) || 0;

let calls =
parseInt(localStorage.getItem("calls")) || 0;

const diseases = [

{
name:"Простуда",
keywords:["кашель","насморк","чихание","горло"],
doctor:"Терапевт"
},

{
name:"Грипп",
keywords:["температура","озноб","ломота","слабость"],
doctor:"Терапевт"
},

{
name:"Ковид-19",
keywords:["температура","кашель","запах","вкус","одышка"],
doctor:"Терапевт"
},

{
name:"Пневмония",
keywords:["кашель","боль в груди","одышка","температура"],
doctor:"Пульмонолог"
},

{
name:"Бронхит",
keywords:["кашель","мокрота","хрипы"],
doctor:"Пульмонолог"
},

{
name:"Астма",
keywords:["одышка","хрипы","удушье"],
doctor:"Пульмонолог"
},

{
name:"Ангина",
keywords:["горло","глотать","температура"],
doctor:"ЛОР"
},

{
name:"Синусит",
keywords:["нос","давление","голова"],
doctor:"ЛОР"
},

{
name:"Отит",
keywords:["ухо","боль","слух"],
doctor:"ЛОР"
},

{
name:"Аллергия",
keywords:["сыпь","зуд","чихание","слезы"],
doctor:"Аллерголог"
},

{
name:"Дерматит",
keywords:["кожа","покраснение","зуд"],
doctor:"Дерматолог"
},

{
name:"Экзема",
keywords:["кожа","трещины","зуд"],
doctor:"Дерматолог"
},

{
name:"Герпес",
keywords:["губы","пузырьки","жжение"],
doctor:"Дерматолог"
},

{
name:"Инфаркт",
keywords:["сердце","боль в груди","давит","одышка"],
doctor:"Кардиолог"
},

{
name:"Аритмия",
keywords:["сердце","ритм","пульс"],
doctor:"Кардиолог"
},

{
name:"Гипертония",
keywords:["давление","голова","тошнота"],
doctor:"Кардиолог"
},

{
name:"Инсульт",
keywords:["онемение","речь","голова","паралич"],
doctor:"Невролог"
},

{
name:"Мигрень",
keywords:["голова","тошнота","свет"],
doctor:"Невролог"
},

{
name:"Остеохондроз",
keywords:["спина","шея","позвоночник"],
doctor:"Невролог"
},

{
name:"Сколиоз",
keywords:["искривление","спина"],
doctor:"Ортопед"
},

{
name:"Артрит",
keywords:["сустав","отек","боль"],
doctor:"Ревматолог"
},

{
name:"Артроз",
keywords:["сустав","скованность"],
doctor:"Ортопед"
},

{
name:"Перелом",
keywords:["кость","травма","сломал"],
doctor:"Травматолог"
},

{
name:"Ушиб",
keywords:["синяк","удар","боль"],
doctor:"Травматолог"
},

{
name:"Гастрит",
keywords:["желудок","изжога","живот"],
doctor:"Гастроэнтеролог"
},

{
name:"Язва",
keywords:["живот","рвота","боль"],
doctor:"Гастроэнтеролог"
},

{
name:"Аппендицит",
keywords:["правый бок","живот","тошнота"],
doctor:"Хирург"
},

{
name:"Панкреатит",
keywords:["поджелудочная","живот","боль"],
doctor:"Гастроэнтеролог"
},

{
name:"Отравление",
keywords:["рвота","тошнота","еда","понос"],
doctor:"Терапевт"
},

{
name:"Диабет",
keywords:["жажда","сахар","мочеиспускание"],
doctor:"Эндокринолог"
},

{
name:"Гипотиреоз",
keywords:["усталость","щитовидка","сонливость"],
doctor:"Эндокринолог"
},

{
name:"Ожирение",
keywords:["вес","ожирение"],
doctor:"Диетолог"
},

{
name:"Цистит",
keywords:["мочеиспускание","жжение"],
doctor:"Уролог"
},

{
name:"Пиелонефрит",
keywords:["почки","температура","боль"],
doctor:"Нефролог"
},

{
name:"Анемия",
keywords:["слабость","головокружение","усталость"],
doctor:"Гематолог"
},

{
name:"Онкология",
keywords:["опухоль","слабость","рак"],
doctor:"Онколог"
},

{
name:"Депрессия",
keywords:["грусть","апатия","усталость"],
doctor:"Психолог"
},

{
name:"Тревога",
keywords:["страх","паника","нервы"],
doctor:"Психотерапевт"
},

{
name:"Бессонница",
keywords:["сон","не сплю","усталость"],
doctor:"Невролог"
},

{
name:"Эпилепсия",
keywords:["судороги","припадок"],
doctor:"Невролог"
},

{
name:"Менингит",
keywords:["шея","температура","голова"],
doctor:"Инфекционист"
},

{
name:"Туберкулёз",
keywords:["кашель","кровь","похудение"],
doctor:"Фтизиатр"
},

{
name:"Гепатит",
keywords:["печень","желтуха","тошнота"],
doctor:"Гепатолог"
},

{
name:"Ветрянка",
keywords:["сыпь","температура","пузырьки"],
doctor:"Педиатр"
},

{
name:"Корь",
keywords:["сыпь","кашель","температура"],
doctor:"Инфекционист"
},

{
name:"Краснуха",
keywords:["сыпь","лимфоузлы"],
doctor:"Инфекционист"
},

{
name:"ОРВИ",
keywords:["насморк","кашель","температура"],
doctor:"Терапевт"
},

{
name:"Обезвоживание",
keywords:["жажда","слабость","сухость"],
doctor:"Терапевт"
},

{
name:"Головокружение",
keywords:["кружится","голова","равновесие"],
doctor:"Невролог"
},

{
name:"Конъюнктивит",
keywords:["глаза","покраснение","слезы"],
doctor:"Офтальмолог"
},

{
name:"Катаракта",
keywords:["зрение","глаза","мутно"],
doctor:"Офтальмолог"
},

{
name:"Глаукома",
keywords:["давление в глазах","зрение"],
doctor:"Офтальмолог"
}

];

function updateStats(){

patientsCount.innerText =
patients.length;

analysisCount.innerText =
analysis;

callsCount.innerText =
calls;

}

function renderHistory(){

historyDiv.innerHTML = "";

patients.forEach(function(patient){

historyDiv.innerHTML += `

<div class="card mb-3">

<div class="card-body">

<h5>${patient.name}</h5>

<p>
${patient.symptoms}
</p>

<p>
<strong>${patient.disease}</strong>
</p>

<p>
${patient.doctor}
</p>

</div>

</div>

`;

});

}

renderHistory();
updateStats();

analyzeBtn.addEventListener("click", function(){

const name =
nameInput.value.trim();

const symptoms =
symptomsInput.value.trim();

if(!name || !symptoms){

alert("Заполните поля");

return;

}

let foundDisease =
"Не определено";

let foundDoctor =
"Терапевт";

const text =
symptoms.toLowerCase();

for(let disease of diseases){

for(let keyword of disease.keywords){

if(text.includes(keyword)){

foundDisease =
disease.name;

foundDoctor =
disease.doctor;

}

}

}

resultDiv.innerHTML = `

<div class="alert alert-success">

<h4>
🧠 Анализ завершён
</h4>

<p>
Болезнь:
${foundDisease}
</p>

<p>
Врач:
${foundDoctor}
</p>

<p>
Пациент:
${name}
</p>

<p>
Симптомы:
${symptoms}
</p>

</div>

`;

patients.push({

name:name,
symptoms:symptoms,
disease:foundDisease,
doctor:foundDoctor

});

localStorage.setItem(
"patients",
JSON.stringify(patients)
);

analysis++;

localStorage.setItem(
"analysis",
analysis
);

renderHistory();
updateStats();

nameInput.value = "";
symptomsInput.value = "";

});

consultBtn.addEventListener("click", function(){

const phone =
document.getElementById("consult-phone").value;

const email =
document.getElementById("consult-email").value;

const text =
document.getElementById("consult-text").value;

if(!phone || !email || !text){

alert("Заполните все поля");

return;

}

consultResult.innerHTML = `

<div class="alert alert-success">

✅ Ваша информация успешно отправлена.
Скоро мы свяжемся с вами.

</div>

`;

document.getElementById("consult-phone").value = "";
document.getElementById("consult-email").value = "";
document.getElementById("consult-text").value = "";

});

callBtn.addEventListener("click", function(){

if(!addressInput.value){

alert("Введите адрес");

return;

}

calls++;

localStorage.setItem(
"calls",
calls
);

updateStats();

doctorStatus.style.display =
"block";

let progress = 0;

progressBar.style.width = "0%";

const interval = setInterval(function(){

progress += 10;

progressBar.style.width =
progress + "%";

statusText.innerText =
"🚑 Врач едет";

eta.innerText =
(15 - Math.floor(progress/10))
+ " минут";

gps.innerText =
"51.1605, 71.4704";

if(progress >= 100){

statusText.innerText =
"✅ Врач прибыл";

eta.innerText =
"0 минут";

clearInterval(interval);

}

},1000);

});

});