import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { ClientController } from './client.controller';

@Module({
  providers: [ClientResolver, ClientService],
  controllers: [ClientController]
})
export class ClientModule {}
