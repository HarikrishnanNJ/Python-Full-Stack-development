from django.contrib import admin
from home.models import student_details
from home.models import contact_details

# Register your models here.
admin.site.register(student_details)
admin.site.register(contact_details)
