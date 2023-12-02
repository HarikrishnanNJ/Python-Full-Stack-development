from django.shortcuts import render,redirect
# from django.http import HttpResponse
from . models import student_details
from . models import contact_details

# Create your views here.
def index(request):
    return render(request,'info.html')

def about(request):
    
    student_table=student_details.objects.all()
    return render(request,'about.html',{'students':student_table})

def contact(request):
 
    contact_de=contact_details.objects.all()
    return render(request,'contact.html',{'contacts':contact_de})

def create(request):

    return render(request,'about.html')

def add(request):

    if request.method=="POST":
        Name=request.POST.get('name')
        Roll_no=request.POST.get('rollno')
        Age=request.POST.get('age')
        Place=request.POST.get('place')

        query=student_details(Name=Name,Roll_no=Roll_no,Age=Age,Place=Place)
        query.save()
    return redirect('/about')

def delete_data(request,id):
    dlt=student_details.objects.get(id=id)
    dlt.delete()
    return redirect('/about')

def update(request,id):
    data={
      "data":student_details.objects.get(id=id)
      }
    print(data)
    return render(request,"update.html",data)

def editdata(request,id):

    if request.method=="POST":
        Name=request.POST.get('name')
        Roll_no=request.POST.get('rollno')
        Age=request.POST.get('age')
        Place=request.POST.get('place')

        edit=student_details.objects.get(id=id)

        edit.Name=Name
        edit.Roll_no=Roll_no
        edit.Age=Age
        edit.Place=Place

        edit.save()
    return redirect('/about')

