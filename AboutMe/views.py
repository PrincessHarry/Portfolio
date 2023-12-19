from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from .models import *
from .forms import *

def home(request):
    projects = Project.objects.all()

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Get form data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            # Your email address (change this to your actual email)
            to_email = 'harryprincess419@gmail.com'

            # Send email
            send_mail(subject, f'From: {name} <{email}>\n\n{message}', email, [to_email])

            # Redirect after successful submission
            return HttpResponseRedirect('/')
    else:
        form = ContactForm()

        context = {
        'projects': projects,
        'form': form,
       
    }
  
    return  render(request, "index.html", context)

