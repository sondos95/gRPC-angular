// package: 
// file: products.proto

var products_pb = require("./products_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Products = (function () {
  function Products() {}
  Products.serviceName = "Products";
  return Products;
}());

Products.CreateProduct = {
  methodName: "CreateProduct",
  service: Products,
  requestStream: false,
  responseStream: false,
  requestType: products_pb.CreateProductRequest,
  responseType: products_pb.response
};

Products.EditProduct = {
  methodName: "EditProduct",
  service: Products,
  requestStream: false,
  responseStream: false,
  requestType: products_pb.EditProductRequest,
  responseType: products_pb.response
};

exports.Products = Products;

function ProductsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProductsClient.prototype.createProduct = function createProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Products.CreateProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductsClient.prototype.editProduct = function editProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Products.EditProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProductsClient = ProductsClient;

