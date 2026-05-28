from django.shortcuts import render
from .models import Patient
from .backend import analyze_symptoms


def home(request):

    result = None

    if request.method == "POST":

        name = request.POST.get("name")

        symptoms = request.POST.get("symptoms")

        disease, doctor = analyze_symptoms(symptoms)

        Patient.objects.create(
            name=name,
            symptoms=symptoms,
            disease=disease,
            doctor=doctor
        )

        result = {
            "disease": disease,
            "doctor": doctor
        }

    patients = Patient.objects.all().order_by("-id")

    return render(request, "patients/list.html", {
        "result": result,
        "patients": patients
    })