from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # setting the path to urls.py in the newly created api folder inside application
    path('api/', include('application.api.urls'))
]
