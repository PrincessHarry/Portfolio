from django.db import models

# Create your models here.
class Project(models.Model):
 image = models.ImageField(upload_to='project_images/', blank=True)
 title = models.CharField(max_length=300, default='')
 description = models.TextField()
 technologies = models.CharField(max_length=200)
 demo_url = models.URLField(blank=True, null=True)
 def __str__(self):
        return self.title

 