from django.urls import path
from .views import UsersView, UserView

urlpatterns = [
    path("", UsersView.as_view(), name="users"),
    path("user/<int:pk>/", UserView.as_view(), name="user"),
    path("delete/<int:pk>/", UserView.as_view())
]
