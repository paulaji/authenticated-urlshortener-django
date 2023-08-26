# Create your views here.
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from .forms import SignUpForm

# register user view
def register_user(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()  # Save the user
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            messages.success(request, "Registration successful! You may go back.")
            return redirect('http://localhost:3000/login')
    else:
        form = SignUpForm()
    
    # Always render the template with the form
    return render(request, 'register.html', {'form': form})
