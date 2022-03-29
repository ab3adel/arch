import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Apis} from '../../tools/apis/apis'
interface obj {id:number,body:{ar:string,en:string},title:{ar:string,en:string}}
interface post {id:number,description:string,payload:obj[]}
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
        }),
        getNode:builder.query<FetchType,number>({
            query:(id)=>({
                url:`${Apis.nodes}`,
                params:{section:id}
            })
        })
    })
})
export const {useGetSectionQuery,useGetNodeQuery} =ikoniksFetch
