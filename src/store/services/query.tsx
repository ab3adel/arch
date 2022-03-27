import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Apis} from '../../tools/apis/apis'
interface post {id:number,description:string}
type FetchType =post[]
export const ikoniksFetch = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:'http://backend.test.ikoniks.de/api/website'
    }),
    reducerPath:'ikoniksApi',
    tagTypes:['Contents'],
    endpoints:(builder)=>({
        getSection:builder.query<FetchType,number>({
            query:(id)=>({
                url:`${Apis.categorise}`,
                params:{page:id}
            }),
            
            
        })
    })
})
export const {useGetSectionQuery} =ikoniksFetch