from django.http import JsonResponse
from rest_framework.response import Response
# importing an api view decorator
from rest_framework.decorators import api_view

# function to return all the routes in the application using rest_framework Response and api_view decorator
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)