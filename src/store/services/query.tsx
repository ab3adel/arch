import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Apis} from '../../tools/apis/apis'
interface obj {id:number,body:{ar:string,en:string},title:{ar:string,en:string}}
interface post {id:number,description:string,payload:obj[]}
type FetchType ={success:boolean,payload:any[]}
export const ikoniksFetch = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:'http://backend.test.ikoniks.de/api/website'
    }),
    reducerPath:'ikoniksApi',
    tagTypes:['Contents'],
    endpoints:(builder)=>({
        getSection:builder.query<FetchType,number>({
            query:(id)=>({
                url:`${Apis.sections}`,
                params:{page:id}
            }), 
        }),
        getCategory:builder.query<FetchType,number>({
            query:(id)=>({
                url:`${Apis.categorise}`,
                params:{section:id}
            }), 
        }),
        getNode:builder.query<FetchType,number>({
            query:(id)=>({
                url:`${Apis.nodes}`,
                params:{category:id}
            })
        })
    })
})
export const {useGetSectionQuery,useGetNodeQuery,useGetCategoryQuery} =ikoniksFetch
