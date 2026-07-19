/**
 * Note for Devs:
 *
 * This shim exists to initialize the metadata object in case of typescript
 * not handling it. As of 07/16.2026, Typescript does not handle creating
 * this context object.
 */
(Symbol as unknown as DecoratorMetadataObject).metadata ??= Symbol('Symbol.metadata');
