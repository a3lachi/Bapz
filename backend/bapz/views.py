from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BapzSerializer
from .models import Bapz

# Create your views here.

class BapzView(viewsets.ModelViewSet):
    serializer_class = BapzSerializer
    queryset = Bapz.objects.all()