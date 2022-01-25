import datetime

from django.db.models import Q
from happii.water.models import Intake
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.


class WaterIntakeTrends(APIView):
    @staticmethod
    def get(request):
        start_date = request.query_params.get("start_date")
        end_date = request.query_params.get("end_date")

        response = (
            Intake.objects.filter(
                date__range=[start_date, end_date], user_id=request.user
            )
            .values()
            .order_by("date")
        )
        return Response(response)


class WaterIntake(APIView):
    @staticmethod
    def get(request):
        date = request.query_params.get("date")

        try:
            response = Intake.objects.get(date=date, user=request.user).intake
            return Response(response)
        except Intake.DoesNotExist:
            return Response(0)

    @staticmethod
    def put(request):
        date = request.query_params.get("date")
        intake = request.data.get("intake")

        if date is None or intake is None:
            return Response(
                "Please provide date and intake.", status=status.HTTP_400_BAD_REQUEST
            )

        (obj, created) = Intake.objects.update_or_create(
            user=request.user,
            date=date,
            defaults={
                "intake": intake,
            },
        )
        return Response(
            {"intake": obj.intake, "date": obj.date}, status=status.HTTP_200_OK
        )


class WaterStreak(APIView):
    @staticmethod
    def get(request):
        latest_date_of_broken_streak = Intake.objects.filter(
            user=request.user, intake__lt=8
        ).latest("date")
        today = datetime.date.today()
        delta = today - latest_date_of_broken_streak.date
        return Response(delta.days)


class WaterGoal(APIView):
    @staticmethod
    def get(request):
        date_period = request.query_params.get("date_period")

        filter = Q(user=request.user, intake__gte=8)

        if date_period is None:
            return Response(
                "Please provide a date period", status=status.HTTP_400_BAD_REQUEST
            )
        elif date_period == "weekly":
            now = datetime.datetime.now()
            # start of the week
            monday = now - datetime.timedelta(days=now.weekday())
            # end of the week
            sunday = monday + datetime.timedelta(days=6)

            goals_completed = Intake.objects.filter(
                filter,
                date__range=[monday, sunday],
            ).count()
            return Response(goals_completed)
        elif date_period == "monthly":
            # get the current month
            month = datetime.date.today().month
            goals_completed = Intake.objects.filter(filter, date__month=month).count()
            return Response(goals_completed)
        else:
            return Response(
                "Provided date period is invalid, must be either weekly or monthly",
                status=status.HTTP_400_BAD_REQUEST,
            )
