import { Body, Controller, Get, Param, Post, Res, UseFilters } from '@nestjs/common';
import { JobListingService } from './job_listing.service';
import { ValidationFilter } from 'src/validations/exceptions';
import { JobDto } from './dto/job.dto';

@Controller('/api/job')
export class JobListingController {
    constructor(private readonly jobListingService: JobListingService) { }

    @UseFilters(ValidationFilter)
    @Post('/postJob')
    async postJob(@Body() jobDto: JobDto, @Res() res) {
        try {
            let response = await this.jobListingService.createJob(jobDto);
            return res.status(200).json(response)
        } catch (error) {
            return res.json({
                error: true,
                msg: 'There is some error. Please try after sometime'
            },error).status(400);
        }
    }
    @Get('/')
    async getJobs(@Res() res) {
        try {
            const response = await this.jobListingService.getAllJobs();
            return res.status(200).json(response)
        } catch (error){
            return res.status(400).json({
                error: true,
                msg: 'There is some error. Please try after sometime,' 
            }, error)
        }
    }
    @Get(':id')
    async getJob(@Param('id') id: string, @Res() res){
        try{
            const response = await this.jobListingService.findOne(id);
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json({
                error:true,
                msg:'There is some error. Please try after sometime,'
            },error)
        }
    }
}
