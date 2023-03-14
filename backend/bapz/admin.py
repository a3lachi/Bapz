from django.contrib import admin
from .models import Bapz

class BapzAdmin(admin.ModelAdmin):
    list_display = ('productname', 'category','src','price', 'color','size','ids')


admin.site.register(Bapz, BapzAdmin)



# root:pass