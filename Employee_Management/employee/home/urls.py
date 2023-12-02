

from django.urls import path
from . import views
urlpatterns = [
   
    path('',views.home,name="home"),
    path('/about',views.about,name="about"),
    path('/services',views.services,name="services"),
    path('/ems',views.ems,name="home2"),
    path('addemp',views.addemp,name="add"),
     path('update/<id>',views.update,name="update"),
    path('delete/<id>',views.delete,name="delete"),
   
]
