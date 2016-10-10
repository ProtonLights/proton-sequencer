// This is the interface with the CLI.
(function () {
    'use strict';

    angular.module('app')
        .service('sequenceService', SequenceService);

    function SequenceService() {
          // Structure of the Sequence Service Structure

          // Below is an implementation example I stole from https://github.com/jasimea/ElectronAngular

          return {
              getSequenceData: getSequenceData
          };

          function getSequenceData() {

            // Return a promise with the data
            return null;
          }

        // return {
        //     getCustomers: getCustomers,
        //     getById: getCustomerById,
        //     getByName: getCustomerByName,
        //     create: createCustomer,
        //     destroy: deleteCustomer,
        //     update: updateCustomer
        // };
        //
        // function getCustomers() {
        //     var deferred = $q.defer();
        //     var query = "SELECT * FROM customers";
        //     connection.query(query, function (err, rows) {
        //         if (err) deferred.reject(err);
        //         deferred.resolve(rows);
        //     });
        //     return deferred.promise;
        // }
        //
        // function getCustomerById(id) {
        //     var deferred = $q.defer();
        //     var query = "SELECT * FROM customers WHERE customer_id = ?";
        //     connection.query(query, [id], function (err, rows) {
        //         if (err) deferred.reject(err);
        //         deferred.resolve(rows);
        //     });
        //     return deferred.promise;
        // }
        //
        // function getCustomerByName(name) {
        //     var deferred = $q.defer();
        //     var query = "SELECT * FROM customers WHERE name LIKE  '" + name + "%'";
        //     connection.query(query, [name], function (err, rows) {
        //         console.log(err)
        //         if (err) deferred.reject(err);
        //
        //         deferred.resolve(rows);
        //     });
        //     return deferred.promise;
        // }
        //
        // function createCustomer(customer) {
        //     var deferred = $q.defer();
        //     var query = "INSERT INTO customers SET ?";
        //     connection.query(query, customer, function (err, res) {
        //         console.log(err)
        //         if (err) deferred.reject(err);
        //         console.log(res)
        //         deferred.resolve(res.insertId);
        //     });
        //     return deferred.promise;
        // }
        //
        // function deleteCustomer(id) {
        //     var deferred = $q.defer();
        //     var query = "DELETE FROM customers WHERE customer_id = ?";
        //     connection.query(query, [id], function (err, res) {
        //         if (err) deferred.reject(err);
        //         console.log(res);
        //         deferred.resolve(res.affectedRows);
        //     });
        //     return deferred.promise;
        // }
        //
        // function updateCustomer(customer) {
        //     var deferred = $q.defer();
        //     var query = "UPDATE customers SET name = ? WHERE customer_id = ?";
        //     connection.query(query, [customer.name, customer.customer_id], function (err, res) {
        //         if (err) deferred.reject(err);
        //         deferred.resolve(res);
        //     });
        //     return deferred.promise;
        // }
    }
})();
