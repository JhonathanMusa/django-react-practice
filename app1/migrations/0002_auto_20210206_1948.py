# Generated by Django 3.1.4 on 2021-02-07 00:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='authro',
            new_name='author',
        ),
    ]
