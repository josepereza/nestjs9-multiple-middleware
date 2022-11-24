import { HolaMiddleware } from './hola.middleware';

describe('HolaMiddleware', () => {
  it('should be defined', () => {
    expect(new HolaMiddleware()).toBeDefined();
  });
});
