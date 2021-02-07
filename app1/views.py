from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import PostSerializer
from .models import Post

# Create your views here.
""" def users(request):
    return HttpResponse("Hello World") """


class PostView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
