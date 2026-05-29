diseases = [

    {
        "name": "Простуда",
        "keywords": ["кашель", "насморк", "чихание", "горло"],
        "doctor": "Терапевт"
    },

    {
        "name": "Грипп",
        "keywords": ["температура", "озноб", "ломота", "слабость"],
        "doctor": "Терапевт"
    },

    {
        "name": "Ковид-19",
        "keywords": ["температура", "кашель", "запах", "вкус", "одышка"],
        "doctor": "Терапевт"
    },

    {
        "name": "Пневмония",
        "keywords": ["кашель", "боль в груди", "одышка"],
        "doctor": "Пульмонолог"
    },

    {
        "name": "Астма",
        "keywords": ["удушье", "хрипы", "одышка"],
        "doctor": "Пульмонолог"
    },

    {
        "name": "Мигрень",
        "keywords": ["голова", "тошнота", "свет"],
        "doctor": "Невролог"
    },

    {
        "name": "Инфаркт",
        "keywords": ["сердце", "давит", "боль в груди"],
        "doctor": "Кардиолог"
    },

    {
        "name": "Гипертония",
        "keywords": ["давление", "голова"],
        "doctor": "Кардиолог"
    },

    {
        "name": "Гастрит",
        "keywords": ["желудок", "изжога", "живот"],
        "doctor": "Гастроэнтеролог"
    },

    {
        "name": "Язва",
        "keywords": ["рвота", "живот", "боль"],
        "doctor": "Гастроэнтеролог"
    },

    {
        "name": "Аппендицит",
        "keywords": ["правый бок", "тошнота"],
        "doctor": "Хирург"
    },

    {
        "name": "Диабет",
        "keywords": ["жажда", "сахар", "слабость"],
        "doctor": "Эндокринолог"
    },

    {
        "name": "Аллергия",
        "keywords": ["сыпь", "зуд", "слезы"],
        "doctor": "Аллерголог"
    },

    {
        "name": "Депрессия",
        "keywords": ["апатия", "грусть", "усталость"],
        "doctor": "Психолог"
    },

    {
        "name": "Бессонница",
        "keywords": ["не сплю", "сон"],
        "doctor": "Невролог"
    },

]

def analyze_symptoms(symptoms):

    text = symptoms.lower()

    for disease in diseases:

        for keyword in disease["keywords"]:

            if keyword in text:

                return {
                    "disease": disease["name"],
                    "doctor": disease["doctor"]
                }

    return {
        "disease": "Не определено",
        "doctor": "Терапевт"
    }