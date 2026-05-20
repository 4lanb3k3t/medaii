let patientsCount = 0;
let analysisCount = 0;
let callsCount = 0;

const diseases = [
    "Простуда",
    "Грипп",
    "COVID-19",
    "Ангина",
    "Бронхит",
    "Пневмония",
    "Мигрень",
    "Гастрит",
    "Отравление",
    "Аллергия",
    "Астма",
    "Диабет",
    "Гипертония",
    "Инфекция",
    "ОРВИ",
    "Тонзиллит",
    "Аппендицит",
    "Сердечная недостаточность",
    "Язва желудка",
    "Синусит"
];

document.addEventListener("DOMContentLoaded", function(){

    loadHistory();

    const analyzeBtn = document.getElementById("analyze-btn");

    analyzeBtn.addEventListener("click", function(){

        const name = document.getElementById("name").value;
        const symptoms = document.getElementById("symptoms").value;

        if(name === "" || symptoms === ""){
            alert("Введите данные");
            return;
        }

        const randomDisease =
            diseases[Math.floor(Math.random() * diseases.length)];

        const result =
        `
        <div class="alert alert-danger">
            <h4>Результат AI анализа</h4>

            <p><b>Пациент:</b> ${name}</p>

            <p><b>Симптомы:</b> ${symptoms}</p>

            <p><b>Возможная болезнь:</b> ${randomDisease}</p>

            <p><b>Рекомендация:</b>
            Срочно обратитесь к врачу.</p>
        </div>
        `;

        document.getElementById("result").innerHTML = result;

        savePatient(name, symptoms, randomDisease);

        patientsCount++;
        analysisCount++;

        updateStats();
    });

    const consultBtn =
        document.getElementById("consult-btn");

    consultBtn.addEventListener("click", function(){

        const phone =
            document.getElementById("consult-phone").value;

        const email =
            document.getElementById("consult-email").value;

        const text =
            document.getElementById("consult-text").value;

        if(phone === "" || email === "" || text === ""){
            alert("Заполните поля");
            return;
        }

        document.getElementById(
            "consult-result"
        ).style.display = "block";

    });

    const doctorBtn =
        document.getElementById("call-doctor");

    doctorBtn.addEventListener("click", function(){

        const address =
            document.getElementById("address").value;

        if(address === ""){
            alert("Введите адрес");
            return;
        }

        callsCount++;

        updateStats();

        const status =
            document.getElementById("doctor-status");

        status.style.display = "block";

        document.getElementById(
            "status-text"
        ).innerHTML =
        "🚑 Врач выехал";

        document.getElementById(
            "eta"
        ).innerHTML =
        "⏳ Прибытие: 5 минут";

        document.getElementById(
            "gps"
        ).innerHTML =
        "📍 GPS: Врач движется к пациенту";

        let width = 0;

        const interval = setInterval(function(){

            width += 10;

            document.getElementById(
                "progress-bar"
            ).style.width = width + "%";

            if(width >= 100){

                clearInterval(interval);

                document.getElementById(
                    "status-text"
                ).innerHTML =
                "✅ Врач прибыл";
            }

        }, 500);

    });

});

function savePatient(name, symptoms, disease){

    let history =
        JSON.parse(localStorage.getItem("patients")) || [];

    history.push({
        name: name,
        symptoms: symptoms,
        disease: disease
    });

    localStorage.setItem(
        "patients",
        JSON.stringify(history)
    );

    loadHistory();
}

function loadHistory(){

    let history =
        JSON.parse(localStorage.getItem("patients")) || [];

    const historyDiv =
        document.getElementById("history");

    historyDiv.innerHTML = "";

    history.forEach(function(patient){

        historyDiv.innerHTML +=
        `
        <div class="history-item">

            <h5>${patient.name}</h5>

            <p>
            Симптомы:
            ${patient.symptoms}
            </p>

            <p>
            Болезнь:
            ${patient.disease}
            </p>

        </div>
        `;
    });

    patientsCount = history.length;

    updateStats();
}

function updateStats(){

    document.getElementById(
        "patients-count"
    ).innerText = patientsCount;

    document.getElementById(
        "analysis-count"
    ).innerText = analysisCount;

    document.getElementById(
        "calls-count"
    ).innerText = callsCount;
}