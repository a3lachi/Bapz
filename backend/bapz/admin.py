from django.contrib import admin
from .models import Bapz
from .models import Customer


class BapzAdmin(admin.ModelAdmin):
<<<<<<< HEAD
    list_display = ('productname', 'category','id','price', 'color','size')
=======
    list_display = ('productname', 'category','ids','src','price', 'color','size')
>>>>>>> cfad037e06fa48db7a161dae2e555dd2bf174c43


class CustomerAdmin(admin.ModelAdmin) :
    list_display = ('email','pwd','id','commands','jwt')

admin.site.register(Bapz, BapzAdmin)
admin.site.register(Customer, CustomerAdmin)



# root:pass