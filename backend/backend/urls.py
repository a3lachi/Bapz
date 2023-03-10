from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from bapz import views

router = routers.DefaultRouter()
router.register(r'bapz', views.BapzView, 'bapz')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]