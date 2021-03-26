from django.db import models

# Create your models here.


class Users(models.Model):
    """ name = models.CharField("Name", max_length=200)
    email = models.EmailField()
    text = models.TextField()
    createAt = models.DateField("Registration Date", auto_now_add=True) """

    task = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
