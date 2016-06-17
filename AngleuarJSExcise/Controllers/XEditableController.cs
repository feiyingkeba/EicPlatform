using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngleuarJSExcise.Controllers
{
    public class XEditableController : Controller
    {
        //
        // GET: /XEditable/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult LoadGroups(int name)
        {
            List<Groups> groups = new List<Groups>() {
               new Groups (){ id="1", text="yanglei"},
               new Groups (){ id="2", text="zhangwenming"},
               new Groups (){ id="3", text="wanxiaoqiao"},
               new Groups (){ id="4", text="sunxiaohua"},
            };
            return Json(groups, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ModalView()
        {
            return View();
        }

    }

    public class Groups
    {
        public string id { get; set; }
        public string text { get; set; }
    }
}
