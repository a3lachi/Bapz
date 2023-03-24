from django.contrib import admin
from .models import Bapz
from .models import Customer


class BapzAdmin(admin.ModelAdmin):
    list_display = ('productname', 'category','id','price', 'color','size')


class CustomerAdmin(admin.ModelAdmin) :
    list_display = ('email','pwd','id','commands','jwt')

admin.site.register(Bapz, BapzAdmin)
admin.site.register(Customer, CustomerAdmin)



# root:pass