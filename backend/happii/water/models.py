from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Intake(models.Model):
    date = models.DateField()
    intake = models.DecimalField(max_digits=4, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['date', 'user']
