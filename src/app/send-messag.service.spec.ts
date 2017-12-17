import { TestBed, inject } from '@angular/core/testing';

import { SendMessagService } from './send-messag.service';

describe('SendMessagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendMessagService]
    });
  });

  it('should be created', inject([SendMessagService], (service: SendMessagService) => {
    expect(service).toBeTruthy();
  }));
});
