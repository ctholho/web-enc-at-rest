import { restoreMock } from "../__mocks__/mockCrypto";
import { findTampering, getSubtle } from '../protectedCrypto';

// Minimal tests for code coverage.
describe('protectedCrypto', () => {
  beforeEach(() => restoreMock());
  
  describe('getSubtle()', () => {
    it('throws if subtle is undefined', () => {
      (global.crypto as any).subtle = undefined;
      expect(() => getSubtle()).toThrow();
    });

    it('throws if an expected function is undefined', () => {
      (global.crypto as any).subtle.deriveKey = undefined;
      expect(() => getSubtle()).toThrow();
    });

    it('throws if a protected function is replaced', () => {
      (global.crypto as any).subtle.deriveKey = () => null;
      expect(() => getSubtle()).toThrow();
    });
  });
});