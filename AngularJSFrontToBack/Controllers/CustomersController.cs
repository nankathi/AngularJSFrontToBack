using AngularF2B.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularF2B.Controllers
{
    public class CustomersController : ApiController
    {
        public masterEntities _customerContext = new masterEntities();
        // GET: api/Customers
        public IEnumerable<Customer> Get()
        {
            return _customerContext.Customers.AsEnumerable();
            //return new string[] { "value1", "value2" };
        }

        // GET: api/Customers/5
        public Customer Get(int customerId)
        {
            return _customerContext.Customers.Where(w => w.CustomerID == customerId).FirstOrDefault();
        }

        // POST: api/Customers
        public void Post([FromBody]Customer customer)
        {
            if (ModelState.IsValid)
            {
                _customerContext.Customers.Add(customer);
                _customerContext.SaveChanges();
            }
        }

        // PUT: api/Customers/5
        public void Put([FromUri]int id, [FromBody]Customer customer)
        {
            if (ModelState.IsValid)
            {
                _customerContext.Entry(customer).State = System.Data.Entity.EntityState.Modified;
                _customerContext.SaveChanges();
            }
        }

        // DELETE: api/Customers/5
        public void Delete(int customerId)
        {
            Customer cust = _customerContext.Customers.Find(customerId);
            //if (cust == null)
            //{
            //    return Request.CreateResponse(HttpStatusCode.NotFound);
            //}
            _customerContext.Customers.Remove(cust);
            _customerContext.SaveChanges();
        }
    }
}
