import { TestBed } from '@angular/core/testing';

import { userapi } from './userapi.service';

describe('UserapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: userapi = TestBed.get(userapi);
    expect(service).toBeTruthy();
  });
});
