# Generated by Django 3.1.7 on 2021-03-08 00:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Name')),
                ('email', models.EmailField(max_length=254)),
                ('text', models.TextField()),
                ('createAt', models.DateField(auto_now_add=True, verbose_name='Registration Date')),
            ],
        ),
    ]
