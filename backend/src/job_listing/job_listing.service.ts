import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { job } from './schema/job.schema';
import { Model } from 'mongoose';
import { JobDto } from './dto/job.dto';

@Injectable()
export class JobListingService {
    constructor(
        @InjectModel(job.name)
        private jobModel: Model<job>,
    ) { }
    createJob(jobDto: JobDto) {
        return new Promise(async (resolve, reject) => {
            try {
                const createdJob = await this.jobModel.create(jobDto);

                let response = {
                    status: 'success',
                    message: 'Job Successfully Registerd',
                };
                resolve(response);
            } catch (error) {
                let response = {
                    status: 'fail',
                    message: error.stack,
                };
                reject(response);
            }
        });
    }

    async getAllJobs(): Promise<job[]> {
        try {
            return this.jobModel.find().exec();
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
    async findOne(id): Promise<job> {
        try {
            return this.jobModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}
