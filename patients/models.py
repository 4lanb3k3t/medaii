from django.db import models

class Patient(models.Model):

    name = models.CharField(max_length=100)

    symptoms = models.TextField()

    disease = models.CharField(max_length=100)

    doctor = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name