from django.db import models


class Bapz(models.Model):
    productname  = models.CharField(max_length=120)
    category = models.TextField()
    src = models.TextField()
    price = models.TextField()
    color = models.TextField()
    size = models.TextField()

    def _str_(self):
        return self.title