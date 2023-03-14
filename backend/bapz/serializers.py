from rest_framework import serializers
from .models import Bapz

class BapzSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bapz
        fields = ('productname', 'category','src','price', 'color', 'size','ids')