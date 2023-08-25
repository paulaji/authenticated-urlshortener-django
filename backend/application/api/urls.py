from django.urls import path
from . import views

# built-in authentication views of simplejwt
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # in the root url, implement the getRoutes function
    path('', views.getRoutes),
    # urls to access the built-in views of simplejwt
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]