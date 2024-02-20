import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true,
})

export class job  {
    @Prop()
    job_opening_name: string;

    @Prop()
    job_location: string

    @Prop()
    company_name: string;

    @Prop()
    salary: number;

    @Prop()
    work_type: string; // full time, part-time, internship...

    @Prop()
    requirements: string[]
}
export const JobSchema = SchemaFactory.createForClass(job)