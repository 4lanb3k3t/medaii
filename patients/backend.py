diseases = [

    {
        "name": "Простуда",
        "keywords": ["кашель", "насморк"],
        "doctor": "Терапевт"
    },

    {
        "name": "Грипп",
        "keywords": ["температура", "озноб"],
        "doctor": "Терапевт"
    }

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