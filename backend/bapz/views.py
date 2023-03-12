from django.shortcuts import render
from rest_framework import viewsets , generics
from .serializers import BapzSerializer
from .models import Bapz
# Create your views here.

class BapzView(viewsets.ModelViewSet):
    serializer_class = BapzSerializer
    queryset = Bapz.objects.all()


class BapzCatView(generics.ListAPIView):
    serializer_class = BapzSerializer

    def get_queryset(self) : 
        cat = self.kwargs.get('category')
        return Bapz.objects.filter(category=cat)

class BapzProduct(generics.ListAPIView) :
    serializer_class = BapzSerializer

    def get_queryset(self):
        nam = self.kwargs.get('name')
        return Bapz.objects.filter(productname=nam)