import { TestBed } from '@angular/core/testing';

import { LandingPageService } from './landing-page.service';

describe('ServicesService', () => {
  let service: LandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});