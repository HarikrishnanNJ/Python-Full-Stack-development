from django.db import models

class emp(models.Model):
    DEPARTMENTS_CHOICES = [
        ('CS', 'Computer Science'),
        ('EE', 'Electrical Engineering'),
        ('ME', 'Mechanical Engineering'),
        
    ]

    name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.TextField(blank=True)
    is_working = models.BooleanField(default=True)
    department = models.CharField(
        max_length=2,
        choices=DEPARTMENTS_CHOICES,  
    )
