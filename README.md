# JS Invalidate Path and RTE

In AEM 6.1 & 6.2 RTE, link plugin and path always starts with /content. As soon as author starts typing / it automatically suffixed with content.

Some environments have requirement to have both aem and non-aem links on the same domain. 

There is a class js-coral-pathbrowser-input which does validation on rte and path browsers. If this class is removed when dialog is loaded, authors can enter

relative urls in path browser and rte link dialog.

## Modules

The main parts of the template are:

* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish
    


## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
