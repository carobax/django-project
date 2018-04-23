"""fandango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('movies/', views.list_movies, name='movies-list'),
    path('theaters/', views.list_theaters, name='theaters-list'),
    path('movies/<int:movie_id>/', views.movie_detail, name="movie-details"),
    path('admin/', admin.site.urls),
]

# docker run -v $PWD:/opt/project -p 8000:8000 -it steventking/django-starter-sqlite ./env/bin/python3 mysite/manage.py runserver 0.0.0.0:8000
# docker run -v "$PWD:/opt/project" -it steventking/django-starter-sqlite ./env/bin/django-admin startproject movies
# docker run -v "$PWD:/opt/project" -p 8000:8000 -it steventking/django-starter-sqlite ./env/bin/python3 fandango/manage.py load_movies fandango/fandango-chapelhill.json
