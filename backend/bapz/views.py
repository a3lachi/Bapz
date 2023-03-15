from django.shortcuts import render
from rest_framework import viewsets , generics
from .serializers import BapzSerializer
from .serializers import CustomerSerializer
from .models import Bapz
from .models import Customer
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
    
class PostUser(generics.ListAPIView) :
    serializer_class = CustomerSerializer

    queryset = Customer.objects.all()


class GetCustomer(generics.ListAPIView):
    serializer_class = CustomerSerializer
    def post_queryset(self,request):
        print(request)
        return Customer.objects.filter()