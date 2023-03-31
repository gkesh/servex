import { Test, TestingModule } from '@nestjs/testing';
import { LaborResolver } from './labor.resolver';
import { LaborService } from './labor.service';

describe('LaborResolver', () => {
  let resolver: LaborResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaborResolver, LaborService],
    }).compile();

    resolver = module.get<LaborResolver>(LaborResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
