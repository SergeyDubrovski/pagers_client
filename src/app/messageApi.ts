import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let URL = "https://oxsedu.site/ulsev"


export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL}),
    tagTypes: ['Message'],
    endpoints: (build) => ({
        sendMessage: build.mutation<string, string>({
            query: ( message ) => ({
                url: '',
                method: 'POST',
                body: {message},
                //headers: { Authorization: `${token}` }
            }),
            invalidatesTags: ['Message']
        }),
       
})
})
export const { useSendMessageMutation } = messageApi;