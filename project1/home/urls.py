from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('about',views.about),
    path('contact',views.contact),
    path('insert',views.create),
    path('add',views.add),
    path('update/<id>',views.update),
    path('delete/<id>',views.delete_data),
    path('edit/<id>',views.editdata),
]