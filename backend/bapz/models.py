from django.db import models


class Bapz(models.Model):
    productname  = models.CharField(max_length=120)
    category = models.TextField()
    price = models.TextField()
    color = models.TextField()
    size = models.TextField()
    id  = models.IntegerField(primary_key=True)

    def _str_(self):
        return self.title
    

class Customer(models.Model) :
    email = models.TextField()
    pwd = models.TextField()
    ids = models.IntegerField()
    commands = models.TextField()
    jwt = models.TextField()

    def _str_(self):
        return self.title
