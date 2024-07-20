import { ClassTransformOptions, plainToInstance } from 'class-transformer';
import { Post, PostType } from '@project/core';

type PlainObject = Record<string, unknown>;

export function fillDto<T, V extends PlainObject>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T;

export function fillDto<T, V extends PlainObject[]>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T[];

export function fillDto<T, V extends PlainObject>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
    excludeExtraneousValues: true,
    ...options,
  });
}
