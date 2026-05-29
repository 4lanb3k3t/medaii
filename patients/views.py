from django.shortcuts import render, redirect

from .models import Patient

from .backend import analyze_symptoms


def home(request):

    result = None

    if request.method == "POST":

        name = request.POST.get("name")

        symptoms = request.POST.get("symptoms")

        result = analyze_symptoms(symptoms)

        Patient.objects.create(
            name=name,
            symptoms=symptoms,
            disease=result["disease"],
            doctor=result["doctor"]
        )

        return redirect("/")

    patients = Patient.objects.all().order_by("-id")

    return render(request, "patients/list.html", {
        "patients": patients,
        "result": result
    })