import { TestBed } from '@angular/core/testing';


describe('UserapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserapiService = TestBed.get(UserapiService);
    expect(service).toBeTruthy();
  });
});
