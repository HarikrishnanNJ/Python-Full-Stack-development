# Generated by Django 4.2.7 on 2023-11-15 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_contact_details_phone_student_details_age_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student_details',
            name='Roll_no',
            field=models.IntegerField(default=0),
        ),
    ]