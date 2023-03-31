import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';
import { ClientModule } from './client/client.module';
import { WorkerController } from './worker/worker.controller';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [JobModule, ClientModule, WorkerModule],
  controllers: [AppController, WorkerController],
  providers: [AppService],
})
export class AppModule {}
