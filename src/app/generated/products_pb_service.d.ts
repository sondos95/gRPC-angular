// package: 
// file: products.proto

import * as products_pb from "./products_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProductsCreateProduct = {
  readonly methodName: string;
  readonly service: typeof Products;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof products_pb.CreateProductRequest;
  readonly responseType: typeof products_pb.response;
};

type ProductsEditProduct = {
  readonly methodName: string;
  readonly service: typeof Products;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof products_pb.EditProductRequest;
  readonly responseType: typeof products_pb.response;
};

export class Products {
  static readonly serviceName: string;
  static readonly CreateProduct: ProductsCreateProduct;
  static readonly EditProduct: ProductsEditProduct;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ProductsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  
  createProduct(
    requestMessage: products_pb.CreateProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: products_pb.response|null) => void
  ): UnaryResponse;
  createProduct(
    requestMessage: products_pb.CreateProductRequest,
    callback: (error: ServiceError|null, responseMessage: products_pb.response|null) => void
  ): UnaryResponse;
  editProduct(
    requestMessage: products_pb.EditProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: products_pb.response|null) => void
  ): UnaryResponse;
  editProduct(
    requestMessage: products_pb.EditProductRequest,
    callback: (error: ServiceError|null, responseMessage: products_pb.response|null) => void
  ): UnaryResponse;
}

