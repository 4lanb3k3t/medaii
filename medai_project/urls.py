from django.contrib import admin
from django.urls import path, include
from patients.views import home

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('patients/', include('patients.urls')),
]