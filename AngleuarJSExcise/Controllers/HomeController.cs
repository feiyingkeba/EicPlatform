using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngleuarJSExcise.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Directive()
        {
            return View();
        }


        public ActionResult One()
        {
            return View();
        }
        public ActionResult Two()
        {
            return View();
        }
        public JsonResult GetProducts()
        {
            List<ProductModel> datas = new List<ProductModel>() {
              new ProductModel (){ name="apple", price =3000,description ="the best phone in the world"},
              new ProductModel (){ name="xiaomi", price =2100,description ="the solded most in china"},
              new ProductModel (){ name="huawei", price =1999,description ="better and more better"},
            };
            return Json(datas, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GoToThree()
        {
            return View();
        }

    }

    public class ProductModel
    {
        public string name { get; set; }
        public double price { get; set; }
        public string description { get; set; }
    }
}
