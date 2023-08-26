from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
    email = forms.EmailField(label="", widget=forms.TextInput(attrs={"class": "form-control", "placeholder":"Email address"}))
    first_name = forms.CharField(label="", max_length=25, widget=forms.TextInput(attrs={"class": "form-control", "placeholder":"First name"}))
    last_name = forms.CharField(label="", max_length=25, widget=forms.TextInput(attrs={"class": "form-control", "placeholder":"Last name"}))

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email", "password1", "password2")

    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)

        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['username'].widget.attrs['placeholder'] = 'Username'
        self.fields['username'].label = ''
        self.fields['username'].help_text = '<span class="form-text text-muted"><small>Required. Enter a unique username. Letters, digits and @/./+/-/_ only.</small></span>'

        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['password1'].widget.attrs['placeholder'] = 'Enter your password'
        self.fields['password1'].widget.label = ''
        self.fields['password1'].help_text = '<span class="form-text text-muted"><small>Enter a strong password.</small></span>'

        self.fields['password2'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].widget.attrs['placeholder'] = 'Re-enter your password'
        self.fields['password2'].widget.label = ''
        self.fields['password2'].help_text = '<span class="form-text text-muted"><small>Re-enter your password for confirmation.</small></span>'
