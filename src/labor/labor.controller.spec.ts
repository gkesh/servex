import { Test, TestingModule } from '@nestjs/testing';
import { LaborController } from './labor.controller';

describe('LaborController', () => {
  let controller: LaborController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaborController],
    }).compile();

    controller = module.get<LaborController>(LaborController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
