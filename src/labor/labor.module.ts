import { Module } from '@nestjs/common';
import { LaborService } from './labor.service';
import { LaborResolver } from './labor.resolver';
import { LaborController } from './labor.controller';

@Module({
  providers: [LaborResolver, LaborService],
  controllers: [LaborController],
})
export class LaborModule {}
