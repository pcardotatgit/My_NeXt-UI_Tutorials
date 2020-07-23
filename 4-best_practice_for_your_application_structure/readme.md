# Application Structure Best Practice #

This chapter is just dedicate to some best practice for your appliation structure.

You probably have seen that all of our Next-UI application have the **index.html** file as starting point.

And this **index.html** don't have a lot oh html block within it, but almost only javascript files.

Basically the Next-UI application is a full javascript application. We could have load only one javascript file with everything into it. 
But we load several separate javascript files.

First, create a "**next-ui**" subfolder which contain all Next-UI Libraries. **index.html** must load these libraries where they are.

It is good to separate all group of elements of your application
The good practice will be to create at least 3 subfolders :

- **app**
- **css**
- **data**

**index.html** load all needed javascript files and might create as well the **html div** into which display the graph ( if not created into application javascript files )

The **[ app ]** folder contains all the application javascript files.

-**main.js** start the application
-**topology.js** contains all the rules used to display objects in diagram

The **[ css ]** will contain html css file needed for the application. But let's keep in mind that we can load some well know libraries like **bootstrap**

The **[ data ]** folder contains the **topology.js** file which is the data file into which is described the whole diagram.

The interesting result of this is that you can work only on the **data/tolology.js** file for creating your diagram, without having to understand what is in the application javascript files.

This current example can be used as your template.

Thanks to this modele you cans display your diagram