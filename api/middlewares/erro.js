class Errors {
    static erro404(req,res,next){
        res.status(404).send("Pagina não encontrada");
        next();
    }
static capturaErro = (err, req, res, next) => {
    if (!err.status) {
      err.status = 500;
    }
    res.status(err.status).send(err.message);
  }
  }
module.exports = Errors;