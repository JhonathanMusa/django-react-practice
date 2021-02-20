from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Users
from .serializers import *


class UserView(APIView):

    serializer_class = UsersSerializer

    def get(self, request):
        detail = [{'name': detail.name, 'email': detail.email,
                   'text': detail.text, 'createAt': detail.createAt}
                  for detail in Users.objects.all()]
        return Response(detail)

    def post(self, request):

        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
