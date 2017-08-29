import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'app-skills',
    templateUrl:'./skills.component.html',
    styleUrls: [ './skills.component.css' ]
})

export class SkillsComponent implements OnInit {

    meImagePath: string;

    DOTNETSKILLS = [
        "C#",
        "Windows Communication Foundation",
        "Windows Presentation Foundation",
        "Windows Forms",
        "Windows Service",
        "Entity Framework",
        "ORM",
        "ADO.NET",
        "Unity Dependency Injection",
        "Visual Studio 2013/2015/2017"
    ];

    DATABASES = [ "MS SQL Server 2008/2012/2014/2016", "Oracle Database", "MySQL"]

    JAVASKILLS = [ "Java SE/EE", "Hibernate", "Struts 2 Framework"]

    WEBTECH = ["Angular 2+", "ASP.NET MVC 5", "ASP.NET Web Forms", "HTML5", "CSS3", "JavaScript"]

    MOBILEDEV = ["Android SDK - little experince", "Xamarin - build native applications for Windows Phone, Android and iOS"]

    OTHER = [
        "WixToolSet", 
        "NuGET Packages", 
        "Build Definitions", 
        "Octopus Deploy - Automatic deploy for .NET",
        "Dependency Injection",
        "NLog",
        "QUARTZ - automatic job executor"
    ]

    ngOnInit(){}
}