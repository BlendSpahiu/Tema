In order to run this CRUD application clone the project with the following github link: git@github.com:BlendSpahiu/Tema.git

The database used in the project is local, so in order for all the data that's in it to appear you have to either download the database i used or just manually add them.

To import the database file, use MongoDBCompass. Create a new collection and a import the JSON file.

Attached will also be the photos of the products which are stored locally, and in order to access them, go to this file and this line of code: 
C:\Users\(Your User)\(your path)\Tema\BE\sec\main\java\com\bezkoder\spring\data\mongodb\service\imageService.java - and modifiy this line of code: 

	public final String storageDirectoryPath = "C\\Users\\(your user)\\(file path)\\photos

To log in as a moderator, log in with Username: moderator, Password: 12345678


