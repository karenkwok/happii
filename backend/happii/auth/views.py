from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.utils import IntegrityError
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.


class SignUpView(APIView):
    @staticmethod
    def post(request):
        username = request.data.get('username')
        password = request.data.get('password')
        if username is None or password is None:
            return Response('Please provide username and password.', status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create_user(username, password=password)
            # this will add both a session and csrf cookies
            login(request, user)
            return Response("User created successfully.", status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response("Username already taken.", status=status.HTTP_400_BAD_REQUEST)


class SignInView(APIView):
    @staticmethod
    def post(request):
        username = request.data.get('username')
        password = request.data.get('password')
        if username is None or password is None:
            return Response('Please provide username and password.', status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, password=password)
        if user is None:
            return Response('Invalid credentials.', status=status.HTTP_400_BAD_REQUEST)
        else:
            # this will add both a session and csrf cookies
            login(request, user)
            return Response('Successfully logged in.')


class SignOutView(APIView):
    @staticmethod
    def get(request):
        if not request.user.is_authenticated:
            return Response('You\'re not logged in.', status=status.HTTP_400_BAD_REQUEST)
        else:
            logout(request)
            return Response('Successfully logged out.')
