import axios from "axios"
import { GetJobs, PostJobs } from "../utils/APIRoutes"

export const postJobs = (data) => {
    return new Promise((reslove, reject) => {
        let config = {
            method: "post",
            url: PostJobs,
            data,
        }
        axios(config)
            .then((response) => {
                reslove(response)
            })
            .catch((error) => {
                reject(error.response.data.message)
            })
    })
}
export const getJobs = () => {
    return new Promise((reslove, reject) => {
        let config = {
            method: "get",
            url: GetJobs,
        }
        axios(config)
        .then((response) => {
            reslove(response)
            // console.log(response)
        })
        .catch((error) => {
            reject(error)
            // console.log(error)
        })
    })
}