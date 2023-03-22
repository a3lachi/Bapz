
import json
from django.http import HttpResponse , HttpResponseNotFound , JsonResponse
from django import forms
from django.shortcuts import render
from rest_framework import viewsets , generics
from .serializers import BapzSerializer
from .serializers import CustomerSerializer
from .models import Bapz
from .models import Customer
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class BapzView(generics.ListAPIView):
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


class BapzViewIds(generics.ListAPIView) :
    serializer_class = BapzSerializer
    def get_queryset(self) : 
        id = self.kwargs.get('ids')
        return Bapz.objects.filter(ids=id)



class CustomerForm(forms.Form):
    email = forms.EmailField()
    pwd = forms.CharField(widget=forms.Textarea)

@csrf_exempt 
def GetCustomer(request):
    serializer_class = CustomerSerializer
    if request.method == 'POST':
        try: 
            json_data = json.loads(request.body ) 
            if len(json_data)==2 :
                em = json_data['email']
                pd = json_data['pwd']
                print(em)
                print(pd)
                if len(Customer.objects.filter(email=em , pwd=pd))>0 :
                    return JsonResponse({'isUser':"yes"})
                else :
                    return JsonResponse({'isUser':"no"})  
            elif len(json_data)>2 :
                em = json_data['email']
                pd = json_data['pwd']
                if len(Customer.objects.filter(email=em))>0 :
                    return JsonResponse({'info':"exist"}) 
                else :
                    print("ADDING TO DB")
                    Customer.objects.create(email=em , pwd=pd )
                    return JsonResponse({'info':"new"})

        except :
            return JsonResponse({'info':"error"})  
    else :
        return JsonResponse({'info':"error"})  



# @csrf_exempt 
def UpdateCommands(request) :
    serializer_class = CustomerSerializer
    
    if request.method == 'POST':
        try: 
            json_data = json.loads(request.body ) 
            cmds =  json_data['cmds']
            print('HA L VIEW',cmds)
            return JsonResponse({'info':"mrboha"}) 
            

        except :
            return JsonResponse({'info':"error"}) 
