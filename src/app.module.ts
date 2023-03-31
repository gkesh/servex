import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaborModule } from './labor/labor.module';

@Module({
  imports: [LaborModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
