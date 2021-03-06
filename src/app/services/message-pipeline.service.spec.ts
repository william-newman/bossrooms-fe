import { TestBed } from '@angular/core/testing';

import { MessagePipelineService } from './message-pipeline.service';

describe('MessagePipelineService', () => {
  let service: MessagePipelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagePipelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
