import { Module } from '@nestjs/common';
import { JobListingController } from './job_listing.controller';
import { JobListingService } from './job_listing.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { JobSchema, job } from './schema/job.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:job.name, schema: JobSchema}])
  ],
  controllers: [JobListingController],
  providers: [JobListingService]
}) 
export class JobListingModule {} 
