import { TestBed, inject } from '@angular/core/testing';

import { ActuatorService } from './actuator.service';

describe('ActuatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActuatorService]
    });
  });

  it('should be created', inject([ActuatorService], (service: ActuatorService) => {
    expect(service).toBeTruthy();
  }));
});
