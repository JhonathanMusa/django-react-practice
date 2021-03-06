from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Users
from .serializers import *


class UsersView(APIView):

    serializer_class = UsersSerializer

    def get(self, request):
        data = Users.objects.all()
        serializer = UsersSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


class UserView(APIView):

    def get(self, request, pk):
        data = Users.objects.filter(pk=pk)
        serializer = UsersSerializer(data, many=True)
        return Response(serializer.data)

    def delete(self, request, pk):
        data = Users.objects.filter(pk=pk)
        data.delete()
        return Response("Commen removed successfully")
