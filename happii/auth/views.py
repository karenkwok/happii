from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.utils import IntegrityError
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.


class SignUpView(APIView):
    permission_classes = []

    @staticmethod
    def post(request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")
        if username is None or password is None:
            return Response(
                "Please provide username, password, and email.",
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            user = User.objects.create_user(username, password=password, email=email)
            # this will add both a session and csrf cookies
            login(request, user)
            return Response({"username": user.username}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response(
                "Username already taken.", status=status.HTTP_400_BAD_REQUEST
            )


class SignInView(APIView):
    permission_classes = []

    @staticmethod
    def post(request):
        username = request.data.get("username")
        password = request.data.get("password")
        if username is None or password is None:
            return Response(
                "Please provide username and password.",
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = authenticate(username=username, password=password)
        if user is None:
            return Response("Invalid credentials.", status=status.HTTP_400_BAD_REQUEST)
        else:
            # this will add both a session and csrf cookies
            login(request, user)
            return Response({"username": user.username}, status=status.HTTP_201_CREATED)


class UserView(APIView):
    permission_classes = []

    @staticmethod
    def get(request):
        if request.user.is_authenticated:
            return Response({"username": request.user.username})
        else:
            return Response("You're not logged in.", status=status.HTTP_400_BAD_REQUEST)


class SignOutView(APIView):
    permission_classes = []

    @staticmethod
    def get(request):
        if not request.user.is_authenticated:
            return Response("You're not logged in.", status=status.HTTP_400_BAD_REQUEST)
        else:
            logout(request)
            return Response("Successfully logged out.")
