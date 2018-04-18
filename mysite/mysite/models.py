#path: jSchool/jSchool
from django.db import models

class Theater(models.Model):
    name = models.CharField(unique=False, max_length=100)
    location = models.CharField(unique=False, max_length=100)
    geo = models.IntegerField(unique=False)

class Showtime(models.Model):
    show_time = models.TimeField()
    show_date = models.DateField()

class Movie(models.model):
    title = models.CharField(unique=False, max_length=100)
    rating = models.CharField(unique=False, max_length=100)
    genres = models.CharField(unique=False, max_length=100)
