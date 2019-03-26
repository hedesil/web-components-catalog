import { TrimGitRepoNamePipe } from './trim-git-repo-name.pipe';

describe('TrimGitRepoNamePipe', () => {
  it('create an instance', () => {
    const pipe = new TrimGitRepoNamePipe();
    expect(pipe).toBeTruthy();
  });
});
