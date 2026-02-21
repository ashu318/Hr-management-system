
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * ////////////////////////
 * ////////////////////////
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * ////////////////////////
 * ////////////////////////
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Holiday
 * ////////////////////////
 * ////////////////////////
 */
export type Holiday = $Result.DefaultSelection<Prisma.$HolidayPayload>
/**
 * Model LeaveBalance
 * ////////////////////////
 * ////////////////////////
 */
export type LeaveBalance = $Result.DefaultSelection<Prisma.$LeaveBalancePayload>
/**
 * Model LeaveApplication
 * ////////////////////////
 * ////////////////////////
 */
export type LeaveApplication = $Result.DefaultSelection<Prisma.$LeaveApplicationPayload>
/**
 * Model Announcement
 * ////////////////////////
 * ////////////////////////
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model AnnouncementRecipient
 * ////////////////////////
 * ////////////////////////
 */
export type AnnouncementRecipient = $Result.DefaultSelection<Prisma.$AnnouncementRecipientPayload>
/**
 * Model FinancialDetails
 * ////////////////////////
 * ////////////////////////
 */
export type FinancialDetails = $Result.DefaultSelection<Prisma.$FinancialDetailsPayload>
/**
 * Model PayrollSettings
 * ////////////////////////
 * ////////////////////////
 */
export type PayrollSettings = $Result.DefaultSelection<Prisma.$PayrollSettingsPayload>
/**
 * Model LeaveComment
 * ////////////////////////
 * ////////////////////////
 */
export type LeaveComment = $Result.DefaultSelection<Prisma.$LeaveCommentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const EmploymentType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT',
  INTERN: 'INTERN'
};

export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType]


export const HolidayType: {
  NATIONAL: 'NATIONAL',
  FESTIVAL: 'FESTIVAL',
  COMPANY: 'COMPANY'
};

export type HolidayType = (typeof HolidayType)[keyof typeof HolidayType]


export const LeaveType: {
  PAID_LEAVE: 'PAID_LEAVE',
  SICK_LEAVE: 'SICK_LEAVE',
  CASUAL_LEAVE: 'CASUAL_LEAVE',
  MATERNITY_LEAVE: 'MATERNITY_LEAVE',
  PATERNITY_LEAVE: 'PATERNITY_LEAVE',
  BEREAVEMENT_LEAVE: 'BEREAVEMENT_LEAVE',
  OPTIONAL_LEAVE: 'OPTIONAL_LEAVE'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const LeaveStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]


export const AnnouncementSendType: {
  ALL: 'ALL',
  INDIVIDUAL: 'INDIVIDUAL'
};

