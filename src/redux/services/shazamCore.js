import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        import.meta.env.VITE_SHAZAM_API_KEY ||
          "1e1b6997bfmsh99570d7e6ebd31ep1f0d88jsn468383ced46a"
      );
      headers.set("x-rapidapi-host", "shazam-core.p.rapidapi.com");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (countryCode = "NG") =>
        `/charts/world?country_code=${countryCode}`,
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
