def analyze_symptoms(symptoms):

    text = symptoms.lower()

    diseases = [

        {
            "name":"Простуда",
            "keywords":["кашель","насморк","горло"],
            "doctor":"Терапевт"
        },

        {
            "name":"Грипп",
            "keywords":["температура","озноб"],
            "doctor":"Терапевт"
        },

        {
            "name":"Ковид-19",
            "keywords":["одышка","вкус","запах"],
            "doctor":"Терапевт"
        },

        {
            "name":"Мигрень",
            "keywords":["голова","тошнота"],
            "doctor":"Невролог"
        },

        {
            "name":"Пневмония",
            "keywords":["одышка","грудь"],
            "doctor":"Пульмонолог"
        },

    ]

    for disease in diseases:

        for keyword in disease["keywords"]:

            if keyword in text:

                return disease["name"], disease["doctor"]

    return "Не определено", "Терапевт"