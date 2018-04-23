# admin.py so we can see our data in the admin:
from django.contrib import admin
from .models import Movie
from .models import Theater
from .models import Showtime

admin.site.register(Movie)
admin.site.register(Theater)
admin.site.register(Showtime)