export type AnnouncementSendType = (typeof AnnouncementSendType)[keyof typeof AnnouncementSendType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type EmploymentType = $Enums.EmploymentType

export const EmploymentType: typeof $Enums.EmploymentType

export type HolidayType = $Enums.HolidayType

export const HolidayType: typeof $Enums.HolidayType

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

export type AnnouncementSendType = $Enums.AnnouncementSendType

export const AnnouncementSendType: typeof $Enums.AnnouncementSendType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **Holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.HolidayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveBalance`: Exposes CRUD operations for the **LeaveBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveBalances
    * const leaveBalances = await prisma.leaveBalance.findMany()
    * ```
    */
  get leaveBalance(): Prisma.LeaveBalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveApplication`: Exposes CRUD operations for the **LeaveApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveApplications
    * const leaveApplications = await prisma.leaveApplication.findMany()
    * ```
    */
  get leaveApplication(): Prisma.LeaveApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcementRecipient`: Exposes CRUD operations for the **AnnouncementRecipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnouncementRecipients
    * const announcementRecipients = await prisma.announcementRecipient.findMany()
    * ```
    */
  get announcementRecipient(): Prisma.AnnouncementRecipientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialDetails`: Exposes CRUD operations for the **FinancialDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialDetails
    * const financialDetails = await prisma.financialDetails.findMany()
    * ```
    */
  get financialDetails(): Prisma.FinancialDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollSettings`: Exposes CRUD operations for the **PayrollSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollSettings
    * const payrollSettings = await prisma.payrollSettings.findMany()
    * ```
    */
  get payrollSettings(): Prisma.PayrollSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveComment`: Exposes CRUD operations for the **LeaveComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveComments
    * const leaveComments = await prisma.leaveComment.findMany()
    * ```
    */
  get leaveComment(): Prisma.LeaveCommentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Organization: 'Organization',
    User: 'User',
    Holiday: 'Holiday',
    LeaveBalance: 'LeaveBalance',
    LeaveApplication: 'LeaveApplication',
    Announcement: 'Announcement',
    AnnouncementRecipient: 'AnnouncementRecipient',
    FinancialDetails: 'FinancialDetails',
    PayrollSettings: 'PayrollSettings',
    LeaveComment: 'LeaveComment'
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
      modelProps: "organization" | "user" | "holiday" | "leaveBalance" | "leaveApplication" | "announcement" | "announcementRecipient" | "financialDetails" | "payrollSettings" | "leaveComment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Holiday: {
        payload: Prisma.$HolidayPayload<ExtArgs>
        fields: Prisma.HolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findFirst: {
            args: Prisma.HolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findMany: {
            args: Prisma.HolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          create: {
            args: Prisma.HolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          createMany: {
            args: Prisma.HolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          delete: {
            args: Prisma.HolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          update: {
            args: Prisma.HolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          deleteMany: {
            args: Prisma.HolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HolidayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          upsert: {
            args: Prisma.HolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.HolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
          }
        }
      }
      LeaveBalance: {
        payload: Prisma.$LeaveBalancePayload<ExtArgs>
        fields: Prisma.LeaveBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          findFirst: {
            args: Prisma.LeaveBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          findMany: {
            args: Prisma.LeaveBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          create: {
            args: Prisma.LeaveBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          createMany: {
            args: Prisma.LeaveBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          delete: {
            args: Prisma.LeaveBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          update: {
            args: Prisma.LeaveBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          deleteMany: {
            args: Prisma.LeaveBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          upsert: {
            args: Prisma.LeaveBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          aggregate: {
            args: Prisma.LeaveBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveBalance>
          }
          groupBy: {
            args: Prisma.LeaveBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveBalanceCountAggregateOutputType> | number
          }
        }
      }
      LeaveApplication: {
        payload: Prisma.$LeaveApplicationPayload<ExtArgs>
        fields: Prisma.LeaveApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          findFirst: {
            args: Prisma.LeaveApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          findMany: {
            args: Prisma.LeaveApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>[]
          }
          create: {
            args: Prisma.LeaveApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          createMany: {
            args: Prisma.LeaveApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>[]
          }
          delete: {
            args: Prisma.LeaveApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          update: {
            args: Prisma.LeaveApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          deleteMany: {
            args: Prisma.LeaveApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>[]
          }
          upsert: {
            args: Prisma.LeaveApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          aggregate: {
            args: Prisma.LeaveApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveApplication>
          }
          groupBy: {
            args: Prisma.LeaveApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveApplicationCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      AnnouncementRecipient: {
        payload: Prisma.$AnnouncementRecipientPayload<ExtArgs>
        fields: Prisma.AnnouncementRecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementRecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementRecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementRecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementRecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>
          }
          findMany: {
            args: Prisma.AnnouncementRecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>[]
          }
          create: {
            args: Prisma.AnnouncementRecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>
          }
          createMany: {
            args: Prisma.AnnouncementRecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementRecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementRecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>
          }
          update: {
            args: Prisma.AnnouncementRecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementRecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementRecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementRecipientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementRecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementRecipientPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementRecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncementRecipient>
          }
          groupBy: {
            args: Prisma.AnnouncementRecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementRecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementRecipientCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementRecipientCountAggregateOutputType> | number
          }
        }
      }
      FinancialDetails: {
        payload: Prisma.$FinancialDetailsPayload<ExtArgs>
        fields: Prisma.FinancialDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>
          }
          findFirst: {
            args: Prisma.FinancialDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>
          }
          findMany: {
            args: Prisma.FinancialDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>[]
          }
          create: {
            args: Prisma.FinancialDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>
          }
          createMany: {
            args: Prisma.FinancialDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>[]
          }
          delete: {
            args: Prisma.FinancialDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>
          }
          update: {
            args: Prisma.FinancialDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>
          }
          deleteMany: {
            args: Prisma.FinancialDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>[]
          }
          upsert: {
            args: Prisma.FinancialDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDetailsPayload>
          }
          aggregate: {
            args: Prisma.FinancialDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialDetails>
          }
          groupBy: {
            args: Prisma.FinancialDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialDetailsCountAggregateOutputType> | number
          }
        }
      }
      PayrollSettings: {
        payload: Prisma.$PayrollSettingsPayload<ExtArgs>
        fields: Prisma.PayrollSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>
          }
          findFirst: {
            args: Prisma.PayrollSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>
          }
          findMany: {
            args: Prisma.PayrollSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>[]
          }
          create: {
            args: Prisma.PayrollSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>
          }
          createMany: {
            args: Prisma.PayrollSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>[]
          }
          delete: {
            args: Prisma.PayrollSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>
          }
          update: {
            args: Prisma.PayrollSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>
          }
          deleteMany: {
            args: Prisma.PayrollSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>[]
          }
          upsert: {
            args: Prisma.PayrollSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollSettingsPayload>
          }
          aggregate: {
            args: Prisma.PayrollSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollSettings>
          }
          groupBy: {
            args: Prisma.PayrollSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollSettingsCountAggregateOutputType> | number
          }
        }
      }
      LeaveComment: {
        payload: Prisma.$LeaveCommentPayload<ExtArgs>
        fields: Prisma.LeaveCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>
          }
          findFirst: {
            args: Prisma.LeaveCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>
          }
          findMany: {
            args: Prisma.LeaveCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>[]
          }
          create: {
            args: Prisma.LeaveCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>
          }
          createMany: {
            args: Prisma.LeaveCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>[]
          }
          delete: {
            args: Prisma.LeaveCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>
          }
          update: {
            args: Prisma.LeaveCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>
          }
          deleteMany: {
            args: Prisma.LeaveCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>[]
          }
          upsert: {
            args: Prisma.LeaveCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveCommentPayload>
          }
          aggregate: {
            args: Prisma.LeaveCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveComment>
          }
          groupBy: {
            args: Prisma.LeaveCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveCommentCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveCommentCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    organization?: OrganizationOmit
    user?: UserOmit
    holiday?: HolidayOmit
    leaveBalance?: LeaveBalanceOmit
    leaveApplication?: LeaveApplicationOmit
    announcement?: AnnouncementOmit
    announcementRecipient?: AnnouncementRecipientOmit
    financialDetails?: FinancialDetailsOmit
    payrollSettings?: PayrollSettingsOmit
    leaveComment?: LeaveCommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    holidays: number
    announcements: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    holidays?: boolean | OrganizationCountOutputTypeCountHolidaysArgs
    announcements?: boolean | OrganizationCountOutputTypeCountAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountHolidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leaveBalances: number
    LeaveApplication: number
    createdAnnouncements: number
    announcementReceipts: number
    leaveComments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaveBalances?: boolean | UserCountOutputTypeCountLeaveBalancesArgs
    LeaveApplication?: boolean | UserCountOutputTypeCountLeaveApplicationArgs
    createdAnnouncements?: boolean | UserCountOutputTypeCountCreatedAnnouncementsArgs
    announcementReceipts?: boolean | UserCountOutputTypeCountAnnouncementReceiptsArgs
    leaveComments?: boolean | UserCountOutputTypeCountLeaveCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaveBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveBalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaveApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementRecipientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaveCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveCommentWhereInput
  }


  /**
   * Count Type LeaveApplicationCountOutputType
   */

  export type LeaveApplicationCountOutputType = {
    comments: number
  }

  export type LeaveApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | LeaveApplicationCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * LeaveApplicationCountOutputType without action
   */
  export type LeaveApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplicationCountOutputType
     */
    select?: LeaveApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaveApplicationCountOutputType without action
   */
  export type LeaveApplicationCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveCommentWhereInput
  }


  /**
   * Count Type AnnouncementCountOutputType
   */

  export type AnnouncementCountOutputType = {
    recipients: number
  }

  export type AnnouncementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | AnnouncementCountOutputTypeCountRecipientsArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCountOutputType
     */
    select?: AnnouncementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementRecipientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    domain: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    holidays?: boolean | Organization$holidaysArgs<ExtArgs>
    announcements?: boolean | Organization$announcementsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    holidays?: boolean | Organization$holidaysArgs<ExtArgs>
    announcements?: boolean | Organization$announcementsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      holidays: Prisma.$HolidayPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    holidays<T extends Organization$holidaysArgs<ExtArgs> = {}>(args?: Subset<T, Organization$holidaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends Organization$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly domain: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.holidays
   */
  export type Organization$holidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    cursor?: HolidayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Organization.announcements
   */
  export type Organization$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    resetPasswordExpires: number | null
  }

  export type UserSumAggregateOutputType = {
    resetPasswordExpires: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    lastLoginAt: Date | null
    employeeId: string | null
    fullName: string | null
    phone: string | null
    designation: string | null
    department: string | null
    employmentType: $Enums.EmploymentType | null
    workLocation: string | null
    dateOfJoining: Date | null
    profileImageUrl: string | null
    profileImagePublicId: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    fatherName: string | null
    motherName: string | null
    bloodGroup: string | null
    currentAddress: string | null
    permanentAddress: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    emergencyContactRelation: string | null
    reportingManagerName: string | null
    organizationId: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
    spouseName: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    lastLoginAt: Date | null
    employeeId: string | null
    fullName: string | null
    phone: string | null
    designation: string | null
    department: string | null
    employmentType: $Enums.EmploymentType | null
    workLocation: string | null
    dateOfJoining: Date | null
    profileImageUrl: string | null
    profileImagePublicId: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    fatherName: string | null
    motherName: string | null
    bloodGroup: string | null
    currentAddress: string | null
    permanentAddress: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    emergencyContactRelation: string | null
    reportingManagerName: string | null
    organizationId: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
    spouseName: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    status: number
    lastLoginAt: number
    employeeId: number
    fullName: number
    phone: number
    designation: number
    department: number
    employmentType: number
    workLocation: number
    dateOfJoining: number
    profileImageUrl: number
    profileImagePublicId: number
    gender: number
    dateOfBirth: number
    fatherName: number
    motherName: number
    bloodGroup: number
    currentAddress: number
    permanentAddress: number
    city: number
    state: number
    country: number
    pincode: number
    emergencyContactName: number
    emergencyContactPhone: number
    emergencyContactRelation: number
    reportingManagerName: number
    organizationId: number
    isDeleted: number
    deletedAt: number
    spouseName: number
    resetPasswordToken: number
    resetPasswordExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    resetPasswordExpires?: true
  }

  export type UserSumAggregateInputType = {
    resetPasswordExpires?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    status?: true
    lastLoginAt?: true
    employeeId?: true
    fullName?: true
    phone?: true
    designation?: true
    department?: true
    employmentType?: true
    workLocation?: true
    dateOfJoining?: true
    profileImageUrl?: true
    profileImagePublicId?: true
    gender?: true
    dateOfBirth?: true
    fatherName?: true
    motherName?: true
    bloodGroup?: true
    currentAddress?: true
    permanentAddress?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    emergencyContactRelation?: true
    reportingManagerName?: true
    organizationId?: true
    isDeleted?: true
    deletedAt?: true
    spouseName?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    status?: true
    lastLoginAt?: true
    employeeId?: true
    fullName?: true
    phone?: true
    designation?: true
    department?: true
    employmentType?: true
    workLocation?: true
    dateOfJoining?: true
    profileImageUrl?: true
    profileImagePublicId?: true
    gender?: true
    dateOfBirth?: true
    fatherName?: true
    motherName?: true
    bloodGroup?: true
    currentAddress?: true
    permanentAddress?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    emergencyContactRelation?: true
    reportingManagerName?: true
    organizationId?: true
    isDeleted?: true
    deletedAt?: true
    spouseName?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    status?: true
    lastLoginAt?: true
    employeeId?: true
    fullName?: true
    phone?: true
    designation?: true
    department?: true
    employmentType?: true
    workLocation?: true
    dateOfJoining?: true
    profileImageUrl?: true
    profileImagePublicId?: true
    gender?: true
    dateOfBirth?: true
    fatherName?: true
    motherName?: true
    bloodGroup?: true
    currentAddress?: true
    permanentAddress?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    emergencyContactName?: true
    emergencyContactPhone?: true
    emergencyContactRelation?: true
    reportingManagerName?: true
    organizationId?: true
    isDeleted?: true
    deletedAt?: true
    spouseName?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    status: $Enums.UserStatus
    lastLoginAt: Date | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department: string | null
    employmentType: $Enums.EmploymentType | null
    workLocation: string | null
    dateOfJoining: Date
    profileImageUrl: string | null
    profileImagePublicId: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    fatherName: string | null
    motherName: string | null
    bloodGroup: string | null
    currentAddress: string | null
    permanentAddress: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    emergencyContactName: string | null
    emergencyContactPhone: string | null
    emergencyContactRelation: string | null
    reportingManagerName: string | null
    organizationId: string
    isDeleted: boolean
    deletedAt: Date | null
    spouseName: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    employeeId?: boolean
    fullName?: boolean
    phone?: boolean
    designation?: boolean
    department?: boolean
    employmentType?: boolean
    workLocation?: boolean
    dateOfJoining?: boolean
    profileImageUrl?: boolean
    profileImagePublicId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    fatherName?: boolean
    motherName?: boolean
    bloodGroup?: boolean
    currentAddress?: boolean
    permanentAddress?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    emergencyContactRelation?: boolean
    reportingManagerName?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    spouseName?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    leaveBalances?: boolean | User$leaveBalancesArgs<ExtArgs>
    LeaveApplication?: boolean | User$LeaveApplicationArgs<ExtArgs>
    createdAnnouncements?: boolean | User$createdAnnouncementsArgs<ExtArgs>
    announcementReceipts?: boolean | User$announcementReceiptsArgs<ExtArgs>
    financialDetails?: boolean | User$financialDetailsArgs<ExtArgs>
    payrollSettings?: boolean | User$payrollSettingsArgs<ExtArgs>
    leaveComments?: boolean | User$leaveCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    employeeId?: boolean
    fullName?: boolean
    phone?: boolean
    designation?: boolean
    department?: boolean
    employmentType?: boolean
    workLocation?: boolean
    dateOfJoining?: boolean
    profileImageUrl?: boolean
    profileImagePublicId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    fatherName?: boolean
    motherName?: boolean
    bloodGroup?: boolean
    currentAddress?: boolean
    permanentAddress?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    emergencyContactRelation?: boolean
    reportingManagerName?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    spouseName?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    employeeId?: boolean
    fullName?: boolean
    phone?: boolean
    designation?: boolean
    department?: boolean
    employmentType?: boolean
    workLocation?: boolean
    dateOfJoining?: boolean
    profileImageUrl?: boolean
    profileImagePublicId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    fatherName?: boolean
    motherName?: boolean
    bloodGroup?: boolean
    currentAddress?: boolean
    permanentAddress?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    emergencyContactRelation?: boolean
    reportingManagerName?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    spouseName?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLoginAt?: boolean
    employeeId?: boolean
    fullName?: boolean
    phone?: boolean
    designation?: boolean
    department?: boolean
    employmentType?: boolean
    workLocation?: boolean
    dateOfJoining?: boolean
    profileImageUrl?: boolean
    profileImagePublicId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    fatherName?: boolean
    motherName?: boolean
    bloodGroup?: boolean
    currentAddress?: boolean
    permanentAddress?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    emergencyContactName?: boolean
    emergencyContactPhone?: boolean
    emergencyContactRelation?: boolean
    reportingManagerName?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    spouseName?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "status" | "lastLoginAt" | "employeeId" | "fullName" | "phone" | "designation" | "department" | "employmentType" | "workLocation" | "dateOfJoining" | "profileImageUrl" | "profileImagePublicId" | "gender" | "dateOfBirth" | "fatherName" | "motherName" | "bloodGroup" | "currentAddress" | "permanentAddress" | "city" | "state" | "country" | "pincode" | "emergencyContactName" | "emergencyContactPhone" | "emergencyContactRelation" | "reportingManagerName" | "organizationId" | "isDeleted" | "deletedAt" | "spouseName" | "resetPasswordToken" | "resetPasswordExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    leaveBalances?: boolean | User$leaveBalancesArgs<ExtArgs>
    LeaveApplication?: boolean | User$LeaveApplicationArgs<ExtArgs>
    createdAnnouncements?: boolean | User$createdAnnouncementsArgs<ExtArgs>
    announcementReceipts?: boolean | User$announcementReceiptsArgs<ExtArgs>
    financialDetails?: boolean | User$financialDetailsArgs<ExtArgs>
    payrollSettings?: boolean | User$payrollSettingsArgs<ExtArgs>
    leaveComments?: boolean | User$leaveCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      leaveBalances: Prisma.$LeaveBalancePayload<ExtArgs>[]
      LeaveApplication: Prisma.$LeaveApplicationPayload<ExtArgs>[]
      createdAnnouncements: Prisma.$AnnouncementPayload<ExtArgs>[]
      announcementReceipts: Prisma.$AnnouncementRecipientPayload<ExtArgs>[]
      financialDetails: Prisma.$FinancialDetailsPayload<ExtArgs> | null
      payrollSettings: Prisma.$PayrollSettingsPayload<ExtArgs> | null
      leaveComments: Prisma.$LeaveCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      status: $Enums.UserStatus
      lastLoginAt: Date | null
      employeeId: string
      fullName: string
      phone: string
      designation: string
      department: string | null
      employmentType: $Enums.EmploymentType | null
      workLocation: string | null
      dateOfJoining: Date
      profileImageUrl: string | null
      profileImagePublicId: string | null
      gender: $Enums.Gender | null
      dateOfBirth: Date | null
      fatherName: string | null
      motherName: string | null
      bloodGroup: string | null
      currentAddress: string | null
      permanentAddress: string | null
      city: string | null
      state: string | null
      country: string | null
      pincode: string | null
      emergencyContactName: string | null
      emergencyContactPhone: string | null
      emergencyContactRelation: string | null
      reportingManagerName: string | null
      organizationId: string
      isDeleted: boolean
      deletedAt: Date | null
      spouseName: string | null
      resetPasswordToken: string | null
      resetPasswordExpires: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leaveBalances<T extends User$leaveBalancesArgs<ExtArgs> = {}>(args?: Subset<T, User$leaveBalancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeaveApplication<T extends User$LeaveApplicationArgs<ExtArgs> = {}>(args?: Subset<T, User$LeaveApplicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdAnnouncements<T extends User$createdAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcementReceipts<T extends User$announcementReceiptsArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementReceiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialDetails<T extends User$financialDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$financialDetailsArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payrollSettings<T extends User$payrollSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$payrollSettingsArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leaveComments<T extends User$leaveCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$leaveCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly employeeId: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly designation: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly employmentType: FieldRef<"User", 'EmploymentType'>
    readonly workLocation: FieldRef<"User", 'String'>
    readonly dateOfJoining: FieldRef<"User", 'DateTime'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly profileImagePublicId: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly fatherName: FieldRef<"User", 'String'>
    readonly motherName: FieldRef<"User", 'String'>
    readonly bloodGroup: FieldRef<"User", 'String'>
    readonly currentAddress: FieldRef<"User", 'String'>
    readonly permanentAddress: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly pincode: FieldRef<"User", 'String'>
    readonly emergencyContactName: FieldRef<"User", 'String'>
    readonly emergencyContactPhone: FieldRef<"User", 'String'>
    readonly emergencyContactRelation: FieldRef<"User", 'String'>
    readonly reportingManagerName: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly spouseName: FieldRef<"User", 'String'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpires: FieldRef<"User", 'BigInt'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.leaveBalances
   */
  export type User$leaveBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    where?: LeaveBalanceWhereInput
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    cursor?: LeaveBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * User.LeaveApplication
   */
  export type User$LeaveApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    where?: LeaveApplicationWhereInput
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    cursor?: LeaveApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * User.createdAnnouncements
   */
  export type User$createdAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User.announcementReceipts
   */
  export type User$announcementReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    where?: AnnouncementRecipientWhereInput
    orderBy?: AnnouncementRecipientOrderByWithRelationInput | AnnouncementRecipientOrderByWithRelationInput[]
    cursor?: AnnouncementRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementRecipientScalarFieldEnum | AnnouncementRecipientScalarFieldEnum[]
  }

  /**
   * User.financialDetails
   */
  export type User$financialDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    where?: FinancialDetailsWhereInput
  }

  /**
   * User.payrollSettings
   */
  export type User$payrollSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    where?: PayrollSettingsWhereInput
  }

  /**
   * User.leaveComments
   */
  export type User$leaveCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    where?: LeaveCommentWhereInput
    orderBy?: LeaveCommentOrderByWithRelationInput | LeaveCommentOrderByWithRelationInput[]
    cursor?: LeaveCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveCommentScalarFieldEnum | LeaveCommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayAvgAggregateOutputType = {
    year: number | null
  }

  export type HolidaySumAggregateOutputType = {
    year: number | null
  }

  export type HolidayMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    day: string | null
    year: number | null
    type: $Enums.HolidayType | null
    description: string | null
    organizationId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HolidayMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    day: string | null
    year: number | null
    type: $Enums.HolidayType | null
    description: string | null
    organizationId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HolidayCountAggregateOutputType = {
    id: number
    name: number
    date: number
    day: number
    year: number
    type: number
    description: number
    organizationId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HolidayAvgAggregateInputType = {
    year?: true
  }

  export type HolidaySumAggregateInputType = {
    year?: true
  }

  export type HolidayMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    day?: true
    year?: true
    type?: true
    description?: true
    organizationId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HolidayMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    day?: true
    year?: true
    type?: true
    description?: true
    organizationId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HolidayCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    day?: true
    year?: true
    type?: true
    description?: true
    organizationId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holiday to aggregate.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HolidayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HolidaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type HolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithAggregationInput | HolidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: HolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _avg?: HolidayAvgAggregateInputType
    _sum?: HolidaySumAggregateInputType
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    id: string
    name: string
    date: Date
    day: string
    year: number
    type: $Enums.HolidayType
    description: string | null
    organizationId: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends HolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type HolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    day?: boolean
    year?: boolean
    type?: boolean
    description?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Holiday$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    day?: boolean
    year?: boolean
    type?: boolean
    description?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Holiday$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    day?: boolean
    year?: boolean
    type?: boolean
    description?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Holiday$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    day?: boolean
    year?: boolean
    type?: boolean
    description?: boolean
    organizationId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HolidayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "day" | "year" | "type" | "description" | "organizationId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["holiday"]>
  export type HolidayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Holiday$organizationArgs<ExtArgs>
  }
  export type HolidayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Holiday$organizationArgs<ExtArgs>
  }
  export type HolidayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Holiday$organizationArgs<ExtArgs>
  }

  export type $HolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holiday"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      day: string
      year: number
      type: $Enums.HolidayType
      description: string | null
      organizationId: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type HolidayGetPayload<S extends boolean | null | undefined | HolidayDefaultArgs> = $Result.GetResult<Prisma.$HolidayPayload, S>

  type HolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HolidayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface HolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holiday'], meta: { name: 'Holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {HolidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidayFindUniqueArgs>(args: SelectSubset<T, HolidayFindUniqueArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HolidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidayFindFirstArgs>(args?: SelectSubset<T, HolidayFindFirstArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidayWithIdOnly = await prisma.holiday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HolidayFindManyArgs>(args?: SelectSubset<T, HolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holiday.
     * @param {HolidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends HolidayCreateArgs>(args: SelectSubset<T, HolidayCreateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holidays.
     * @param {HolidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidayCreateManyArgs>(args?: SelectSubset<T, HolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {HolidayCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, HolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holiday.
     * @param {HolidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends HolidayDeleteArgs>(args: SelectSubset<T, HolidayDeleteArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holiday.
     * @param {HolidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidayUpdateArgs>(args: SelectSubset<T, HolidayUpdateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holidays.
     * @param {HolidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidayDeleteManyArgs>(args?: SelectSubset<T, HolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidayUpdateManyArgs>(args: SelectSubset<T, HolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays and returns the data updated in the database.
     * @param {HolidayUpdateManyAndReturnArgs} args - Arguments to update many Holidays.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.updateManyAndReturn({
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
    updateManyAndReturn<T extends HolidayUpdateManyAndReturnArgs>(args: SelectSubset<T, HolidayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holiday.
     * @param {HolidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends HolidayUpsertArgs>(args: SelectSubset<T, HolidayUpsertArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidayCountArgs>(
      args?: Subset<T, HolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayGroupByArgs} args - Group by arguments.
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
      T extends HolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidayGroupByArgs['orderBy'] }
        : { orderBy?: HolidayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holiday model
   */
  readonly fields: HolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends Holiday$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Holiday$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Holiday model
   */
  interface HolidayFieldRefs {
    readonly id: FieldRef<"Holiday", 'String'>
    readonly name: FieldRef<"Holiday", 'String'>
    readonly date: FieldRef<"Holiday", 'DateTime'>
    readonly day: FieldRef<"Holiday", 'String'>
    readonly year: FieldRef<"Holiday", 'Int'>
    readonly type: FieldRef<"Holiday", 'HolidayType'>
    readonly description: FieldRef<"Holiday", 'String'>
    readonly organizationId: FieldRef<"Holiday", 'String'>
    readonly isDeleted: FieldRef<"Holiday", 'Boolean'>
    readonly createdAt: FieldRef<"Holiday", 'DateTime'>
    readonly updatedAt: FieldRef<"Holiday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holiday findUnique
   */
  export type HolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findUniqueOrThrow
   */
  export type HolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findFirst
   */
  export type HolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findFirstOrThrow
   */
  export type HolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findMany
   */
  export type HolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday create
   */
  export type HolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to create a Holiday.
     */
    data: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
  }

  /**
   * Holiday createMany
   */
  export type HolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday createManyAndReturn
   */
  export type HolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holiday update
   */
  export type HolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to update a Holiday.
     */
    data: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
    /**
     * Choose, which Holiday to update.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday updateMany
   */
  export type HolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
  }

  /**
   * Holiday updateManyAndReturn
   */
  export type HolidayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holiday upsert
   */
  export type HolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The filter to search for the Holiday to update in case it exists.
     */
    where: HolidayWhereUniqueInput
    /**
     * In case the Holiday found by the `where` argument doesn't exist, create a new Holiday with this data.
     */
    create: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
    /**
     * In case the Holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
  }

  /**
   * Holiday delete
   */
  export type HolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter which Holiday to delete.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday deleteMany
   */
  export type HolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to delete.
     */
    limit?: number
  }

  /**
   * Holiday.organization
   */
  export type Holiday$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Holiday without action
   */
  export type HolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
  }


  /**
   * Model LeaveBalance
   */

  export type AggregateLeaveBalance = {
    _count: LeaveBalanceCountAggregateOutputType | null
    _avg: LeaveBalanceAvgAggregateOutputType | null
    _sum: LeaveBalanceSumAggregateOutputType | null
    _min: LeaveBalanceMinAggregateOutputType | null
    _max: LeaveBalanceMaxAggregateOutputType | null
  }

  export type LeaveBalanceAvgAggregateOutputType = {
    allocated: number | null
    used: number | null
    remaining: number | null
    year: number | null
  }

  export type LeaveBalanceSumAggregateOutputType = {
    allocated: number | null
    used: number | null
    remaining: number | null
    year: number | null
  }

  export type LeaveBalanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveType: $Enums.LeaveType | null
    allocated: number | null
    used: number | null
    remaining: number | null
    year: number | null
    createdAt: Date | null
  }

  export type LeaveBalanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveType: $Enums.LeaveType | null
    allocated: number | null
    used: number | null
    remaining: number | null
    year: number | null
    createdAt: Date | null
  }

  export type LeaveBalanceCountAggregateOutputType = {
    id: number
    userId: number
    leaveType: number
    allocated: number
    used: number
    remaining: number
    year: number
    createdAt: number
    _all: number
  }


  export type LeaveBalanceAvgAggregateInputType = {
    allocated?: true
    used?: true
    remaining?: true
    year?: true
  }

  export type LeaveBalanceSumAggregateInputType = {
    allocated?: true
    used?: true
    remaining?: true
    year?: true
  }

  export type LeaveBalanceMinAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    allocated?: true
    used?: true
    remaining?: true
    year?: true
    createdAt?: true
  }

  export type LeaveBalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    allocated?: true
    used?: true
    remaining?: true
    year?: true
    createdAt?: true
  }

  export type LeaveBalanceCountAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    allocated?: true
    used?: true
    remaining?: true
    year?: true
    createdAt?: true
    _all?: true
  }

  export type LeaveBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveBalance to aggregate.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveBalances
    **/
    _count?: true | LeaveBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveBalanceMaxAggregateInputType
  }

  export type GetLeaveBalanceAggregateType<T extends LeaveBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveBalance[P]>
      : GetScalarType<T[P], AggregateLeaveBalance[P]>
  }




  export type LeaveBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveBalanceWhereInput
    orderBy?: LeaveBalanceOrderByWithAggregationInput | LeaveBalanceOrderByWithAggregationInput[]
    by: LeaveBalanceScalarFieldEnum[] | LeaveBalanceScalarFieldEnum
    having?: LeaveBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveBalanceCountAggregateInputType | true
    _avg?: LeaveBalanceAvgAggregateInputType
    _sum?: LeaveBalanceSumAggregateInputType
    _min?: LeaveBalanceMinAggregateInputType
    _max?: LeaveBalanceMaxAggregateInputType
  }

  export type LeaveBalanceGroupByOutputType = {
    id: string
    userId: string
    leaveType: $Enums.LeaveType
    allocated: number
    used: number
    remaining: number
    year: number
    createdAt: Date
    _count: LeaveBalanceCountAggregateOutputType | null
    _avg: LeaveBalanceAvgAggregateOutputType | null
    _sum: LeaveBalanceSumAggregateOutputType | null
    _min: LeaveBalanceMinAggregateOutputType | null
    _max: LeaveBalanceMaxAggregateOutputType | null
  }

  type GetLeaveBalanceGroupByPayload<T extends LeaveBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]>
        }
      >
    >


  export type LeaveBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    allocated?: boolean
    used?: boolean
    remaining?: boolean
    year?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    allocated?: boolean
    used?: boolean
    remaining?: boolean
    year?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    allocated?: boolean
    used?: boolean
    remaining?: boolean
    year?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    allocated?: boolean
    used?: boolean
    remaining?: boolean
    year?: boolean
    createdAt?: boolean
  }

  export type LeaveBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "leaveType" | "allocated" | "used" | "remaining" | "year" | "createdAt", ExtArgs["result"]["leaveBalance"]>
  export type LeaveBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeaveBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveBalance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      leaveType: $Enums.LeaveType
      allocated: number
      used: number
      remaining: number
      year: number
      createdAt: Date
    }, ExtArgs["result"]["leaveBalance"]>
    composites: {}
  }

  type LeaveBalanceGetPayload<S extends boolean | null | undefined | LeaveBalanceDefaultArgs> = $Result.GetResult<Prisma.$LeaveBalancePayload, S>

  type LeaveBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveBalanceCountAggregateInputType | true
    }

  export interface LeaveBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveBalance'], meta: { name: 'LeaveBalance' } }
    /**
     * Find zero or one LeaveBalance that matches the filter.
     * @param {LeaveBalanceFindUniqueArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveBalanceFindUniqueArgs>(args: SelectSubset<T, LeaveBalanceFindUniqueArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveBalanceFindUniqueOrThrowArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindFirstArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveBalanceFindFirstArgs>(args?: SelectSubset<T, LeaveBalanceFindFirstArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindFirstOrThrowArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveBalances
     * const leaveBalances = await prisma.leaveBalance.findMany()
     * 
     * // Get first 10 LeaveBalances
     * const leaveBalances = await prisma.leaveBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveBalanceFindManyArgs>(args?: SelectSubset<T, LeaveBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveBalance.
     * @param {LeaveBalanceCreateArgs} args - Arguments to create a LeaveBalance.
     * @example
     * // Create one LeaveBalance
     * const LeaveBalance = await prisma.leaveBalance.create({
     *   data: {
     *     // ... data to create a LeaveBalance
     *   }
     * })
     * 
     */
    create<T extends LeaveBalanceCreateArgs>(args: SelectSubset<T, LeaveBalanceCreateArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveBalances.
     * @param {LeaveBalanceCreateManyArgs} args - Arguments to create many LeaveBalances.
     * @example
     * // Create many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveBalanceCreateManyArgs>(args?: SelectSubset<T, LeaveBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveBalances and returns the data saved in the database.
     * @param {LeaveBalanceCreateManyAndReturnArgs} args - Arguments to create many LeaveBalances.
     * @example
     * // Create many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveBalances and only return the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveBalance.
     * @param {LeaveBalanceDeleteArgs} args - Arguments to delete one LeaveBalance.
     * @example
     * // Delete one LeaveBalance
     * const LeaveBalance = await prisma.leaveBalance.delete({
     *   where: {
     *     // ... filter to delete one LeaveBalance
     *   }
     * })
     * 
     */
    delete<T extends LeaveBalanceDeleteArgs>(args: SelectSubset<T, LeaveBalanceDeleteArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveBalance.
     * @param {LeaveBalanceUpdateArgs} args - Arguments to update one LeaveBalance.
     * @example
     * // Update one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveBalanceUpdateArgs>(args: SelectSubset<T, LeaveBalanceUpdateArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveBalances.
     * @param {LeaveBalanceDeleteManyArgs} args - Arguments to filter LeaveBalances to delete.
     * @example
     * // Delete a few LeaveBalances
     * const { count } = await prisma.leaveBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveBalanceDeleteManyArgs>(args?: SelectSubset<T, LeaveBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveBalanceUpdateManyArgs>(args: SelectSubset<T, LeaveBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveBalances and returns the data updated in the database.
     * @param {LeaveBalanceUpdateManyAndReturnArgs} args - Arguments to update many LeaveBalances.
     * @example
     * // Update many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveBalances and only return the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveBalance.
     * @param {LeaveBalanceUpsertArgs} args - Arguments to update or create a LeaveBalance.
     * @example
     * // Update or create a LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.upsert({
     *   create: {
     *     // ... data to create a LeaveBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveBalance we want to update
     *   }
     * })
     */
    upsert<T extends LeaveBalanceUpsertArgs>(args: SelectSubset<T, LeaveBalanceUpsertArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceCountArgs} args - Arguments to filter LeaveBalances to count.
     * @example
     * // Count the number of LeaveBalances
     * const count = await prisma.leaveBalance.count({
     *   where: {
     *     // ... the filter for the LeaveBalances we want to count
     *   }
     * })
    **/
    count<T extends LeaveBalanceCountArgs>(
      args?: Subset<T, LeaveBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveBalanceAggregateArgs>(args: Subset<T, LeaveBalanceAggregateArgs>): Prisma.PrismaPromise<GetLeaveBalanceAggregateType<T>>

    /**
     * Group by LeaveBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceGroupByArgs} args - Group by arguments.
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
      T extends LeaveBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveBalanceGroupByArgs['orderBy'] }
        : { orderBy?: LeaveBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveBalance model
   */
  readonly fields: LeaveBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaveBalance model
   */
  interface LeaveBalanceFieldRefs {
    readonly id: FieldRef<"LeaveBalance", 'String'>
    readonly userId: FieldRef<"LeaveBalance", 'String'>
    readonly leaveType: FieldRef<"LeaveBalance", 'LeaveType'>
    readonly allocated: FieldRef<"LeaveBalance", 'Int'>
    readonly used: FieldRef<"LeaveBalance", 'Int'>
    readonly remaining: FieldRef<"LeaveBalance", 'Int'>
    readonly year: FieldRef<"LeaveBalance", 'Int'>
    readonly createdAt: FieldRef<"LeaveBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveBalance findUnique
   */
  export type LeaveBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance findUniqueOrThrow
   */
  export type LeaveBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance findFirst
   */
  export type LeaveBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveBalances.
     */
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance findFirstOrThrow
   */
  export type LeaveBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveBalances.
     */
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance findMany
   */
  export type LeaveBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalances to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance create
   */
  export type LeaveBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveBalance.
     */
    data: XOR<LeaveBalanceCreateInput, LeaveBalanceUncheckedCreateInput>
  }

  /**
   * LeaveBalance createMany
   */
  export type LeaveBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveBalances.
     */
    data: LeaveBalanceCreateManyInput | LeaveBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveBalance createManyAndReturn
   */
  export type LeaveBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveBalances.
     */
    data: LeaveBalanceCreateManyInput | LeaveBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveBalance update
   */
  export type LeaveBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveBalance.
     */
    data: XOR<LeaveBalanceUpdateInput, LeaveBalanceUncheckedUpdateInput>
    /**
     * Choose, which LeaveBalance to update.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance updateMany
   */
  export type LeaveBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveBalances.
     */
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyInput>
    /**
     * Filter which LeaveBalances to update
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to update.
     */
    limit?: number
  }

  /**
   * LeaveBalance updateManyAndReturn
   */
  export type LeaveBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * The data used to update LeaveBalances.
     */
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyInput>
    /**
     * Filter which LeaveBalances to update
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveBalance upsert
   */
  export type LeaveBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveBalance to update in case it exists.
     */
    where: LeaveBalanceWhereUniqueInput
    /**
     * In case the LeaveBalance found by the `where` argument doesn't exist, create a new LeaveBalance with this data.
     */
    create: XOR<LeaveBalanceCreateInput, LeaveBalanceUncheckedCreateInput>
    /**
     * In case the LeaveBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveBalanceUpdateInput, LeaveBalanceUncheckedUpdateInput>
  }

  /**
   * LeaveBalance delete
   */
  export type LeaveBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter which LeaveBalance to delete.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance deleteMany
   */
  export type LeaveBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveBalances to delete
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to delete.
     */
    limit?: number
  }

  /**
   * LeaveBalance without action
   */
  export type LeaveBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
  }


  /**
   * Model LeaveApplication
   */

  export type AggregateLeaveApplication = {
    _count: LeaveApplicationCountAggregateOutputType | null
    _min: LeaveApplicationMinAggregateOutputType | null
    _max: LeaveApplicationMaxAggregateOutputType | null
  }

  export type LeaveApplicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveApplicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveApplicationCountAggregateOutputType = {
    id: number
    userId: number
    leaveType: number
    startDate: number
    endDate: number
    reason: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaveApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaveApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveApplication to aggregate.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveApplications
    **/
    _count?: true | LeaveApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveApplicationMaxAggregateInputType
  }

  export type GetLeaveApplicationAggregateType<T extends LeaveApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveApplication[P]>
      : GetScalarType<T[P], AggregateLeaveApplication[P]>
  }




  export type LeaveApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveApplicationWhereInput
    orderBy?: LeaveApplicationOrderByWithAggregationInput | LeaveApplicationOrderByWithAggregationInput[]
    by: LeaveApplicationScalarFieldEnum[] | LeaveApplicationScalarFieldEnum
    having?: LeaveApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveApplicationCountAggregateInputType | true
    _min?: LeaveApplicationMinAggregateInputType
    _max?: LeaveApplicationMaxAggregateInputType
  }

  export type LeaveApplicationGroupByOutputType = {
    id: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date
    endDate: Date
    reason: string
    status: $Enums.LeaveStatus
    createdAt: Date
    updatedAt: Date
    _count: LeaveApplicationCountAggregateOutputType | null
    _min: LeaveApplicationMinAggregateOutputType | null
    _max: LeaveApplicationMaxAggregateOutputType | null
  }

  type GetLeaveApplicationGroupByPayload<T extends LeaveApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveApplicationGroupByOutputType[P]>
        }
      >
    >


  export type LeaveApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | LeaveApplication$commentsArgs<ExtArgs>
    _count?: boolean | LeaveApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveApplication"]>

  export type LeaveApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveApplication"]>

  export type LeaveApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveApplication"]>

  export type LeaveApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaveApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "leaveType" | "startDate" | "endDate" | "reason" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["leaveApplication"]>
  export type LeaveApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | LeaveApplication$commentsArgs<ExtArgs>
    _count?: boolean | LeaveApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaveApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeaveApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$LeaveCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      leaveType: $Enums.LeaveType
      startDate: Date
      endDate: Date
      reason: string
      status: $Enums.LeaveStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaveApplication"]>
    composites: {}
  }

  type LeaveApplicationGetPayload<S extends boolean | null | undefined | LeaveApplicationDefaultArgs> = $Result.GetResult<Prisma.$LeaveApplicationPayload, S>

  type LeaveApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveApplicationCountAggregateInputType | true
    }

  export interface LeaveApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveApplication'], meta: { name: 'LeaveApplication' } }
    /**
     * Find zero or one LeaveApplication that matches the filter.
     * @param {LeaveApplicationFindUniqueArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveApplicationFindUniqueArgs>(args: SelectSubset<T, LeaveApplicationFindUniqueArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveApplicationFindUniqueOrThrowArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationFindFirstArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveApplicationFindFirstArgs>(args?: SelectSubset<T, LeaveApplicationFindFirstArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationFindFirstOrThrowArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveApplications
     * const leaveApplications = await prisma.leaveApplication.findMany()
     * 
     * // Get first 10 LeaveApplications
     * const leaveApplications = await prisma.leaveApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveApplicationWithIdOnly = await prisma.leaveApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveApplicationFindManyArgs>(args?: SelectSubset<T, LeaveApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveApplication.
     * @param {LeaveApplicationCreateArgs} args - Arguments to create a LeaveApplication.
     * @example
     * // Create one LeaveApplication
     * const LeaveApplication = await prisma.leaveApplication.create({
     *   data: {
     *     // ... data to create a LeaveApplication
     *   }
     * })
     * 
     */
    create<T extends LeaveApplicationCreateArgs>(args: SelectSubset<T, LeaveApplicationCreateArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveApplications.
     * @param {LeaveApplicationCreateManyArgs} args - Arguments to create many LeaveApplications.
     * @example
     * // Create many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveApplicationCreateManyArgs>(args?: SelectSubset<T, LeaveApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveApplications and returns the data saved in the database.
     * @param {LeaveApplicationCreateManyAndReturnArgs} args - Arguments to create many LeaveApplications.
     * @example
     * // Create many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveApplications and only return the `id`
     * const leaveApplicationWithIdOnly = await prisma.leaveApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveApplication.
     * @param {LeaveApplicationDeleteArgs} args - Arguments to delete one LeaveApplication.
     * @example
     * // Delete one LeaveApplication
     * const LeaveApplication = await prisma.leaveApplication.delete({
     *   where: {
     *     // ... filter to delete one LeaveApplication
     *   }
     * })
     * 
     */
    delete<T extends LeaveApplicationDeleteArgs>(args: SelectSubset<T, LeaveApplicationDeleteArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveApplication.
     * @param {LeaveApplicationUpdateArgs} args - Arguments to update one LeaveApplication.
     * @example
     * // Update one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveApplicationUpdateArgs>(args: SelectSubset<T, LeaveApplicationUpdateArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveApplications.
     * @param {LeaveApplicationDeleteManyArgs} args - Arguments to filter LeaveApplications to delete.
     * @example
     * // Delete a few LeaveApplications
     * const { count } = await prisma.leaveApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveApplicationDeleteManyArgs>(args?: SelectSubset<T, LeaveApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveApplicationUpdateManyArgs>(args: SelectSubset<T, LeaveApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveApplications and returns the data updated in the database.
     * @param {LeaveApplicationUpdateManyAndReturnArgs} args - Arguments to update many LeaveApplications.
     * @example
     * // Update many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveApplications and only return the `id`
     * const leaveApplicationWithIdOnly = await prisma.leaveApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveApplication.
     * @param {LeaveApplicationUpsertArgs} args - Arguments to update or create a LeaveApplication.
     * @example
     * // Update or create a LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.upsert({
     *   create: {
     *     // ... data to create a LeaveApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveApplication we want to update
     *   }
     * })
     */
    upsert<T extends LeaveApplicationUpsertArgs>(args: SelectSubset<T, LeaveApplicationUpsertArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationCountArgs} args - Arguments to filter LeaveApplications to count.
     * @example
     * // Count the number of LeaveApplications
     * const count = await prisma.leaveApplication.count({
     *   where: {
     *     // ... the filter for the LeaveApplications we want to count
     *   }
     * })
    **/
    count<T extends LeaveApplicationCountArgs>(
      args?: Subset<T, LeaveApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveApplicationAggregateArgs>(args: Subset<T, LeaveApplicationAggregateArgs>): Prisma.PrismaPromise<GetLeaveApplicationAggregateType<T>>

    /**
     * Group by LeaveApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationGroupByArgs} args - Group by arguments.
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
      T extends LeaveApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveApplicationGroupByArgs['orderBy'] }
        : { orderBy?: LeaveApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveApplication model
   */
  readonly fields: LeaveApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends LeaveApplication$commentsArgs<ExtArgs> = {}>(args?: Subset<T, LeaveApplication$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LeaveApplication model
   */
  interface LeaveApplicationFieldRefs {
    readonly id: FieldRef<"LeaveApplication", 'String'>
    readonly userId: FieldRef<"LeaveApplication", 'String'>
    readonly leaveType: FieldRef<"LeaveApplication", 'LeaveType'>
    readonly startDate: FieldRef<"LeaveApplication", 'DateTime'>
    readonly endDate: FieldRef<"LeaveApplication", 'DateTime'>
    readonly reason: FieldRef<"LeaveApplication", 'String'>
    readonly status: FieldRef<"LeaveApplication", 'LeaveStatus'>
    readonly createdAt: FieldRef<"LeaveApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"LeaveApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveApplication findUnique
   */
  export type LeaveApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication findUniqueOrThrow
   */
  export type LeaveApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication findFirst
   */
  export type LeaveApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveApplications.
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveApplications.
     */
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * LeaveApplication findFirstOrThrow
   */
  export type LeaveApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveApplications.
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveApplications.
     */
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * LeaveApplication findMany
   */
  export type LeaveApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplications to fetch.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveApplications.
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * LeaveApplication create
   */
  export type LeaveApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveApplication.
     */
    data: XOR<LeaveApplicationCreateInput, LeaveApplicationUncheckedCreateInput>
  }

  /**
   * LeaveApplication createMany
   */
  export type LeaveApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveApplications.
     */
    data: LeaveApplicationCreateManyInput | LeaveApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveApplication createManyAndReturn
   */
  export type LeaveApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveApplications.
     */
    data: LeaveApplicationCreateManyInput | LeaveApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveApplication update
   */
  export type LeaveApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveApplication.
     */
    data: XOR<LeaveApplicationUpdateInput, LeaveApplicationUncheckedUpdateInput>
    /**
     * Choose, which LeaveApplication to update.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication updateMany
   */
  export type LeaveApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveApplications.
     */
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LeaveApplications to update
     */
    where?: LeaveApplicationWhereInput
    /**
     * Limit how many LeaveApplications to update.
     */
    limit?: number
  }

  /**
   * LeaveApplication updateManyAndReturn
   */
  export type LeaveApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * The data used to update LeaveApplications.
     */
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LeaveApplications to update
     */
    where?: LeaveApplicationWhereInput
    /**
     * Limit how many LeaveApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveApplication upsert
   */
  export type LeaveApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveApplication to update in case it exists.
     */
    where: LeaveApplicationWhereUniqueInput
    /**
     * In case the LeaveApplication found by the `where` argument doesn't exist, create a new LeaveApplication with this data.
     */
    create: XOR<LeaveApplicationCreateInput, LeaveApplicationUncheckedCreateInput>
    /**
     * In case the LeaveApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveApplicationUpdateInput, LeaveApplicationUncheckedUpdateInput>
  }

  /**
   * LeaveApplication delete
   */
  export type LeaveApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter which LeaveApplication to delete.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication deleteMany
   */
  export type LeaveApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveApplications to delete
     */
    where?: LeaveApplicationWhereInput
    /**
     * Limit how many LeaveApplications to delete.
     */
    limit?: number
  }

  /**
   * LeaveApplication.comments
   */
  export type LeaveApplication$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    where?: LeaveCommentWhereInput
    orderBy?: LeaveCommentOrderByWithRelationInput | LeaveCommentOrderByWithRelationInput[]
    cursor?: LeaveCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveCommentScalarFieldEnum | LeaveCommentScalarFieldEnum[]
  }

  /**
   * LeaveApplication without action
   */
  export type LeaveApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    createdById: string | null
    title: string | null
    message: string | null
    sendType: $Enums.AnnouncementSendType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    createdById: string | null
    title: string | null
    message: string | null
    sendType: $Enums.AnnouncementSendType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    organizationId: number
    createdById: number
    title: number
    message: number
    sendType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    organizationId?: true
    createdById?: true
    title?: true
    message?: true
    sendType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    organizationId?: true
    createdById?: true
    title?: true
    message?: true
    sendType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    organizationId?: true
    createdById?: true
    title?: true
    message?: true
    sendType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    organizationId: string
    createdById: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    createdById?: boolean
    title?: boolean
    message?: boolean
    sendType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    recipients?: boolean | Announcement$recipientsArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    createdById?: boolean
    title?: boolean
    message?: boolean
    sendType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    createdById?: boolean
    title?: boolean
    message?: boolean
    sendType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    organizationId?: boolean
    createdById?: boolean
    title?: boolean
    message?: boolean
    sendType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "createdById" | "title" | "message" | "sendType" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    recipients?: boolean | Announcement$recipientsArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      recipients: Prisma.$AnnouncementRecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      createdById: string
      title: string
      message: string
      sendType: $Enums.AnnouncementSendType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipients<T extends Announcement$recipientsArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly organizationId: FieldRef<"Announcement", 'String'>
    readonly createdById: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly message: FieldRef<"Announcement", 'String'>
    readonly sendType: FieldRef<"Announcement", 'AnnouncementSendType'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement.recipients
   */
  export type Announcement$recipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    where?: AnnouncementRecipientWhereInput
    orderBy?: AnnouncementRecipientOrderByWithRelationInput | AnnouncementRecipientOrderByWithRelationInput[]
    cursor?: AnnouncementRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementRecipientScalarFieldEnum | AnnouncementRecipientScalarFieldEnum[]
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model AnnouncementRecipient
   */

  export type AggregateAnnouncementRecipient = {
    _count: AnnouncementRecipientCountAggregateOutputType | null
    _min: AnnouncementRecipientMinAggregateOutputType | null
    _max: AnnouncementRecipientMaxAggregateOutputType | null
  }

  export type AnnouncementRecipientMinAggregateOutputType = {
    id: string | null
    announcementId: string | null
    userId: string | null
    email: string | null
    isRead: boolean | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type AnnouncementRecipientMaxAggregateOutputType = {
    id: string | null
    announcementId: string | null
    userId: string | null
    email: string | null
    isRead: boolean | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type AnnouncementRecipientCountAggregateOutputType = {
    id: number
    announcementId: number
    userId: number
    email: number
    isRead: number
    readAt: number
    createdAt: number
    _all: number
  }


  export type AnnouncementRecipientMinAggregateInputType = {
    id?: true
    announcementId?: true
    userId?: true
    email?: true
    isRead?: true
    readAt?: true
    createdAt?: true
  }

  export type AnnouncementRecipientMaxAggregateInputType = {
    id?: true
    announcementId?: true
    userId?: true
    email?: true
    isRead?: true
    readAt?: true
    createdAt?: true
  }

  export type AnnouncementRecipientCountAggregateInputType = {
    id?: true
    announcementId?: true
    userId?: true
    email?: true
    isRead?: true
    readAt?: true
    createdAt?: true
    _all?: true
  }

  export type AnnouncementRecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementRecipient to aggregate.
     */
    where?: AnnouncementRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementRecipients to fetch.
     */
    orderBy?: AnnouncementRecipientOrderByWithRelationInput | AnnouncementRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnouncementRecipients
    **/
    _count?: true | AnnouncementRecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementRecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementRecipientMaxAggregateInputType
  }

  export type GetAnnouncementRecipientAggregateType<T extends AnnouncementRecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncementRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncementRecipient[P]>
      : GetScalarType<T[P], AggregateAnnouncementRecipient[P]>
  }




  export type AnnouncementRecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementRecipientWhereInput
    orderBy?: AnnouncementRecipientOrderByWithAggregationInput | AnnouncementRecipientOrderByWithAggregationInput[]
    by: AnnouncementRecipientScalarFieldEnum[] | AnnouncementRecipientScalarFieldEnum
    having?: AnnouncementRecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementRecipientCountAggregateInputType | true
    _min?: AnnouncementRecipientMinAggregateInputType
    _max?: AnnouncementRecipientMaxAggregateInputType
  }

  export type AnnouncementRecipientGroupByOutputType = {
    id: string
    announcementId: string
    userId: string
    email: string
    isRead: boolean
    readAt: Date | null
    createdAt: Date
    _count: AnnouncementRecipientCountAggregateOutputType | null
    _min: AnnouncementRecipientMinAggregateOutputType | null
    _max: AnnouncementRecipientMaxAggregateOutputType | null
  }

  type GetAnnouncementRecipientGroupByPayload<T extends AnnouncementRecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementRecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementRecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementRecipientGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementRecipientGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementRecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    userId?: boolean
    email?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementRecipient"]>

  export type AnnouncementRecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    userId?: boolean
    email?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementRecipient"]>

  export type AnnouncementRecipientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    userId?: boolean
    email?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementRecipient"]>

  export type AnnouncementRecipientSelectScalar = {
    id?: boolean
    announcementId?: boolean
    userId?: boolean
    email?: boolean
    isRead?: boolean
    readAt?: boolean
    createdAt?: boolean
  }

  export type AnnouncementRecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "announcementId" | "userId" | "email" | "isRead" | "readAt" | "createdAt", ExtArgs["result"]["announcementRecipient"]>
  export type AnnouncementRecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementRecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementRecipientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnouncementRecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnouncementRecipient"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      announcementId: string
      userId: string
      email: string
      isRead: boolean
      readAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["announcementRecipient"]>
    composites: {}
  }

  type AnnouncementRecipientGetPayload<S extends boolean | null | undefined | AnnouncementRecipientDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementRecipientPayload, S>

  type AnnouncementRecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementRecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementRecipientCountAggregateInputType | true
    }

  export interface AnnouncementRecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnouncementRecipient'], meta: { name: 'AnnouncementRecipient' } }
    /**
     * Find zero or one AnnouncementRecipient that matches the filter.
     * @param {AnnouncementRecipientFindUniqueArgs} args - Arguments to find a AnnouncementRecipient
     * @example
     * // Get one AnnouncementRecipient
     * const announcementRecipient = await prisma.announcementRecipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementRecipientFindUniqueArgs>(args: SelectSubset<T, AnnouncementRecipientFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnnouncementRecipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementRecipientFindUniqueOrThrowArgs} args - Arguments to find a AnnouncementRecipient
     * @example
     * // Get one AnnouncementRecipient
     * const announcementRecipient = await prisma.announcementRecipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementRecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementRecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementRecipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementRecipientFindFirstArgs} args - Arguments to find a AnnouncementRecipient
     * @example
     * // Get one AnnouncementRecipient
     * const announcementRecipient = await prisma.announcementRecipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementRecipientFindFirstArgs>(args?: SelectSubset<T, AnnouncementRecipientFindFirstArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementRecipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementRecipientFindFirstOrThrowArgs} args - Arguments to find a AnnouncementRecipient
     * @example
     * // Get one AnnouncementRecipient
     * const announcementRecipient = await prisma.announcementRecipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementRecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementRecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnnouncementRecipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementRecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnouncementRecipients
     * const announcementRecipients = await prisma.announcementRecipient.findMany()
     * 
     * // Get first 10 AnnouncementRecipients
     * const announcementRecipients = await prisma.announcementRecipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementRecipientWithIdOnly = await prisma.announcementRecipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementRecipientFindManyArgs>(args?: SelectSubset<T, AnnouncementRecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnnouncementRecipient.
     * @param {AnnouncementRecipientCreateArgs} args - Arguments to create a AnnouncementRecipient.
     * @example
     * // Create one AnnouncementRecipient
     * const AnnouncementRecipient = await prisma.announcementRecipient.create({
     *   data: {
     *     // ... data to create a AnnouncementRecipient
     *   }
     * })
     * 
     */
    create<T extends AnnouncementRecipientCreateArgs>(args: SelectSubset<T, AnnouncementRecipientCreateArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnnouncementRecipients.
     * @param {AnnouncementRecipientCreateManyArgs} args - Arguments to create many AnnouncementRecipients.
     * @example
     * // Create many AnnouncementRecipients
     * const announcementRecipient = await prisma.announcementRecipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementRecipientCreateManyArgs>(args?: SelectSubset<T, AnnouncementRecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnouncementRecipients and returns the data saved in the database.
     * @param {AnnouncementRecipientCreateManyAndReturnArgs} args - Arguments to create many AnnouncementRecipients.
     * @example
     * // Create many AnnouncementRecipients
     * const announcementRecipient = await prisma.announcementRecipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnouncementRecipients and only return the `id`
     * const announcementRecipientWithIdOnly = await prisma.announcementRecipient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementRecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementRecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnnouncementRecipient.
     * @param {AnnouncementRecipientDeleteArgs} args - Arguments to delete one AnnouncementRecipient.
     * @example
     * // Delete one AnnouncementRecipient
     * const AnnouncementRecipient = await prisma.announcementRecipient.delete({
     *   where: {
     *     // ... filter to delete one AnnouncementRecipient
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementRecipientDeleteArgs>(args: SelectSubset<T, AnnouncementRecipientDeleteArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnnouncementRecipient.
     * @param {AnnouncementRecipientUpdateArgs} args - Arguments to update one AnnouncementRecipient.
     * @example
     * // Update one AnnouncementRecipient
     * const announcementRecipient = await prisma.announcementRecipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementRecipientUpdateArgs>(args: SelectSubset<T, AnnouncementRecipientUpdateArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnnouncementRecipients.
     * @param {AnnouncementRecipientDeleteManyArgs} args - Arguments to filter AnnouncementRecipients to delete.
     * @example
     * // Delete a few AnnouncementRecipients
     * const { count } = await prisma.announcementRecipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementRecipientDeleteManyArgs>(args?: SelectSubset<T, AnnouncementRecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementRecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnouncementRecipients
     * const announcementRecipient = await prisma.announcementRecipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementRecipientUpdateManyArgs>(args: SelectSubset<T, AnnouncementRecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementRecipients and returns the data updated in the database.
     * @param {AnnouncementRecipientUpdateManyAndReturnArgs} args - Arguments to update many AnnouncementRecipients.
     * @example
     * // Update many AnnouncementRecipients
     * const announcementRecipient = await prisma.announcementRecipient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnnouncementRecipients and only return the `id`
     * const announcementRecipientWithIdOnly = await prisma.announcementRecipient.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementRecipientUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementRecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnnouncementRecipient.
     * @param {AnnouncementRecipientUpsertArgs} args - Arguments to update or create a AnnouncementRecipient.
     * @example
     * // Update or create a AnnouncementRecipient
     * const announcementRecipient = await prisma.announcementRecipient.upsert({
     *   create: {
     *     // ... data to create a AnnouncementRecipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnouncementRecipient we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementRecipientUpsertArgs>(args: SelectSubset<T, AnnouncementRecipientUpsertArgs<ExtArgs>>): Prisma__AnnouncementRecipientClient<$Result.GetResult<Prisma.$AnnouncementRecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnnouncementRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementRecipientCountArgs} args - Arguments to filter AnnouncementRecipients to count.
     * @example
     * // Count the number of AnnouncementRecipients
     * const count = await prisma.announcementRecipient.count({
     *   where: {
     *     // ... the filter for the AnnouncementRecipients we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementRecipientCountArgs>(
      args?: Subset<T, AnnouncementRecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementRecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnouncementRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementRecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementRecipientAggregateArgs>(args: Subset<T, AnnouncementRecipientAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementRecipientAggregateType<T>>

    /**
     * Group by AnnouncementRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementRecipientGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementRecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementRecipientGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementRecipientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementRecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnouncementRecipient model
   */
  readonly fields: AnnouncementRecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnouncementRecipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementRecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnnouncementRecipient model
   */
  interface AnnouncementRecipientFieldRefs {
    readonly id: FieldRef<"AnnouncementRecipient", 'String'>
    readonly announcementId: FieldRef<"AnnouncementRecipient", 'String'>
    readonly userId: FieldRef<"AnnouncementRecipient", 'String'>
    readonly email: FieldRef<"AnnouncementRecipient", 'String'>
    readonly isRead: FieldRef<"AnnouncementRecipient", 'Boolean'>
    readonly readAt: FieldRef<"AnnouncementRecipient", 'DateTime'>
    readonly createdAt: FieldRef<"AnnouncementRecipient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnnouncementRecipient findUnique
   */
  export type AnnouncementRecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementRecipient to fetch.
     */
    where: AnnouncementRecipientWhereUniqueInput
  }

  /**
   * AnnouncementRecipient findUniqueOrThrow
   */
  export type AnnouncementRecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementRecipient to fetch.
     */
    where: AnnouncementRecipientWhereUniqueInput
  }

  /**
   * AnnouncementRecipient findFirst
   */
  export type AnnouncementRecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementRecipient to fetch.
     */
    where?: AnnouncementRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementRecipients to fetch.
     */
    orderBy?: AnnouncementRecipientOrderByWithRelationInput | AnnouncementRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementRecipients.
     */
    cursor?: AnnouncementRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementRecipients.
     */
    distinct?: AnnouncementRecipientScalarFieldEnum | AnnouncementRecipientScalarFieldEnum[]
  }

  /**
   * AnnouncementRecipient findFirstOrThrow
   */
  export type AnnouncementRecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementRecipient to fetch.
     */
    where?: AnnouncementRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementRecipients to fetch.
     */
    orderBy?: AnnouncementRecipientOrderByWithRelationInput | AnnouncementRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementRecipients.
     */
    cursor?: AnnouncementRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementRecipients.
     */
    distinct?: AnnouncementRecipientScalarFieldEnum | AnnouncementRecipientScalarFieldEnum[]
  }

  /**
   * AnnouncementRecipient findMany
   */
  export type AnnouncementRecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementRecipients to fetch.
     */
    where?: AnnouncementRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementRecipients to fetch.
     */
    orderBy?: AnnouncementRecipientOrderByWithRelationInput | AnnouncementRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnouncementRecipients.
     */
    cursor?: AnnouncementRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementRecipients.
     */
    skip?: number
    distinct?: AnnouncementRecipientScalarFieldEnum | AnnouncementRecipientScalarFieldEnum[]
  }

  /**
   * AnnouncementRecipient create
   */
  export type AnnouncementRecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a AnnouncementRecipient.
     */
    data: XOR<AnnouncementRecipientCreateInput, AnnouncementRecipientUncheckedCreateInput>
  }

  /**
   * AnnouncementRecipient createMany
   */
  export type AnnouncementRecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnouncementRecipients.
     */
    data: AnnouncementRecipientCreateManyInput | AnnouncementRecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnouncementRecipient createManyAndReturn
   */
  export type AnnouncementRecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * The data used to create many AnnouncementRecipients.
     */
    data: AnnouncementRecipientCreateManyInput | AnnouncementRecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementRecipient update
   */
  export type AnnouncementRecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a AnnouncementRecipient.
     */
    data: XOR<AnnouncementRecipientUpdateInput, AnnouncementRecipientUncheckedUpdateInput>
    /**
     * Choose, which AnnouncementRecipient to update.
     */
    where: AnnouncementRecipientWhereUniqueInput
  }

  /**
   * AnnouncementRecipient updateMany
   */
  export type AnnouncementRecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnouncementRecipients.
     */
    data: XOR<AnnouncementRecipientUpdateManyMutationInput, AnnouncementRecipientUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementRecipients to update
     */
    where?: AnnouncementRecipientWhereInput
    /**
     * Limit how many AnnouncementRecipients to update.
     */
    limit?: number
  }

  /**
   * AnnouncementRecipient updateManyAndReturn
   */
  export type AnnouncementRecipientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * The data used to update AnnouncementRecipients.
     */
    data: XOR<AnnouncementRecipientUpdateManyMutationInput, AnnouncementRecipientUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementRecipients to update
     */
    where?: AnnouncementRecipientWhereInput
    /**
     * Limit how many AnnouncementRecipients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementRecipient upsert
   */
  export type AnnouncementRecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the AnnouncementRecipient to update in case it exists.
     */
    where: AnnouncementRecipientWhereUniqueInput
    /**
     * In case the AnnouncementRecipient found by the `where` argument doesn't exist, create a new AnnouncementRecipient with this data.
     */
    create: XOR<AnnouncementRecipientCreateInput, AnnouncementRecipientUncheckedCreateInput>
    /**
     * In case the AnnouncementRecipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementRecipientUpdateInput, AnnouncementRecipientUncheckedUpdateInput>
  }

  /**
   * AnnouncementRecipient delete
   */
  export type AnnouncementRecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
    /**
     * Filter which AnnouncementRecipient to delete.
     */
    where: AnnouncementRecipientWhereUniqueInput
  }

  /**
   * AnnouncementRecipient deleteMany
   */
  export type AnnouncementRecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementRecipients to delete
     */
    where?: AnnouncementRecipientWhereInput
    /**
     * Limit how many AnnouncementRecipients to delete.
     */
    limit?: number
  }

  /**
   * AnnouncementRecipient without action
   */
  export type AnnouncementRecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementRecipient
     */
    select?: AnnouncementRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementRecipient
     */
    omit?: AnnouncementRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementRecipientInclude<ExtArgs> | null
  }


  /**
   * Model FinancialDetails
   */

  export type AggregateFinancialDetails = {
    _count: FinancialDetailsCountAggregateOutputType | null
    _min: FinancialDetailsMinAggregateOutputType | null
    _max: FinancialDetailsMaxAggregateOutputType | null
  }

  export type FinancialDetailsMinAggregateOutputType = {
    id: string | null
    bankName: string | null
    accountNo: string | null
    ifscCode: string | null
    panNumber: string | null
    uanNo: string | null
    esicNo: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialDetailsMaxAggregateOutputType = {
    id: string | null
    bankName: string | null
    accountNo: string | null
    ifscCode: string | null
    panNumber: string | null
    uanNo: string | null
    esicNo: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialDetailsCountAggregateOutputType = {
    id: number
    bankName: number
    accountNo: number
    ifscCode: number
    panNumber: number
    uanNo: number
    esicNo: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinancialDetailsMinAggregateInputType = {
    id?: true
    bankName?: true
    accountNo?: true
    ifscCode?: true
    panNumber?: true
    uanNo?: true
    esicNo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialDetailsMaxAggregateInputType = {
    id?: true
    bankName?: true
    accountNo?: true
    ifscCode?: true
    panNumber?: true
    uanNo?: true
    esicNo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialDetailsCountAggregateInputType = {
    id?: true
    bankName?: true
    accountNo?: true
    ifscCode?: true
    panNumber?: true
    uanNo?: true
    esicNo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinancialDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialDetails to aggregate.
     */
    where?: FinancialDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialDetails to fetch.
     */
    orderBy?: FinancialDetailsOrderByWithRelationInput | FinancialDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialDetails
    **/
    _count?: true | FinancialDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialDetailsMaxAggregateInputType
  }

  export type GetFinancialDetailsAggregateType<T extends FinancialDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialDetails[P]>
      : GetScalarType<T[P], AggregateFinancialDetails[P]>
  }




  export type FinancialDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialDetailsWhereInput
    orderBy?: FinancialDetailsOrderByWithAggregationInput | FinancialDetailsOrderByWithAggregationInput[]
    by: FinancialDetailsScalarFieldEnum[] | FinancialDetailsScalarFieldEnum
    having?: FinancialDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialDetailsCountAggregateInputType | true
    _min?: FinancialDetailsMinAggregateInputType
    _max?: FinancialDetailsMaxAggregateInputType
  }

  export type FinancialDetailsGroupByOutputType = {
    id: string
    bankName: string | null
    accountNo: string | null
    ifscCode: string | null
    panNumber: string | null
    uanNo: string | null
    esicNo: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: FinancialDetailsCountAggregateOutputType | null
    _min: FinancialDetailsMinAggregateOutputType | null
    _max: FinancialDetailsMaxAggregateOutputType | null
  }

  type GetFinancialDetailsGroupByPayload<T extends FinancialDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialDetailsGroupByOutputType[P]>
        }
      >
    >


  export type FinancialDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountNo?: boolean
    ifscCode?: boolean
    panNumber?: boolean
    uanNo?: boolean
    esicNo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialDetails"]>

  export type FinancialDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountNo?: boolean
    ifscCode?: boolean
    panNumber?: boolean
    uanNo?: boolean
    esicNo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialDetails"]>

  export type FinancialDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountNo?: boolean
    ifscCode?: boolean
    panNumber?: boolean
    uanNo?: boolean
    esicNo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialDetails"]>

  export type FinancialDetailsSelectScalar = {
    id?: boolean
    bankName?: boolean
    accountNo?: boolean
    ifscCode?: boolean
    panNumber?: boolean
    uanNo?: boolean
    esicNo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinancialDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankName" | "accountNo" | "ifscCode" | "panNumber" | "uanNo" | "esicNo" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["financialDetails"]>
  export type FinancialDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinancialDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinancialDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinancialDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bankName: string | null
      accountNo: string | null
      ifscCode: string | null
      panNumber: string | null
      uanNo: string | null
      esicNo: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financialDetails"]>
    composites: {}
  }

  type FinancialDetailsGetPayload<S extends boolean | null | undefined | FinancialDetailsDefaultArgs> = $Result.GetResult<Prisma.$FinancialDetailsPayload, S>

  type FinancialDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialDetailsCountAggregateInputType | true
    }

  export interface FinancialDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialDetails'], meta: { name: 'FinancialDetails' } }
    /**
     * Find zero or one FinancialDetails that matches the filter.
     * @param {FinancialDetailsFindUniqueArgs} args - Arguments to find a FinancialDetails
     * @example
     * // Get one FinancialDetails
     * const financialDetails = await prisma.financialDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialDetailsFindUniqueArgs>(args: SelectSubset<T, FinancialDetailsFindUniqueArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialDetailsFindUniqueOrThrowArgs} args - Arguments to find a FinancialDetails
     * @example
     * // Get one FinancialDetails
     * const financialDetails = await prisma.financialDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDetailsFindFirstArgs} args - Arguments to find a FinancialDetails
     * @example
     * // Get one FinancialDetails
     * const financialDetails = await prisma.financialDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialDetailsFindFirstArgs>(args?: SelectSubset<T, FinancialDetailsFindFirstArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDetailsFindFirstOrThrowArgs} args - Arguments to find a FinancialDetails
     * @example
     * // Get one FinancialDetails
     * const financialDetails = await prisma.financialDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialDetails
     * const financialDetails = await prisma.financialDetails.findMany()
     * 
     * // Get first 10 FinancialDetails
     * const financialDetails = await prisma.financialDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialDetailsWithIdOnly = await prisma.financialDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialDetailsFindManyArgs>(args?: SelectSubset<T, FinancialDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialDetails.
     * @param {FinancialDetailsCreateArgs} args - Arguments to create a FinancialDetails.
     * @example
     * // Create one FinancialDetails
     * const FinancialDetails = await prisma.financialDetails.create({
     *   data: {
     *     // ... data to create a FinancialDetails
     *   }
     * })
     * 
     */
    create<T extends FinancialDetailsCreateArgs>(args: SelectSubset<T, FinancialDetailsCreateArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialDetails.
     * @param {FinancialDetailsCreateManyArgs} args - Arguments to create many FinancialDetails.
     * @example
     * // Create many FinancialDetails
     * const financialDetails = await prisma.financialDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialDetailsCreateManyArgs>(args?: SelectSubset<T, FinancialDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialDetails and returns the data saved in the database.
     * @param {FinancialDetailsCreateManyAndReturnArgs} args - Arguments to create many FinancialDetails.
     * @example
     * // Create many FinancialDetails
     * const financialDetails = await prisma.financialDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialDetails and only return the `id`
     * const financialDetailsWithIdOnly = await prisma.financialDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialDetails.
     * @param {FinancialDetailsDeleteArgs} args - Arguments to delete one FinancialDetails.
     * @example
     * // Delete one FinancialDetails
     * const FinancialDetails = await prisma.financialDetails.delete({
     *   where: {
     *     // ... filter to delete one FinancialDetails
     *   }
     * })
     * 
     */
    delete<T extends FinancialDetailsDeleteArgs>(args: SelectSubset<T, FinancialDetailsDeleteArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialDetails.
     * @param {FinancialDetailsUpdateArgs} args - Arguments to update one FinancialDetails.
     * @example
     * // Update one FinancialDetails
     * const financialDetails = await prisma.financialDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialDetailsUpdateArgs>(args: SelectSubset<T, FinancialDetailsUpdateArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialDetails.
     * @param {FinancialDetailsDeleteManyArgs} args - Arguments to filter FinancialDetails to delete.
     * @example
     * // Delete a few FinancialDetails
     * const { count } = await prisma.financialDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialDetailsDeleteManyArgs>(args?: SelectSubset<T, FinancialDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialDetails
     * const financialDetails = await prisma.financialDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialDetailsUpdateManyArgs>(args: SelectSubset<T, FinancialDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialDetails and returns the data updated in the database.
     * @param {FinancialDetailsUpdateManyAndReturnArgs} args - Arguments to update many FinancialDetails.
     * @example
     * // Update many FinancialDetails
     * const financialDetails = await prisma.financialDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialDetails and only return the `id`
     * const financialDetailsWithIdOnly = await prisma.financialDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinancialDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialDetails.
     * @param {FinancialDetailsUpsertArgs} args - Arguments to update or create a FinancialDetails.
     * @example
     * // Update or create a FinancialDetails
     * const financialDetails = await prisma.financialDetails.upsert({
     *   create: {
     *     // ... data to create a FinancialDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialDetails we want to update
     *   }
     * })
     */
    upsert<T extends FinancialDetailsUpsertArgs>(args: SelectSubset<T, FinancialDetailsUpsertArgs<ExtArgs>>): Prisma__FinancialDetailsClient<$Result.GetResult<Prisma.$FinancialDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDetailsCountArgs} args - Arguments to filter FinancialDetails to count.
     * @example
     * // Count the number of FinancialDetails
     * const count = await prisma.financialDetails.count({
     *   where: {
     *     // ... the filter for the FinancialDetails we want to count
     *   }
     * })
    **/
    count<T extends FinancialDetailsCountArgs>(
      args?: Subset<T, FinancialDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialDetailsAggregateArgs>(args: Subset<T, FinancialDetailsAggregateArgs>): Prisma.PrismaPromise<GetFinancialDetailsAggregateType<T>>

    /**
     * Group by FinancialDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDetailsGroupByArgs} args - Group by arguments.
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
      T extends FinancialDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialDetailsGroupByArgs['orderBy'] }
        : { orderBy?: FinancialDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialDetails model
   */
  readonly fields: FinancialDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FinancialDetails model
   */
  interface FinancialDetailsFieldRefs {
    readonly id: FieldRef<"FinancialDetails", 'String'>
    readonly bankName: FieldRef<"FinancialDetails", 'String'>
    readonly accountNo: FieldRef<"FinancialDetails", 'String'>
    readonly ifscCode: FieldRef<"FinancialDetails", 'String'>
    readonly panNumber: FieldRef<"FinancialDetails", 'String'>
    readonly uanNo: FieldRef<"FinancialDetails", 'String'>
    readonly esicNo: FieldRef<"FinancialDetails", 'String'>
    readonly userId: FieldRef<"FinancialDetails", 'String'>
    readonly createdAt: FieldRef<"FinancialDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"FinancialDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialDetails findUnique
   */
  export type FinancialDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * Filter, which FinancialDetails to fetch.
     */
    where: FinancialDetailsWhereUniqueInput
  }

  /**
   * FinancialDetails findUniqueOrThrow
   */
  export type FinancialDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * Filter, which FinancialDetails to fetch.
     */
    where: FinancialDetailsWhereUniqueInput
  }

  /**
   * FinancialDetails findFirst
   */
  export type FinancialDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * Filter, which FinancialDetails to fetch.
     */
    where?: FinancialDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialDetails to fetch.
     */
    orderBy?: FinancialDetailsOrderByWithRelationInput | FinancialDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialDetails.
     */
    cursor?: FinancialDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialDetails.
     */
    distinct?: FinancialDetailsScalarFieldEnum | FinancialDetailsScalarFieldEnum[]
  }

  /**
   * FinancialDetails findFirstOrThrow
   */
  export type FinancialDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * Filter, which FinancialDetails to fetch.
     */
    where?: FinancialDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialDetails to fetch.
     */
    orderBy?: FinancialDetailsOrderByWithRelationInput | FinancialDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialDetails.
     */
    cursor?: FinancialDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialDetails.
     */
    distinct?: FinancialDetailsScalarFieldEnum | FinancialDetailsScalarFieldEnum[]
  }

  /**
   * FinancialDetails findMany
   */
  export type FinancialDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * Filter, which FinancialDetails to fetch.
     */
    where?: FinancialDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialDetails to fetch.
     */
    orderBy?: FinancialDetailsOrderByWithRelationInput | FinancialDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialDetails.
     */
    cursor?: FinancialDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialDetails.
     */
    skip?: number
    distinct?: FinancialDetailsScalarFieldEnum | FinancialDetailsScalarFieldEnum[]
  }

  /**
   * FinancialDetails create
   */
  export type FinancialDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialDetails.
     */
    data: XOR<FinancialDetailsCreateInput, FinancialDetailsUncheckedCreateInput>
  }

  /**
   * FinancialDetails createMany
   */
  export type FinancialDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialDetails.
     */
    data: FinancialDetailsCreateManyInput | FinancialDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialDetails createManyAndReturn
   */
  export type FinancialDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialDetails.
     */
    data: FinancialDetailsCreateManyInput | FinancialDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialDetails update
   */
  export type FinancialDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialDetails.
     */
    data: XOR<FinancialDetailsUpdateInput, FinancialDetailsUncheckedUpdateInput>
    /**
     * Choose, which FinancialDetails to update.
     */
    where: FinancialDetailsWhereUniqueInput
  }

  /**
   * FinancialDetails updateMany
   */
  export type FinancialDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialDetails.
     */
    data: XOR<FinancialDetailsUpdateManyMutationInput, FinancialDetailsUncheckedUpdateManyInput>
    /**
     * Filter which FinancialDetails to update
     */
    where?: FinancialDetailsWhereInput
    /**
     * Limit how many FinancialDetails to update.
     */
    limit?: number
  }

  /**
   * FinancialDetails updateManyAndReturn
   */
  export type FinancialDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * The data used to update FinancialDetails.
     */
    data: XOR<FinancialDetailsUpdateManyMutationInput, FinancialDetailsUncheckedUpdateManyInput>
    /**
     * Filter which FinancialDetails to update
     */
    where?: FinancialDetailsWhereInput
    /**
     * Limit how many FinancialDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialDetails upsert
   */
  export type FinancialDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialDetails to update in case it exists.
     */
    where: FinancialDetailsWhereUniqueInput
    /**
     * In case the FinancialDetails found by the `where` argument doesn't exist, create a new FinancialDetails with this data.
     */
    create: XOR<FinancialDetailsCreateInput, FinancialDetailsUncheckedCreateInput>
    /**
     * In case the FinancialDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialDetailsUpdateInput, FinancialDetailsUncheckedUpdateInput>
  }

  /**
   * FinancialDetails delete
   */
  export type FinancialDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
    /**
     * Filter which FinancialDetails to delete.
     */
    where: FinancialDetailsWhereUniqueInput
  }

  /**
   * FinancialDetails deleteMany
   */
  export type FinancialDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialDetails to delete
     */
    where?: FinancialDetailsWhereInput
    /**
     * Limit how many FinancialDetails to delete.
     */
    limit?: number
  }

  /**
   * FinancialDetails without action
   */
  export type FinancialDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialDetails
     */
    select?: FinancialDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialDetails
     */
    omit?: FinancialDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDetailsInclude<ExtArgs> | null
  }


  /**
   * Model PayrollSettings
   */

  export type AggregatePayrollSettings = {
    _count: PayrollSettingsCountAggregateOutputType | null
    _min: PayrollSettingsMinAggregateOutputType | null
    _max: PayrollSettingsMaxAggregateOutputType | null
  }

  export type PayrollSettingsMinAggregateOutputType = {
    id: string | null
    overtime: boolean | null
    conveyance: boolean | null
    medical: boolean | null
    pf: boolean | null
    es: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollSettingsMaxAggregateOutputType = {
    id: string | null
    overtime: boolean | null
    conveyance: boolean | null
    medical: boolean | null
    pf: boolean | null
    es: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollSettingsCountAggregateOutputType = {
    id: number
    overtime: number
    conveyance: number
    medical: number
    pf: number
    es: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayrollSettingsMinAggregateInputType = {
    id?: true
    overtime?: true
    conveyance?: true
    medical?: true
    pf?: true
    es?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollSettingsMaxAggregateInputType = {
    id?: true
    overtime?: true
    conveyance?: true
    medical?: true
    pf?: true
    es?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollSettingsCountAggregateInputType = {
    id?: true
    overtime?: true
    conveyance?: true
    medical?: true
    pf?: true
    es?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayrollSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollSettings to aggregate.
     */
    where?: PayrollSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollSettings to fetch.
     */
    orderBy?: PayrollSettingsOrderByWithRelationInput | PayrollSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollSettings
    **/
    _count?: true | PayrollSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollSettingsMaxAggregateInputType
  }

  export type GetPayrollSettingsAggregateType<T extends PayrollSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollSettings[P]>
      : GetScalarType<T[P], AggregatePayrollSettings[P]>
  }




  export type PayrollSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollSettingsWhereInput
    orderBy?: PayrollSettingsOrderByWithAggregationInput | PayrollSettingsOrderByWithAggregationInput[]
    by: PayrollSettingsScalarFieldEnum[] | PayrollSettingsScalarFieldEnum
    having?: PayrollSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollSettingsCountAggregateInputType | true
    _min?: PayrollSettingsMinAggregateInputType
    _max?: PayrollSettingsMaxAggregateInputType
  }

  export type PayrollSettingsGroupByOutputType = {
    id: string
    overtime: boolean
    conveyance: boolean
    medical: boolean
    pf: boolean
    es: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PayrollSettingsCountAggregateOutputType | null
    _min: PayrollSettingsMinAggregateOutputType | null
    _max: PayrollSettingsMaxAggregateOutputType | null
  }

  type GetPayrollSettingsGroupByPayload<T extends PayrollSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollSettingsGroupByOutputType[P]>
        }
      >
    >


  export type PayrollSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollSettings"]>

  export type PayrollSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollSettings"]>

  export type PayrollSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollSettings"]>

  export type PayrollSettingsSelectScalar = {
    id?: boolean
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayrollSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "overtime" | "conveyance" | "medical" | "pf" | "es" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["payrollSettings"]>
  export type PayrollSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayrollSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayrollSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayrollSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      overtime: boolean
      conveyance: boolean
      medical: boolean
      pf: boolean
      es: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payrollSettings"]>
    composites: {}
  }

  type PayrollSettingsGetPayload<S extends boolean | null | undefined | PayrollSettingsDefaultArgs> = $Result.GetResult<Prisma.$PayrollSettingsPayload, S>

  type PayrollSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollSettingsCountAggregateInputType | true
    }

  export interface PayrollSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollSettings'], meta: { name: 'PayrollSettings' } }
    /**
     * Find zero or one PayrollSettings that matches the filter.
     * @param {PayrollSettingsFindUniqueArgs} args - Arguments to find a PayrollSettings
     * @example
     * // Get one PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollSettingsFindUniqueArgs>(args: SelectSubset<T, PayrollSettingsFindUniqueArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollSettingsFindUniqueOrThrowArgs} args - Arguments to find a PayrollSettings
     * @example
     * // Get one PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollSettingsFindFirstArgs} args - Arguments to find a PayrollSettings
     * @example
     * // Get one PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollSettingsFindFirstArgs>(args?: SelectSubset<T, PayrollSettingsFindFirstArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollSettingsFindFirstOrThrowArgs} args - Arguments to find a PayrollSettings
     * @example
     * // Get one PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.findMany()
     * 
     * // Get first 10 PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollSettingsWithIdOnly = await prisma.payrollSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollSettingsFindManyArgs>(args?: SelectSubset<T, PayrollSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollSettings.
     * @param {PayrollSettingsCreateArgs} args - Arguments to create a PayrollSettings.
     * @example
     * // Create one PayrollSettings
     * const PayrollSettings = await prisma.payrollSettings.create({
     *   data: {
     *     // ... data to create a PayrollSettings
     *   }
     * })
     * 
     */
    create<T extends PayrollSettingsCreateArgs>(args: SelectSubset<T, PayrollSettingsCreateArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollSettings.
     * @param {PayrollSettingsCreateManyArgs} args - Arguments to create many PayrollSettings.
     * @example
     * // Create many PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollSettingsCreateManyArgs>(args?: SelectSubset<T, PayrollSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollSettings and returns the data saved in the database.
     * @param {PayrollSettingsCreateManyAndReturnArgs} args - Arguments to create many PayrollSettings.
     * @example
     * // Create many PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollSettings and only return the `id`
     * const payrollSettingsWithIdOnly = await prisma.payrollSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollSettings.
     * @param {PayrollSettingsDeleteArgs} args - Arguments to delete one PayrollSettings.
     * @example
     * // Delete one PayrollSettings
     * const PayrollSettings = await prisma.payrollSettings.delete({
     *   where: {
     *     // ... filter to delete one PayrollSettings
     *   }
     * })
     * 
     */
    delete<T extends PayrollSettingsDeleteArgs>(args: SelectSubset<T, PayrollSettingsDeleteArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollSettings.
     * @param {PayrollSettingsUpdateArgs} args - Arguments to update one PayrollSettings.
     * @example
     * // Update one PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollSettingsUpdateArgs>(args: SelectSubset<T, PayrollSettingsUpdateArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollSettings.
     * @param {PayrollSettingsDeleteManyArgs} args - Arguments to filter PayrollSettings to delete.
     * @example
     * // Delete a few PayrollSettings
     * const { count } = await prisma.payrollSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollSettingsDeleteManyArgs>(args?: SelectSubset<T, PayrollSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollSettingsUpdateManyArgs>(args: SelectSubset<T, PayrollSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollSettings and returns the data updated in the database.
     * @param {PayrollSettingsUpdateManyAndReturnArgs} args - Arguments to update many PayrollSettings.
     * @example
     * // Update many PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollSettings and only return the `id`
     * const payrollSettingsWithIdOnly = await prisma.payrollSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollSettings.
     * @param {PayrollSettingsUpsertArgs} args - Arguments to update or create a PayrollSettings.
     * @example
     * // Update or create a PayrollSettings
     * const payrollSettings = await prisma.payrollSettings.upsert({
     *   create: {
     *     // ... data to create a PayrollSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollSettings we want to update
     *   }
     * })
     */
    upsert<T extends PayrollSettingsUpsertArgs>(args: SelectSubset<T, PayrollSettingsUpsertArgs<ExtArgs>>): Prisma__PayrollSettingsClient<$Result.GetResult<Prisma.$PayrollSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollSettingsCountArgs} args - Arguments to filter PayrollSettings to count.
     * @example
     * // Count the number of PayrollSettings
     * const count = await prisma.payrollSettings.count({
     *   where: {
     *     // ... the filter for the PayrollSettings we want to count
     *   }
     * })
    **/
    count<T extends PayrollSettingsCountArgs>(
      args?: Subset<T, PayrollSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollSettingsAggregateArgs>(args: Subset<T, PayrollSettingsAggregateArgs>): Prisma.PrismaPromise<GetPayrollSettingsAggregateType<T>>

    /**
     * Group by PayrollSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollSettingsGroupByArgs} args - Group by arguments.
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
      T extends PayrollSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollSettingsGroupByArgs['orderBy'] }
        : { orderBy?: PayrollSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollSettings model
   */
  readonly fields: PayrollSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayrollSettings model
   */
  interface PayrollSettingsFieldRefs {
    readonly id: FieldRef<"PayrollSettings", 'String'>
    readonly overtime: FieldRef<"PayrollSettings", 'Boolean'>
    readonly conveyance: FieldRef<"PayrollSettings", 'Boolean'>
    readonly medical: FieldRef<"PayrollSettings", 'Boolean'>
    readonly pf: FieldRef<"PayrollSettings", 'Boolean'>
    readonly es: FieldRef<"PayrollSettings", 'Boolean'>
    readonly userId: FieldRef<"PayrollSettings", 'String'>
    readonly createdAt: FieldRef<"PayrollSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"PayrollSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayrollSettings findUnique
   */
  export type PayrollSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayrollSettings to fetch.
     */
    where: PayrollSettingsWhereUniqueInput
  }

  /**
   * PayrollSettings findUniqueOrThrow
   */
  export type PayrollSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayrollSettings to fetch.
     */
    where: PayrollSettingsWhereUniqueInput
  }

  /**
   * PayrollSettings findFirst
   */
  export type PayrollSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayrollSettings to fetch.
     */
    where?: PayrollSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollSettings to fetch.
     */
    orderBy?: PayrollSettingsOrderByWithRelationInput | PayrollSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollSettings.
     */
    cursor?: PayrollSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollSettings.
     */
    distinct?: PayrollSettingsScalarFieldEnum | PayrollSettingsScalarFieldEnum[]
  }

  /**
   * PayrollSettings findFirstOrThrow
   */
  export type PayrollSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayrollSettings to fetch.
     */
    where?: PayrollSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollSettings to fetch.
     */
    orderBy?: PayrollSettingsOrderByWithRelationInput | PayrollSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollSettings.
     */
    cursor?: PayrollSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollSettings.
     */
    distinct?: PayrollSettingsScalarFieldEnum | PayrollSettingsScalarFieldEnum[]
  }

  /**
   * PayrollSettings findMany
   */
  export type PayrollSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayrollSettings to fetch.
     */
    where?: PayrollSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollSettings to fetch.
     */
    orderBy?: PayrollSettingsOrderByWithRelationInput | PayrollSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollSettings.
     */
    cursor?: PayrollSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollSettings.
     */
    skip?: number
    distinct?: PayrollSettingsScalarFieldEnum | PayrollSettingsScalarFieldEnum[]
  }

  /**
   * PayrollSettings create
   */
  export type PayrollSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollSettings.
     */
    data: XOR<PayrollSettingsCreateInput, PayrollSettingsUncheckedCreateInput>
  }

  /**
   * PayrollSettings createMany
   */
  export type PayrollSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollSettings.
     */
    data: PayrollSettingsCreateManyInput | PayrollSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollSettings createManyAndReturn
   */
  export type PayrollSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollSettings.
     */
    data: PayrollSettingsCreateManyInput | PayrollSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollSettings update
   */
  export type PayrollSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollSettings.
     */
    data: XOR<PayrollSettingsUpdateInput, PayrollSettingsUncheckedUpdateInput>
    /**
     * Choose, which PayrollSettings to update.
     */
    where: PayrollSettingsWhereUniqueInput
  }

  /**
   * PayrollSettings updateMany
   */
  export type PayrollSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollSettings.
     */
    data: XOR<PayrollSettingsUpdateManyMutationInput, PayrollSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PayrollSettings to update
     */
    where?: PayrollSettingsWhereInput
    /**
     * Limit how many PayrollSettings to update.
     */
    limit?: number
  }

  /**
   * PayrollSettings updateManyAndReturn
   */
  export type PayrollSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * The data used to update PayrollSettings.
     */
    data: XOR<PayrollSettingsUpdateManyMutationInput, PayrollSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PayrollSettings to update
     */
    where?: PayrollSettingsWhereInput
    /**
     * Limit how many PayrollSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollSettings upsert
   */
  export type PayrollSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollSettings to update in case it exists.
     */
    where: PayrollSettingsWhereUniqueInput
    /**
     * In case the PayrollSettings found by the `where` argument doesn't exist, create a new PayrollSettings with this data.
     */
    create: XOR<PayrollSettingsCreateInput, PayrollSettingsUncheckedCreateInput>
    /**
     * In case the PayrollSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollSettingsUpdateInput, PayrollSettingsUncheckedUpdateInput>
  }

  /**
   * PayrollSettings delete
   */
  export type PayrollSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
    /**
     * Filter which PayrollSettings to delete.
     */
    where: PayrollSettingsWhereUniqueInput
  }

  /**
   * PayrollSettings deleteMany
   */
  export type PayrollSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollSettings to delete
     */
    where?: PayrollSettingsWhereInput
    /**
     * Limit how many PayrollSettings to delete.
     */
    limit?: number
  }

  /**
   * PayrollSettings without action
   */
  export type PayrollSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollSettings
     */
    select?: PayrollSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollSettings
     */
    omit?: PayrollSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollSettingsInclude<ExtArgs> | null
  }


  /**
   * Model LeaveComment
   */

  export type AggregateLeaveComment = {
    _count: LeaveCommentCountAggregateOutputType | null
    _min: LeaveCommentMinAggregateOutputType | null
    _max: LeaveCommentMaxAggregateOutputType | null
  }

  export type LeaveCommentMinAggregateOutputType = {
    id: string | null
    leaveId: string | null
    userId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type LeaveCommentMaxAggregateOutputType = {
    id: string | null
    leaveId: string | null
    userId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type LeaveCommentCountAggregateOutputType = {
    id: number
    leaveId: number
    userId: number
    message: number
    createdAt: number
    _all: number
  }


  export type LeaveCommentMinAggregateInputType = {
    id?: true
    leaveId?: true
    userId?: true
    message?: true
    createdAt?: true
  }

  export type LeaveCommentMaxAggregateInputType = {
    id?: true
    leaveId?: true
    userId?: true
    message?: true
    createdAt?: true
  }

  export type LeaveCommentCountAggregateInputType = {
    id?: true
    leaveId?: true
    userId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type LeaveCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveComment to aggregate.
     */
    where?: LeaveCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveComments to fetch.
     */
    orderBy?: LeaveCommentOrderByWithRelationInput | LeaveCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveComments
    **/
    _count?: true | LeaveCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveCommentMaxAggregateInputType
  }

  export type GetLeaveCommentAggregateType<T extends LeaveCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveComment[P]>
      : GetScalarType<T[P], AggregateLeaveComment[P]>
  }




  export type LeaveCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveCommentWhereInput
    orderBy?: LeaveCommentOrderByWithAggregationInput | LeaveCommentOrderByWithAggregationInput[]
    by: LeaveCommentScalarFieldEnum[] | LeaveCommentScalarFieldEnum
    having?: LeaveCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveCommentCountAggregateInputType | true
    _min?: LeaveCommentMinAggregateInputType
    _max?: LeaveCommentMaxAggregateInputType
  }

  export type LeaveCommentGroupByOutputType = {
    id: string
    leaveId: string
    userId: string
    message: string
    createdAt: Date
    _count: LeaveCommentCountAggregateOutputType | null
    _min: LeaveCommentMinAggregateOutputType | null
    _max: LeaveCommentMaxAggregateOutputType | null
  }

  type GetLeaveCommentGroupByPayload<T extends LeaveCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveCommentGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveCommentGroupByOutputType[P]>
        }
      >
    >


  export type LeaveCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    leave?: boolean | LeaveApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveComment"]>

  export type LeaveCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    leave?: boolean | LeaveApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveComment"]>

  export type LeaveCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    leave?: boolean | LeaveApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveComment"]>

  export type LeaveCommentSelectScalar = {
    id?: boolean
    leaveId?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type LeaveCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaveId" | "userId" | "message" | "createdAt", ExtArgs["result"]["leaveComment"]>
  export type LeaveCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | LeaveApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | LeaveApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | LeaveApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeaveCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveComment"
    objects: {
      leave: Prisma.$LeaveApplicationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaveId: string
      userId: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["leaveComment"]>
    composites: {}
  }

  type LeaveCommentGetPayload<S extends boolean | null | undefined | LeaveCommentDefaultArgs> = $Result.GetResult<Prisma.$LeaveCommentPayload, S>

  type LeaveCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveCommentCountAggregateInputType | true
    }

  export interface LeaveCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveComment'], meta: { name: 'LeaveComment' } }
    /**
     * Find zero or one LeaveComment that matches the filter.
     * @param {LeaveCommentFindUniqueArgs} args - Arguments to find a LeaveComment
     * @example
     * // Get one LeaveComment
     * const leaveComment = await prisma.leaveComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveCommentFindUniqueArgs>(args: SelectSubset<T, LeaveCommentFindUniqueArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveCommentFindUniqueOrThrowArgs} args - Arguments to find a LeaveComment
     * @example
     * // Get one LeaveComment
     * const leaveComment = await prisma.leaveComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCommentFindFirstArgs} args - Arguments to find a LeaveComment
     * @example
     * // Get one LeaveComment
     * const leaveComment = await prisma.leaveComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveCommentFindFirstArgs>(args?: SelectSubset<T, LeaveCommentFindFirstArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCommentFindFirstOrThrowArgs} args - Arguments to find a LeaveComment
     * @example
     * // Get one LeaveComment
     * const leaveComment = await prisma.leaveComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveComments
     * const leaveComments = await prisma.leaveComment.findMany()
     * 
     * // Get first 10 LeaveComments
     * const leaveComments = await prisma.leaveComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveCommentWithIdOnly = await prisma.leaveComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveCommentFindManyArgs>(args?: SelectSubset<T, LeaveCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveComment.
     * @param {LeaveCommentCreateArgs} args - Arguments to create a LeaveComment.
     * @example
     * // Create one LeaveComment
     * const LeaveComment = await prisma.leaveComment.create({
     *   data: {
     *     // ... data to create a LeaveComment
     *   }
     * })
     * 
     */
    create<T extends LeaveCommentCreateArgs>(args: SelectSubset<T, LeaveCommentCreateArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveComments.
     * @param {LeaveCommentCreateManyArgs} args - Arguments to create many LeaveComments.
     * @example
     * // Create many LeaveComments
     * const leaveComment = await prisma.leaveComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveCommentCreateManyArgs>(args?: SelectSubset<T, LeaveCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveComments and returns the data saved in the database.
     * @param {LeaveCommentCreateManyAndReturnArgs} args - Arguments to create many LeaveComments.
     * @example
     * // Create many LeaveComments
     * const leaveComment = await prisma.leaveComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveComments and only return the `id`
     * const leaveCommentWithIdOnly = await prisma.leaveComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveComment.
     * @param {LeaveCommentDeleteArgs} args - Arguments to delete one LeaveComment.
     * @example
     * // Delete one LeaveComment
     * const LeaveComment = await prisma.leaveComment.delete({
     *   where: {
     *     // ... filter to delete one LeaveComment
     *   }
     * })
     * 
     */
    delete<T extends LeaveCommentDeleteArgs>(args: SelectSubset<T, LeaveCommentDeleteArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveComment.
     * @param {LeaveCommentUpdateArgs} args - Arguments to update one LeaveComment.
     * @example
     * // Update one LeaveComment
     * const leaveComment = await prisma.leaveComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveCommentUpdateArgs>(args: SelectSubset<T, LeaveCommentUpdateArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveComments.
     * @param {LeaveCommentDeleteManyArgs} args - Arguments to filter LeaveComments to delete.
     * @example
     * // Delete a few LeaveComments
     * const { count } = await prisma.leaveComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveCommentDeleteManyArgs>(args?: SelectSubset<T, LeaveCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveComments
     * const leaveComment = await prisma.leaveComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveCommentUpdateManyArgs>(args: SelectSubset<T, LeaveCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveComments and returns the data updated in the database.
     * @param {LeaveCommentUpdateManyAndReturnArgs} args - Arguments to update many LeaveComments.
     * @example
     * // Update many LeaveComments
     * const leaveComment = await prisma.leaveComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveComments and only return the `id`
     * const leaveCommentWithIdOnly = await prisma.leaveComment.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveComment.
     * @param {LeaveCommentUpsertArgs} args - Arguments to update or create a LeaveComment.
     * @example
     * // Update or create a LeaveComment
     * const leaveComment = await prisma.leaveComment.upsert({
     *   create: {
     *     // ... data to create a LeaveComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveComment we want to update
     *   }
     * })
     */
    upsert<T extends LeaveCommentUpsertArgs>(args: SelectSubset<T, LeaveCommentUpsertArgs<ExtArgs>>): Prisma__LeaveCommentClient<$Result.GetResult<Prisma.$LeaveCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCommentCountArgs} args - Arguments to filter LeaveComments to count.
     * @example
     * // Count the number of LeaveComments
     * const count = await prisma.leaveComment.count({
     *   where: {
     *     // ... the filter for the LeaveComments we want to count
     *   }
     * })
    **/
    count<T extends LeaveCommentCountArgs>(
      args?: Subset<T, LeaveCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveCommentAggregateArgs>(args: Subset<T, LeaveCommentAggregateArgs>): Prisma.PrismaPromise<GetLeaveCommentAggregateType<T>>

    /**
     * Group by LeaveComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCommentGroupByArgs} args - Group by arguments.
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
      T extends LeaveCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveCommentGroupByArgs['orderBy'] }
        : { orderBy?: LeaveCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveComment model
   */
  readonly fields: LeaveCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leave<T extends LeaveApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaveApplicationDefaultArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaveComment model
   */
  interface LeaveCommentFieldRefs {
    readonly id: FieldRef<"LeaveComment", 'String'>
    readonly leaveId: FieldRef<"LeaveComment", 'String'>
    readonly userId: FieldRef<"LeaveComment", 'String'>
    readonly message: FieldRef<"LeaveComment", 'String'>
    readonly createdAt: FieldRef<"LeaveComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveComment findUnique
   */
  export type LeaveCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * Filter, which LeaveComment to fetch.
     */
    where: LeaveCommentWhereUniqueInput
  }

  /**
   * LeaveComment findUniqueOrThrow
   */
  export type LeaveCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * Filter, which LeaveComment to fetch.
     */
    where: LeaveCommentWhereUniqueInput
  }

  /**
   * LeaveComment findFirst
   */
  export type LeaveCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * Filter, which LeaveComment to fetch.
     */
    where?: LeaveCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveComments to fetch.
     */
    orderBy?: LeaveCommentOrderByWithRelationInput | LeaveCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveComments.
     */
    cursor?: LeaveCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveComments.
     */
    distinct?: LeaveCommentScalarFieldEnum | LeaveCommentScalarFieldEnum[]
  }

  /**
   * LeaveComment findFirstOrThrow
   */
  export type LeaveCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * Filter, which LeaveComment to fetch.
     */
    where?: LeaveCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveComments to fetch.
     */
    orderBy?: LeaveCommentOrderByWithRelationInput | LeaveCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveComments.
     */
    cursor?: LeaveCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveComments.
     */
    distinct?: LeaveCommentScalarFieldEnum | LeaveCommentScalarFieldEnum[]
  }

  /**
   * LeaveComment findMany
   */
  export type LeaveCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * Filter, which LeaveComments to fetch.
     */
    where?: LeaveCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveComments to fetch.
     */
    orderBy?: LeaveCommentOrderByWithRelationInput | LeaveCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveComments.
     */
    cursor?: LeaveCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveComments.
     */
    skip?: number
    distinct?: LeaveCommentScalarFieldEnum | LeaveCommentScalarFieldEnum[]
  }

  /**
   * LeaveComment create
   */
  export type LeaveCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveComment.
     */
    data: XOR<LeaveCommentCreateInput, LeaveCommentUncheckedCreateInput>
  }

  /**
   * LeaveComment createMany
   */
  export type LeaveCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveComments.
     */
    data: LeaveCommentCreateManyInput | LeaveCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveComment createManyAndReturn
   */
  export type LeaveCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveComments.
     */
    data: LeaveCommentCreateManyInput | LeaveCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveComment update
   */
  export type LeaveCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveComment.
     */
    data: XOR<LeaveCommentUpdateInput, LeaveCommentUncheckedUpdateInput>
    /**
     * Choose, which LeaveComment to update.
     */
    where: LeaveCommentWhereUniqueInput
  }

  /**
   * LeaveComment updateMany
   */
  export type LeaveCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveComments.
     */
    data: XOR<LeaveCommentUpdateManyMutationInput, LeaveCommentUncheckedUpdateManyInput>
    /**
     * Filter which LeaveComments to update
     */
    where?: LeaveCommentWhereInput
    /**
     * Limit how many LeaveComments to update.
     */
    limit?: number
  }

  /**
   * LeaveComment updateManyAndReturn
   */
  export type LeaveCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * The data used to update LeaveComments.
     */
    data: XOR<LeaveCommentUpdateManyMutationInput, LeaveCommentUncheckedUpdateManyInput>
    /**
     * Filter which LeaveComments to update
     */
    where?: LeaveCommentWhereInput
    /**
     * Limit how many LeaveComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveComment upsert
   */
  export type LeaveCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveComment to update in case it exists.
     */
    where: LeaveCommentWhereUniqueInput
    /**
     * In case the LeaveComment found by the `where` argument doesn't exist, create a new LeaveComment with this data.
     */
    create: XOR<LeaveCommentCreateInput, LeaveCommentUncheckedCreateInput>
    /**
     * In case the LeaveComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveCommentUpdateInput, LeaveCommentUncheckedUpdateInput>
  }

  /**
   * LeaveComment delete
   */
  export type LeaveCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
    /**
     * Filter which LeaveComment to delete.
     */
    where: LeaveCommentWhereUniqueInput
  }

  /**
   * LeaveComment deleteMany
   */
  export type LeaveCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveComments to delete
     */
    where?: LeaveCommentWhereInput
    /**
     * Limit how many LeaveComments to delete.
     */
    limit?: number
  }

  /**
   * LeaveComment without action
   */
  export type LeaveCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveComment
     */
    select?: LeaveCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveComment
     */
    omit?: LeaveCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveCommentInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    lastLoginAt: 'lastLoginAt',
    employeeId: 'employeeId',
    fullName: 'fullName',
    phone: 'phone',
    designation: 'designation',
    department: 'department',
    employmentType: 'employmentType',
    workLocation: 'workLocation',
    dateOfJoining: 'dateOfJoining',
    profileImageUrl: 'profileImageUrl',
    profileImagePublicId: 'profileImagePublicId',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    fatherName: 'fatherName',
    motherName: 'motherName',
    bloodGroup: 'bloodGroup',
    currentAddress: 'currentAddress',
    permanentAddress: 'permanentAddress',
    city: 'city',
    state: 'state',
    country: 'country',
    pincode: 'pincode',
    emergencyContactName: 'emergencyContactName',
    emergencyContactPhone: 'emergencyContactPhone',
    emergencyContactRelation: 'emergencyContactRelation',
    reportingManagerName: 'reportingManagerName',
    organizationId: 'organizationId',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    spouseName: 'spouseName',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    day: 'day',
    year: 'year',
    type: 'type',
    description: 'description',
    organizationId: 'organizationId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


  export const LeaveBalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    leaveType: 'leaveType',
    allocated: 'allocated',
    used: 'used',
    remaining: 'remaining',
    year: 'year',
    createdAt: 'createdAt'
  };

  export type LeaveBalanceScalarFieldEnum = (typeof LeaveBalanceScalarFieldEnum)[keyof typeof LeaveBalanceScalarFieldEnum]


  export const LeaveApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    leaveType: 'leaveType',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaveApplicationScalarFieldEnum = (typeof LeaveApplicationScalarFieldEnum)[keyof typeof LeaveApplicationScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    createdById: 'createdById',
    title: 'title',
    message: 'message',
    sendType: 'sendType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const AnnouncementRecipientScalarFieldEnum: {
    id: 'id',
    announcementId: 'announcementId',
    userId: 'userId',
    email: 'email',
    isRead: 'isRead',
    readAt: 'readAt',
    createdAt: 'createdAt'
  };

  export type AnnouncementRecipientScalarFieldEnum = (typeof AnnouncementRecipientScalarFieldEnum)[keyof typeof AnnouncementRecipientScalarFieldEnum]


  export const FinancialDetailsScalarFieldEnum: {
    id: 'id',
    bankName: 'bankName',
    accountNo: 'accountNo',
    ifscCode: 'ifscCode',
    panNumber: 'panNumber',
    uanNo: 'uanNo',
    esicNo: 'esicNo',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinancialDetailsScalarFieldEnum = (typeof FinancialDetailsScalarFieldEnum)[keyof typeof FinancialDetailsScalarFieldEnum]


  export const PayrollSettingsScalarFieldEnum: {
    id: 'id',
    overtime: 'overtime',
    conveyance: 'conveyance',
    medical: 'medical',
    pf: 'pf',
    es: 'es',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayrollSettingsScalarFieldEnum = (typeof PayrollSettingsScalarFieldEnum)[keyof typeof PayrollSettingsScalarFieldEnum]


  export const LeaveCommentScalarFieldEnum: {
    id: 'id',
    leaveId: 'leaveId',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type LeaveCommentScalarFieldEnum = (typeof LeaveCommentScalarFieldEnum)[keyof typeof LeaveCommentScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'EmploymentType'
   */
  export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>
    


  /**
   * Reference to a field of type 'EmploymentType[]'
   */
  export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'HolidayType'
   */
  export type EnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType'>
    


  /**
   * Reference to a field of type 'HolidayType[]'
   */
  export type ListEnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


  /**
   * Reference to a field of type 'AnnouncementSendType'
   */
  export type EnumAnnouncementSendTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementSendType'>
    


  /**
   * Reference to a field of type 'AnnouncementSendType[]'
   */
  export type ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementSendType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    domain?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    holidays?: HolidayListRelationFilter
    announcements?: AnnouncementListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    holidays?: HolidayOrderByRelationAggregateInput
    announcements?: AnnouncementOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    domain?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    holidays?: HolidayListRelationFilter
    announcements?: AnnouncementListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    domain?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    employeeId?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    employmentType?: EnumEmploymentTypeNullableFilter<"User"> | $Enums.EmploymentType | null
    workLocation?: StringNullableFilter<"User"> | string | null
    dateOfJoining?: DateTimeFilter<"User"> | Date | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    profileImagePublicId?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    currentAddress?: StringNullableFilter<"User"> | string | null
    permanentAddress?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    emergencyContactName?: StringNullableFilter<"User"> | string | null
    emergencyContactPhone?: StringNullableFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableFilter<"User"> | string | null
    reportingManagerName?: StringNullableFilter<"User"> | string | null
    organizationId?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    spouseName?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: BigIntNullableFilter<"User"> | bigint | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    leaveBalances?: LeaveBalanceListRelationFilter
    LeaveApplication?: LeaveApplicationListRelationFilter
    createdAnnouncements?: AnnouncementListRelationFilter
    announcementReceipts?: AnnouncementRecipientListRelationFilter
    financialDetails?: XOR<FinancialDetailsNullableScalarRelationFilter, FinancialDetailsWhereInput> | null
    payrollSettings?: XOR<PayrollSettingsNullableScalarRelationFilter, PayrollSettingsWhereInput> | null
    leaveComments?: LeaveCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    workLocation?: SortOrderInput | SortOrder
    dateOfJoining?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    profileImagePublicId?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    currentAddress?: SortOrderInput | SortOrder
    permanentAddress?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    emergencyContactRelation?: SortOrderInput | SortOrder
    reportingManagerName?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    spouseName?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    leaveBalances?: LeaveBalanceOrderByRelationAggregateInput
    LeaveApplication?: LeaveApplicationOrderByRelationAggregateInput
    createdAnnouncements?: AnnouncementOrderByRelationAggregateInput
    announcementReceipts?: AnnouncementRecipientOrderByRelationAggregateInput
    financialDetails?: FinancialDetailsOrderByWithRelationInput
    payrollSettings?: PayrollSettingsOrderByWithRelationInput
    leaveComments?: LeaveCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    employeeId_organizationId?: UserEmployeeIdOrganizationIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    employeeId?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    employmentType?: EnumEmploymentTypeNullableFilter<"User"> | $Enums.EmploymentType | null
    workLocation?: StringNullableFilter<"User"> | string | null
    dateOfJoining?: DateTimeFilter<"User"> | Date | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    profileImagePublicId?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    currentAddress?: StringNullableFilter<"User"> | string | null
    permanentAddress?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    emergencyContactName?: StringNullableFilter<"User"> | string | null
    emergencyContactPhone?: StringNullableFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableFilter<"User"> | string | null
    reportingManagerName?: StringNullableFilter<"User"> | string | null
    organizationId?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    spouseName?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: BigIntNullableFilter<"User"> | bigint | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    leaveBalances?: LeaveBalanceListRelationFilter
    LeaveApplication?: LeaveApplicationListRelationFilter
    createdAnnouncements?: AnnouncementListRelationFilter
    announcementReceipts?: AnnouncementRecipientListRelationFilter
    financialDetails?: XOR<FinancialDetailsNullableScalarRelationFilter, FinancialDetailsWhereInput> | null
    payrollSettings?: XOR<PayrollSettingsNullableScalarRelationFilter, PayrollSettingsWhereInput> | null
    leaveComments?: LeaveCommentListRelationFilter
  }, "id" | "email" | "employeeId_organizationId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    workLocation?: SortOrderInput | SortOrder
    dateOfJoining?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    profileImagePublicId?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    currentAddress?: SortOrderInput | SortOrder
    permanentAddress?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    emergencyContactRelation?: SortOrderInput | SortOrder
    reportingManagerName?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    spouseName?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    employeeId?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    designation?: StringWithAggregatesFilter<"User"> | string
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    employmentType?: EnumEmploymentTypeNullableWithAggregatesFilter<"User"> | $Enums.EmploymentType | null
    workLocation?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfJoining?: DateTimeWithAggregatesFilter<"User"> | Date | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImagePublicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    fatherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    motherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    bloodGroup?: StringNullableWithAggregatesFilter<"User"> | string | null
    currentAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    permanentAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"User"> | string | null
    emergencyContactName?: StringNullableWithAggregatesFilter<"User"> | string | null
    emergencyContactPhone?: StringNullableWithAggregatesFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableWithAggregatesFilter<"User"> | string | null
    reportingManagerName?: StringNullableWithAggregatesFilter<"User"> | string | null
    organizationId?: StringWithAggregatesFilter<"User"> | string
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    spouseName?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpires?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HolidayWhereInput = {
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    id?: StringFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    day?: StringFilter<"Holiday"> | string
    year?: IntFilter<"Holiday"> | number
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    description?: StringNullableFilter<"Holiday"> | string | null
    organizationId?: StringNullableFilter<"Holiday"> | string | null
    isDeleted?: BoolFilter<"Holiday"> | boolean
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type HolidayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    day?: SortOrder
    year?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type HolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date_organizationId?: HolidayDateOrganizationIdCompoundUniqueInput
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    day?: StringFilter<"Holiday"> | string
    year?: IntFilter<"Holiday"> | number
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    description?: StringNullableFilter<"Holiday"> | string | null
    organizationId?: StringNullableFilter<"Holiday"> | string | null
    isDeleted?: BoolFilter<"Holiday"> | boolean
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id" | "date_organizationId">

  export type HolidayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    day?: SortOrder
    year?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HolidayCountOrderByAggregateInput
    _avg?: HolidayAvgOrderByAggregateInput
    _max?: HolidayMaxOrderByAggregateInput
    _min?: HolidayMinOrderByAggregateInput
    _sum?: HolidaySumOrderByAggregateInput
  }

  export type HolidayScalarWhereWithAggregatesInput = {
    AND?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    OR?: HolidayScalarWhereWithAggregatesInput[]
    NOT?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Holiday"> | string
    name?: StringWithAggregatesFilter<"Holiday"> | string
    date?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    day?: StringWithAggregatesFilter<"Holiday"> | string
    year?: IntWithAggregatesFilter<"Holiday"> | number
    type?: EnumHolidayTypeWithAggregatesFilter<"Holiday"> | $Enums.HolidayType
    description?: StringNullableWithAggregatesFilter<"Holiday"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"Holiday"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Holiday"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
  }

  export type LeaveBalanceWhereInput = {
    AND?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    OR?: LeaveBalanceWhereInput[]
    NOT?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    id?: StringFilter<"LeaveBalance"> | string
    userId?: StringFilter<"LeaveBalance"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveBalance"> | $Enums.LeaveType
    allocated?: IntFilter<"LeaveBalance"> | number
    used?: IntFilter<"LeaveBalance"> | number
    remaining?: IntFilter<"LeaveBalance"> | number
    year?: IntFilter<"LeaveBalance"> | number
    createdAt?: DateTimeFilter<"LeaveBalance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeaveBalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    allocated?: SortOrder
    used?: SortOrder
    remaining?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LeaveBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_leaveType_year?: LeaveBalanceUserIdLeaveTypeYearCompoundUniqueInput
    AND?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    OR?: LeaveBalanceWhereInput[]
    NOT?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    userId?: StringFilter<"LeaveBalance"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveBalance"> | $Enums.LeaveType
    allocated?: IntFilter<"LeaveBalance"> | number
    used?: IntFilter<"LeaveBalance"> | number
    remaining?: IntFilter<"LeaveBalance"> | number
    year?: IntFilter<"LeaveBalance"> | number
    createdAt?: DateTimeFilter<"LeaveBalance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_leaveType_year">

  export type LeaveBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    allocated?: SortOrder
    used?: SortOrder
    remaining?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    _count?: LeaveBalanceCountOrderByAggregateInput
    _avg?: LeaveBalanceAvgOrderByAggregateInput
    _max?: LeaveBalanceMaxOrderByAggregateInput
    _min?: LeaveBalanceMinOrderByAggregateInput
    _sum?: LeaveBalanceSumOrderByAggregateInput
  }

  export type LeaveBalanceScalarWhereWithAggregatesInput = {
    AND?: LeaveBalanceScalarWhereWithAggregatesInput | LeaveBalanceScalarWhereWithAggregatesInput[]
    OR?: LeaveBalanceScalarWhereWithAggregatesInput[]
    NOT?: LeaveBalanceScalarWhereWithAggregatesInput | LeaveBalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaveBalance"> | string
    userId?: StringWithAggregatesFilter<"LeaveBalance"> | string
    leaveType?: EnumLeaveTypeWithAggregatesFilter<"LeaveBalance"> | $Enums.LeaveType
    allocated?: IntWithAggregatesFilter<"LeaveBalance"> | number
    used?: IntWithAggregatesFilter<"LeaveBalance"> | number
    remaining?: IntWithAggregatesFilter<"LeaveBalance"> | number
    year?: IntWithAggregatesFilter<"LeaveBalance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LeaveBalance"> | Date | string
  }

  export type LeaveApplicationWhereInput = {
    AND?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    OR?: LeaveApplicationWhereInput[]
    NOT?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    id?: StringFilter<"LeaveApplication"> | string
    userId?: StringFilter<"LeaveApplication"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveApplication"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    reason?: StringFilter<"LeaveApplication"> | string
    status?: EnumLeaveStatusFilter<"LeaveApplication"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"LeaveApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: LeaveCommentListRelationFilter
  }

  export type LeaveApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comments?: LeaveCommentOrderByRelationAggregateInput
  }

  export type LeaveApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    OR?: LeaveApplicationWhereInput[]
    NOT?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    userId?: StringFilter<"LeaveApplication"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveApplication"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    reason?: StringFilter<"LeaveApplication"> | string
    status?: EnumLeaveStatusFilter<"LeaveApplication"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"LeaveApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: LeaveCommentListRelationFilter
  }, "id">

  export type LeaveApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaveApplicationCountOrderByAggregateInput
    _max?: LeaveApplicationMaxOrderByAggregateInput
    _min?: LeaveApplicationMinOrderByAggregateInput
  }

  export type LeaveApplicationScalarWhereWithAggregatesInput = {
    AND?: LeaveApplicationScalarWhereWithAggregatesInput | LeaveApplicationScalarWhereWithAggregatesInput[]
    OR?: LeaveApplicationScalarWhereWithAggregatesInput[]
    NOT?: LeaveApplicationScalarWhereWithAggregatesInput | LeaveApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaveApplication"> | string
    userId?: StringWithAggregatesFilter<"LeaveApplication"> | string
    leaveType?: EnumLeaveTypeWithAggregatesFilter<"LeaveApplication"> | $Enums.LeaveType
    startDate?: DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string
    reason?: StringWithAggregatesFilter<"LeaveApplication"> | string
    status?: EnumLeaveStatusWithAggregatesFilter<"LeaveApplication"> | $Enums.LeaveStatus
    createdAt?: DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    organizationId?: StringFilter<"Announcement"> | string
    createdById?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    message?: StringFilter<"Announcement"> | string
    sendType?: EnumAnnouncementSendTypeFilter<"Announcement"> | $Enums.AnnouncementSendType
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipients?: AnnouncementRecipientListRelationFilter
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sendType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    recipients?: AnnouncementRecipientOrderByRelationAggregateInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    organizationId?: StringFilter<"Announcement"> | string
    createdById?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    message?: StringFilter<"Announcement"> | string
    sendType?: EnumAnnouncementSendTypeFilter<"Announcement"> | $Enums.AnnouncementSendType
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipients?: AnnouncementRecipientListRelationFilter
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sendType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    organizationId?: StringWithAggregatesFilter<"Announcement"> | string
    createdById?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    message?: StringWithAggregatesFilter<"Announcement"> | string
    sendType?: EnumAnnouncementSendTypeWithAggregatesFilter<"Announcement"> | $Enums.AnnouncementSendType
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type AnnouncementRecipientWhereInput = {
    AND?: AnnouncementRecipientWhereInput | AnnouncementRecipientWhereInput[]
    OR?: AnnouncementRecipientWhereInput[]
    NOT?: AnnouncementRecipientWhereInput | AnnouncementRecipientWhereInput[]
    id?: StringFilter<"AnnouncementRecipient"> | string
    announcementId?: StringFilter<"AnnouncementRecipient"> | string
    userId?: StringFilter<"AnnouncementRecipient"> | string
    email?: StringFilter<"AnnouncementRecipient"> | string
    isRead?: BoolFilter<"AnnouncementRecipient"> | boolean
    readAt?: DateTimeNullableFilter<"AnnouncementRecipient"> | Date | string | null
    createdAt?: DateTimeFilter<"AnnouncementRecipient"> | Date | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnnouncementRecipientOrderByWithRelationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AnnouncementRecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    announcementId_userId?: AnnouncementRecipientAnnouncementIdUserIdCompoundUniqueInput
    AND?: AnnouncementRecipientWhereInput | AnnouncementRecipientWhereInput[]
    OR?: AnnouncementRecipientWhereInput[]
    NOT?: AnnouncementRecipientWhereInput | AnnouncementRecipientWhereInput[]
    announcementId?: StringFilter<"AnnouncementRecipient"> | string
    userId?: StringFilter<"AnnouncementRecipient"> | string
    email?: StringFilter<"AnnouncementRecipient"> | string
    isRead?: BoolFilter<"AnnouncementRecipient"> | boolean
    readAt?: DateTimeNullableFilter<"AnnouncementRecipient"> | Date | string | null
    createdAt?: DateTimeFilter<"AnnouncementRecipient"> | Date | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "announcementId_userId">

  export type AnnouncementRecipientOrderByWithAggregationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnnouncementRecipientCountOrderByAggregateInput
    _max?: AnnouncementRecipientMaxOrderByAggregateInput
    _min?: AnnouncementRecipientMinOrderByAggregateInput
  }

  export type AnnouncementRecipientScalarWhereWithAggregatesInput = {
    AND?: AnnouncementRecipientScalarWhereWithAggregatesInput | AnnouncementRecipientScalarWhereWithAggregatesInput[]
    OR?: AnnouncementRecipientScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementRecipientScalarWhereWithAggregatesInput | AnnouncementRecipientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnnouncementRecipient"> | string
    announcementId?: StringWithAggregatesFilter<"AnnouncementRecipient"> | string
    userId?: StringWithAggregatesFilter<"AnnouncementRecipient"> | string
    email?: StringWithAggregatesFilter<"AnnouncementRecipient"> | string
    isRead?: BoolWithAggregatesFilter<"AnnouncementRecipient"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"AnnouncementRecipient"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnnouncementRecipient"> | Date | string
  }

  export type FinancialDetailsWhereInput = {
    AND?: FinancialDetailsWhereInput | FinancialDetailsWhereInput[]
    OR?: FinancialDetailsWhereInput[]
    NOT?: FinancialDetailsWhereInput | FinancialDetailsWhereInput[]
    id?: StringFilter<"FinancialDetails"> | string
    bankName?: StringNullableFilter<"FinancialDetails"> | string | null
    accountNo?: StringNullableFilter<"FinancialDetails"> | string | null
    ifscCode?: StringNullableFilter<"FinancialDetails"> | string | null
    panNumber?: StringNullableFilter<"FinancialDetails"> | string | null
    uanNo?: StringNullableFilter<"FinancialDetails"> | string | null
    esicNo?: StringNullableFilter<"FinancialDetails"> | string | null
    userId?: StringFilter<"FinancialDetails"> | string
    createdAt?: DateTimeFilter<"FinancialDetails"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FinancialDetailsOrderByWithRelationInput = {
    id?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNo?: SortOrderInput | SortOrder
    ifscCode?: SortOrderInput | SortOrder
    panNumber?: SortOrderInput | SortOrder
    uanNo?: SortOrderInput | SortOrder
    esicNo?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FinancialDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FinancialDetailsWhereInput | FinancialDetailsWhereInput[]
    OR?: FinancialDetailsWhereInput[]
    NOT?: FinancialDetailsWhereInput | FinancialDetailsWhereInput[]
    bankName?: StringNullableFilter<"FinancialDetails"> | string | null
    accountNo?: StringNullableFilter<"FinancialDetails"> | string | null
    ifscCode?: StringNullableFilter<"FinancialDetails"> | string | null
    panNumber?: StringNullableFilter<"FinancialDetails"> | string | null
    uanNo?: StringNullableFilter<"FinancialDetails"> | string | null
    esicNo?: StringNullableFilter<"FinancialDetails"> | string | null
    createdAt?: DateTimeFilter<"FinancialDetails"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type FinancialDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNo?: SortOrderInput | SortOrder
    ifscCode?: SortOrderInput | SortOrder
    panNumber?: SortOrderInput | SortOrder
    uanNo?: SortOrderInput | SortOrder
    esicNo?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinancialDetailsCountOrderByAggregateInput
    _max?: FinancialDetailsMaxOrderByAggregateInput
    _min?: FinancialDetailsMinOrderByAggregateInput
  }

  export type FinancialDetailsScalarWhereWithAggregatesInput = {
    AND?: FinancialDetailsScalarWhereWithAggregatesInput | FinancialDetailsScalarWhereWithAggregatesInput[]
    OR?: FinancialDetailsScalarWhereWithAggregatesInput[]
    NOT?: FinancialDetailsScalarWhereWithAggregatesInput | FinancialDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialDetails"> | string
    bankName?: StringNullableWithAggregatesFilter<"FinancialDetails"> | string | null
    accountNo?: StringNullableWithAggregatesFilter<"FinancialDetails"> | string | null
    ifscCode?: StringNullableWithAggregatesFilter<"FinancialDetails"> | string | null
    panNumber?: StringNullableWithAggregatesFilter<"FinancialDetails"> | string | null
    uanNo?: StringNullableWithAggregatesFilter<"FinancialDetails"> | string | null
    esicNo?: StringNullableWithAggregatesFilter<"FinancialDetails"> | string | null
    userId?: StringWithAggregatesFilter<"FinancialDetails"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FinancialDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinancialDetails"> | Date | string
  }

  export type PayrollSettingsWhereInput = {
    AND?: PayrollSettingsWhereInput | PayrollSettingsWhereInput[]
    OR?: PayrollSettingsWhereInput[]
    NOT?: PayrollSettingsWhereInput | PayrollSettingsWhereInput[]
    id?: StringFilter<"PayrollSettings"> | string
    overtime?: BoolFilter<"PayrollSettings"> | boolean
    conveyance?: BoolFilter<"PayrollSettings"> | boolean
    medical?: BoolFilter<"PayrollSettings"> | boolean
    pf?: BoolFilter<"PayrollSettings"> | boolean
    es?: BoolFilter<"PayrollSettings"> | boolean
    userId?: StringFilter<"PayrollSettings"> | string
    createdAt?: DateTimeFilter<"PayrollSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PayrollSettingsOrderByWithRelationInput = {
    id?: SortOrder
    overtime?: SortOrder
    conveyance?: SortOrder
    medical?: SortOrder
    pf?: SortOrder
    es?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PayrollSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PayrollSettingsWhereInput | PayrollSettingsWhereInput[]
    OR?: PayrollSettingsWhereInput[]
    NOT?: PayrollSettingsWhereInput | PayrollSettingsWhereInput[]
    overtime?: BoolFilter<"PayrollSettings"> | boolean
    conveyance?: BoolFilter<"PayrollSettings"> | boolean
    medical?: BoolFilter<"PayrollSettings"> | boolean
    pf?: BoolFilter<"PayrollSettings"> | boolean
    es?: BoolFilter<"PayrollSettings"> | boolean
    createdAt?: DateTimeFilter<"PayrollSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PayrollSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PayrollSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    overtime?: SortOrder
    conveyance?: SortOrder
    medical?: SortOrder
    pf?: SortOrder
    es?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayrollSettingsCountOrderByAggregateInput
    _max?: PayrollSettingsMaxOrderByAggregateInput
    _min?: PayrollSettingsMinOrderByAggregateInput
  }

  export type PayrollSettingsScalarWhereWithAggregatesInput = {
    AND?: PayrollSettingsScalarWhereWithAggregatesInput | PayrollSettingsScalarWhereWithAggregatesInput[]
    OR?: PayrollSettingsScalarWhereWithAggregatesInput[]
    NOT?: PayrollSettingsScalarWhereWithAggregatesInput | PayrollSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayrollSettings"> | string
    overtime?: BoolWithAggregatesFilter<"PayrollSettings"> | boolean
    conveyance?: BoolWithAggregatesFilter<"PayrollSettings"> | boolean
    medical?: BoolWithAggregatesFilter<"PayrollSettings"> | boolean
    pf?: BoolWithAggregatesFilter<"PayrollSettings"> | boolean
    es?: BoolWithAggregatesFilter<"PayrollSettings"> | boolean
    userId?: StringWithAggregatesFilter<"PayrollSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PayrollSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayrollSettings"> | Date | string
  }

  export type LeaveCommentWhereInput = {
    AND?: LeaveCommentWhereInput | LeaveCommentWhereInput[]
    OR?: LeaveCommentWhereInput[]
    NOT?: LeaveCommentWhereInput | LeaveCommentWhereInput[]
    id?: StringFilter<"LeaveComment"> | string
    leaveId?: StringFilter<"LeaveComment"> | string
    userId?: StringFilter<"LeaveComment"> | string
    message?: StringFilter<"LeaveComment"> | string
    createdAt?: DateTimeFilter<"LeaveComment"> | Date | string
    leave?: XOR<LeaveApplicationScalarRelationFilter, LeaveApplicationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeaveCommentOrderByWithRelationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    leave?: LeaveApplicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LeaveCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveCommentWhereInput | LeaveCommentWhereInput[]
    OR?: LeaveCommentWhereInput[]
    NOT?: LeaveCommentWhereInput | LeaveCommentWhereInput[]
    leaveId?: StringFilter<"LeaveComment"> | string
    userId?: StringFilter<"LeaveComment"> | string
    message?: StringFilter<"LeaveComment"> | string
    createdAt?: DateTimeFilter<"LeaveComment"> | Date | string
    leave?: XOR<LeaveApplicationScalarRelationFilter, LeaveApplicationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LeaveCommentOrderByWithAggregationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: LeaveCommentCountOrderByAggregateInput
    _max?: LeaveCommentMaxOrderByAggregateInput
    _min?: LeaveCommentMinOrderByAggregateInput
  }

  export type LeaveCommentScalarWhereWithAggregatesInput = {
    AND?: LeaveCommentScalarWhereWithAggregatesInput | LeaveCommentScalarWhereWithAggregatesInput[]
    OR?: LeaveCommentScalarWhereWithAggregatesInput[]
    NOT?: LeaveCommentScalarWhereWithAggregatesInput | LeaveCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaveComment"> | string
    leaveId?: StringWithAggregatesFilter<"LeaveComment"> | string
    userId?: StringWithAggregatesFilter<"LeaveComment"> | string
    message?: StringWithAggregatesFilter<"LeaveComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeaveComment"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    holidays?: HolidayCreateNestedManyWithoutOrganizationInput
    announcements?: AnnouncementCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutOrganizationInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    holidays?: HolidayUpdateManyWithoutOrganizationNestedInput
    announcements?: AnnouncementUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutOrganizationNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayCreateInput = {
    id?: string
    name: string
    date: Date | string
    day: string
    year: number
    type: $Enums.HolidayType
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutHolidaysInput
  }

  export type HolidayUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    day: string
    year: number
    type: $Enums.HolidayType
    description?: string | null
    organizationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutHolidaysNestedInput
  }

  export type HolidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    day: string
    year: number
    type: $Enums.HolidayType
    description?: string | null
    organizationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceCreateInput = {
    id?: string
    leaveType: $Enums.LeaveType
    allocated?: number
    used?: number
    remaining?: number
    year?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLeaveBalancesInput
  }

  export type LeaveBalanceUncheckedCreateInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    allocated?: number
    used?: number
    remaining?: number
    year?: number
    createdAt?: Date | string
  }

  export type LeaveBalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    allocated?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeaveBalancesNestedInput
  }

  export type LeaveBalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    allocated?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceCreateManyInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    allocated?: number
    used?: number
    remaining?: number
    year?: number
    createdAt?: Date | string
  }

  export type LeaveBalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    allocated?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    allocated?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveApplicationCreateInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeaveApplicationInput
    comments?: LeaveCommentCreateNestedManyWithoutLeaveInput
  }

  export type LeaveApplicationUncheckedCreateInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: LeaveCommentUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeaveApplicationNestedInput
    comments?: LeaveCommentUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: LeaveCommentUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveApplicationCreateManyInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAnnouncementsInput
    createdBy: UserCreateNestedOneWithoutCreatedAnnouncementsInput
    recipients?: AnnouncementRecipientCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    organizationId: string
    createdById: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: AnnouncementRecipientUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAnnouncementsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput
    recipients?: AnnouncementRecipientUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: AnnouncementRecipientUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    organizationId: string
    createdById: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementRecipientCreateInput = {
    id?: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    announcement: AnnouncementCreateNestedOneWithoutRecipientsInput
    user: UserCreateNestedOneWithoutAnnouncementReceiptsInput
  }

  export type AnnouncementRecipientUncheckedCreateInput = {
    id?: string
    announcementId: string
    userId: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementRecipientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateOneRequiredWithoutRecipientsNestedInput
    user?: UserUpdateOneRequiredWithoutAnnouncementReceiptsNestedInput
  }

  export type AnnouncementRecipientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementRecipientCreateManyInput = {
    id?: string
    announcementId: string
    userId: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementRecipientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementRecipientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialDetailsCreateInput = {
    id?: string
    bankName?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    panNumber?: string | null
    uanNo?: string | null
    esicNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialDetailsInput
  }

  export type FinancialDetailsUncheckedCreateInput = {
    id?: string
    bankName?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    panNumber?: string | null
    uanNo?: string | null
    esicNo?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialDetailsNestedInput
  }

  export type FinancialDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialDetailsCreateManyInput = {
    id?: string
    bankName?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    panNumber?: string | null
    uanNo?: string | null
    esicNo?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollSettingsCreateInput = {
    id?: string
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPayrollSettingsInput
  }

  export type PayrollSettingsUncheckedCreateInput = {
    id?: string
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    overtime?: BoolFieldUpdateOperationsInput | boolean
    conveyance?: BoolFieldUpdateOperationsInput | boolean
    medical?: BoolFieldUpdateOperationsInput | boolean
    pf?: BoolFieldUpdateOperationsInput | boolean
    es?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayrollSettingsNestedInput
  }

  export type PayrollSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    overtime?: BoolFieldUpdateOperationsInput | boolean
    conveyance?: BoolFieldUpdateOperationsInput | boolean
    medical?: BoolFieldUpdateOperationsInput | boolean
    pf?: BoolFieldUpdateOperationsInput | boolean
    es?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollSettingsCreateManyInput = {
    id?: string
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overtime?: BoolFieldUpdateOperationsInput | boolean
    conveyance?: BoolFieldUpdateOperationsInput | boolean
    medical?: BoolFieldUpdateOperationsInput | boolean
    pf?: BoolFieldUpdateOperationsInput | boolean
    es?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    overtime?: BoolFieldUpdateOperationsInput | boolean
    conveyance?: BoolFieldUpdateOperationsInput | boolean
    medical?: BoolFieldUpdateOperationsInput | boolean
    pf?: BoolFieldUpdateOperationsInput | boolean
    es?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    leave: LeaveApplicationCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutLeaveCommentsInput
  }

  export type LeaveCommentUncheckedCreateInput = {
    id?: string
    leaveId: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type LeaveCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leave?: LeaveApplicationUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutLeaveCommentsNestedInput
  }

  export type LeaveCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentCreateManyInput = {
    id?: string
    leaveId: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type LeaveCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type HolidayListRelationFilter = {
    every?: HolidayWhereInput
    some?: HolidayWhereInput
    none?: HolidayWhereInput
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HolidayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type LeaveBalanceListRelationFilter = {
    every?: LeaveBalanceWhereInput
    some?: LeaveBalanceWhereInput
    none?: LeaveBalanceWhereInput
  }

  export type LeaveApplicationListRelationFilter = {
    every?: LeaveApplicationWhereInput
    some?: LeaveApplicationWhereInput
    none?: LeaveApplicationWhereInput
  }

  export type AnnouncementRecipientListRelationFilter = {
    every?: AnnouncementRecipientWhereInput
    some?: AnnouncementRecipientWhereInput
    none?: AnnouncementRecipientWhereInput
  }

  export type FinancialDetailsNullableScalarRelationFilter = {
    is?: FinancialDetailsWhereInput | null
    isNot?: FinancialDetailsWhereInput | null
  }

  export type PayrollSettingsNullableScalarRelationFilter = {
    is?: PayrollSettingsWhereInput | null
    isNot?: PayrollSettingsWhereInput | null
  }

  export type LeaveCommentListRelationFilter = {
    every?: LeaveCommentWhereInput
    some?: LeaveCommentWhereInput
    none?: LeaveCommentWhereInput
  }

  export type LeaveBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementRecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEmployeeIdOrganizationIdCompoundUniqueInput = {
    employeeId: string
    organizationId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    employeeId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    employmentType?: SortOrder
    workLocation?: SortOrder
    dateOfJoining?: SortOrder
    profileImageUrl?: SortOrder
    profileImagePublicId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    bloodGroup?: SortOrder
    currentAddress?: SortOrder
    permanentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    emergencyContactRelation?: SortOrder
    reportingManagerName?: SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    spouseName?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    resetPasswordExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    employeeId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    employmentType?: SortOrder
    workLocation?: SortOrder
    dateOfJoining?: SortOrder
    profileImageUrl?: SortOrder
    profileImagePublicId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    bloodGroup?: SortOrder
    currentAddress?: SortOrder
    permanentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    emergencyContactRelation?: SortOrder
    reportingManagerName?: SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    spouseName?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    employeeId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    employmentType?: SortOrder
    workLocation?: SortOrder
    dateOfJoining?: SortOrder
    profileImageUrl?: SortOrder
    profileImagePublicId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    bloodGroup?: SortOrder
    currentAddress?: SortOrder
    permanentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    emergencyContactName?: SortOrder
    emergencyContactPhone?: SortOrder
    emergencyContactRelation?: SortOrder
    reportingManagerName?: SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    spouseName?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    resetPasswordExpires?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type EnumHolidayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeFilter<$PrismaModel> | $Enums.HolidayType
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type HolidayDateOrganizationIdCompoundUniqueInput = {
    date: Date | string
    organizationId: string
  }

  export type HolidayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    day?: SortOrder
    year?: SortOrder
    type?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidayAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type HolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    day?: SortOrder
    year?: SortOrder
    type?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    day?: SortOrder
    year?: SortOrder
    type?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidaySumOrderByAggregateInput = {
    year?: SortOrder
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

  export type EnumHolidayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeFilter<$PrismaModel>
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeaveBalanceUserIdLeaveTypeYearCompoundUniqueInput = {
    userId: string
    leaveType: $Enums.LeaveType
    year: number
  }

  export type LeaveBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    allocated?: SortOrder
    used?: SortOrder
    remaining?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveBalanceAvgOrderByAggregateInput = {
    allocated?: SortOrder
    used?: SortOrder
    remaining?: SortOrder
    year?: SortOrder
  }

  export type LeaveBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    allocated?: SortOrder
    used?: SortOrder
    remaining?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    allocated?: SortOrder
    used?: SortOrder
    remaining?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveBalanceSumOrderByAggregateInput = {
    allocated?: SortOrder
    used?: SortOrder
    remaining?: SortOrder
    year?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type LeaveApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type EnumAnnouncementSendTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSendType | EnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSendTypeFilter<$PrismaModel> | $Enums.AnnouncementSendType
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sendType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sendType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sendType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAnnouncementSendTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSendType | EnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSendTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementSendType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementSendTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementSendTypeFilter<$PrismaModel>
  }

  export type AnnouncementScalarRelationFilter = {
    is?: AnnouncementWhereInput
    isNot?: AnnouncementWhereInput
  }

  export type AnnouncementRecipientAnnouncementIdUserIdCompoundUniqueInput = {
    announcementId: string
    userId: string
  }

  export type AnnouncementRecipientCountOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementRecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementRecipientMinOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNo?: SortOrder
    ifscCode?: SortOrder
    panNumber?: SortOrder
    uanNo?: SortOrder
    esicNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNo?: SortOrder
    ifscCode?: SortOrder
    panNumber?: SortOrder
    uanNo?: SortOrder
    esicNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountNo?: SortOrder
    ifscCode?: SortOrder
    panNumber?: SortOrder
    uanNo?: SortOrder
    esicNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    overtime?: SortOrder
    conveyance?: SortOrder
    medical?: SortOrder
    pf?: SortOrder
    es?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    overtime?: SortOrder
    conveyance?: SortOrder
    medical?: SortOrder
    pf?: SortOrder
    es?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    overtime?: SortOrder
    conveyance?: SortOrder
    medical?: SortOrder
    pf?: SortOrder
    es?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveApplicationScalarRelationFilter = {
    is?: LeaveApplicationWhereInput
    isNot?: LeaveApplicationWhereInput
  }

  export type LeaveCommentCountOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveCommentMinOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HolidayCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<HolidayCreateWithoutOrganizationInput, HolidayUncheckedCreateWithoutOrganizationInput> | HolidayCreateWithoutOrganizationInput[] | HolidayUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutOrganizationInput | HolidayCreateOrConnectWithoutOrganizationInput[]
    createMany?: HolidayCreateManyOrganizationInputEnvelope
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AnnouncementCreateWithoutOrganizationInput, AnnouncementUncheckedCreateWithoutOrganizationInput> | AnnouncementCreateWithoutOrganizationInput[] | AnnouncementUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutOrganizationInput | AnnouncementCreateOrConnectWithoutOrganizationInput[]
    createMany?: AnnouncementCreateManyOrganizationInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HolidayUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<HolidayCreateWithoutOrganizationInput, HolidayUncheckedCreateWithoutOrganizationInput> | HolidayCreateWithoutOrganizationInput[] | HolidayUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutOrganizationInput | HolidayCreateOrConnectWithoutOrganizationInput[]
    createMany?: HolidayCreateManyOrganizationInputEnvelope
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AnnouncementCreateWithoutOrganizationInput, AnnouncementUncheckedCreateWithoutOrganizationInput> | AnnouncementCreateWithoutOrganizationInput[] | AnnouncementUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutOrganizationInput | AnnouncementCreateOrConnectWithoutOrganizationInput[]
    createMany?: AnnouncementCreateManyOrganizationInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HolidayUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<HolidayCreateWithoutOrganizationInput, HolidayUncheckedCreateWithoutOrganizationInput> | HolidayCreateWithoutOrganizationInput[] | HolidayUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutOrganizationInput | HolidayCreateOrConnectWithoutOrganizationInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutOrganizationInput | HolidayUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: HolidayCreateManyOrganizationInputEnvelope
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutOrganizationInput | HolidayUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutOrganizationInput | HolidayUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AnnouncementCreateWithoutOrganizationInput, AnnouncementUncheckedCreateWithoutOrganizationInput> | AnnouncementCreateWithoutOrganizationInput[] | AnnouncementUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutOrganizationInput | AnnouncementCreateOrConnectWithoutOrganizationInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutOrganizationInput | AnnouncementUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AnnouncementCreateManyOrganizationInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutOrganizationInput | AnnouncementUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutOrganizationInput | AnnouncementUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HolidayUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<HolidayCreateWithoutOrganizationInput, HolidayUncheckedCreateWithoutOrganizationInput> | HolidayCreateWithoutOrganizationInput[] | HolidayUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutOrganizationInput | HolidayCreateOrConnectWithoutOrganizationInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutOrganizationInput | HolidayUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: HolidayCreateManyOrganizationInputEnvelope
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutOrganizationInput | HolidayUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutOrganizationInput | HolidayUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AnnouncementCreateWithoutOrganizationInput, AnnouncementUncheckedCreateWithoutOrganizationInput> | AnnouncementCreateWithoutOrganizationInput[] | AnnouncementUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutOrganizationInput | AnnouncementCreateOrConnectWithoutOrganizationInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutOrganizationInput | AnnouncementUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AnnouncementCreateManyOrganizationInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutOrganizationInput | AnnouncementUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutOrganizationInput | AnnouncementUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type LeaveBalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type LeaveApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveApplicationCreateWithoutUserInput, LeaveApplicationUncheckedCreateWithoutUserInput> | LeaveApplicationCreateWithoutUserInput[] | LeaveApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutUserInput | LeaveApplicationCreateOrConnectWithoutUserInput[]
    createMany?: LeaveApplicationCreateManyUserInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AnnouncementRecipientCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutUserInput, AnnouncementRecipientUncheckedCreateWithoutUserInput> | AnnouncementRecipientCreateWithoutUserInput[] | AnnouncementRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutUserInput | AnnouncementRecipientCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementRecipientCreateManyUserInputEnvelope
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
  }

  export type FinancialDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<FinancialDetailsCreateWithoutUserInput, FinancialDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinancialDetailsCreateOrConnectWithoutUserInput
    connect?: FinancialDetailsWhereUniqueInput
  }

  export type PayrollSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<PayrollSettingsCreateWithoutUserInput, PayrollSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayrollSettingsCreateOrConnectWithoutUserInput
    connect?: PayrollSettingsWhereUniqueInput
  }

  export type LeaveCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCommentCreateWithoutUserInput, LeaveCommentUncheckedCreateWithoutUserInput> | LeaveCommentCreateWithoutUserInput[] | LeaveCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutUserInput | LeaveCommentCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCommentCreateManyUserInputEnvelope
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
  }

  export type LeaveBalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type LeaveApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveApplicationCreateWithoutUserInput, LeaveApplicationUncheckedCreateWithoutUserInput> | LeaveApplicationCreateWithoutUserInput[] | LeaveApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutUserInput | LeaveApplicationCreateOrConnectWithoutUserInput[]
    createMany?: LeaveApplicationCreateManyUserInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutUserInput, AnnouncementRecipientUncheckedCreateWithoutUserInput> | AnnouncementRecipientCreateWithoutUserInput[] | AnnouncementRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutUserInput | AnnouncementRecipientCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementRecipientCreateManyUserInputEnvelope
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
  }

  export type FinancialDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FinancialDetailsCreateWithoutUserInput, FinancialDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinancialDetailsCreateOrConnectWithoutUserInput
    connect?: FinancialDetailsWhereUniqueInput
  }

  export type PayrollSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PayrollSettingsCreateWithoutUserInput, PayrollSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayrollSettingsCreateOrConnectWithoutUserInput
    connect?: PayrollSettingsWhereUniqueInput
  }

  export type LeaveCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCommentCreateWithoutUserInput, LeaveCommentUncheckedCreateWithoutUserInput> | LeaveCommentCreateWithoutUserInput[] | LeaveCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutUserInput | LeaveCommentCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCommentCreateManyUserInputEnvelope
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type LeaveBalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutUserInput | LeaveBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutUserInput | LeaveBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutUserInput | LeaveBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type LeaveApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutUserInput, LeaveApplicationUncheckedCreateWithoutUserInput> | LeaveApplicationCreateWithoutUserInput[] | LeaveApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutUserInput | LeaveApplicationCreateOrConnectWithoutUserInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutUserInput | LeaveApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveApplicationCreateManyUserInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutUserInput | LeaveApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutUserInput | LeaveApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCreatedByInput | AnnouncementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AnnouncementRecipientUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutUserInput, AnnouncementRecipientUncheckedCreateWithoutUserInput> | AnnouncementRecipientCreateWithoutUserInput[] | AnnouncementRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutUserInput | AnnouncementRecipientCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementRecipientUpsertWithWhereUniqueWithoutUserInput | AnnouncementRecipientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementRecipientCreateManyUserInputEnvelope
    set?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    disconnect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    delete?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    update?: AnnouncementRecipientUpdateWithWhereUniqueWithoutUserInput | AnnouncementRecipientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementRecipientUpdateManyWithWhereWithoutUserInput | AnnouncementRecipientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementRecipientScalarWhereInput | AnnouncementRecipientScalarWhereInput[]
  }

  export type FinancialDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<FinancialDetailsCreateWithoutUserInput, FinancialDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinancialDetailsCreateOrConnectWithoutUserInput
    upsert?: FinancialDetailsUpsertWithoutUserInput
    disconnect?: FinancialDetailsWhereInput | boolean
    delete?: FinancialDetailsWhereInput | boolean
    connect?: FinancialDetailsWhereUniqueInput
    update?: XOR<XOR<FinancialDetailsUpdateToOneWithWhereWithoutUserInput, FinancialDetailsUpdateWithoutUserInput>, FinancialDetailsUncheckedUpdateWithoutUserInput>
  }

  export type PayrollSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<PayrollSettingsCreateWithoutUserInput, PayrollSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayrollSettingsCreateOrConnectWithoutUserInput
    upsert?: PayrollSettingsUpsertWithoutUserInput
    disconnect?: PayrollSettingsWhereInput | boolean
    delete?: PayrollSettingsWhereInput | boolean
    connect?: PayrollSettingsWhereUniqueInput
    update?: XOR<XOR<PayrollSettingsUpdateToOneWithWhereWithoutUserInput, PayrollSettingsUpdateWithoutUserInput>, PayrollSettingsUncheckedUpdateWithoutUserInput>
  }

  export type LeaveCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCommentCreateWithoutUserInput, LeaveCommentUncheckedCreateWithoutUserInput> | LeaveCommentCreateWithoutUserInput[] | LeaveCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutUserInput | LeaveCommentCreateOrConnectWithoutUserInput[]
    upsert?: LeaveCommentUpsertWithWhereUniqueWithoutUserInput | LeaveCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCommentCreateManyUserInputEnvelope
    set?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    disconnect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    delete?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    update?: LeaveCommentUpdateWithWhereUniqueWithoutUserInput | LeaveCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveCommentUpdateManyWithWhereWithoutUserInput | LeaveCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveCommentScalarWhereInput | LeaveCommentScalarWhereInput[]
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutUserInput | LeaveBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutUserInput | LeaveBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutUserInput | LeaveBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutUserInput, LeaveApplicationUncheckedCreateWithoutUserInput> | LeaveApplicationCreateWithoutUserInput[] | LeaveApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutUserInput | LeaveApplicationCreateOrConnectWithoutUserInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutUserInput | LeaveApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveApplicationCreateManyUserInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutUserInput | LeaveApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutUserInput | LeaveApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCreatedByInput | AnnouncementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutUserInput, AnnouncementRecipientUncheckedCreateWithoutUserInput> | AnnouncementRecipientCreateWithoutUserInput[] | AnnouncementRecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutUserInput | AnnouncementRecipientCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementRecipientUpsertWithWhereUniqueWithoutUserInput | AnnouncementRecipientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementRecipientCreateManyUserInputEnvelope
    set?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    disconnect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    delete?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    update?: AnnouncementRecipientUpdateWithWhereUniqueWithoutUserInput | AnnouncementRecipientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementRecipientUpdateManyWithWhereWithoutUserInput | AnnouncementRecipientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementRecipientScalarWhereInput | AnnouncementRecipientScalarWhereInput[]
  }

  export type FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FinancialDetailsCreateWithoutUserInput, FinancialDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinancialDetailsCreateOrConnectWithoutUserInput
    upsert?: FinancialDetailsUpsertWithoutUserInput
    disconnect?: FinancialDetailsWhereInput | boolean
    delete?: FinancialDetailsWhereInput | boolean
    connect?: FinancialDetailsWhereUniqueInput
    update?: XOR<XOR<FinancialDetailsUpdateToOneWithWhereWithoutUserInput, FinancialDetailsUpdateWithoutUserInput>, FinancialDetailsUncheckedUpdateWithoutUserInput>
  }

  export type PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PayrollSettingsCreateWithoutUserInput, PayrollSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayrollSettingsCreateOrConnectWithoutUserInput
    upsert?: PayrollSettingsUpsertWithoutUserInput
    disconnect?: PayrollSettingsWhereInput | boolean
    delete?: PayrollSettingsWhereInput | boolean
    connect?: PayrollSettingsWhereUniqueInput
    update?: XOR<XOR<PayrollSettingsUpdateToOneWithWhereWithoutUserInput, PayrollSettingsUpdateWithoutUserInput>, PayrollSettingsUncheckedUpdateWithoutUserInput>
  }

  export type LeaveCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCommentCreateWithoutUserInput, LeaveCommentUncheckedCreateWithoutUserInput> | LeaveCommentCreateWithoutUserInput[] | LeaveCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutUserInput | LeaveCommentCreateOrConnectWithoutUserInput[]
    upsert?: LeaveCommentUpsertWithWhereUniqueWithoutUserInput | LeaveCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCommentCreateManyUserInputEnvelope
    set?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    disconnect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    delete?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    update?: LeaveCommentUpdateWithWhereUniqueWithoutUserInput | LeaveCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveCommentUpdateManyWithWhereWithoutUserInput | LeaveCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveCommentScalarWhereInput | LeaveCommentScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutHolidaysInput = {
    create?: XOR<OrganizationCreateWithoutHolidaysInput, OrganizationUncheckedCreateWithoutHolidaysInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutHolidaysInput
    connect?: OrganizationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumHolidayTypeFieldUpdateOperationsInput = {
    set?: $Enums.HolidayType
  }

  export type OrganizationUpdateOneWithoutHolidaysNestedInput = {
    create?: XOR<OrganizationCreateWithoutHolidaysInput, OrganizationUncheckedCreateWithoutHolidaysInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutHolidaysInput
    upsert?: OrganizationUpsertWithoutHolidaysInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutHolidaysInput, OrganizationUpdateWithoutHolidaysInput>, OrganizationUncheckedUpdateWithoutHolidaysInput>
  }

  export type UserCreateNestedOneWithoutLeaveBalancesInput = {
    create?: XOR<UserCreateWithoutLeaveBalancesInput, UserUncheckedCreateWithoutLeaveBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveBalancesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type UserUpdateOneRequiredWithoutLeaveBalancesNestedInput = {
    create?: XOR<UserCreateWithoutLeaveBalancesInput, UserUncheckedCreateWithoutLeaveBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveBalancesInput
    upsert?: UserUpsertWithoutLeaveBalancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaveBalancesInput, UserUpdateWithoutLeaveBalancesInput>, UserUncheckedUpdateWithoutLeaveBalancesInput>
  }

  export type UserCreateNestedOneWithoutLeaveApplicationInput = {
    create?: XOR<UserCreateWithoutLeaveApplicationInput, UserUncheckedCreateWithoutLeaveApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveApplicationInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveCommentCreateNestedManyWithoutLeaveInput = {
    create?: XOR<LeaveCommentCreateWithoutLeaveInput, LeaveCommentUncheckedCreateWithoutLeaveInput> | LeaveCommentCreateWithoutLeaveInput[] | LeaveCommentUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutLeaveInput | LeaveCommentCreateOrConnectWithoutLeaveInput[]
    createMany?: LeaveCommentCreateManyLeaveInputEnvelope
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
  }

  export type LeaveCommentUncheckedCreateNestedManyWithoutLeaveInput = {
    create?: XOR<LeaveCommentCreateWithoutLeaveInput, LeaveCommentUncheckedCreateWithoutLeaveInput> | LeaveCommentCreateWithoutLeaveInput[] | LeaveCommentUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutLeaveInput | LeaveCommentCreateOrConnectWithoutLeaveInput[]
    createMany?: LeaveCommentCreateManyLeaveInputEnvelope
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type UserUpdateOneRequiredWithoutLeaveApplicationNestedInput = {
    create?: XOR<UserCreateWithoutLeaveApplicationInput, UserUncheckedCreateWithoutLeaveApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveApplicationInput
    upsert?: UserUpsertWithoutLeaveApplicationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaveApplicationInput, UserUpdateWithoutLeaveApplicationInput>, UserUncheckedUpdateWithoutLeaveApplicationInput>
  }

  export type LeaveCommentUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<LeaveCommentCreateWithoutLeaveInput, LeaveCommentUncheckedCreateWithoutLeaveInput> | LeaveCommentCreateWithoutLeaveInput[] | LeaveCommentUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutLeaveInput | LeaveCommentCreateOrConnectWithoutLeaveInput[]
    upsert?: LeaveCommentUpsertWithWhereUniqueWithoutLeaveInput | LeaveCommentUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: LeaveCommentCreateManyLeaveInputEnvelope
    set?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    disconnect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    delete?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    update?: LeaveCommentUpdateWithWhereUniqueWithoutLeaveInput | LeaveCommentUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: LeaveCommentUpdateManyWithWhereWithoutLeaveInput | LeaveCommentUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: LeaveCommentScalarWhereInput | LeaveCommentScalarWhereInput[]
  }

  export type LeaveCommentUncheckedUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<LeaveCommentCreateWithoutLeaveInput, LeaveCommentUncheckedCreateWithoutLeaveInput> | LeaveCommentCreateWithoutLeaveInput[] | LeaveCommentUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveCommentCreateOrConnectWithoutLeaveInput | LeaveCommentCreateOrConnectWithoutLeaveInput[]
    upsert?: LeaveCommentUpsertWithWhereUniqueWithoutLeaveInput | LeaveCommentUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: LeaveCommentCreateManyLeaveInputEnvelope
    set?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    disconnect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    delete?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    connect?: LeaveCommentWhereUniqueInput | LeaveCommentWhereUniqueInput[]
    update?: LeaveCommentUpdateWithWhereUniqueWithoutLeaveInput | LeaveCommentUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: LeaveCommentUpdateManyWithWhereWithoutLeaveInput | LeaveCommentUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: LeaveCommentScalarWhereInput | LeaveCommentScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<OrganizationCreateWithoutAnnouncementsInput, OrganizationUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAnnouncementsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedAnnouncementsInput = {
    create?: XOR<UserCreateWithoutCreatedAnnouncementsInput, UserUncheckedCreateWithoutCreatedAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAnnouncementsInput
    connect?: UserWhereUniqueInput
  }

  export type AnnouncementRecipientCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutAnnouncementInput, AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput> | AnnouncementRecipientCreateWithoutAnnouncementInput[] | AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput | AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput[]
    createMany?: AnnouncementRecipientCreateManyAnnouncementInputEnvelope
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
  }

  export type AnnouncementRecipientUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutAnnouncementInput, AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput> | AnnouncementRecipientCreateWithoutAnnouncementInput[] | AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput | AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput[]
    createMany?: AnnouncementRecipientCreateManyAnnouncementInputEnvelope
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
  }

  export type EnumAnnouncementSendTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnnouncementSendType
  }

  export type OrganizationUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAnnouncementsInput, OrganizationUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAnnouncementsInput
    upsert?: OrganizationUpsertWithoutAnnouncementsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAnnouncementsInput, OrganizationUpdateWithoutAnnouncementsInput>, OrganizationUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedAnnouncementsInput, UserUncheckedCreateWithoutCreatedAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAnnouncementsInput
    upsert?: UserUpsertWithoutCreatedAnnouncementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedAnnouncementsInput, UserUpdateWithoutCreatedAnnouncementsInput>, UserUncheckedUpdateWithoutCreatedAnnouncementsInput>
  }

  export type AnnouncementRecipientUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutAnnouncementInput, AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput> | AnnouncementRecipientCreateWithoutAnnouncementInput[] | AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput | AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput[]
    upsert?: AnnouncementRecipientUpsertWithWhereUniqueWithoutAnnouncementInput | AnnouncementRecipientUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: AnnouncementRecipientCreateManyAnnouncementInputEnvelope
    set?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    disconnect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    delete?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    update?: AnnouncementRecipientUpdateWithWhereUniqueWithoutAnnouncementInput | AnnouncementRecipientUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: AnnouncementRecipientUpdateManyWithWhereWithoutAnnouncementInput | AnnouncementRecipientUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: AnnouncementRecipientScalarWhereInput | AnnouncementRecipientScalarWhereInput[]
  }

  export type AnnouncementRecipientUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<AnnouncementRecipientCreateWithoutAnnouncementInput, AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput> | AnnouncementRecipientCreateWithoutAnnouncementInput[] | AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput | AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput[]
    upsert?: AnnouncementRecipientUpsertWithWhereUniqueWithoutAnnouncementInput | AnnouncementRecipientUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: AnnouncementRecipientCreateManyAnnouncementInputEnvelope
    set?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    disconnect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    delete?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    connect?: AnnouncementRecipientWhereUniqueInput | AnnouncementRecipientWhereUniqueInput[]
    update?: AnnouncementRecipientUpdateWithWhereUniqueWithoutAnnouncementInput | AnnouncementRecipientUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: AnnouncementRecipientUpdateManyWithWhereWithoutAnnouncementInput | AnnouncementRecipientUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: AnnouncementRecipientScalarWhereInput | AnnouncementRecipientScalarWhereInput[]
  }

  export type AnnouncementCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<AnnouncementCreateWithoutRecipientsInput, AnnouncementUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutRecipientsInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnnouncementReceiptsInput = {
    create?: XOR<UserCreateWithoutAnnouncementReceiptsInput, UserUncheckedCreateWithoutAnnouncementReceiptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementReceiptsInput
    connect?: UserWhereUniqueInput
  }

  export type AnnouncementUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<AnnouncementCreateWithoutRecipientsInput, AnnouncementUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutRecipientsInput
    upsert?: AnnouncementUpsertWithoutRecipientsInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutRecipientsInput, AnnouncementUpdateWithoutRecipientsInput>, AnnouncementUncheckedUpdateWithoutRecipientsInput>
  }

  export type UserUpdateOneRequiredWithoutAnnouncementReceiptsNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementReceiptsInput, UserUncheckedCreateWithoutAnnouncementReceiptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementReceiptsInput
    upsert?: UserUpsertWithoutAnnouncementReceiptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementReceiptsInput, UserUpdateWithoutAnnouncementReceiptsInput>, UserUncheckedUpdateWithoutAnnouncementReceiptsInput>
  }

  export type UserCreateNestedOneWithoutFinancialDetailsInput = {
    create?: XOR<UserCreateWithoutFinancialDetailsInput, UserUncheckedCreateWithoutFinancialDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFinancialDetailsNestedInput = {
    create?: XOR<UserCreateWithoutFinancialDetailsInput, UserUncheckedCreateWithoutFinancialDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialDetailsInput
    upsert?: UserUpsertWithoutFinancialDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinancialDetailsInput, UserUpdateWithoutFinancialDetailsInput>, UserUncheckedUpdateWithoutFinancialDetailsInput>
  }

  export type UserCreateNestedOneWithoutPayrollSettingsInput = {
    create?: XOR<UserCreateWithoutPayrollSettingsInput, UserUncheckedCreateWithoutPayrollSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayrollSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPayrollSettingsNestedInput = {
    create?: XOR<UserCreateWithoutPayrollSettingsInput, UserUncheckedCreateWithoutPayrollSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayrollSettingsInput
    upsert?: UserUpsertWithoutPayrollSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayrollSettingsInput, UserUpdateWithoutPayrollSettingsInput>, UserUncheckedUpdateWithoutPayrollSettingsInput>
  }

  export type LeaveApplicationCreateNestedOneWithoutCommentsInput = {
    create?: XOR<LeaveApplicationCreateWithoutCommentsInput, LeaveApplicationUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutCommentsInput
    connect?: LeaveApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeaveCommentsInput = {
    create?: XOR<UserCreateWithoutLeaveCommentsInput, UserUncheckedCreateWithoutLeaveCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveApplicationUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutCommentsInput, LeaveApplicationUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutCommentsInput
    upsert?: LeaveApplicationUpsertWithoutCommentsInput
    connect?: LeaveApplicationWhereUniqueInput
    update?: XOR<XOR<LeaveApplicationUpdateToOneWithWhereWithoutCommentsInput, LeaveApplicationUpdateWithoutCommentsInput>, LeaveApplicationUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutLeaveCommentsNestedInput = {
    create?: XOR<UserCreateWithoutLeaveCommentsInput, UserUncheckedCreateWithoutLeaveCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveCommentsInput
    upsert?: UserUpsertWithoutLeaveCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaveCommentsInput, UserUpdateWithoutLeaveCommentsInput>, UserUncheckedUpdateWithoutLeaveCommentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedEnumHolidayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeFilter<$PrismaModel> | $Enums.HolidayType
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

  export type NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnnouncementSendTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSendType | EnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSendTypeFilter<$PrismaModel> | $Enums.AnnouncementSendType
  }

  export type NestedEnumAnnouncementSendTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSendType | EnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSendType[] | ListEnumAnnouncementSendTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSendTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementSendType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementSendTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementSendTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type HolidayCreateWithoutOrganizationInput = {
    id?: string
    name: string
    date: Date | string
    day: string
    year: number
    type: $Enums.HolidayType
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    date: Date | string
    day: string
    year: number
    type: $Enums.HolidayType
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayCreateOrConnectWithoutOrganizationInput = {
    where: HolidayWhereUniqueInput
    create: XOR<HolidayCreateWithoutOrganizationInput, HolidayUncheckedCreateWithoutOrganizationInput>
  }

  export type HolidayCreateManyOrganizationInputEnvelope = {
    data: HolidayCreateManyOrganizationInput | HolidayCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutOrganizationInput = {
    id?: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedAnnouncementsInput
    recipients?: AnnouncementRecipientCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutOrganizationInput = {
    id?: string
    createdById: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: AnnouncementRecipientUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutOrganizationInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutOrganizationInput, AnnouncementUncheckedCreateWithoutOrganizationInput>
  }

  export type AnnouncementCreateManyOrganizationInputEnvelope = {
    data: AnnouncementCreateManyOrganizationInput | AnnouncementCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    employeeId?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    employmentType?: EnumEmploymentTypeNullableFilter<"User"> | $Enums.EmploymentType | null
    workLocation?: StringNullableFilter<"User"> | string | null
    dateOfJoining?: DateTimeFilter<"User"> | Date | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    profileImagePublicId?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    bloodGroup?: StringNullableFilter<"User"> | string | null
    currentAddress?: StringNullableFilter<"User"> | string | null
    permanentAddress?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    emergencyContactName?: StringNullableFilter<"User"> | string | null
    emergencyContactPhone?: StringNullableFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableFilter<"User"> | string | null
    reportingManagerName?: StringNullableFilter<"User"> | string | null
    organizationId?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    spouseName?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: BigIntNullableFilter<"User"> | bigint | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type HolidayUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: HolidayWhereUniqueInput
    update: XOR<HolidayUpdateWithoutOrganizationInput, HolidayUncheckedUpdateWithoutOrganizationInput>
    create: XOR<HolidayCreateWithoutOrganizationInput, HolidayUncheckedCreateWithoutOrganizationInput>
  }

  export type HolidayUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: HolidayWhereUniqueInput
    data: XOR<HolidayUpdateWithoutOrganizationInput, HolidayUncheckedUpdateWithoutOrganizationInput>
  }

  export type HolidayUpdateManyWithWhereWithoutOrganizationInput = {
    where: HolidayScalarWhereInput
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type HolidayScalarWhereInput = {
    AND?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    OR?: HolidayScalarWhereInput[]
    NOT?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    id?: StringFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    day?: StringFilter<"Holiday"> | string
    year?: IntFilter<"Holiday"> | number
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    description?: StringNullableFilter<"Holiday"> | string | null
    organizationId?: StringNullableFilter<"Holiday"> | string | null
    isDeleted?: BoolFilter<"Holiday"> | boolean
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutOrganizationInput, AnnouncementUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AnnouncementCreateWithoutOrganizationInput, AnnouncementUncheckedCreateWithoutOrganizationInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutOrganizationInput, AnnouncementUncheckedUpdateWithoutOrganizationInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutOrganizationInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: StringFilter<"Announcement"> | string
    organizationId?: StringFilter<"Announcement"> | string
    createdById?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    message?: StringFilter<"Announcement"> | string
    sendType?: EnumAnnouncementSendTypeFilter<"Announcement"> | $Enums.AnnouncementSendType
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holidays?: HolidayCreateNestedManyWithoutOrganizationInput
    announcements?: AnnouncementCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holidays?: HolidayUncheckedCreateNestedManyWithoutOrganizationInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type LeaveBalanceCreateWithoutUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    allocated?: number
    used?: number
    remaining?: number
    year?: number
    createdAt?: Date | string
  }

  export type LeaveBalanceUncheckedCreateWithoutUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    allocated?: number
    used?: number
    remaining?: number
    year?: number
    createdAt?: Date | string
  }

  export type LeaveBalanceCreateOrConnectWithoutUserInput = {
    where: LeaveBalanceWhereUniqueInput
    create: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput>
  }

  export type LeaveBalanceCreateManyUserInputEnvelope = {
    data: LeaveBalanceCreateManyUserInput | LeaveBalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaveApplicationCreateWithoutUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: LeaveCommentCreateNestedManyWithoutLeaveInput
  }

  export type LeaveApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: LeaveCommentUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveApplicationCreateOrConnectWithoutUserInput = {
    where: LeaveApplicationWhereUniqueInput
    create: XOR<LeaveApplicationCreateWithoutUserInput, LeaveApplicationUncheckedCreateWithoutUserInput>
  }

  export type LeaveApplicationCreateManyUserInputEnvelope = {
    data: LeaveApplicationCreateManyUserInput | LeaveApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutCreatedByInput = {
    id?: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAnnouncementsInput
    recipients?: AnnouncementRecipientCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutCreatedByInput = {
    id?: string
    organizationId: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
    recipients?: AnnouncementRecipientUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutCreatedByInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput>
  }

  export type AnnouncementCreateManyCreatedByInputEnvelope = {
    data: AnnouncementCreateManyCreatedByInput | AnnouncementCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementRecipientCreateWithoutUserInput = {
    id?: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    announcement: AnnouncementCreateNestedOneWithoutRecipientsInput
  }

  export type AnnouncementRecipientUncheckedCreateWithoutUserInput = {
    id?: string
    announcementId: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementRecipientCreateOrConnectWithoutUserInput = {
    where: AnnouncementRecipientWhereUniqueInput
    create: XOR<AnnouncementRecipientCreateWithoutUserInput, AnnouncementRecipientUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementRecipientCreateManyUserInputEnvelope = {
    data: AnnouncementRecipientCreateManyUserInput | AnnouncementRecipientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinancialDetailsCreateWithoutUserInput = {
    id?: string
    bankName?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    panNumber?: string | null
    uanNo?: string | null
    esicNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialDetailsUncheckedCreateWithoutUserInput = {
    id?: string
    bankName?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    panNumber?: string | null
    uanNo?: string | null
    esicNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialDetailsCreateOrConnectWithoutUserInput = {
    where: FinancialDetailsWhereUniqueInput
    create: XOR<FinancialDetailsCreateWithoutUserInput, FinancialDetailsUncheckedCreateWithoutUserInput>
  }

  export type PayrollSettingsCreateWithoutUserInput = {
    id?: string
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    overtime?: boolean
    conveyance?: boolean
    medical?: boolean
    pf?: boolean
    es?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollSettingsCreateOrConnectWithoutUserInput = {
    where: PayrollSettingsWhereUniqueInput
    create: XOR<PayrollSettingsCreateWithoutUserInput, PayrollSettingsUncheckedCreateWithoutUserInput>
  }

  export type LeaveCommentCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    leave: LeaveApplicationCreateNestedOneWithoutCommentsInput
  }

  export type LeaveCommentUncheckedCreateWithoutUserInput = {
    id?: string
    leaveId: string
    message: string
    createdAt?: Date | string
  }

  export type LeaveCommentCreateOrConnectWithoutUserInput = {
    where: LeaveCommentWhereUniqueInput
    create: XOR<LeaveCommentCreateWithoutUserInput, LeaveCommentUncheckedCreateWithoutUserInput>
  }

  export type LeaveCommentCreateManyUserInputEnvelope = {
    data: LeaveCommentCreateManyUserInput | LeaveCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holidays?: HolidayUpdateManyWithoutOrganizationNestedInput
    announcements?: AnnouncementUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holidays?: HolidayUncheckedUpdateManyWithoutOrganizationNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type LeaveBalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveBalanceWhereUniqueInput
    update: XOR<LeaveBalanceUpdateWithoutUserInput, LeaveBalanceUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput>
  }

  export type LeaveBalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveBalanceWhereUniqueInput
    data: XOR<LeaveBalanceUpdateWithoutUserInput, LeaveBalanceUncheckedUpdateWithoutUserInput>
  }

  export type LeaveBalanceUpdateManyWithWhereWithoutUserInput = {
    where: LeaveBalanceScalarWhereInput
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveBalanceScalarWhereInput = {
    AND?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
    OR?: LeaveBalanceScalarWhereInput[]
    NOT?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
    id?: StringFilter<"LeaveBalance"> | string
    userId?: StringFilter<"LeaveBalance"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveBalance"> | $Enums.LeaveType
    allocated?: IntFilter<"LeaveBalance"> | number
    used?: IntFilter<"LeaveBalance"> | number
    remaining?: IntFilter<"LeaveBalance"> | number
    year?: IntFilter<"LeaveBalance"> | number
    createdAt?: DateTimeFilter<"LeaveBalance"> | Date | string
  }

  export type LeaveApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveApplicationWhereUniqueInput
    update: XOR<LeaveApplicationUpdateWithoutUserInput, LeaveApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveApplicationCreateWithoutUserInput, LeaveApplicationUncheckedCreateWithoutUserInput>
  }

  export type LeaveApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveApplicationWhereUniqueInput
    data: XOR<LeaveApplicationUpdateWithoutUserInput, LeaveApplicationUncheckedUpdateWithoutUserInput>
  }

  export type LeaveApplicationUpdateManyWithWhereWithoutUserInput = {
    where: LeaveApplicationScalarWhereInput
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveApplicationScalarWhereInput = {
    AND?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
    OR?: LeaveApplicationScalarWhereInput[]
    NOT?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
    id?: StringFilter<"LeaveApplication"> | string
    userId?: StringFilter<"LeaveApplication"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveApplication"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    reason?: StringFilter<"LeaveApplication"> | string
    status?: EnumLeaveStatusFilter<"LeaveApplication"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"LeaveApplication"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveApplication"> | Date | string
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutCreatedByInput, AnnouncementUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutCreatedByInput, AnnouncementUncheckedUpdateWithoutCreatedByInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutCreatedByInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AnnouncementRecipientUpsertWithWhereUniqueWithoutUserInput = {
    where: AnnouncementRecipientWhereUniqueInput
    update: XOR<AnnouncementRecipientUpdateWithoutUserInput, AnnouncementRecipientUncheckedUpdateWithoutUserInput>
    create: XOR<AnnouncementRecipientCreateWithoutUserInput, AnnouncementRecipientUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementRecipientUpdateWithWhereUniqueWithoutUserInput = {
    where: AnnouncementRecipientWhereUniqueInput
    data: XOR<AnnouncementRecipientUpdateWithoutUserInput, AnnouncementRecipientUncheckedUpdateWithoutUserInput>
  }

  export type AnnouncementRecipientUpdateManyWithWhereWithoutUserInput = {
    where: AnnouncementRecipientScalarWhereInput
    data: XOR<AnnouncementRecipientUpdateManyMutationInput, AnnouncementRecipientUncheckedUpdateManyWithoutUserInput>
  }

  export type AnnouncementRecipientScalarWhereInput = {
    AND?: AnnouncementRecipientScalarWhereInput | AnnouncementRecipientScalarWhereInput[]
    OR?: AnnouncementRecipientScalarWhereInput[]
    NOT?: AnnouncementRecipientScalarWhereInput | AnnouncementRecipientScalarWhereInput[]
    id?: StringFilter<"AnnouncementRecipient"> | string
    announcementId?: StringFilter<"AnnouncementRecipient"> | string
    userId?: StringFilter<"AnnouncementRecipient"> | string
    email?: StringFilter<"AnnouncementRecipient"> | string
    isRead?: BoolFilter<"AnnouncementRecipient"> | boolean
    readAt?: DateTimeNullableFilter<"AnnouncementRecipient"> | Date | string | null
    createdAt?: DateTimeFilter<"AnnouncementRecipient"> | Date | string
  }

  export type FinancialDetailsUpsertWithoutUserInput = {
    update: XOR<FinancialDetailsUpdateWithoutUserInput, FinancialDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<FinancialDetailsCreateWithoutUserInput, FinancialDetailsUncheckedCreateWithoutUserInput>
    where?: FinancialDetailsWhereInput
  }

  export type FinancialDetailsUpdateToOneWithWhereWithoutUserInput = {
    where?: FinancialDetailsWhereInput
    data: XOR<FinancialDetailsUpdateWithoutUserInput, FinancialDetailsUncheckedUpdateWithoutUserInput>
  }

  export type FinancialDetailsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialDetailsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollSettingsUpsertWithoutUserInput = {
    update: XOR<PayrollSettingsUpdateWithoutUserInput, PayrollSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<PayrollSettingsCreateWithoutUserInput, PayrollSettingsUncheckedCreateWithoutUserInput>
    where?: PayrollSettingsWhereInput
  }

  export type PayrollSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: PayrollSettingsWhereInput
    data: XOR<PayrollSettingsUpdateWithoutUserInput, PayrollSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PayrollSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    overtime?: BoolFieldUpdateOperationsInput | boolean
    conveyance?: BoolFieldUpdateOperationsInput | boolean
    medical?: BoolFieldUpdateOperationsInput | boolean
    pf?: BoolFieldUpdateOperationsInput | boolean
    es?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    overtime?: BoolFieldUpdateOperationsInput | boolean
    conveyance?: BoolFieldUpdateOperationsInput | boolean
    medical?: BoolFieldUpdateOperationsInput | boolean
    pf?: BoolFieldUpdateOperationsInput | boolean
    es?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveCommentWhereUniqueInput
    update: XOR<LeaveCommentUpdateWithoutUserInput, LeaveCommentUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveCommentCreateWithoutUserInput, LeaveCommentUncheckedCreateWithoutUserInput>
  }

  export type LeaveCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveCommentWhereUniqueInput
    data: XOR<LeaveCommentUpdateWithoutUserInput, LeaveCommentUncheckedUpdateWithoutUserInput>
  }

  export type LeaveCommentUpdateManyWithWhereWithoutUserInput = {
    where: LeaveCommentScalarWhereInput
    data: XOR<LeaveCommentUpdateManyMutationInput, LeaveCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveCommentScalarWhereInput = {
    AND?: LeaveCommentScalarWhereInput | LeaveCommentScalarWhereInput[]
    OR?: LeaveCommentScalarWhereInput[]
    NOT?: LeaveCommentScalarWhereInput | LeaveCommentScalarWhereInput[]
    id?: StringFilter<"LeaveComment"> | string
    leaveId?: StringFilter<"LeaveComment"> | string
    userId?: StringFilter<"LeaveComment"> | string
    message?: StringFilter<"LeaveComment"> | string
    createdAt?: DateTimeFilter<"LeaveComment"> | Date | string
  }

  export type OrganizationCreateWithoutHolidaysInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    announcements?: AnnouncementCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutHolidaysInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutHolidaysInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutHolidaysInput, OrganizationUncheckedCreateWithoutHolidaysInput>
  }

  export type OrganizationUpsertWithoutHolidaysInput = {
    update: XOR<OrganizationUpdateWithoutHolidaysInput, OrganizationUncheckedUpdateWithoutHolidaysInput>
    create: XOR<OrganizationCreateWithoutHolidaysInput, OrganizationUncheckedCreateWithoutHolidaysInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutHolidaysInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutHolidaysInput, OrganizationUncheckedUpdateWithoutHolidaysInput>
  }

  export type OrganizationUpdateWithoutHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    announcements?: AnnouncementUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutLeaveBalancesInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaveBalancesInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaveBalancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaveBalancesInput, UserUncheckedCreateWithoutLeaveBalancesInput>
  }

  export type UserUpsertWithoutLeaveBalancesInput = {
    update: XOR<UserUpdateWithoutLeaveBalancesInput, UserUncheckedUpdateWithoutLeaveBalancesInput>
    create: XOR<UserCreateWithoutLeaveBalancesInput, UserUncheckedCreateWithoutLeaveBalancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaveBalancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaveBalancesInput, UserUncheckedUpdateWithoutLeaveBalancesInput>
  }

  export type UserUpdateWithoutLeaveBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaveBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLeaveApplicationInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaveApplicationInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaveApplicationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaveApplicationInput, UserUncheckedCreateWithoutLeaveApplicationInput>
  }

  export type LeaveCommentCreateWithoutLeaveInput = {
    id?: string
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLeaveCommentsInput
  }

  export type LeaveCommentUncheckedCreateWithoutLeaveInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type LeaveCommentCreateOrConnectWithoutLeaveInput = {
    where: LeaveCommentWhereUniqueInput
    create: XOR<LeaveCommentCreateWithoutLeaveInput, LeaveCommentUncheckedCreateWithoutLeaveInput>
  }

  export type LeaveCommentCreateManyLeaveInputEnvelope = {
    data: LeaveCommentCreateManyLeaveInput | LeaveCommentCreateManyLeaveInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLeaveApplicationInput = {
    update: XOR<UserUpdateWithoutLeaveApplicationInput, UserUncheckedUpdateWithoutLeaveApplicationInput>
    create: XOR<UserCreateWithoutLeaveApplicationInput, UserUncheckedCreateWithoutLeaveApplicationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaveApplicationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaveApplicationInput, UserUncheckedUpdateWithoutLeaveApplicationInput>
  }

  export type UserUpdateWithoutLeaveApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaveApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeaveCommentUpsertWithWhereUniqueWithoutLeaveInput = {
    where: LeaveCommentWhereUniqueInput
    update: XOR<LeaveCommentUpdateWithoutLeaveInput, LeaveCommentUncheckedUpdateWithoutLeaveInput>
    create: XOR<LeaveCommentCreateWithoutLeaveInput, LeaveCommentUncheckedCreateWithoutLeaveInput>
  }

  export type LeaveCommentUpdateWithWhereUniqueWithoutLeaveInput = {
    where: LeaveCommentWhereUniqueInput
    data: XOR<LeaveCommentUpdateWithoutLeaveInput, LeaveCommentUncheckedUpdateWithoutLeaveInput>
  }

  export type LeaveCommentUpdateManyWithWhereWithoutLeaveInput = {
    where: LeaveCommentScalarWhereInput
    data: XOR<LeaveCommentUpdateManyMutationInput, LeaveCommentUncheckedUpdateManyWithoutLeaveInput>
  }

  export type OrganizationCreateWithoutAnnouncementsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    holidays?: HolidayCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAnnouncementsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAnnouncementsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAnnouncementsInput, OrganizationUncheckedCreateWithoutAnnouncementsInput>
  }

  export type UserCreateWithoutCreatedAnnouncementsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedAnnouncementsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedAnnouncementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedAnnouncementsInput, UserUncheckedCreateWithoutCreatedAnnouncementsInput>
  }

  export type AnnouncementRecipientCreateWithoutAnnouncementInput = {
    id?: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAnnouncementReceiptsInput
  }

  export type AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    userId: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementRecipientCreateOrConnectWithoutAnnouncementInput = {
    where: AnnouncementRecipientWhereUniqueInput
    create: XOR<AnnouncementRecipientCreateWithoutAnnouncementInput, AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput>
  }

  export type AnnouncementRecipientCreateManyAnnouncementInputEnvelope = {
    data: AnnouncementRecipientCreateManyAnnouncementInput | AnnouncementRecipientCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutAnnouncementsInput = {
    update: XOR<OrganizationUpdateWithoutAnnouncementsInput, OrganizationUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<OrganizationCreateWithoutAnnouncementsInput, OrganizationUncheckedCreateWithoutAnnouncementsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAnnouncementsInput, OrganizationUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type OrganizationUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    holidays?: HolidayUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutCreatedAnnouncementsInput = {
    update: XOR<UserUpdateWithoutCreatedAnnouncementsInput, UserUncheckedUpdateWithoutCreatedAnnouncementsInput>
    create: XOR<UserCreateWithoutCreatedAnnouncementsInput, UserUncheckedCreateWithoutCreatedAnnouncementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedAnnouncementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedAnnouncementsInput, UserUncheckedUpdateWithoutCreatedAnnouncementsInput>
  }

  export type UserUpdateWithoutCreatedAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnnouncementRecipientUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: AnnouncementRecipientWhereUniqueInput
    update: XOR<AnnouncementRecipientUpdateWithoutAnnouncementInput, AnnouncementRecipientUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<AnnouncementRecipientCreateWithoutAnnouncementInput, AnnouncementRecipientUncheckedCreateWithoutAnnouncementInput>
  }

  export type AnnouncementRecipientUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: AnnouncementRecipientWhereUniqueInput
    data: XOR<AnnouncementRecipientUpdateWithoutAnnouncementInput, AnnouncementRecipientUncheckedUpdateWithoutAnnouncementInput>
  }

  export type AnnouncementRecipientUpdateManyWithWhereWithoutAnnouncementInput = {
    where: AnnouncementRecipientScalarWhereInput
    data: XOR<AnnouncementRecipientUpdateManyMutationInput, AnnouncementRecipientUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type AnnouncementCreateWithoutRecipientsInput = {
    id?: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAnnouncementsInput
    createdBy: UserCreateNestedOneWithoutCreatedAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateWithoutRecipientsInput = {
    id?: string
    organizationId: string
    createdById: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementCreateOrConnectWithoutRecipientsInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutRecipientsInput, AnnouncementUncheckedCreateWithoutRecipientsInput>
  }

  export type UserCreateWithoutAnnouncementReceiptsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnouncementReceiptsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnouncementReceiptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementReceiptsInput, UserUncheckedCreateWithoutAnnouncementReceiptsInput>
  }

  export type AnnouncementUpsertWithoutRecipientsInput = {
    update: XOR<AnnouncementUpdateWithoutRecipientsInput, AnnouncementUncheckedUpdateWithoutRecipientsInput>
    create: XOR<AnnouncementCreateWithoutRecipientsInput, AnnouncementUncheckedCreateWithoutRecipientsInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutRecipientsInput, AnnouncementUncheckedUpdateWithoutRecipientsInput>
  }

  export type AnnouncementUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAnnouncementsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAnnouncementReceiptsInput = {
    update: XOR<UserUpdateWithoutAnnouncementReceiptsInput, UserUncheckedUpdateWithoutAnnouncementReceiptsInput>
    create: XOR<UserCreateWithoutAnnouncementReceiptsInput, UserUncheckedCreateWithoutAnnouncementReceiptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementReceiptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementReceiptsInput, UserUncheckedUpdateWithoutAnnouncementReceiptsInput>
  }

  export type UserUpdateWithoutAnnouncementReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFinancialDetailsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinancialDetailsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinancialDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinancialDetailsInput, UserUncheckedCreateWithoutFinancialDetailsInput>
  }

  export type UserUpsertWithoutFinancialDetailsInput = {
    update: XOR<UserUpdateWithoutFinancialDetailsInput, UserUncheckedUpdateWithoutFinancialDetailsInput>
    create: XOR<UserCreateWithoutFinancialDetailsInput, UserUncheckedCreateWithoutFinancialDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinancialDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinancialDetailsInput, UserUncheckedUpdateWithoutFinancialDetailsInput>
  }

  export type UserUpdateWithoutFinancialDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinancialDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPayrollSettingsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayrollSettingsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    leaveComments?: LeaveCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayrollSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayrollSettingsInput, UserUncheckedCreateWithoutPayrollSettingsInput>
  }

  export type UserUpsertWithoutPayrollSettingsInput = {
    update: XOR<UserUpdateWithoutPayrollSettingsInput, UserUncheckedUpdateWithoutPayrollSettingsInput>
    create: XOR<UserCreateWithoutPayrollSettingsInput, UserUncheckedCreateWithoutPayrollSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayrollSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayrollSettingsInput, UserUncheckedUpdateWithoutPayrollSettingsInput>
  }

  export type UserUpdateWithoutPayrollSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayrollSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeaveApplicationCreateWithoutCommentsInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeaveApplicationInput
  }

  export type LeaveApplicationUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveApplicationCreateOrConnectWithoutCommentsInput = {
    where: LeaveApplicationWhereUniqueInput
    create: XOR<LeaveApplicationCreateWithoutCommentsInput, LeaveApplicationUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutLeaveCommentsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaveCommentsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    organizationId: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveApplication?: LeaveApplicationUncheckedCreateNestedManyWithoutUserInput
    createdAnnouncements?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    announcementReceipts?: AnnouncementRecipientUncheckedCreateNestedManyWithoutUserInput
    financialDetails?: FinancialDetailsUncheckedCreateNestedOneWithoutUserInput
    payrollSettings?: PayrollSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaveCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaveCommentsInput, UserUncheckedCreateWithoutLeaveCommentsInput>
  }

  export type LeaveApplicationUpsertWithoutCommentsInput = {
    update: XOR<LeaveApplicationUpdateWithoutCommentsInput, LeaveApplicationUncheckedUpdateWithoutCommentsInput>
    create: XOR<LeaveApplicationCreateWithoutCommentsInput, LeaveApplicationUncheckedCreateWithoutCommentsInput>
    where?: LeaveApplicationWhereInput
  }

  export type LeaveApplicationUpdateToOneWithWhereWithoutCommentsInput = {
    where?: LeaveApplicationWhereInput
    data: XOR<LeaveApplicationUpdateWithoutCommentsInput, LeaveApplicationUncheckedUpdateWithoutCommentsInput>
  }

  export type LeaveApplicationUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeaveApplicationNestedInput
  }

  export type LeaveApplicationUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLeaveCommentsInput = {
    update: XOR<UserUpdateWithoutLeaveCommentsInput, UserUncheckedUpdateWithoutLeaveCommentsInput>
    create: XOR<UserCreateWithoutLeaveCommentsInput, UserUncheckedCreateWithoutLeaveCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaveCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaveCommentsInput, UserUncheckedUpdateWithoutLeaveCommentsInput>
  }

  export type UserUpdateWithoutLeaveCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaveCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    lastLoginAt?: Date | string | null
    employeeId: string
    fullName: string
    phone: string
    designation: string
    department?: string | null
    employmentType?: $Enums.EmploymentType | null
    workLocation?: string | null
    dateOfJoining: Date | string
    profileImageUrl?: string | null
    profileImagePublicId?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    fatherName?: string | null
    motherName?: string | null
    bloodGroup?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    emergencyContactName?: string | null
    emergencyContactPhone?: string | null
    emergencyContactRelation?: string | null
    reportingManagerName?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    spouseName?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayCreateManyOrganizationInput = {
    id?: string
    name: string
    date: Date | string
    day: string
    year: number
    type: $Enums.HolidayType
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementCreateManyOrganizationInput = {
    id?: string
    createdById: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveApplication?: LeaveApplicationUncheckedUpdateManyWithoutUserNestedInput
    createdAnnouncements?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    announcementReceipts?: AnnouncementRecipientUncheckedUpdateManyWithoutUserNestedInput
    financialDetails?: FinancialDetailsUncheckedUpdateOneWithoutUserNestedInput
    payrollSettings?: PayrollSettingsUncheckedUpdateOneWithoutUserNestedInput
    leaveComments?: LeaveCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    workLocation?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfJoining?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput
    recipients?: AnnouncementRecipientUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: AnnouncementRecipientUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceCreateManyUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    allocated?: number
    used?: number
    remaining?: number
    year?: number
    createdAt?: Date | string
  }

  export type LeaveApplicationCreateManyUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementCreateManyCreatedByInput = {
    id?: string
    organizationId: string
    title: string
    message: string
    sendType: $Enums.AnnouncementSendType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementRecipientCreateManyUserInput = {
    id?: string
    announcementId: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LeaveCommentCreateManyUserInput = {
    id?: string
    leaveId: string
    message: string
    createdAt?: Date | string
  }

  export type LeaveBalanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    allocated?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    allocated?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    allocated?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: LeaveCommentUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: LeaveCommentUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAnnouncementsNestedInput
    recipients?: AnnouncementRecipientUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: AnnouncementRecipientUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sendType?: EnumAnnouncementSendTypeFieldUpdateOperationsInput | $Enums.AnnouncementSendType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementRecipientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type AnnouncementRecipientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementRecipientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leave?: LeaveApplicationUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type LeaveCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentCreateManyLeaveInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type LeaveCommentUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeaveCommentsNestedInput
  }

  export type LeaveCommentUncheckedUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCommentUncheckedUpdateManyWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementRecipientCreateManyAnnouncementInput = {
    id?: string
    userId: string
    email: string
    isRead?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementRecipientUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnnouncementReceiptsNestedInput
  }

  export type AnnouncementRecipientUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementRecipientUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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