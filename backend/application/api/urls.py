from django.urls import path
from . import views

urlpatterns = [
    # in the root url, implement the getRoutes function
    path('', views.getRoutes)
]