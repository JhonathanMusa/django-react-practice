from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Users
from .serializers import *


""" @api_view(['GET', 'POST'])
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
 """


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
