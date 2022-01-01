# Generated by Django 3.2.10 on 2022-01-01 22:28

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('water', '0002_rename_dailywaterintake_intake'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='intake',
            unique_together={('date', 'user')},
        ),
    ]
