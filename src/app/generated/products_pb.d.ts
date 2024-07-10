// package: 
// file: products.proto

import * as jspb from "google-protobuf";

export class EditProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProductname(): string;
  setProductname(value: string): void;

  getProductdescription(): string;
  setProductdescription(value: string): void;

  getProductprice(): number;
  setProductprice(value: number): void;

  getProductstock(): number;
  setProductstock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditProductRequest): EditProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditProductRequest;
  static deserializeBinaryFromReader(message: EditProductRequest, reader: jspb.BinaryReader): EditProductRequest;
}

export namespace EditProductRequest {
  export type AsObject = {
    id: string,
    productname: string,
    productdescription: string,
    productprice: number,
    productstock: number,
  }
}

export class CreateProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProductname(): string;
  setProductname(value: string): void;

  getProductdescription(): string;
  setProductdescription(value: string): void;

  getProductprice(): number;
  setProductprice(value: number): void;

  getProductstock(): number;
  setProductstock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
  static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
  export type AsObject = {
    id: string,
    productname: string,
    productdescription: string,
    productprice: number,
    productstock: number,
  }
}

export class response extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): response.AsObject;
  static toObject(includeInstance: boolean, msg: response): response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): response;
  static deserializeBinaryFromReader(message: response, reader: jspb.BinaryReader): response;
}

export namespace response {
  export type AsObject = {
    id: string,
  }
}

