from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from happii.water.models import Intake


# Create your views here.


class WaterIntake(APIView):
    @staticmethod
    def get(request):
        start_date = request.query_params.get('start_date')
        end_date = request.query_params.get('end_date')

        response = Intake.objects.filter(
            date__range=[start_date, end_date], user=request.user).values('user_id', 'date', 'intake').order_by('user_id', 'date')
        return Response(response)

    @staticmethod
    def put(request):
        date = request.query_params.get('date')
        intake = request.data.get('intake')

        if date is None or intake is None:
            return Response("Please provide date and intake.", status=status.HTTP_400_BAD_REQUEST)

        (obj, created) = Intake.objects.update_or_create(
            user=request.user, date=date,
            defaults={'intake': intake, })
        return Response({'intake': obj.intake, 'date': obj.date}, status=status.HTTP_200_OK)
