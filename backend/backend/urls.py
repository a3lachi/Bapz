from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from bapz import views

router = routers.DefaultRouter()
router.register(r'bapz', views.BapzView, 'bapz')

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/bapz', views.BapzView.as_view({'get': 'list'})),
    path('api/bapz/<str:category>/', views.BapzCatView.as_view() ),
    path('api/bapz/<str:category>/<str:name>', views.BapzProduct.as_view() ),
    # path('api/customer', views.PostUser.as_view() ),
    path('api/customer', views.GetCustomer),
]