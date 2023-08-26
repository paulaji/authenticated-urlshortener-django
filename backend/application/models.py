from django.db import models

# import the user object
from django.contrib.auth.models import User

# incase note model is to be made
# # Create your models here.
# # note model
# class Note(models.Model):
#     # our user will be the ForeignKey used to access notes data/table
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
#     body = models.TextField(default="sample note")
