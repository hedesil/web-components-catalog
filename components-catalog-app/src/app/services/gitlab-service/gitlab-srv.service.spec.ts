import { TestBed, inject } from '@angular/core/testing';

import { GitlabSrvService } from './gitlab-srv.service';

describe('GitlabSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitlabSrvService]
    });
  });

  it('should be created', inject([GitlabSrvService], (service: GitlabSrvService) => {
    expect(service).toBeTruthy();
  }));
});
