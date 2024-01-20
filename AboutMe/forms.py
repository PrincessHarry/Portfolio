# forms.py
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'class': 'placeholder','placeholder': 'Your Name'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'placeholder','placeholder': 'Your Email'}))
    subject = forms.CharField(max_length=200, widget=forms.TextInput(attrs={'class': 'placeholder','placeholder': 'Subject'}))
    message = forms.CharField(widget=forms.Textarea(attrs={'class': 'placeholder','placeholder': 'Your Message'}))
