import { FileSizeInMBPipe } from './file-size-in-mb.pipe';

describe('FileSizeInMBPipe', () => {
  it('create an instance', () => {
    const pipe = new FileSizeInMBPipe();
    expect(pipe).toBeTruthy();
  });
});
