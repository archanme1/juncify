
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contractor
 * 
 */
export type Contractor = $Result.DefaultSelection<Prisma.$ContractorPayload>
/**
 * Model Manager
 * 
 */
export type Manager = $Result.DefaultSelection<Prisma.$ManagerPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Highlight: {
  LicensedProfessional: 'LicensedProfessional',
  EmergencySupport: 'EmergencySupport',
  FreeConsultation: 'FreeConsultation',
  QuickResponse: 'QuickResponse',
  QualityGuarantee: 'QualityGuarantee',
  FlexibleHours: 'FlexibleHours',
  RemoteSupportAvailable: 'RemoteSupportAvailable',
  FreeEstimates: 'FreeEstimates',
  SameDayService: 'SameDayService',
  EcoFriendly: 'EcoFriendly',
  AffordablePricing: 'AffordablePricing',
  LocallyOwned: 'LocallyOwned',
  YearsOfExperience: 'YearsOfExperience'
};

export type Highlight = (typeof Highlight)[keyof typeof Highlight]


export const Amenity: {
  FreeInspection: 'FreeInspection',
  OnSiteInspection: 'OnSiteInspection',
  WarrantyIncluded: 'WarrantyIncluded',
  FlexibleScheduling: 'FlexibleScheduling',
  Support247: 'Support247',
  OnlinePayment: 'OnlinePayment',
  InvoiceAvailable: 'InvoiceAvailable',
  FinancingOptions: 'FinancingOptions',
  ReferralDiscount: 'ReferralDiscount',
  PostJobCleanup: 'PostJobCleanup'
};

export type Amenity = (typeof Amenity)[keyof typeof Amenity]


export const ContractorType: {
  HVAC: 'HVAC',
  Plumbing: 'Plumbing',
  Electrical: 'Electrical',
  Carpentry: 'Carpentry',
  Roofing: 'Roofing',
  Painting: 'Painting',
  Drywall: 'Drywall',
  ApplianceRepair: 'ApplianceRepair',
  Landscaping: 'Landscaping',
  Interlocking: 'Interlocking',
  Masonry: 'Masonry',
  Flooring: 'Flooring',
  Handyman: 'Handyman',
  PestControl: 'PestControl',
  Welding: 'Welding',
  Insulation: 'Insulation',
  SecuritySystems: 'SecuritySystems',
  SmartHome: 'SmartHome'
};

export type ContractorType = (typeof ContractorType)[keyof typeof ContractorType]


