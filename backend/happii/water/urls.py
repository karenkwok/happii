from django.urls import path

from . import views

urlpatterns = [
    path("intake/", views.WaterIntake.as_view(), name="intake"),
    path("intake_trends/", views.WaterIntakeTrends.as_view(), name="intake_trends"),
]
