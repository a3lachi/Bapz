from django.contrib import admin
from .models import Bapz

class BapzAdmin(admin.ModelAdmin):
    list_display = ('productname', 'price', 'color','size')


admin.site.register(Bapz, BapzAdmin)



# root:pass