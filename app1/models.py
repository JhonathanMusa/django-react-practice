from django.db import models

# Create your models here.


class Post(models.Model):
    author = models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    text = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
