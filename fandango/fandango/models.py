#path: jSchool/jSchool
from django.db import models

class Theater(models.Model):
    name = models.CharField(unique=False, max_length=100)
    location = models.CharField(unique=False, max_length=100)
    geo = models.IntegerField(unique=False)

class Showtime(models.Model):
    show_time = models.TimeField()
    show_date = models.DateField()

class Movie(models.Model):
    title = models.CharField(unique=False, max_length=100)
    rating = models.CharField(unique=False, max_length=100)



# docker run -v "$PWD:/opt/project" -p 8000:8000 -it steventking/django-starter-sqlite ./env/bin/python3 fandango/manage.py runserver 0.0.0.0:8000
#
# docker run -v "$PWD:/opt/project" -p 8000:8000 -it steventking/django-starter-sqlite ./env/bin/python3 fandango/manage.py migrate --run-syncdb
#
# docker run -v "$PWD:/opt/project" -p 8000:8000 -it steventking/django-starter-sqlite ./env/bin/python3 fandango/manage.py createsuperuser
