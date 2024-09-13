import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TestingModule } from './api/testing/testing.module';
import { join } from 'path';
import { HumanModule } from './api/human/human.module';
import { TestModule } from './test/test.module';
import { TestEntity } from 'entities/test.entity';
//
@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      retryAttempts: 1,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // HumanModule,
    TestModule,
  ],
})
export class AppModule {
  constructor() {}
}
