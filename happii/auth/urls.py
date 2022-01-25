from django.urls import path

from . import views

urlpatterns = [
    path("signup/", views.SignUpView.as_view(), name="signup"),
    path("signin/", views.SignInView.as_view(), name="signin"),
    path("user/", views.UserView.as_view(), name="user"),
    path("signout/", views.SignOutView.as_view(), name="signout"),
]
