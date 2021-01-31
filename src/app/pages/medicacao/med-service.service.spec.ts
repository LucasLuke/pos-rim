import { TestBed } from '@angular/core/testing';

import { MedServiceService } from './med-service.service';

describe('MedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedServiceService = TestBed.get(MedServiceService);
    expect(service).toBeTruthy();
  });
});
