from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Users
from .serializers import *


@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        data = Users.objects.all()

        serialiser = UsersSerializer(
            data, context={'request': request}, many=True
        )

        return Response(serialiser.data)

    elif request.method == 'POST':
        serialiser = UsersSerializer(data=request.data)
        if serialiser.is_valid():
            serialiser.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)
