
let _homeService = null;
 
//No usa this xq no hace instancia de esta clase, es mas que nda como un static sus propiedades y metodos
class HomeController {
  constructor({HomeService}) {
    _homeService = HomeService
  } 
  index() {
    return (req, res) => {
      return res.send(_homeService.index())
    }
  }
}

module.exports = HomeController;