export const ApplicationStatus: {
  Pending: 'Pending',
  Denied: 'Denied',
  Approved: 'Approved'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const PaymentStatus: {
  Pending: 'Pending',
  Paid: 'Paid',
  PartiallyPaid: 'PartiallyPaid',
  Overdue: 'Overdue'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Highlight = $Enums.Highlight

export const Highlight: typeof $Enums.Highlight

export type Amenity = $Enums.Amenity

export const Amenity: typeof $Enums.Amenity

export type ContractorType = $Enums.ContractorType

export const ContractorType: typeof $Enums.ContractorType

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contractors
 * const contractors = await prisma.contractor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contractors
   * const contractors = await prisma.contractor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contractor`: Exposes CRUD operations for the **Contractor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contractors
    * const contractors = await prisma.contractor.findMany()
    * ```
    */
  get contractor(): Prisma.ContractorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manager`: Exposes CRUD operations for the **Manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managers
    * const managers = await prisma.manager.findMany()
    * ```
    */
  get manager(): Prisma.ManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Contractor: 'Contractor',
    Manager: 'Manager',
    Customer: 'Customer',
    Location: 'Location',
    Application: 'Application',
    Booking: 'Booking',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contractor" | "manager" | "customer" | "location" | "application" | "booking" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contractor: {
        payload: Prisma.$ContractorPayload<ExtArgs>
        fields: Prisma.ContractorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>
          }
          findFirst: {
            args: Prisma.ContractorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>
          }
          findMany: {
            args: Prisma.ContractorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>[]
          }
          create: {
            args: Prisma.ContractorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>
          }
          createMany: {
            args: Prisma.ContractorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>[]
          }
          delete: {
            args: Prisma.ContractorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>
          }
          update: {
            args: Prisma.ContractorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>
          }
          deleteMany: {
            args: Prisma.ContractorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>[]
          }
          upsert: {
            args: Prisma.ContractorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractorPayload>
          }
          aggregate: {
            args: Prisma.ContractorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractor>
          }
          groupBy: {
            args: Prisma.ContractorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractorCountArgs<ExtArgs>
            result: $Utils.Optional<ContractorCountAggregateOutputType> | number
          }
        }
      }
      Manager: {
        payload: Prisma.$ManagerPayload<ExtArgs>
        fields: Prisma.ManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findFirst: {
            args: Prisma.ManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findMany: {
            args: Prisma.ManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          create: {
            args: Prisma.ManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          createMany: {
            args: Prisma.ManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          delete: {
            args: Prisma.ManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          update: {
            args: Prisma.ManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          deleteMany: {
            args: Prisma.ManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          upsert: {
            args: Prisma.ManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManager>
          }
          groupBy: {
            args: Prisma.ManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contractor?: ContractorOmit
    manager?: ManagerOmit
    customer?: CustomerOmit
    location?: LocationOmit
    application?: ApplicationOmit
    booking?: BookingOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ContractorCountOutputType
   */

  export type ContractorCountOutputType = {
    bookings: number
    applications: number
    favoritedBy: number
    customers: number
  }

  export type ContractorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ContractorCountOutputTypeCountBookingsArgs
    applications?: boolean | ContractorCountOutputTypeCountApplicationsArgs
    favoritedBy?: boolean | ContractorCountOutputTypeCountFavoritedByArgs
    customers?: boolean | ContractorCountOutputTypeCountCustomersArgs
  }

  // Custom InputTypes
  /**
   * ContractorCountOutputType without action
   */
  export type ContractorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractorCountOutputType
     */
    select?: ContractorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractorCountOutputType without action
   */
  export type ContractorCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ContractorCountOutputType without action
   */
  export type ContractorCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * ContractorCountOutputType without action
   */
  export type ContractorCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * ContractorCountOutputType without action
   */
  export type ContractorCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Count Type ManagerCountOutputType
   */

  export type ManagerCountOutputType = {
    managedContractors: number
  }

  export type ManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedContractors?: boolean | ManagerCountOutputTypeCountManagedContractorsArgs
  }

  // Custom InputTypes
  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerCountOutputType
     */
    select?: ManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountManagedContractorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractorWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    contractors: number
    favorites: number
    applications: number
    bookings: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractors?: boolean | CustomerCountOutputTypeCountContractorsArgs
    favorites?: boolean | CustomerCountOutputTypeCountFavoritesArgs
    applications?: boolean | CustomerCountOutputTypeCountApplicationsArgs
    bookings?: boolean | CustomerCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountContractorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractorWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractorWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    contractors: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractors?: boolean | LocationCountOutputTypeCountContractorsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountContractorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractorWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payments: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Contractor
   */

  export type AggregateContractor = {
    _count: ContractorCountAggregateOutputType | null
    _avg: ContractorAvgAggregateOutputType | null
    _sum: ContractorSumAggregateOutputType | null
    _min: ContractorMinAggregateOutputType | null
    _max: ContractorMaxAggregateOutputType | null
  }

  export type ContractorAvgAggregateOutputType = {
    id: number | null
    hourlyRate: number | null
    advancePayment: number | null
    installationFee: number | null
    yearsOfExperience: number | null
    serviceAreaCoverage: number | null
    teamSize: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
  }

  export type ContractorSumAggregateOutputType = {
    id: number | null
    hourlyRate: number | null
    advancePayment: number | null
    installationFee: number | null
    yearsOfExperience: number | null
    serviceAreaCoverage: number | null
    teamSize: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
  }

  export type ContractorMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    hourlyRate: number | null
    advancePayment: number | null
    installationFee: number | null
    isEmergencyAvailable: boolean | null
    offersOnSiteParking: boolean | null
    yearsOfExperience: number | null
    serviceAreaCoverage: number | null
    teamSize: number | null
    contractorType: $Enums.ContractorType | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    managerCognitoId: string | null
  }

  export type ContractorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    hourlyRate: number | null
    advancePayment: number | null
    installationFee: number | null
    isEmergencyAvailable: boolean | null
    offersOnSiteParking: boolean | null
    yearsOfExperience: number | null
    serviceAreaCoverage: number | null
    teamSize: number | null
    contractorType: $Enums.ContractorType | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    managerCognitoId: string | null
  }

  export type ContractorCountAggregateOutputType = {
    id: number
    name: number
    description: number
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls: number
    amenities: number
    highlights: number
    isEmergencyAvailable: number
    offersOnSiteParking: number
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: number
    postedDate: number
    averageRating: number
    numberOfReviews: number
    locationId: number
    managerCognitoId: number
    _all: number
  }


  export type ContractorAvgAggregateInputType = {
    id?: true
    hourlyRate?: true
    advancePayment?: true
    installationFee?: true
    yearsOfExperience?: true
    serviceAreaCoverage?: true
    teamSize?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
  }

  export type ContractorSumAggregateInputType = {
    id?: true
    hourlyRate?: true
    advancePayment?: true
    installationFee?: true
    yearsOfExperience?: true
    serviceAreaCoverage?: true
    teamSize?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
  }

  export type ContractorMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hourlyRate?: true
    advancePayment?: true
    installationFee?: true
    isEmergencyAvailable?: true
    offersOnSiteParking?: true
    yearsOfExperience?: true
    serviceAreaCoverage?: true
    teamSize?: true
    contractorType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    managerCognitoId?: true
  }

  export type ContractorMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hourlyRate?: true
    advancePayment?: true
    installationFee?: true
    isEmergencyAvailable?: true
    offersOnSiteParking?: true
    yearsOfExperience?: true
    serviceAreaCoverage?: true
    teamSize?: true
    contractorType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    managerCognitoId?: true
  }

  export type ContractorCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hourlyRate?: true
    advancePayment?: true
    installationFee?: true
    photoUrls?: true
    amenities?: true
    highlights?: true
    isEmergencyAvailable?: true
    offersOnSiteParking?: true
    yearsOfExperience?: true
    serviceAreaCoverage?: true
    teamSize?: true
    contractorType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    managerCognitoId?: true
    _all?: true
  }

  export type ContractorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contractor to aggregate.
     */
    where?: ContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contractors to fetch.
     */
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contractors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contractors
    **/
    _count?: true | ContractorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractorMaxAggregateInputType
  }

  export type GetContractorAggregateType<T extends ContractorAggregateArgs> = {
        [P in keyof T & keyof AggregateContractor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractor[P]>
      : GetScalarType<T[P], AggregateContractor[P]>
  }




  export type ContractorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractorWhereInput
    orderBy?: ContractorOrderByWithAggregationInput | ContractorOrderByWithAggregationInput[]
    by: ContractorScalarFieldEnum[] | ContractorScalarFieldEnum
    having?: ContractorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractorCountAggregateInputType | true
    _avg?: ContractorAvgAggregateInputType
    _sum?: ContractorSumAggregateInputType
    _min?: ContractorMinAggregateInputType
    _max?: ContractorMaxAggregateInputType
  }

  export type ContractorGroupByOutputType = {
    id: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls: string[]
    amenities: $Enums.Amenity[]
    highlights: $Enums.Highlight[]
    isEmergencyAvailable: boolean
    offersOnSiteParking: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate: Date
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number
    managerCognitoId: string
    _count: ContractorCountAggregateOutputType | null
    _avg: ContractorAvgAggregateOutputType | null
    _sum: ContractorSumAggregateOutputType | null
    _min: ContractorMinAggregateOutputType | null
    _max: ContractorMaxAggregateOutputType | null
  }

  type GetContractorGroupByPayload<T extends ContractorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractorGroupByOutputType[P]>
            : GetScalarType<T[P], ContractorGroupByOutputType[P]>
        }
      >
    >


  export type ContractorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hourlyRate?: boolean
    advancePayment?: boolean
    installationFee?: boolean
    photoUrls?: boolean
    amenities?: boolean
    highlights?: boolean
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience?: boolean
    serviceAreaCoverage?: boolean
    teamSize?: boolean
    contractorType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    bookings?: boolean | Contractor$bookingsArgs<ExtArgs>
    applications?: boolean | Contractor$applicationsArgs<ExtArgs>
    favoritedBy?: boolean | Contractor$favoritedByArgs<ExtArgs>
    customers?: boolean | Contractor$customersArgs<ExtArgs>
    _count?: boolean | ContractorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractor"]>

  export type ContractorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hourlyRate?: boolean
    advancePayment?: boolean
    installationFee?: boolean
    photoUrls?: boolean
    amenities?: boolean
    highlights?: boolean
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience?: boolean
    serviceAreaCoverage?: boolean
    teamSize?: boolean
    contractorType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractor"]>

  export type ContractorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hourlyRate?: boolean
    advancePayment?: boolean
    installationFee?: boolean
    photoUrls?: boolean
    amenities?: boolean
    highlights?: boolean
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience?: boolean
    serviceAreaCoverage?: boolean
    teamSize?: boolean
    contractorType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractor"]>

  export type ContractorSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    hourlyRate?: boolean
    advancePayment?: boolean
    installationFee?: boolean
    photoUrls?: boolean
    amenities?: boolean
    highlights?: boolean
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience?: boolean
    serviceAreaCoverage?: boolean
    teamSize?: boolean
    contractorType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    managerCognitoId?: boolean
  }

  export type ContractorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "hourlyRate" | "advancePayment" | "installationFee" | "photoUrls" | "amenities" | "highlights" | "isEmergencyAvailable" | "offersOnSiteParking" | "yearsOfExperience" | "serviceAreaCoverage" | "teamSize" | "contractorType" | "postedDate" | "averageRating" | "numberOfReviews" | "locationId" | "managerCognitoId", ExtArgs["result"]["contractor"]>
  export type ContractorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    bookings?: boolean | Contractor$bookingsArgs<ExtArgs>
    applications?: boolean | Contractor$applicationsArgs<ExtArgs>
    favoritedBy?: boolean | Contractor$favoritedByArgs<ExtArgs>
    customers?: boolean | Contractor$customersArgs<ExtArgs>
    _count?: boolean | ContractorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
  }
  export type ContractorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
  }

  export type $ContractorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contractor"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      manager: Prisma.$ManagerPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      favoritedBy: Prisma.$CustomerPayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      hourlyRate: number
      advancePayment: number
      installationFee: number
      photoUrls: string[]
      amenities: $Enums.Amenity[]
      highlights: $Enums.Highlight[]
      isEmergencyAvailable: boolean
      offersOnSiteParking: boolean
      yearsOfExperience: number
      serviceAreaCoverage: number
      teamSize: number
      contractorType: $Enums.ContractorType
      postedDate: Date
      averageRating: number | null
      numberOfReviews: number | null
      locationId: number
      managerCognitoId: string
    }, ExtArgs["result"]["contractor"]>
    composites: {}
  }

  type ContractorGetPayload<S extends boolean | null | undefined | ContractorDefaultArgs> = $Result.GetResult<Prisma.$ContractorPayload, S>

  type ContractorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractorCountAggregateInputType | true
    }

  export interface ContractorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contractor'], meta: { name: 'Contractor' } }
    /**
     * Find zero or one Contractor that matches the filter.
     * @param {ContractorFindUniqueArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractorFindUniqueArgs>(args: SelectSubset<T, ContractorFindUniqueArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contractor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractorFindUniqueOrThrowArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractorFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contractor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorFindFirstArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractorFindFirstArgs>(args?: SelectSubset<T, ContractorFindFirstArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contractor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorFindFirstOrThrowArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractorFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contractors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contractors
     * const contractors = await prisma.contractor.findMany()
     * 
     * // Get first 10 Contractors
     * const contractors = await prisma.contractor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractorWithIdOnly = await prisma.contractor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractorFindManyArgs>(args?: SelectSubset<T, ContractorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contractor.
     * @param {ContractorCreateArgs} args - Arguments to create a Contractor.
     * @example
     * // Create one Contractor
     * const Contractor = await prisma.contractor.create({
     *   data: {
     *     // ... data to create a Contractor
     *   }
     * })
     * 
     */
    create<T extends ContractorCreateArgs>(args: SelectSubset<T, ContractorCreateArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contractors.
     * @param {ContractorCreateManyArgs} args - Arguments to create many Contractors.
     * @example
     * // Create many Contractors
     * const contractor = await prisma.contractor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractorCreateManyArgs>(args?: SelectSubset<T, ContractorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contractors and returns the data saved in the database.
     * @param {ContractorCreateManyAndReturnArgs} args - Arguments to create many Contractors.
     * @example
     * // Create many Contractors
     * const contractor = await prisma.contractor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contractors and only return the `id`
     * const contractorWithIdOnly = await prisma.contractor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractorCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contractor.
     * @param {ContractorDeleteArgs} args - Arguments to delete one Contractor.
     * @example
     * // Delete one Contractor
     * const Contractor = await prisma.contractor.delete({
     *   where: {
     *     // ... filter to delete one Contractor
     *   }
     * })
     * 
     */
    delete<T extends ContractorDeleteArgs>(args: SelectSubset<T, ContractorDeleteArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contractor.
     * @param {ContractorUpdateArgs} args - Arguments to update one Contractor.
     * @example
     * // Update one Contractor
     * const contractor = await prisma.contractor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractorUpdateArgs>(args: SelectSubset<T, ContractorUpdateArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contractors.
     * @param {ContractorDeleteManyArgs} args - Arguments to filter Contractors to delete.
     * @example
     * // Delete a few Contractors
     * const { count } = await prisma.contractor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractorDeleteManyArgs>(args?: SelectSubset<T, ContractorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contractors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contractors
     * const contractor = await prisma.contractor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractorUpdateManyArgs>(args: SelectSubset<T, ContractorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contractors and returns the data updated in the database.
     * @param {ContractorUpdateManyAndReturnArgs} args - Arguments to update many Contractors.
     * @example
     * // Update many Contractors
     * const contractor = await prisma.contractor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contractors and only return the `id`
     * const contractorWithIdOnly = await prisma.contractor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractorUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contractor.
     * @param {ContractorUpsertArgs} args - Arguments to update or create a Contractor.
     * @example
     * // Update or create a Contractor
     * const contractor = await prisma.contractor.upsert({
     *   create: {
     *     // ... data to create a Contractor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contractor we want to update
     *   }
     * })
     */
    upsert<T extends ContractorUpsertArgs>(args: SelectSubset<T, ContractorUpsertArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contractors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorCountArgs} args - Arguments to filter Contractors to count.
     * @example
     * // Count the number of Contractors
     * const count = await prisma.contractor.count({
     *   where: {
     *     // ... the filter for the Contractors we want to count
     *   }
     * })
    **/
    count<T extends ContractorCountArgs>(
      args?: Subset<T, ContractorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contractor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractorAggregateArgs>(args: Subset<T, ContractorAggregateArgs>): Prisma.PrismaPromise<GetContractorAggregateType<T>>

    /**
     * Group by Contractor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractorGroupByArgs['orderBy'] }
        : { orderBy?: ContractorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contractor model
   */
  readonly fields: ContractorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contractor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends ManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagerDefaultArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Contractor$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Contractor$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Contractor$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Contractor$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritedBy<T extends Contractor$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Contractor$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends Contractor$customersArgs<ExtArgs> = {}>(args?: Subset<T, Contractor$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contractor model
   */ 
  interface ContractorFieldRefs {
    readonly id: FieldRef<"Contractor", 'Int'>
    readonly name: FieldRef<"Contractor", 'String'>
    readonly description: FieldRef<"Contractor", 'String'>
    readonly hourlyRate: FieldRef<"Contractor", 'Float'>
    readonly advancePayment: FieldRef<"Contractor", 'Float'>
    readonly installationFee: FieldRef<"Contractor", 'Float'>
    readonly photoUrls: FieldRef<"Contractor", 'String[]'>
    readonly amenities: FieldRef<"Contractor", 'Amenity[]'>
    readonly highlights: FieldRef<"Contractor", 'Highlight[]'>
    readonly isEmergencyAvailable: FieldRef<"Contractor", 'Boolean'>
    readonly offersOnSiteParking: FieldRef<"Contractor", 'Boolean'>
    readonly yearsOfExperience: FieldRef<"Contractor", 'Int'>
    readonly serviceAreaCoverage: FieldRef<"Contractor", 'Float'>
    readonly teamSize: FieldRef<"Contractor", 'Int'>
    readonly contractorType: FieldRef<"Contractor", 'ContractorType'>
    readonly postedDate: FieldRef<"Contractor", 'DateTime'>
    readonly averageRating: FieldRef<"Contractor", 'Float'>
    readonly numberOfReviews: FieldRef<"Contractor", 'Int'>
    readonly locationId: FieldRef<"Contractor", 'Int'>
    readonly managerCognitoId: FieldRef<"Contractor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contractor findUnique
   */
  export type ContractorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * Filter, which Contractor to fetch.
     */
    where: ContractorWhereUniqueInput
  }

  /**
   * Contractor findUniqueOrThrow
   */
  export type ContractorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * Filter, which Contractor to fetch.
     */
    where: ContractorWhereUniqueInput
  }

  /**
   * Contractor findFirst
   */
  export type ContractorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * Filter, which Contractor to fetch.
     */
    where?: ContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contractors to fetch.
     */
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contractors.
     */
    cursor?: ContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contractors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contractors.
     */
    distinct?: ContractorScalarFieldEnum | ContractorScalarFieldEnum[]
  }

  /**
   * Contractor findFirstOrThrow
   */
  export type ContractorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * Filter, which Contractor to fetch.
     */
    where?: ContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contractors to fetch.
     */
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contractors.
     */
    cursor?: ContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contractors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contractors.
     */
    distinct?: ContractorScalarFieldEnum | ContractorScalarFieldEnum[]
  }

  /**
   * Contractor findMany
   */
  export type ContractorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * Filter, which Contractors to fetch.
     */
    where?: ContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contractors to fetch.
     */
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contractors.
     */
    cursor?: ContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contractors.
     */
    skip?: number
    distinct?: ContractorScalarFieldEnum | ContractorScalarFieldEnum[]
  }

  /**
   * Contractor create
   */
  export type ContractorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * The data needed to create a Contractor.
     */
    data: XOR<ContractorCreateInput, ContractorUncheckedCreateInput>
  }

  /**
   * Contractor createMany
   */
  export type ContractorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contractors.
     */
    data: ContractorCreateManyInput | ContractorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contractor createManyAndReturn
   */
  export type ContractorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * The data used to create many Contractors.
     */
    data: ContractorCreateManyInput | ContractorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contractor update
   */
  export type ContractorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * The data needed to update a Contractor.
     */
    data: XOR<ContractorUpdateInput, ContractorUncheckedUpdateInput>
    /**
     * Choose, which Contractor to update.
     */
    where: ContractorWhereUniqueInput
  }

  /**
   * Contractor updateMany
   */
  export type ContractorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contractors.
     */
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyInput>
    /**
     * Filter which Contractors to update
     */
    where?: ContractorWhereInput
    /**
     * Limit how many Contractors to update.
     */
    limit?: number
  }

  /**
   * Contractor updateManyAndReturn
   */
  export type ContractorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * The data used to update Contractors.
     */
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyInput>
    /**
     * Filter which Contractors to update
     */
    where?: ContractorWhereInput
    /**
     * Limit how many Contractors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contractor upsert
   */
  export type ContractorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * The filter to search for the Contractor to update in case it exists.
     */
    where: ContractorWhereUniqueInput
    /**
     * In case the Contractor found by the `where` argument doesn't exist, create a new Contractor with this data.
     */
    create: XOR<ContractorCreateInput, ContractorUncheckedCreateInput>
    /**
     * In case the Contractor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractorUpdateInput, ContractorUncheckedUpdateInput>
  }

  /**
   * Contractor delete
   */
  export type ContractorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    /**
     * Filter which Contractor to delete.
     */
    where: ContractorWhereUniqueInput
  }

  /**
   * Contractor deleteMany
   */
  export type ContractorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contractors to delete
     */
    where?: ContractorWhereInput
    /**
     * Limit how many Contractors to delete.
     */
    limit?: number
  }

  /**
   * Contractor.bookings
   */
  export type Contractor$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Contractor.applications
   */
  export type Contractor$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Contractor.favoritedBy
   */
  export type Contractor$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Contractor.customers
   */
  export type Contractor$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Contractor without action
   */
  export type ContractorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
  }


  /**
   * Model Manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  export type ManagerAvgAggregateOutputType = {
    id: number | null
  }

  export type ManagerSumAggregateOutputType = {
    id: number | null
  }

  export type ManagerMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ManagerMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ManagerCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type ManagerAvgAggregateInputType = {
    id?: true
  }

  export type ManagerSumAggregateInputType = {
    id?: true
  }

  export type ManagerMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ManagerMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ManagerCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manager to aggregate.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managers
    **/
    _count?: true | ManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerMaxAggregateInputType
  }

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>
  }




  export type ManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerWhereInput
    orderBy?: ManagerOrderByWithAggregationInput | ManagerOrderByWithAggregationInput[]
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum
    having?: ManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerCountAggregateInputType | true
    _avg?: ManagerAvgAggregateInputType
    _sum?: ManagerSumAggregateInputType
    _min?: ManagerMinAggregateInputType
    _max?: ManagerMaxAggregateInputType
  }

  export type ManagerGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  type GetManagerGroupByPayload<T extends ManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
        }
      >
    >


  export type ManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    managedContractors?: boolean | Manager$managedContractorsArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type ManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber", ExtArgs["result"]["manager"]>
  export type ManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedContractors?: boolean | Manager$managedContractorsArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manager"
    objects: {
      managedContractors: Prisma.$ContractorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["manager"]>
    composites: {}
  }

  type ManagerGetPayload<S extends boolean | null | undefined | ManagerDefaultArgs> = $Result.GetResult<Prisma.$ManagerPayload, S>

  type ManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerCountAggregateInputType | true
    }

  export interface ManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manager'], meta: { name: 'Manager' } }
    /**
     * Find zero or one Manager that matches the filter.
     * @param {ManagerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerFindUniqueArgs>(args: SelectSubset<T, ManagerFindUniqueArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerFindFirstArgs>(args?: SelectSubset<T, ManagerFindFirstArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     * 
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerWithIdOnly = await prisma.manager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerFindManyArgs>(args?: SelectSubset<T, ManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manager.
     * @param {ManagerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     * 
     */
    create<T extends ManagerCreateArgs>(args: SelectSubset<T, ManagerCreateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Managers.
     * @param {ManagerCreateManyArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerCreateManyArgs>(args?: SelectSubset<T, ManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Managers and returns the data saved in the database.
     * @param {ManagerCreateManyAndReturnArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manager.
     * @param {ManagerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     * 
     */
    delete<T extends ManagerDeleteArgs>(args: SelectSubset<T, ManagerDeleteArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manager.
     * @param {ManagerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerUpdateArgs>(args: SelectSubset<T, ManagerUpdateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Managers.
     * @param {ManagerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerDeleteManyArgs>(args?: SelectSubset<T, ManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerUpdateManyArgs>(args: SelectSubset<T, ManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers and returns the data updated in the database.
     * @param {ManagerUpdateManyAndReturnArgs} args - Arguments to update many Managers.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manager.
     * @param {ManagerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
     */
    upsert<T extends ManagerUpsertArgs>(args: SelectSubset<T, ManagerUpsertArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
    **/
    count<T extends ManagerCountArgs>(
      args?: Subset<T, ManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerAggregateArgs>(args: Subset<T, ManagerAggregateArgs>): Prisma.PrismaPromise<GetManagerAggregateType<T>>

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerGroupByArgs['orderBy'] }
        : { orderBy?: ManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manager model
   */
  readonly fields: ManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    managedContractors<T extends Manager$managedContractorsArgs<ExtArgs> = {}>(args?: Subset<T, Manager$managedContractorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manager model
   */ 
  interface ManagerFieldRefs {
    readonly id: FieldRef<"Manager", 'Int'>
    readonly cognitoId: FieldRef<"Manager", 'String'>
    readonly name: FieldRef<"Manager", 'String'>
    readonly email: FieldRef<"Manager", 'String'>
    readonly phoneNumber: FieldRef<"Manager", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Manager findUnique
   */
  export type ManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findUniqueOrThrow
   */
  export type ManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findFirst
   */
  export type ManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findFirstOrThrow
   */
  export type ManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findMany
   */
  export type ManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Managers to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager create
   */
  export type ManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manager.
     */
    data: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
  }

  /**
   * Manager createMany
   */
  export type ManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager createManyAndReturn
   */
  export type ManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager update
   */
  export type ManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manager.
     */
    data: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
    /**
     * Choose, which Manager to update.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager updateMany
   */
  export type ManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager updateManyAndReturn
   */
  export type ManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager upsert
   */
  export type ManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manager to update in case it exists.
     */
    where: ManagerWhereUniqueInput
    /**
     * In case the Manager found by the `where` argument doesn't exist, create a new Manager with this data.
     */
    create: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
    /**
     * In case the Manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
  }

  /**
   * Manager delete
   */
  export type ManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter which Manager to delete.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager deleteMany
   */
  export type ManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managers to delete
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to delete.
     */
    limit?: number
  }

  /**
   * Manager.managedContractors
   */
  export type Manager$managedContractorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    where?: ContractorWhereInput
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    cursor?: ContractorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractorScalarFieldEnum | ContractorScalarFieldEnum[]
  }

  /**
   * Manager without action
   */
  export type ManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    contractors?: boolean | Customer$contractorsArgs<ExtArgs>
    favorites?: boolean | Customer$favoritesArgs<ExtArgs>
    applications?: boolean | Customer$applicationsArgs<ExtArgs>
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractors?: boolean | Customer$contractorsArgs<ExtArgs>
    favorites?: boolean | Customer$favoritesArgs<ExtArgs>
    applications?: boolean | Customer$applicationsArgs<ExtArgs>
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      contractors: Prisma.$ContractorPayload<ExtArgs>[]
      favorites: Prisma.$ContractorPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contractors<T extends Customer$contractorsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$contractorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Customer$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Customer$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Customer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly cognitoId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.contractors
   */
  export type Customer$contractorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    where?: ContractorWhereInput
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    cursor?: ContractorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractorScalarFieldEnum | ContractorScalarFieldEnum[]
  }

  /**
   * Customer.favorites
   */
  export type Customer$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    where?: ContractorWhereInput
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    cursor?: ContractorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractorScalarFieldEnum | ContractorScalarFieldEnum[]
  }

  /**
   * Customer.applications
   */
  export type Customer$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Customer.bookings
   */
  export type Customer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    contractors?: boolean | Location$contractorsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "country" | "postalCode", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractors?: boolean | Location$contractorsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      contractors: Prisma.$ContractorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      state: string
      country: string
      postalCode: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contractors<T extends Location$contractorsArgs<ExtArgs> = {}>(args?: Subset<T, Location$contractorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.contractors
   */
  export type Location$contractorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contractor
     */
    select?: ContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contractor
     */
    omit?: ContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractorInclude<ExtArgs> | null
    where?: ContractorWhereInput
    orderBy?: ContractorOrderByWithRelationInput | ContractorOrderByWithRelationInput[]
    cursor?: ContractorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractorScalarFieldEnum | ContractorScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    contractorId: number | null
    bookingId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    contractorId: number | null
    bookingId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    applicationDate: Date | null
    status: $Enums.ApplicationStatus | null
    contractorId: number | null
    customerCognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    message: string | null
    bookingId: number | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    applicationDate: Date | null
    status: $Enums.ApplicationStatus | null
    contractorId: number | null
    customerCognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    message: string | null
    bookingId: number | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    applicationDate: number
    status: number
    contractorId: number
    customerCognitoId: number
    name: number
    email: number
    phoneNumber: number
    message: number
    bookingId: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    contractorId?: true
    bookingId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    contractorId?: true
    bookingId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    applicationDate?: true
    status?: true
    contractorId?: true
    customerCognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    bookingId?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    applicationDate?: true
    status?: true
    contractorId?: true
    customerCognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    bookingId?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    applicationDate?: true
    status?: true
    contractorId?: true
    customerCognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    bookingId?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    applicationDate: Date
    status: $Enums.ApplicationStatus
    contractorId: number
    customerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message: string | null
    bookingId: number | null
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    bookingId?: boolean
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    booking?: boolean | Application$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    bookingId?: boolean
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    booking?: boolean | Application$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    bookingId?: boolean
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    booking?: boolean | Application$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    bookingId?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationDate" | "status" | "contractorId" | "customerCognitoId" | "name" | "email" | "phoneNumber" | "message" | "bookingId", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    booking?: boolean | Application$bookingArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    booking?: boolean | Application$bookingArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    booking?: boolean | Application$bookingArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      contractor: Prisma.$ContractorPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationDate: Date
      status: $Enums.ApplicationStatus
      contractorId: number
      customerCognitoId: string
      name: string
      email: string
      phoneNumber: string
      message: string | null
      bookingId: number | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contractor<T extends ContractorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractorDefaultArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends Application$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Application$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */ 
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly applicationDate: FieldRef<"Application", 'DateTime'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly contractorId: FieldRef<"Application", 'Int'>
    readonly customerCognitoId: FieldRef<"Application", 'String'>
    readonly name: FieldRef<"Application", 'String'>
    readonly email: FieldRef<"Application", 'String'>
    readonly phoneNumber: FieldRef<"Application", 'String'>
    readonly message: FieldRef<"Application", 'String'>
    readonly bookingId: FieldRef<"Application", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.booking
   */
  export type Application$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    totalFee: number | null
    advanceFee: number | null
    contractorId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    totalFee: number | null
    advanceFee: number | null
    contractorId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    totalFee: number | null
    advanceFee: number | null
    contractorId: number | null
    customerCognitoId: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    totalFee: number | null
    advanceFee: number | null
    contractorId: number | null
    customerCognitoId: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    totalFee: number
    advanceFee: number
    contractorId: number
    customerCognitoId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    totalFee?: true
    advanceFee?: true
    contractorId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    totalFee?: true
    advanceFee?: true
    contractorId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    totalFee?: true
    advanceFee?: true
    contractorId?: true
    customerCognitoId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    totalFee?: true
    advanceFee?: true
    contractorId?: true
    customerCognitoId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    totalFee?: true
    advanceFee?: true
    contractorId?: true
    customerCognitoId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    totalFee: number
    advanceFee: number
    contractorId: number
    customerCognitoId: string
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    application?: boolean | Booking$applicationArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    contractorId?: boolean
    customerCognitoId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "totalFee" | "advanceFee" | "contractorId" | "customerCognitoId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    application?: boolean | Booking$applicationArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractor?: boolean | ContractorDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      contractor: Prisma.$ContractorPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      application: Prisma.$ApplicationPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      totalFee: number
      advanceFee: number
      contractorId: number
      customerCognitoId: string
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contractor<T extends ContractorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractorDefaultArgs<ExtArgs>>): Prisma__ContractorClient<$Result.GetResult<Prisma.$ContractorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    application<T extends Booking$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Booking$applicationArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Booking$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly startDate: FieldRef<"Booking", 'DateTime'>
    readonly endDate: FieldRef<"Booking", 'DateTime'>
    readonly totalFee: FieldRef<"Booking", 'Float'>
    readonly advanceFee: FieldRef<"Booking", 'Float'>
    readonly contractorId: FieldRef<"Booking", 'Int'>
    readonly customerCognitoId: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.application
   */
  export type Booking$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
  }

  /**
   * Booking.payments
   */
  export type Booking$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    bookingId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    bookingId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    bookingId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    bookingId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: number
    paymentDate: number
    paymentStatus: number
    bookingId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    bookingId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    bookingId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    bookingId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    bookingId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    bookingId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: Date
    paymentDate: Date
    paymentStatus: $Enums.PaymentStatus
    bookingId: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    bookingId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amountDue" | "amountPaid" | "dueDate" | "paymentDate" | "paymentStatus" | "bookingId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amountDue: number
      amountPaid: number
      dueDate: Date
      paymentDate: Date
      paymentStatus: $Enums.PaymentStatus
      bookingId: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly amountDue: FieldRef<"Payment", 'Float'>
    readonly amountPaid: FieldRef<"Payment", 'Float'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymentStatus'>
    readonly bookingId: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContractorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    hourlyRate: 'hourlyRate',
    advancePayment: 'advancePayment',
    installationFee: 'installationFee',
    photoUrls: 'photoUrls',
    amenities: 'amenities',
    highlights: 'highlights',
    isEmergencyAvailable: 'isEmergencyAvailable',
    offersOnSiteParking: 'offersOnSiteParking',
    yearsOfExperience: 'yearsOfExperience',
    serviceAreaCoverage: 'serviceAreaCoverage',
    teamSize: 'teamSize',
    contractorType: 'contractorType',
    postedDate: 'postedDate',
    averageRating: 'averageRating',
    numberOfReviews: 'numberOfReviews',
    locationId: 'locationId',
    managerCognitoId: 'managerCognitoId'
  };

  export type ContractorScalarFieldEnum = (typeof ContractorScalarFieldEnum)[keyof typeof ContractorScalarFieldEnum]


  export const ManagerScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    applicationDate: 'applicationDate',
    status: 'status',
    contractorId: 'contractorId',
    customerCognitoId: 'customerCognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    message: 'message',
    bookingId: 'bookingId'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    totalFee: 'totalFee',
    advanceFee: 'advanceFee',
    contractorId: 'contractorId',
    customerCognitoId: 'customerCognitoId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    dueDate: 'dueDate',
    paymentDate: 'paymentDate',
    paymentStatus: 'paymentStatus',
    bookingId: 'bookingId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Amenity[]'
   */
  export type ListEnumAmenityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Amenity[]'>
    


  /**
   * Reference to a field of type 'Amenity'
   */
  export type EnumAmenityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Amenity'>
    


  /**
   * Reference to a field of type 'Highlight[]'
   */
  export type ListEnumHighlightFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Highlight[]'>
    


  /**
   * Reference to a field of type 'Highlight'
   */
  export type EnumHighlightFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Highlight'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ContractorType'
   */
  export type EnumContractorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractorType'>
    


  /**
   * Reference to a field of type 'ContractorType[]'
   */
  export type ListEnumContractorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractorType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ContractorWhereInput = {
    AND?: ContractorWhereInput | ContractorWhereInput[]
    OR?: ContractorWhereInput[]
    NOT?: ContractorWhereInput | ContractorWhereInput[]
    id?: IntFilter<"Contractor"> | number
    name?: StringFilter<"Contractor"> | string
    description?: StringFilter<"Contractor"> | string
    hourlyRate?: FloatFilter<"Contractor"> | number
    advancePayment?: FloatFilter<"Contractor"> | number
    installationFee?: FloatFilter<"Contractor"> | number
    photoUrls?: StringNullableListFilter<"Contractor">
    amenities?: EnumAmenityNullableListFilter<"Contractor">
    highlights?: EnumHighlightNullableListFilter<"Contractor">
    isEmergencyAvailable?: BoolFilter<"Contractor"> | boolean
    offersOnSiteParking?: BoolFilter<"Contractor"> | boolean
    yearsOfExperience?: IntFilter<"Contractor"> | number
    serviceAreaCoverage?: FloatFilter<"Contractor"> | number
    teamSize?: IntFilter<"Contractor"> | number
    contractorType?: EnumContractorTypeFilter<"Contractor"> | $Enums.ContractorType
    postedDate?: DateTimeFilter<"Contractor"> | Date | string
    averageRating?: FloatNullableFilter<"Contractor"> | number | null
    numberOfReviews?: IntNullableFilter<"Contractor"> | number | null
    locationId?: IntFilter<"Contractor"> | number
    managerCognitoId?: StringFilter<"Contractor"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    manager?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    bookings?: BookingListRelationFilter
    applications?: ApplicationListRelationFilter
    favoritedBy?: CustomerListRelationFilter
    customers?: CustomerListRelationFilter
  }

  export type ContractorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hourlyRate?: SortOrder
    advancePayment?: SortOrder
    installationFee?: SortOrder
    photoUrls?: SortOrder
    amenities?: SortOrder
    highlights?: SortOrder
    isEmergencyAvailable?: SortOrder
    offersOnSiteParking?: SortOrder
    yearsOfExperience?: SortOrder
    serviceAreaCoverage?: SortOrder
    teamSize?: SortOrder
    contractorType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
    location?: LocationOrderByWithRelationInput
    manager?: ManagerOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    favoritedBy?: CustomerOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
  }

  export type ContractorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractorWhereInput | ContractorWhereInput[]
    OR?: ContractorWhereInput[]
    NOT?: ContractorWhereInput | ContractorWhereInput[]
    name?: StringFilter<"Contractor"> | string
    description?: StringFilter<"Contractor"> | string
    hourlyRate?: FloatFilter<"Contractor"> | number
    advancePayment?: FloatFilter<"Contractor"> | number
    installationFee?: FloatFilter<"Contractor"> | number
    photoUrls?: StringNullableListFilter<"Contractor">
    amenities?: EnumAmenityNullableListFilter<"Contractor">
    highlights?: EnumHighlightNullableListFilter<"Contractor">
    isEmergencyAvailable?: BoolFilter<"Contractor"> | boolean
    offersOnSiteParking?: BoolFilter<"Contractor"> | boolean
    yearsOfExperience?: IntFilter<"Contractor"> | number
    serviceAreaCoverage?: FloatFilter<"Contractor"> | number
    teamSize?: IntFilter<"Contractor"> | number
    contractorType?: EnumContractorTypeFilter<"Contractor"> | $Enums.ContractorType
    postedDate?: DateTimeFilter<"Contractor"> | Date | string
    averageRating?: FloatNullableFilter<"Contractor"> | number | null
    numberOfReviews?: IntNullableFilter<"Contractor"> | number | null
    locationId?: IntFilter<"Contractor"> | number
    managerCognitoId?: StringFilter<"Contractor"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    manager?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    bookings?: BookingListRelationFilter
    applications?: ApplicationListRelationFilter
    favoritedBy?: CustomerListRelationFilter
    customers?: CustomerListRelationFilter
  }, "id">

  export type ContractorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hourlyRate?: SortOrder
    advancePayment?: SortOrder
    installationFee?: SortOrder
    photoUrls?: SortOrder
    amenities?: SortOrder
    highlights?: SortOrder
    isEmergencyAvailable?: SortOrder
    offersOnSiteParking?: SortOrder
    yearsOfExperience?: SortOrder
    serviceAreaCoverage?: SortOrder
    teamSize?: SortOrder
    contractorType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
    _count?: ContractorCountOrderByAggregateInput
    _avg?: ContractorAvgOrderByAggregateInput
    _max?: ContractorMaxOrderByAggregateInput
    _min?: ContractorMinOrderByAggregateInput
    _sum?: ContractorSumOrderByAggregateInput
  }

  export type ContractorScalarWhereWithAggregatesInput = {
    AND?: ContractorScalarWhereWithAggregatesInput | ContractorScalarWhereWithAggregatesInput[]
    OR?: ContractorScalarWhereWithAggregatesInput[]
    NOT?: ContractorScalarWhereWithAggregatesInput | ContractorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contractor"> | number
    name?: StringWithAggregatesFilter<"Contractor"> | string
    description?: StringWithAggregatesFilter<"Contractor"> | string
    hourlyRate?: FloatWithAggregatesFilter<"Contractor"> | number
    advancePayment?: FloatWithAggregatesFilter<"Contractor"> | number
    installationFee?: FloatWithAggregatesFilter<"Contractor"> | number
    photoUrls?: StringNullableListFilter<"Contractor">
    amenities?: EnumAmenityNullableListFilter<"Contractor">
    highlights?: EnumHighlightNullableListFilter<"Contractor">
    isEmergencyAvailable?: BoolWithAggregatesFilter<"Contractor"> | boolean
    offersOnSiteParking?: BoolWithAggregatesFilter<"Contractor"> | boolean
    yearsOfExperience?: IntWithAggregatesFilter<"Contractor"> | number
    serviceAreaCoverage?: FloatWithAggregatesFilter<"Contractor"> | number
    teamSize?: IntWithAggregatesFilter<"Contractor"> | number
    contractorType?: EnumContractorTypeWithAggregatesFilter<"Contractor"> | $Enums.ContractorType
    postedDate?: DateTimeWithAggregatesFilter<"Contractor"> | Date | string
    averageRating?: FloatNullableWithAggregatesFilter<"Contractor"> | number | null
    numberOfReviews?: IntNullableWithAggregatesFilter<"Contractor"> | number | null
    locationId?: IntWithAggregatesFilter<"Contractor"> | number
    managerCognitoId?: StringWithAggregatesFilter<"Contractor"> | string
  }

  export type ManagerWhereInput = {
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    id?: IntFilter<"Manager"> | number
    cognitoId?: StringFilter<"Manager"> | string
    name?: StringFilter<"Manager"> | string
    email?: StringFilter<"Manager"> | string
    phoneNumber?: StringFilter<"Manager"> | string
    managedContractors?: ContractorListRelationFilter
  }

  export type ManagerOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    managedContractors?: ContractorOrderByRelationAggregateInput
  }

  export type ManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    name?: StringFilter<"Manager"> | string
    email?: StringFilter<"Manager"> | string
    phoneNumber?: StringFilter<"Manager"> | string
    managedContractors?: ContractorListRelationFilter
  }, "id" | "cognitoId">

  export type ManagerOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: ManagerCountOrderByAggregateInput
    _avg?: ManagerAvgOrderByAggregateInput
    _max?: ManagerMaxOrderByAggregateInput
    _min?: ManagerMinOrderByAggregateInput
    _sum?: ManagerSumOrderByAggregateInput
  }

  export type ManagerScalarWhereWithAggregatesInput = {
    AND?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    OR?: ManagerScalarWhereWithAggregatesInput[]
    NOT?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manager"> | number
    cognitoId?: StringWithAggregatesFilter<"Manager"> | string
    name?: StringWithAggregatesFilter<"Manager"> | string
    email?: StringWithAggregatesFilter<"Manager"> | string
    phoneNumber?: StringWithAggregatesFilter<"Manager"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    cognitoId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    contractors?: ContractorListRelationFilter
    favorites?: ContractorListRelationFilter
    applications?: ApplicationListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    contractors?: ContractorOrderByRelationAggregateInput
    favorites?: ContractorOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    contractors?: ContractorListRelationFilter
    favorites?: ContractorListRelationFilter
    applications?: ApplicationListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "cognitoId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    cognitoId?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    contractors?: ContractorListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    contractors?: ContractorOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    contractors?: ContractorListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    contractorId?: IntFilter<"Application"> | number
    customerCognitoId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    bookingId?: IntNullableFilter<"Application"> | number | null
    contractor?: XOR<ContractorScalarRelationFilter, ContractorWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    contractor?: ContractorOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookingId?: number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    contractorId?: IntFilter<"Application"> | number
    customerCognitoId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    contractor?: XOR<ContractorScalarRelationFilter, ContractorWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }, "id" | "bookingId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    applicationDate?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    contractorId?: IntWithAggregatesFilter<"Application"> | number
    customerCognitoId?: StringWithAggregatesFilter<"Application"> | string
    name?: StringWithAggregatesFilter<"Application"> | string
    email?: StringWithAggregatesFilter<"Application"> | string
    phoneNumber?: StringWithAggregatesFilter<"Application"> | string
    message?: StringNullableWithAggregatesFilter<"Application"> | string | null
    bookingId?: IntNullableWithAggregatesFilter<"Application"> | number | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalFee?: FloatFilter<"Booking"> | number
    advanceFee?: FloatFilter<"Booking"> | number
    contractorId?: IntFilter<"Booking"> | number
    customerCognitoId?: StringFilter<"Booking"> | string
    contractor?: XOR<ContractorScalarRelationFilter, ContractorWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
    contractor?: ContractorOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    application?: ApplicationOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalFee?: FloatFilter<"Booking"> | number
    advanceFee?: FloatFilter<"Booking"> | number
    contractorId?: IntFilter<"Booking"> | number
    customerCognitoId?: StringFilter<"Booking"> | string
    contractor?: XOR<ContractorScalarRelationFilter, ContractorWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    startDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalFee?: FloatWithAggregatesFilter<"Booking"> | number
    advanceFee?: FloatWithAggregatesFilter<"Booking"> | number
    contractorId?: IntWithAggregatesFilter<"Booking"> | number
    customerCognitoId?: StringWithAggregatesFilter<"Booking"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: IntFilter<"Payment"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    bookingId?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: IntFilter<"Payment"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    bookingId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    amountDue?: FloatWithAggregatesFilter<"Payment"> | number
    amountPaid?: FloatWithAggregatesFilter<"Payment"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type ContractorCreateInput = {
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutContractorsInput
    manager: ManagerCreateNestedOneWithoutManagedContractorsInput
    bookings?: BookingCreateNestedManyWithoutContractorInput
    applications?: ApplicationCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerCreateNestedManyWithoutFavoritesInput
    customers?: CustomerCreateNestedManyWithoutContractorsInput
  }

  export type ContractorUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutContractorInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerUncheckedCreateNestedManyWithoutFavoritesInput
    customers?: CustomerUncheckedCreateNestedManyWithoutContractorsInput
  }

  export type ContractorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutContractorsNestedInput
    manager?: ManagerUpdateOneRequiredWithoutManagedContractorsNestedInput
    bookings?: BookingUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUncheckedUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorCreateManyInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
  }

  export type ContractorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContractorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    managedContractors?: ContractorCreateNestedManyWithoutManagerInput
  }

  export type ManagerUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    managedContractors?: ContractorUncheckedCreateNestedManyWithoutManagerInput
  }

  export type ManagerUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    managedContractors?: ContractorUpdateManyWithoutManagerNestedInput
  }

  export type ManagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    managedContractors?: ContractorUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ManagerCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ManagerUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorCreateNestedManyWithoutCustomersInput
    favorites?: ContractorCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutCustomerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorUncheckedCreateNestedManyWithoutCustomersInput
    favorites?: ContractorUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCustomerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUpdateManyWithoutCustomersNestedInput
    favorites?: ContractorUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUncheckedUpdateManyWithoutCustomersNestedInput
    favorites?: ContractorUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type CustomerUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    contractor: ContractorCreateNestedOneWithoutApplicationsInput
    customer: CustomerCreateNestedOneWithoutApplicationsInput
    booking?: BookingCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    contractorId: number
    customerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    bookingId?: number | null
  }

  export type ApplicationUpdateInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    contractor?: ContractorUpdateOneRequiredWithoutApplicationsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutApplicationsNestedInput
    booking?: BookingUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    contractorId?: IntFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationCreateManyInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    contractorId: number
    customerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    bookingId?: number | null
  }

  export type ApplicationUpdateManyMutationInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    contractorId?: IntFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingCreateInput = {
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractor: ContractorCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
    application?: ApplicationCreateNestedOneWithoutBookingInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractorId: number
    customerCognitoId: string
    application?: ApplicationUncheckedCreateNestedOneWithoutBookingInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractor?: ContractorUpdateOneRequiredWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    application?: ApplicationUpdateOneWithoutBookingNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractorId?: IntFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUncheckedUpdateOneWithoutBookingNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractorId: number
    customerCognitoId: string
  }

  export type BookingUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractorId?: IntFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    booking: BookingCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    bookingId: number
  }

  export type PaymentUpdateInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    booking?: BookingUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    bookingId: number
  }

  export type PaymentUpdateManyMutationInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAmenityNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Amenity[] | ListEnumAmenityFieldRefInput<$PrismaModel> | null
    has?: $Enums.Amenity | EnumAmenityFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Amenity[] | ListEnumAmenityFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Amenity[] | ListEnumAmenityFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumHighlightNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Highlight[] | ListEnumHighlightFieldRefInput<$PrismaModel> | null
    has?: $Enums.Highlight | EnumHighlightFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Highlight[] | ListEnumHighlightFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Highlight[] | ListEnumHighlightFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumContractorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractorType | EnumContractorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractorTypeFilter<$PrismaModel> | $Enums.ContractorType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type ManagerScalarRelationFilter = {
    is?: ManagerWhereInput
    isNot?: ManagerWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hourlyRate?: SortOrder
    advancePayment?: SortOrder
    installationFee?: SortOrder
    photoUrls?: SortOrder
    amenities?: SortOrder
    highlights?: SortOrder
    isEmergencyAvailable?: SortOrder
    offersOnSiteParking?: SortOrder
    yearsOfExperience?: SortOrder
    serviceAreaCoverage?: SortOrder
    teamSize?: SortOrder
    contractorType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type ContractorAvgOrderByAggregateInput = {
    id?: SortOrder
    hourlyRate?: SortOrder
    advancePayment?: SortOrder
    installationFee?: SortOrder
    yearsOfExperience?: SortOrder
    serviceAreaCoverage?: SortOrder
    teamSize?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
  }

  export type ContractorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hourlyRate?: SortOrder
    advancePayment?: SortOrder
    installationFee?: SortOrder
    isEmergencyAvailable?: SortOrder
    offersOnSiteParking?: SortOrder
    yearsOfExperience?: SortOrder
    serviceAreaCoverage?: SortOrder
    teamSize?: SortOrder
    contractorType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type ContractorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hourlyRate?: SortOrder
    advancePayment?: SortOrder
    installationFee?: SortOrder
    isEmergencyAvailable?: SortOrder
    offersOnSiteParking?: SortOrder
    yearsOfExperience?: SortOrder
    serviceAreaCoverage?: SortOrder
    teamSize?: SortOrder
    contractorType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    managerCognitoId?: SortOrder
  }

  export type ContractorSumOrderByAggregateInput = {
    id?: SortOrder
    hourlyRate?: SortOrder
    advancePayment?: SortOrder
    installationFee?: SortOrder
    yearsOfExperience?: SortOrder
    serviceAreaCoverage?: SortOrder
    teamSize?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumContractorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractorType | EnumContractorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractorTypeFilter<$PrismaModel>
    _max?: NestedEnumContractorTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ContractorListRelationFilter = {
    every?: ContractorWhereInput
    some?: ContractorWhereInput
    none?: ContractorWhereInput
  }

  export type ContractorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ManagerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ManagerMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ManagerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ContractorScalarRelationFilter = {
    is?: ContractorWhereInput
    isNot?: ContractorWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    bookingId?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    contractorId?: SortOrder
    bookingId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    bookingId?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    bookingId?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    contractorId?: SortOrder
    bookingId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ApplicationNullableScalarRelationFilter = {
    is?: ApplicationWhereInput | null
    isNot?: ApplicationWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    contractorId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    contractorId?: SortOrder
    customerCognitoId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    contractorId?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    bookingId?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ContractorCreatephotoUrlsInput = {
    set: string[]
  }

  export type ContractorCreateamenitiesInput = {
    set: $Enums.Amenity[]
  }

  export type ContractorCreatehighlightsInput = {
    set: $Enums.Highlight[]
  }

  export type LocationCreateNestedOneWithoutContractorsInput = {
    connect?: LocationWhereUniqueInput
  }

  export type ManagerCreateNestedOneWithoutManagedContractorsInput = {
    create?: XOR<ManagerCreateWithoutManagedContractorsInput, ManagerUncheckedCreateWithoutManagedContractorsInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutManagedContractorsInput
    connect?: ManagerWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutContractorInput = {
    create?: XOR<BookingCreateWithoutContractorInput, BookingUncheckedCreateWithoutContractorInput> | BookingCreateWithoutContractorInput[] | BookingUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutContractorInput | BookingCreateOrConnectWithoutContractorInput[]
    createMany?: BookingCreateManyContractorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutContractorInput = {
    create?: XOR<ApplicationCreateWithoutContractorInput, ApplicationUncheckedCreateWithoutContractorInput> | ApplicationCreateWithoutContractorInput[] | ApplicationUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutContractorInput | ApplicationCreateOrConnectWithoutContractorInput[]
    createMany?: ApplicationCreateManyContractorInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput> | CustomerCreateWithoutFavoritesInput[] | CustomerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoritesInput | CustomerCreateOrConnectWithoutFavoritesInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutContractorsInput = {
    create?: XOR<CustomerCreateWithoutContractorsInput, CustomerUncheckedCreateWithoutContractorsInput> | CustomerCreateWithoutContractorsInput[] | CustomerUncheckedCreateWithoutContractorsInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutContractorsInput | CustomerCreateOrConnectWithoutContractorsInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutContractorInput = {
    create?: XOR<BookingCreateWithoutContractorInput, BookingUncheckedCreateWithoutContractorInput> | BookingCreateWithoutContractorInput[] | BookingUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutContractorInput | BookingCreateOrConnectWithoutContractorInput[]
    createMany?: BookingCreateManyContractorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutContractorInput = {
    create?: XOR<ApplicationCreateWithoutContractorInput, ApplicationUncheckedCreateWithoutContractorInput> | ApplicationCreateWithoutContractorInput[] | ApplicationUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutContractorInput | ApplicationCreateOrConnectWithoutContractorInput[]
    createMany?: ApplicationCreateManyContractorInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput> | CustomerCreateWithoutFavoritesInput[] | CustomerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoritesInput | CustomerCreateOrConnectWithoutFavoritesInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutContractorsInput = {
    create?: XOR<CustomerCreateWithoutContractorsInput, CustomerUncheckedCreateWithoutContractorsInput> | CustomerCreateWithoutContractorsInput[] | CustomerUncheckedCreateWithoutContractorsInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutContractorsInput | CustomerCreateOrConnectWithoutContractorsInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContractorUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractorUpdateamenitiesInput = {
    set?: $Enums.Amenity[]
    push?: $Enums.Amenity | $Enums.Amenity[]
  }

  export type ContractorUpdatehighlightsInput = {
    set?: $Enums.Highlight[]
    push?: $Enums.Highlight | $Enums.Highlight[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumContractorTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContractorType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutContractorsNestedInput = {
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutContractorsInput, LocationUpdateWithoutContractorsInput>, LocationUncheckedUpdateWithoutContractorsInput>
  }

  export type ManagerUpdateOneRequiredWithoutManagedContractorsNestedInput = {
    create?: XOR<ManagerCreateWithoutManagedContractorsInput, ManagerUncheckedCreateWithoutManagedContractorsInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutManagedContractorsInput
    upsert?: ManagerUpsertWithoutManagedContractorsInput
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutManagedContractorsInput, ManagerUpdateWithoutManagedContractorsInput>, ManagerUncheckedUpdateWithoutManagedContractorsInput>
  }

  export type BookingUpdateManyWithoutContractorNestedInput = {
    create?: XOR<BookingCreateWithoutContractorInput, BookingUncheckedCreateWithoutContractorInput> | BookingCreateWithoutContractorInput[] | BookingUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutContractorInput | BookingCreateOrConnectWithoutContractorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutContractorInput | BookingUpsertWithWhereUniqueWithoutContractorInput[]
    createMany?: BookingCreateManyContractorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutContractorInput | BookingUpdateWithWhereUniqueWithoutContractorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutContractorInput | BookingUpdateManyWithWhereWithoutContractorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutContractorNestedInput = {
    create?: XOR<ApplicationCreateWithoutContractorInput, ApplicationUncheckedCreateWithoutContractorInput> | ApplicationCreateWithoutContractorInput[] | ApplicationUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutContractorInput | ApplicationCreateOrConnectWithoutContractorInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutContractorInput | ApplicationUpsertWithWhereUniqueWithoutContractorInput[]
    createMany?: ApplicationCreateManyContractorInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutContractorInput | ApplicationUpdateWithWhereUniqueWithoutContractorInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutContractorInput | ApplicationUpdateManyWithWhereWithoutContractorInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput> | CustomerCreateWithoutFavoritesInput[] | CustomerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoritesInput | CustomerCreateOrConnectWithoutFavoritesInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutFavoritesInput | CustomerUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutFavoritesInput | CustomerUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutFavoritesInput | CustomerUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutContractorsNestedInput = {
    create?: XOR<CustomerCreateWithoutContractorsInput, CustomerUncheckedCreateWithoutContractorsInput> | CustomerCreateWithoutContractorsInput[] | CustomerUncheckedCreateWithoutContractorsInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutContractorsInput | CustomerCreateOrConnectWithoutContractorsInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutContractorsInput | CustomerUpsertWithWhereUniqueWithoutContractorsInput[]
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutContractorsInput | CustomerUpdateWithWhereUniqueWithoutContractorsInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutContractorsInput | CustomerUpdateManyWithWhereWithoutContractorsInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutContractorNestedInput = {
    create?: XOR<BookingCreateWithoutContractorInput, BookingUncheckedCreateWithoutContractorInput> | BookingCreateWithoutContractorInput[] | BookingUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutContractorInput | BookingCreateOrConnectWithoutContractorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutContractorInput | BookingUpsertWithWhereUniqueWithoutContractorInput[]
    createMany?: BookingCreateManyContractorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutContractorInput | BookingUpdateWithWhereUniqueWithoutContractorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutContractorInput | BookingUpdateManyWithWhereWithoutContractorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutContractorNestedInput = {
    create?: XOR<ApplicationCreateWithoutContractorInput, ApplicationUncheckedCreateWithoutContractorInput> | ApplicationCreateWithoutContractorInput[] | ApplicationUncheckedCreateWithoutContractorInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutContractorInput | ApplicationCreateOrConnectWithoutContractorInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutContractorInput | ApplicationUpsertWithWhereUniqueWithoutContractorInput[]
    createMany?: ApplicationCreateManyContractorInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutContractorInput | ApplicationUpdateWithWhereUniqueWithoutContractorInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutContractorInput | ApplicationUpdateManyWithWhereWithoutContractorInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput> | CustomerCreateWithoutFavoritesInput[] | CustomerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoritesInput | CustomerCreateOrConnectWithoutFavoritesInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutFavoritesInput | CustomerUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutFavoritesInput | CustomerUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutFavoritesInput | CustomerUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutContractorsNestedInput = {
    create?: XOR<CustomerCreateWithoutContractorsInput, CustomerUncheckedCreateWithoutContractorsInput> | CustomerCreateWithoutContractorsInput[] | CustomerUncheckedCreateWithoutContractorsInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutContractorsInput | CustomerCreateOrConnectWithoutContractorsInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutContractorsInput | CustomerUpsertWithWhereUniqueWithoutContractorsInput[]
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutContractorsInput | CustomerUpdateWithWhereUniqueWithoutContractorsInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutContractorsInput | CustomerUpdateManyWithWhereWithoutContractorsInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type ContractorCreateNestedManyWithoutManagerInput = {
    create?: XOR<ContractorCreateWithoutManagerInput, ContractorUncheckedCreateWithoutManagerInput> | ContractorCreateWithoutManagerInput[] | ContractorUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutManagerInput | ContractorCreateOrConnectWithoutManagerInput[]
    createMany?: ContractorCreateManyManagerInputEnvelope
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
  }

  export type ContractorUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ContractorCreateWithoutManagerInput, ContractorUncheckedCreateWithoutManagerInput> | ContractorCreateWithoutManagerInput[] | ContractorUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutManagerInput | ContractorCreateOrConnectWithoutManagerInput[]
    createMany?: ContractorCreateManyManagerInputEnvelope
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
  }

  export type ContractorUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ContractorCreateWithoutManagerInput, ContractorUncheckedCreateWithoutManagerInput> | ContractorCreateWithoutManagerInput[] | ContractorUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutManagerInput | ContractorCreateOrConnectWithoutManagerInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutManagerInput | ContractorUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ContractorCreateManyManagerInputEnvelope
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutManagerInput | ContractorUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutManagerInput | ContractorUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ContractorUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ContractorCreateWithoutManagerInput, ContractorUncheckedCreateWithoutManagerInput> | ContractorCreateWithoutManagerInput[] | ContractorUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutManagerInput | ContractorCreateOrConnectWithoutManagerInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutManagerInput | ContractorUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ContractorCreateManyManagerInputEnvelope
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutManagerInput | ContractorUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutManagerInput | ContractorUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ContractorCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ContractorCreateWithoutCustomersInput, ContractorUncheckedCreateWithoutCustomersInput> | ContractorCreateWithoutCustomersInput[] | ContractorUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutCustomersInput | ContractorCreateOrConnectWithoutCustomersInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
  }

  export type ContractorCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<ContractorCreateWithoutFavoritedByInput, ContractorUncheckedCreateWithoutFavoritedByInput> | ContractorCreateWithoutFavoritedByInput[] | ContractorUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutFavoritedByInput | ContractorCreateOrConnectWithoutFavoritedByInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ApplicationCreateWithoutCustomerInput, ApplicationUncheckedCreateWithoutCustomerInput> | ApplicationCreateWithoutCustomerInput[] | ApplicationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCustomerInput | ApplicationCreateOrConnectWithoutCustomerInput[]
    createMany?: ApplicationCreateManyCustomerInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ContractorUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ContractorCreateWithoutCustomersInput, ContractorUncheckedCreateWithoutCustomersInput> | ContractorCreateWithoutCustomersInput[] | ContractorUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutCustomersInput | ContractorCreateOrConnectWithoutCustomersInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
  }

  export type ContractorUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<ContractorCreateWithoutFavoritedByInput, ContractorUncheckedCreateWithoutFavoritedByInput> | ContractorCreateWithoutFavoritedByInput[] | ContractorUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutFavoritedByInput | ContractorCreateOrConnectWithoutFavoritedByInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ApplicationCreateWithoutCustomerInput, ApplicationUncheckedCreateWithoutCustomerInput> | ApplicationCreateWithoutCustomerInput[] | ApplicationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCustomerInput | ApplicationCreateOrConnectWithoutCustomerInput[]
    createMany?: ApplicationCreateManyCustomerInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ContractorUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ContractorCreateWithoutCustomersInput, ContractorUncheckedCreateWithoutCustomersInput> | ContractorCreateWithoutCustomersInput[] | ContractorUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutCustomersInput | ContractorCreateOrConnectWithoutCustomersInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutCustomersInput | ContractorUpsertWithWhereUniqueWithoutCustomersInput[]
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutCustomersInput | ContractorUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutCustomersInput | ContractorUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ContractorUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<ContractorCreateWithoutFavoritedByInput, ContractorUncheckedCreateWithoutFavoritedByInput> | ContractorCreateWithoutFavoritedByInput[] | ContractorUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutFavoritedByInput | ContractorCreateOrConnectWithoutFavoritedByInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutFavoritedByInput | ContractorUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutFavoritedByInput | ContractorUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutFavoritedByInput | ContractorUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ApplicationCreateWithoutCustomerInput, ApplicationUncheckedCreateWithoutCustomerInput> | ApplicationCreateWithoutCustomerInput[] | ApplicationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCustomerInput | ApplicationCreateOrConnectWithoutCustomerInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCustomerInput | ApplicationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ApplicationCreateManyCustomerInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCustomerInput | ApplicationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCustomerInput | ApplicationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ContractorUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ContractorCreateWithoutCustomersInput, ContractorUncheckedCreateWithoutCustomersInput> | ContractorCreateWithoutCustomersInput[] | ContractorUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutCustomersInput | ContractorCreateOrConnectWithoutCustomersInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutCustomersInput | ContractorUpsertWithWhereUniqueWithoutCustomersInput[]
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutCustomersInput | ContractorUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutCustomersInput | ContractorUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ContractorUncheckedUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<ContractorCreateWithoutFavoritedByInput, ContractorUncheckedCreateWithoutFavoritedByInput> | ContractorCreateWithoutFavoritedByInput[] | ContractorUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutFavoritedByInput | ContractorCreateOrConnectWithoutFavoritedByInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutFavoritedByInput | ContractorUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutFavoritedByInput | ContractorUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutFavoritedByInput | ContractorUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ApplicationCreateWithoutCustomerInput, ApplicationUncheckedCreateWithoutCustomerInput> | ApplicationCreateWithoutCustomerInput[] | ApplicationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCustomerInput | ApplicationCreateOrConnectWithoutCustomerInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCustomerInput | ApplicationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ApplicationCreateManyCustomerInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCustomerInput | ApplicationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCustomerInput | ApplicationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ContractorUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ContractorCreateWithoutLocationInput, ContractorUncheckedCreateWithoutLocationInput> | ContractorCreateWithoutLocationInput[] | ContractorUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutLocationInput | ContractorCreateOrConnectWithoutLocationInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutLocationInput | ContractorUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ContractorCreateManyLocationInputEnvelope
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutLocationInput | ContractorUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutLocationInput | ContractorUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ContractorUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ContractorCreateWithoutLocationInput, ContractorUncheckedCreateWithoutLocationInput> | ContractorCreateWithoutLocationInput[] | ContractorUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ContractorCreateOrConnectWithoutLocationInput | ContractorCreateOrConnectWithoutLocationInput[]
    upsert?: ContractorUpsertWithWhereUniqueWithoutLocationInput | ContractorUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ContractorCreateManyLocationInputEnvelope
    set?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    disconnect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    delete?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    connect?: ContractorWhereUniqueInput | ContractorWhereUniqueInput[]
    update?: ContractorUpdateWithWhereUniqueWithoutLocationInput | ContractorUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ContractorUpdateManyWithWhereWithoutLocationInput | ContractorUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
  }

  export type ContractorCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ContractorCreateWithoutApplicationsInput, ContractorUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ContractorCreateOrConnectWithoutApplicationsInput
    connect?: ContractorWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CustomerCreateWithoutApplicationsInput, CustomerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutApplicationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutApplicationInput = {
    create?: XOR<BookingCreateWithoutApplicationInput, BookingUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: BookingCreateOrConnectWithoutApplicationInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContractorUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ContractorCreateWithoutApplicationsInput, ContractorUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ContractorCreateOrConnectWithoutApplicationsInput
    upsert?: ContractorUpsertWithoutApplicationsInput
    connect?: ContractorWhereUniqueInput
    update?: XOR<XOR<ContractorUpdateToOneWithWhereWithoutApplicationsInput, ContractorUpdateWithoutApplicationsInput>, ContractorUncheckedUpdateWithoutApplicationsInput>
  }

  export type CustomerUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CustomerCreateWithoutApplicationsInput, CustomerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutApplicationsInput
    upsert?: CustomerUpsertWithoutApplicationsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutApplicationsInput, CustomerUpdateWithoutApplicationsInput>, CustomerUncheckedUpdateWithoutApplicationsInput>
  }

  export type BookingUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<BookingCreateWithoutApplicationInput, BookingUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: BookingCreateOrConnectWithoutApplicationInput
    upsert?: BookingUpsertWithoutApplicationInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutApplicationInput, BookingUpdateWithoutApplicationInput>, BookingUncheckedUpdateWithoutApplicationInput>
  }

  export type ContractorCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ContractorCreateWithoutBookingsInput, ContractorUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ContractorCreateOrConnectWithoutBookingsInput
    connect?: ContractorWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ApplicationCreateNestedOneWithoutBookingInput = {
    create?: XOR<ApplicationCreateWithoutBookingInput, ApplicationUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutBookingInput
    connect?: ApplicationWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<ApplicationCreateWithoutBookingInput, ApplicationUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutBookingInput
    connect?: ApplicationWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ContractorUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ContractorCreateWithoutBookingsInput, ContractorUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ContractorCreateOrConnectWithoutBookingsInput
    upsert?: ContractorUpsertWithoutBookingsInput
    connect?: ContractorWhereUniqueInput
    update?: XOR<XOR<ContractorUpdateToOneWithWhereWithoutBookingsInput, ContractorUpdateWithoutBookingsInput>, ContractorUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type ApplicationUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ApplicationCreateWithoutBookingInput, ApplicationUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutBookingInput
    upsert?: ApplicationUpsertWithoutBookingInput
    disconnect?: ApplicationWhereInput | boolean
    delete?: ApplicationWhereInput | boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutBookingInput, ApplicationUpdateWithoutBookingInput>, ApplicationUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ApplicationCreateWithoutBookingInput, ApplicationUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutBookingInput
    upsert?: ApplicationUpsertWithoutBookingInput
    disconnect?: ApplicationWhereInput | boolean
    delete?: ApplicationWhereInput | boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutBookingInput, ApplicationUpdateWithoutBookingInput>, ApplicationUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BookingUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    upsert?: BookingUpsertWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentsInput, BookingUpdateWithoutPaymentsInput>, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumContractorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractorType | EnumContractorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractorTypeFilter<$PrismaModel> | $Enums.ContractorType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumContractorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractorType | EnumContractorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractorType[] | ListEnumContractorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractorTypeFilter<$PrismaModel>
    _max?: NestedEnumContractorTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ManagerCreateWithoutManagedContractorsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ManagerUncheckedCreateWithoutManagedContractorsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ManagerCreateOrConnectWithoutManagedContractorsInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutManagedContractorsInput, ManagerUncheckedCreateWithoutManagedContractorsInput>
  }

  export type BookingCreateWithoutContractorInput = {
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    customer: CustomerCreateNestedOneWithoutBookingsInput
    application?: ApplicationCreateNestedOneWithoutBookingInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutContractorInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    customerCognitoId: string
    application?: ApplicationUncheckedCreateNestedOneWithoutBookingInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutContractorInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutContractorInput, BookingUncheckedCreateWithoutContractorInput>
  }

  export type BookingCreateManyContractorInputEnvelope = {
    data: BookingCreateManyContractorInput | BookingCreateManyContractorInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutContractorInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    customer: CustomerCreateNestedOneWithoutApplicationsInput
    booking?: BookingCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutContractorInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    customerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    bookingId?: number | null
  }

  export type ApplicationCreateOrConnectWithoutContractorInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutContractorInput, ApplicationUncheckedCreateWithoutContractorInput>
  }

  export type ApplicationCreateManyContractorInputEnvelope = {
    data: ApplicationCreateManyContractorInput | ApplicationCreateManyContractorInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutFavoritesInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorCreateNestedManyWithoutCustomersInput
    applications?: ApplicationCreateNestedManyWithoutCustomerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFavoritesInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorUncheckedCreateNestedManyWithoutCustomersInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCustomerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFavoritesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput>
  }

  export type CustomerCreateWithoutContractorsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    favorites?: ContractorCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutCustomerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutContractorsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    favorites?: ContractorUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCustomerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutContractorsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutContractorsInput, CustomerUncheckedCreateWithoutContractorsInput>
  }

  export type LocationUpdateToOneWithWhereWithoutContractorsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutContractorsInput, LocationUncheckedUpdateWithoutContractorsInput>
  }

  export type LocationUpdateWithoutContractorsInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutContractorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerUpsertWithoutManagedContractorsInput = {
    update: XOR<ManagerUpdateWithoutManagedContractorsInput, ManagerUncheckedUpdateWithoutManagedContractorsInput>
    create: XOR<ManagerCreateWithoutManagedContractorsInput, ManagerUncheckedCreateWithoutManagedContractorsInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutManagedContractorsInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutManagedContractorsInput, ManagerUncheckedUpdateWithoutManagedContractorsInput>
  }

  export type ManagerUpdateWithoutManagedContractorsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerUncheckedUpdateWithoutManagedContractorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpsertWithWhereUniqueWithoutContractorInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutContractorInput, BookingUncheckedUpdateWithoutContractorInput>
    create: XOR<BookingCreateWithoutContractorInput, BookingUncheckedCreateWithoutContractorInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutContractorInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutContractorInput, BookingUncheckedUpdateWithoutContractorInput>
  }

  export type BookingUpdateManyWithWhereWithoutContractorInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutContractorInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalFee?: FloatFilter<"Booking"> | number
    advanceFee?: FloatFilter<"Booking"> | number
    contractorId?: IntFilter<"Booking"> | number
    customerCognitoId?: StringFilter<"Booking"> | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutContractorInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutContractorInput, ApplicationUncheckedUpdateWithoutContractorInput>
    create: XOR<ApplicationCreateWithoutContractorInput, ApplicationUncheckedCreateWithoutContractorInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutContractorInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutContractorInput, ApplicationUncheckedUpdateWithoutContractorInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutContractorInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutContractorInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    contractorId?: IntFilter<"Application"> | number
    customerCognitoId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    bookingId?: IntNullableFilter<"Application"> | number | null
  }

  export type CustomerUpsertWithWhereUniqueWithoutFavoritesInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutFavoritesInput, CustomerUncheckedUpdateWithoutFavoritesInput>
    create: XOR<CustomerCreateWithoutFavoritesInput, CustomerUncheckedCreateWithoutFavoritesInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutFavoritesInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutFavoritesInput, CustomerUncheckedUpdateWithoutFavoritesInput>
  }

  export type CustomerUpdateManyWithWhereWithoutFavoritesInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    cognitoId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutContractorsInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutContractorsInput, CustomerUncheckedUpdateWithoutContractorsInput>
    create: XOR<CustomerCreateWithoutContractorsInput, CustomerUncheckedCreateWithoutContractorsInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutContractorsInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutContractorsInput, CustomerUncheckedUpdateWithoutContractorsInput>
  }

  export type CustomerUpdateManyWithWhereWithoutContractorsInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutContractorsInput>
  }

  export type ContractorCreateWithoutManagerInput = {
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutContractorsInput
    bookings?: BookingCreateNestedManyWithoutContractorInput
    applications?: ApplicationCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerCreateNestedManyWithoutFavoritesInput
    customers?: CustomerCreateNestedManyWithoutContractorsInput
  }

  export type ContractorUncheckedCreateWithoutManagerInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    bookings?: BookingUncheckedCreateNestedManyWithoutContractorInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerUncheckedCreateNestedManyWithoutFavoritesInput
    customers?: CustomerUncheckedCreateNestedManyWithoutContractorsInput
  }

  export type ContractorCreateOrConnectWithoutManagerInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutManagerInput, ContractorUncheckedCreateWithoutManagerInput>
  }

  export type ContractorCreateManyManagerInputEnvelope = {
    data: ContractorCreateManyManagerInput | ContractorCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ContractorUpsertWithWhereUniqueWithoutManagerInput = {
    where: ContractorWhereUniqueInput
    update: XOR<ContractorUpdateWithoutManagerInput, ContractorUncheckedUpdateWithoutManagerInput>
    create: XOR<ContractorCreateWithoutManagerInput, ContractorUncheckedCreateWithoutManagerInput>
  }

  export type ContractorUpdateWithWhereUniqueWithoutManagerInput = {
    where: ContractorWhereUniqueInput
    data: XOR<ContractorUpdateWithoutManagerInput, ContractorUncheckedUpdateWithoutManagerInput>
  }

  export type ContractorUpdateManyWithWhereWithoutManagerInput = {
    where: ContractorScalarWhereInput
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyWithoutManagerInput>
  }

  export type ContractorScalarWhereInput = {
    AND?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
    OR?: ContractorScalarWhereInput[]
    NOT?: ContractorScalarWhereInput | ContractorScalarWhereInput[]
    id?: IntFilter<"Contractor"> | number
    name?: StringFilter<"Contractor"> | string
    description?: StringFilter<"Contractor"> | string
    hourlyRate?: FloatFilter<"Contractor"> | number
    advancePayment?: FloatFilter<"Contractor"> | number
    installationFee?: FloatFilter<"Contractor"> | number
    photoUrls?: StringNullableListFilter<"Contractor">
    amenities?: EnumAmenityNullableListFilter<"Contractor">
    highlights?: EnumHighlightNullableListFilter<"Contractor">
    isEmergencyAvailable?: BoolFilter<"Contractor"> | boolean
    offersOnSiteParking?: BoolFilter<"Contractor"> | boolean
    yearsOfExperience?: IntFilter<"Contractor"> | number
    serviceAreaCoverage?: FloatFilter<"Contractor"> | number
    teamSize?: IntFilter<"Contractor"> | number
    contractorType?: EnumContractorTypeFilter<"Contractor"> | $Enums.ContractorType
    postedDate?: DateTimeFilter<"Contractor"> | Date | string
    averageRating?: FloatNullableFilter<"Contractor"> | number | null
    numberOfReviews?: IntNullableFilter<"Contractor"> | number | null
    locationId?: IntFilter<"Contractor"> | number
    managerCognitoId?: StringFilter<"Contractor"> | string
  }

  export type ContractorCreateWithoutCustomersInput = {
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutContractorsInput
    manager: ManagerCreateNestedOneWithoutManagedContractorsInput
    bookings?: BookingCreateNestedManyWithoutContractorInput
    applications?: ApplicationCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerCreateNestedManyWithoutFavoritesInput
  }

  export type ContractorUncheckedCreateWithoutCustomersInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutContractorInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerUncheckedCreateNestedManyWithoutFavoritesInput
  }

  export type ContractorCreateOrConnectWithoutCustomersInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutCustomersInput, ContractorUncheckedCreateWithoutCustomersInput>
  }

  export type ContractorCreateWithoutFavoritedByInput = {
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutContractorsInput
    manager: ManagerCreateNestedOneWithoutManagedContractorsInput
    bookings?: BookingCreateNestedManyWithoutContractorInput
    applications?: ApplicationCreateNestedManyWithoutContractorInput
    customers?: CustomerCreateNestedManyWithoutContractorsInput
  }

  export type ContractorUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutContractorInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutContractorInput
    customers?: CustomerUncheckedCreateNestedManyWithoutContractorsInput
  }

  export type ContractorCreateOrConnectWithoutFavoritedByInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutFavoritedByInput, ContractorUncheckedCreateWithoutFavoritedByInput>
  }

  export type ApplicationCreateWithoutCustomerInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    contractor: ContractorCreateNestedOneWithoutApplicationsInput
    booking?: BookingCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutCustomerInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    contractorId: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    bookingId?: number | null
  }

  export type ApplicationCreateOrConnectWithoutCustomerInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutCustomerInput, ApplicationUncheckedCreateWithoutCustomerInput>
  }

  export type ApplicationCreateManyCustomerInputEnvelope = {
    data: ApplicationCreateManyCustomerInput | ApplicationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutCustomerInput = {
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractor: ContractorCreateNestedOneWithoutBookingsInput
    application?: ApplicationCreateNestedOneWithoutBookingInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractorId: number
    application?: ApplicationUncheckedCreateNestedOneWithoutBookingInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ContractorUpsertWithWhereUniqueWithoutCustomersInput = {
    where: ContractorWhereUniqueInput
    update: XOR<ContractorUpdateWithoutCustomersInput, ContractorUncheckedUpdateWithoutCustomersInput>
    create: XOR<ContractorCreateWithoutCustomersInput, ContractorUncheckedCreateWithoutCustomersInput>
  }

  export type ContractorUpdateWithWhereUniqueWithoutCustomersInput = {
    where: ContractorWhereUniqueInput
    data: XOR<ContractorUpdateWithoutCustomersInput, ContractorUncheckedUpdateWithoutCustomersInput>
  }

  export type ContractorUpdateManyWithWhereWithoutCustomersInput = {
    where: ContractorScalarWhereInput
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyWithoutCustomersInput>
  }

  export type ContractorUpsertWithWhereUniqueWithoutFavoritedByInput = {
    where: ContractorWhereUniqueInput
    update: XOR<ContractorUpdateWithoutFavoritedByInput, ContractorUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<ContractorCreateWithoutFavoritedByInput, ContractorUncheckedCreateWithoutFavoritedByInput>
  }

  export type ContractorUpdateWithWhereUniqueWithoutFavoritedByInput = {
    where: ContractorWhereUniqueInput
    data: XOR<ContractorUpdateWithoutFavoritedByInput, ContractorUncheckedUpdateWithoutFavoritedByInput>
  }

  export type ContractorUpdateManyWithWhereWithoutFavoritedByInput = {
    where: ContractorScalarWhereInput
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyWithoutFavoritedByInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutCustomerInput, ApplicationUncheckedUpdateWithoutCustomerInput>
    create: XOR<ApplicationCreateWithoutCustomerInput, ApplicationUncheckedCreateWithoutCustomerInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutCustomerInput, ApplicationUncheckedUpdateWithoutCustomerInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutCustomerInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ContractorCreateWithoutLocationInput = {
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    manager: ManagerCreateNestedOneWithoutManagedContractorsInput
    bookings?: BookingCreateNestedManyWithoutContractorInput
    applications?: ApplicationCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerCreateNestedManyWithoutFavoritesInput
    customers?: CustomerCreateNestedManyWithoutContractorsInput
  }

  export type ContractorUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutContractorInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerUncheckedCreateNestedManyWithoutFavoritesInput
    customers?: CustomerUncheckedCreateNestedManyWithoutContractorsInput
  }

  export type ContractorCreateOrConnectWithoutLocationInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutLocationInput, ContractorUncheckedCreateWithoutLocationInput>
  }

  export type ContractorUpsertWithWhereUniqueWithoutLocationInput = {
    where: ContractorWhereUniqueInput
    update: XOR<ContractorUpdateWithoutLocationInput, ContractorUncheckedUpdateWithoutLocationInput>
    create: XOR<ContractorCreateWithoutLocationInput, ContractorUncheckedCreateWithoutLocationInput>
  }

  export type ContractorCreateManyLocationInputEnvelope = {
    data: ContractorCreateManyLocationInput | ContractorCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ContractorUpdateWithWhereUniqueWithoutLocationInput = {
    where: ContractorWhereUniqueInput
    data: XOR<ContractorUpdateWithoutLocationInput, ContractorUncheckedUpdateWithoutLocationInput>
  }

  export type ContractorUpdateManyWithWhereWithoutLocationInput = {
    where: ContractorScalarWhereInput
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyWithoutLocationInput>
  }

  export type ContractorCreateWithoutApplicationsInput = {
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutContractorsInput
    manager: ManagerCreateNestedOneWithoutManagedContractorsInput
    bookings?: BookingCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerCreateNestedManyWithoutFavoritesInput
    customers?: CustomerCreateNestedManyWithoutContractorsInput
  }

  export type ContractorUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerUncheckedCreateNestedManyWithoutFavoritesInput
    customers?: CustomerUncheckedCreateNestedManyWithoutContractorsInput
  }

  export type ContractorCreateOrConnectWithoutApplicationsInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutApplicationsInput, ContractorUncheckedCreateWithoutApplicationsInput>
  }

  export type CustomerCreateWithoutApplicationsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorCreateNestedManyWithoutCustomersInput
    favorites?: ContractorCreateNestedManyWithoutFavoritedByInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutApplicationsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorUncheckedCreateNestedManyWithoutCustomersInput
    favorites?: ContractorUncheckedCreateNestedManyWithoutFavoritedByInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutApplicationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutApplicationsInput, CustomerUncheckedCreateWithoutApplicationsInput>
  }

  export type BookingCreateWithoutApplicationInput = {
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractor: ContractorCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutApplicationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractorId: number
    customerCognitoId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutApplicationInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutApplicationInput, BookingUncheckedCreateWithoutApplicationInput>
  }

  export type ContractorUpsertWithoutApplicationsInput = {
    update: XOR<ContractorUpdateWithoutApplicationsInput, ContractorUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ContractorCreateWithoutApplicationsInput, ContractorUncheckedCreateWithoutApplicationsInput>
    where?: ContractorWhereInput
  }

  export type ContractorUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ContractorWhereInput
    data: XOR<ContractorUpdateWithoutApplicationsInput, ContractorUncheckedUpdateWithoutApplicationsInput>
  }

  export type ContractorUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutContractorsNestedInput
    manager?: ManagerUpdateOneRequiredWithoutManagedContractorsNestedInput
    bookings?: BookingUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUncheckedUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutContractorsNestedInput
  }

  export type CustomerUpsertWithoutApplicationsInput = {
    update: XOR<CustomerUpdateWithoutApplicationsInput, CustomerUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CustomerCreateWithoutApplicationsInput, CustomerUncheckedCreateWithoutApplicationsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutApplicationsInput, CustomerUncheckedUpdateWithoutApplicationsInput>
  }

  export type CustomerUpdateWithoutApplicationsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUpdateManyWithoutCustomersNestedInput
    favorites?: ContractorUpdateManyWithoutFavoritedByNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUncheckedUpdateManyWithoutCustomersNestedInput
    favorites?: ContractorUncheckedUpdateManyWithoutFavoritedByNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BookingUpsertWithoutApplicationInput = {
    update: XOR<BookingUpdateWithoutApplicationInput, BookingUncheckedUpdateWithoutApplicationInput>
    create: XOR<BookingCreateWithoutApplicationInput, BookingUncheckedCreateWithoutApplicationInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutApplicationInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutApplicationInput, BookingUncheckedUpdateWithoutApplicationInput>
  }

  export type BookingUpdateWithoutApplicationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractor?: ContractorUpdateOneRequiredWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractorId?: IntFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type ContractorCreateWithoutBookingsInput = {
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutContractorsInput
    manager: ManagerCreateNestedOneWithoutManagedContractorsInput
    applications?: ApplicationCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerCreateNestedManyWithoutFavoritesInput
    customers?: CustomerCreateNestedManyWithoutContractorsInput
  }

  export type ContractorUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    managerCognitoId: string
    applications?: ApplicationUncheckedCreateNestedManyWithoutContractorInput
    favoritedBy?: CustomerUncheckedCreateNestedManyWithoutFavoritesInput
    customers?: CustomerUncheckedCreateNestedManyWithoutContractorsInput
  }

  export type ContractorCreateOrConnectWithoutBookingsInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutBookingsInput, ContractorUncheckedCreateWithoutBookingsInput>
  }

  export type CustomerCreateWithoutBookingsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorCreateNestedManyWithoutCustomersInput
    favorites?: ContractorCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    contractors?: ContractorUncheckedCreateNestedManyWithoutCustomersInput
    favorites?: ContractorUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type ApplicationCreateWithoutBookingInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    contractor: ContractorCreateNestedOneWithoutApplicationsInput
    customer: CustomerCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutBookingInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    contractorId: number
    customerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
  }

  export type ApplicationCreateOrConnectWithoutBookingInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutBookingInput, ApplicationUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type ContractorUpsertWithoutBookingsInput = {
    update: XOR<ContractorUpdateWithoutBookingsInput, ContractorUncheckedUpdateWithoutBookingsInput>
    create: XOR<ContractorCreateWithoutBookingsInput, ContractorUncheckedCreateWithoutBookingsInput>
    where?: ContractorWhereInput
  }

  export type ContractorUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ContractorWhereInput
    data: XOR<ContractorUpdateWithoutBookingsInput, ContractorUncheckedUpdateWithoutBookingsInput>
  }

  export type ContractorUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutContractorsNestedInput
    manager?: ManagerUpdateOneRequiredWithoutManagedContractorsNestedInput
    applications?: ApplicationUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUncheckedUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUncheckedUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutContractorsNestedInput
  }

  export type CustomerUpsertWithoutBookingsInput = {
    update: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateWithoutBookingsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUpdateManyWithoutCustomersNestedInput
    favorites?: ContractorUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUncheckedUpdateManyWithoutCustomersNestedInput
    favorites?: ContractorUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ApplicationUpsertWithoutBookingInput = {
    update: XOR<ApplicationUpdateWithoutBookingInput, ApplicationUncheckedUpdateWithoutBookingInput>
    create: XOR<ApplicationCreateWithoutBookingInput, ApplicationUncheckedCreateWithoutBookingInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutBookingInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutBookingInput, ApplicationUncheckedUpdateWithoutBookingInput>
  }

  export type ApplicationUpdateWithoutBookingInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    contractor?: ContractorUpdateOneRequiredWithoutApplicationsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    contractorId?: IntFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: IntFilter<"Payment"> | number
  }

  export type BookingCreateWithoutPaymentsInput = {
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractor: ContractorCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
    application?: ApplicationCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentsInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractorId: number
    customerCognitoId: string
    application?: ApplicationUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingUpsertWithoutPaymentsInput = {
    update: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateWithoutPaymentsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractor?: ContractorUpdateOneRequiredWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    application?: ApplicationUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractorId?: IntFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyContractorInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    customerCognitoId: string
  }

  export type ApplicationCreateManyContractorInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    customerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    bookingId?: number | null
  }

  export type BookingUpdateWithoutContractorInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    application?: ApplicationUpdateOneWithoutBookingNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutContractorInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUncheckedUpdateOneWithoutBookingNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutContractorInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    customerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpdateWithoutContractorInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneRequiredWithoutApplicationsNestedInput
    booking?: BookingUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutContractorInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationUncheckedUpdateManyWithoutContractorInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    customerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CustomerUpdateWithoutFavoritesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUpdateManyWithoutCustomersNestedInput
    applications?: ApplicationUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contractors?: ContractorUncheckedUpdateManyWithoutCustomersNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpdateWithoutContractorsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    favorites?: ContractorUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutContractorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    favorites?: ContractorUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutContractorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ContractorCreateManyManagerInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
  }

  export type ContractorUpdateWithoutManagerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutContractorsNestedInput
    bookings?: BookingUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUncheckedUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationCreateManyCustomerInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    contractorId: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    bookingId?: number | null
  }

  export type BookingCreateManyCustomerInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    totalFee: number
    advanceFee: number
    contractorId: number
  }

  export type ContractorUpdateWithoutCustomersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutContractorsNestedInput
    manager?: ManagerUpdateOneRequiredWithoutManagedContractorsNestedInput
    bookings?: BookingUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUpdateManyWithoutFavoritesNestedInput
  }

  export type ContractorUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUncheckedUpdateManyWithoutFavoritesNestedInput
  }

  export type ContractorUncheckedUpdateManyWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ContractorUpdateWithoutFavoritedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutContractorsNestedInput
    manager?: ManagerUpdateOneRequiredWithoutManagedContractorsNestedInput
    bookings?: BookingUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUpdateManyWithoutContractorNestedInput
    customers?: CustomerUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutContractorNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpdateWithoutCustomerInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    contractor?: ContractorUpdateOneRequiredWithoutApplicationsNestedInput
    booking?: BookingUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    contractorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    contractorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUpdateWithoutCustomerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractor?: ContractorUpdateOneRequiredWithoutBookingsNestedInput
    application?: ApplicationUpdateOneWithoutBookingNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractorId?: IntFieldUpdateOperationsInput | number
    application?: ApplicationUncheckedUpdateOneWithoutBookingNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalFee?: FloatFieldUpdateOperationsInput | number
    advanceFee?: FloatFieldUpdateOperationsInput | number
    contractorId?: IntFieldUpdateOperationsInput | number
  }

  export type ContractorUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: ManagerUpdateOneRequiredWithoutManagedContractorsNestedInput
    bookings?: BookingUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutContractorNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutContractorNestedInput
    favoritedBy?: CustomerUncheckedUpdateManyWithoutFavoritesNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutContractorsNestedInput
  }

  export type ContractorCreateManyLocationInput = {
    id?: number
    name: string
    description: string
    hourlyRate: number
    advancePayment: number
    installationFee: number
    photoUrls?: ContractorCreatephotoUrlsInput | string[]
    amenities?: ContractorCreateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorCreatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: boolean
    offersOnSiteParking?: boolean
    yearsOfExperience: number
    serviceAreaCoverage: number
    teamSize: number
    contractorType: $Enums.ContractorType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    managerCognitoId: string
  }

  export type ContractorUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    advancePayment?: FloatFieldUpdateOperationsInput | number
    installationFee?: FloatFieldUpdateOperationsInput | number
    photoUrls?: ContractorUpdatephotoUrlsInput | string[]
    amenities?: ContractorUpdateamenitiesInput | $Enums.Amenity[]
    highlights?: ContractorUpdatehighlightsInput | $Enums.Highlight[]
    isEmergencyAvailable?: BoolFieldUpdateOperationsInput | boolean
    offersOnSiteParking?: BoolFieldUpdateOperationsInput | boolean
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    serviceAreaCoverage?: FloatFieldUpdateOperationsInput | number
    teamSize?: IntFieldUpdateOperationsInput | number
    contractorType?: EnumContractorTypeFieldUpdateOperationsInput | $Enums.ContractorType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    managerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyBookingInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUpdateWithoutBookingInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}