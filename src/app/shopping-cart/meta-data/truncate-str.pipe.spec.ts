import { TruncateStrPipe } from './truncate-str.pipe';

describe('TruncateStrPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateStrPipe();
    expect(pipe).toBeTruthy();
  });
});
