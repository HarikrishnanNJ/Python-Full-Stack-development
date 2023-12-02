from django.db import models

# Create your models here.
class student_details(models.Model):
    Name=models.CharField(max_length=100)
    Roll_no=models.CharField(max_length=12)
    Age=models.CharField(max_length=12)
    Place=models.CharField(max_length=100)
class contact_details(models.Model):
    Address=models.CharField(max_length=100)
    Phone=models.CharField(max_length=12)
    Email=models.CharField(max_length=100)
