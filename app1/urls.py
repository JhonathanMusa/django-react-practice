from django.urls import path
# from .views import users
from .views import PostView
urlpatterns = [
    path("post", PostView.as_view())
]
