import { Module } from '@nestjs/common';
import { PublicationModule } from '@project/publication'

@Module({
  imports: [PublicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
