""" from django.urls import path
from .views import UsersView

urlpatterns = [
    path("users/", UsersView.as_view(), name="users"),
    # path("user/<int:pk>/", UserView.as_view(), name="user"),
    # path("delete/<int:pk>/", UserView.as_view())
]
 """

""" from rest_framework import routers
from .views import UsersView

router = routers.DefaultRouter()
router.register('users', UsersView, 'users')

urlpatterns = router.urls
 """


from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from users import views
urlpatterns = [
    path("users/", views.UsersView.as_view()),
    path("delete/<int:pk>/", views.UsersDetail.as_view()),
    path("update/<int:pk>/", views.UsersDetail.as_view())
]
