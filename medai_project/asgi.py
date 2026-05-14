"""
ASGI config for medai_project project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/
"""

import os
import sys
import django # type: ignore

from django.core.asgi import get_asgi_application # type: ignore

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'medai_project.settings')

django.setup()

application = get_asgi_application()
