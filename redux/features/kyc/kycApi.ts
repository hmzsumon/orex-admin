import { apiSlice } from "../api/apiSlice";

export const kycApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get user kyc
    getUserKyc: builder.query<any, void>({
      query: () => ({
        url: `/all-kyc`,
        method: "GET",
      }),
      providesTags: ["User", "Kyc"],
    }),

    // get user kyc
    getSingleUserKyc: builder.query<any, string>({
      query: (id) => ({
        url: `/single-kyc/${id}`,
        cache: "no-store",
        method: "GET",
      }),
      providesTags: ["User", "Kyc"],
    }),

    //approve kyc verification
    approveKyc: builder.mutation<any, any>({
      query: (id) => ({
        url: `/admin-approve-kyc/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["User", "Kyc"],
    }),

    // reject kyc verification
    rejectKyc: builder.mutation<any, any>({
      query: (body) => ({
        url: `/admin-reject-kyc`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User", "Kyc"],
    }),
  }),
});

export const {
  useGetUserKycQuery,
  useGetSingleUserKycQuery,
  useApproveKycMutation,
  useRejectKycMutation,
} = kycApi;
