# this file was created after the urls.py was modified to include this file
from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name="register"),
]
