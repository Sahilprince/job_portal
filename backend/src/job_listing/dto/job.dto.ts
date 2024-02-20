import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';
export class JobDto {
    @IsNotEmpty()
    @IsString()
    job_opening_name : string
    
    @IsNotEmpty()
    @IsString()
    job_location : string
    
    @IsNotEmpty()
    @IsString()
    company_name : string
   
    @IsNotEmpty()
    @IsNumber()
    salary : string

    @IsNotEmpty()
    @IsString()
    work_type : string
    
    @IsNotEmpty()
    @IsArray()
    requirements : []
        
}