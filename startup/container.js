//Aqui lo que hacemos es configurar nuestro contenedor de inyeccion de dependencias

const { createContainer, asClass, asValue, asFunction} = require("awilix");


//Services
const { HomeService } = require("../services");

//Controllers
const { HomeController } = require("../controllers");
 
//Routes
const { HomeRoute } = require("../routes");

//Models
const { User, Idea, Comment } = require("../models");


//Awilix
const container = createContainer();
//Puede ser un solo registe  para la segmentacion hacemos varios
container
  .register({
    // Config: asValue(config),
    // Server: asClass(server).singleton(), //
    //Singleton: la misma instancia de esa clase o sea que seaa static, que no instanciemos nada
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    //El bind no se poque pero lo que hace es que el this este en el scope de HomeController y no de express de forma global
    HomeController: asClass(HomeController/* .bind(HomeController) */).singleton(),
  })
  .register({ 
    HomeRoute: asFunction(HomeRoute).singleton()
  })
  //Valor y que este es un objeto
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
  })
module.exports = container;