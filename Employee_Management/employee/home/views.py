from django.shortcuts import render,redirect
from . models import emp


def home(request):
    return render(request,"home.html")

def about(request):
    return render(request,"about.html")

def services(request):
    return render(request,"services.html")

def ems(request):
    obj=emp.objects.all()
    return render(request,"emp/home.html",{"obj":obj})    
   
def addemp(request):
    if request.POST:
        name=request.POST.get("name")
        employee_id=request.POST.get("employee_id")
        phone=request.POST.get("phone")
        address=request.POST.get("address")
        is_working=request.POST.get("is_working")
        department=request.POST.get("department")
        is_working=is_working=='on'
        query=emp(name=name,employee_id=employee_id,phone=phone,address=address,is_working=is_working,department=department)
        query.save()
        return redirect("home2")
    return render(request,"emp/add_emp.html")

def delete(request,id):
    delete=emp.objects.get(id=id)
    delete.delete()
    return redirect('home2')

def update(request,id):
    update=emp.objects.get(id=id)
    if request.POST:
        
        name=request.POST.get("name")
        employee_id=request.POST.get("employee_id")
        phone=request.POST.get("phone")
        address=request.POST.get("address")
        is_working=request.POST.get("is_working")
        department=request.POST.get("department")

        is_working=is_working=='on'

        
        update.name=name
        update.employee_id=employee_id
        update.phone= phone
        update.address=address
        update.is_working=is_working
        update.department=department
        update.is_working=is_working
        update.save()
        return redirect('home2')
    return render(request,"emp/update_emp.html",{"update":update})    