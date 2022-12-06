import axios, {Axios, AxiosRequestConfig} from "axios";
import {useState} from "react";

type Method = 'get' | 'post' | 'put' | 'delete'
export const standartOptions: AxiosRequestConfig = {
    data: {},
    responseType: 'json',
    withCredentials: true,
}

export const useApi = <T>(url: string, method: Method = 'get') => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<T>()

    const request = async (config: AxiosRequestConfig = standartOptions) => {
        setLoading(true)
        try {
            const res = await axios({
                url,
                method,
                ...config,
            })
            await setData(res.data)
        } catch (e) {
            console.log()
        }


        await setLoading(false)
    }
    return { loading, data, request }
}
