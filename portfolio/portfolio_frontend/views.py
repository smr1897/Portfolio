from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages

def home(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        send_mail(
            name,
            email,
            message,
            ['sahanmadhawa97@gmail.com'],
            fail_silently=False
        )
        messages.success(request,'Your message has been deliverd successfully !')
        

        return render(request , 'portfolio_frontend/home.html',{'name':name})


    else:
        return render(request , 'portfolio_frontend/home.html')
